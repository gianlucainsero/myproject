(() => {
  const token = document.querySelector('meta[name="csrf-token"]')?.content;
  const request = async (url, body) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': token },
      body: JSON.stringify(body),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || 'La richiesta non è riuscita. Riprova.');
    return result;
  };

  function element(tag, className, value) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value != null) node.textContent = value;
    return node;
  }

  function button(label, className = 'cp-btn cp-btn-outline') {
    const control = element('button', className, label);
    control.type = 'button';
    return control;
  }

  function link(label, href, className = 'cp-text-link') {
    const control = element('a', className, label);
    control.href = href;
    return control;
  }

  function showError(container, error) {
    container.hidden = !error;
    container.textContent = error?.message || '';
  }

  function sourceList(sources) {
    const wrapper = element('div', 'cp-sources');
    if (!sources.length) return wrapper;
    wrapper.append(element('strong', '', sources.length === 1 ? 'Fonte' : 'Fonti'));
    for (const source of sources) {
      const label = source.section ? `${source.title} · ${source.section}` : source.title;
      const item = source.url ? link(label, source.url, 'cp-source') : element('span', 'cp-source', label);
      if (source.url) {
        item.target = '_blank';
        item.rel = 'noopener';
        item.setAttribute('aria-label', `${label} (apre in un’altra scheda)`);
      }
      wrapper.append(item);
    }
    return wrapper;
  }

  function startChat() {
    const form = document.querySelector('#chat-form');
    const input = document.querySelector('#chat-input');
    const messages = document.querySelector('#messages');
    const empty = document.querySelector('#empty-chat');
    const newCase = document.querySelector('#new-case');
    const errorBox = document.querySelector('#chat-error');
    const send = form.querySelector('button');
    const labels = ['Risposta diretta', 'Guida passo passo', 'Richiesta di assistenza'];
    let caseId = null;
    let actions = null;
    let waiting = false;

    const scroll = () => messages.scrollTo({ top: messages.scrollHeight });

    function busy(value) {
      waiting = value;
      send.disabled = value;
      newCase.disabled = value;
    }

    function clear() {
      caseId = null;
      actions = null;
      messages.replaceChildren(empty);
      newCase.hidden = true;
      form.hidden = false;
      input.value = '';
      showError(errorBox);
      input.focus();
    }

    function renderTicket(draft, message) {
      const panel = document.querySelector('#ticket-template').content.firstElementChild.cloneNode(true);
      const fields = panel.elements;
      fields.summary.value = draft.summary;
      fields.description.value = draft.description;
      fields.stepsTried.value = (draft.stepsTried || []).join('\n');
      fields.type.value = draft.type;
      if (/ufficio.*bloccat/i.test(message)) fields.impact.value = 'ufficio';
      if (/\boggi\b/i.test(message)) fields.urgency.value = 'oggi';
      const priority = panel.querySelector('.cp-priority');
      const refreshPriority = () => {
        const high = fields.impact.value === 'ufficio' || fields.urgency.value === 'oggi';
        const medium = fields.impact.value === 'operatore' || fields.urgency.value === 'presto';
        priority.textContent = `Priorità in coda: ${high ? 'alta' : medium ? 'media' : 'bassa'}`;
      };
      refreshPriority();
      panel.addEventListener('change', refreshPriority);
      panel.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (waiting) return;
        busy(true);
        const confirm = panel.querySelector('button');
        confirm.disabled = true;
        const panelError = panel.querySelector('[role="alert"]');
        showError(panelError);
        try {
          const result = await request('/api/tickets', { caseId, ...Object.fromEntries(new FormData(panel)) });
          const notice = element('div', 'cp-feedback cp-feedback-success');
          notice.append(element('strong', '', 'Ticket aggiunto alla coda simulata'), element('p', '', `Richiesta ${result.id.slice(-6).toUpperCase()} · priorità ${result.priority}`), link('Apri la coda', '/palitalsoft#coda'));
          panel.replaceWith(notice);
          form.hidden = true;
        } catch (error) {
          showError(panelError, error);
          confirm.disabled = false;
        } finally {
          busy(false);
          if (form.hidden && !panel.isConnected) newCase.focus();
          scroll();
        }
      });
      return panel;
    }

    function renderActions(result, message) {
      if (result.ticket) return renderTicket(result.ticket, message);
      const controls = element('div', 'cp-chat-actions');
      if (result.quizTopic) controls.append(link('Fai un mini-quiz', `/quiz?topic=${encodeURIComponent(result.quizTopic)}`));
      if (result.question || result.level === 3) return controls;
      const resolved = button('Ho risolto');
      const help = button('Serve ancora aiuto');
      resolved.addEventListener('click', async () => {
        if (waiting) return;
        busy(true);
        showError(errorBox);
        try {
          await request('/api/assistant/resolve', { caseId });
          const quiz = controls.querySelector('a');
          const notice = element('div', 'cp-feedback cp-feedback-success', 'Richiesta risolta.');
          if (quiz) notice.append(quiz);
          controls.replaceWith(notice);
          form.hidden = true;
        } catch (error) {
          showError(errorBox, error);
        } finally {
          busy(false);
          if (form.hidden) newCase.focus();
          scroll();
        }
      });
      help.addEventListener('click', () => submit('Serve ancora aiuto.', true));
      controls.append(resolved, help);
      return controls;
    }

    async function submit(message, escalate = false) {
      if (waiting || !message) return;
      busy(true);
      showError(errorBox);
      const prompt = element('div', 'cp-message cp-message-user', message);
      const pending = element('p', 'cp-chat-pending', 'Consultazione dei manuali…');
      if (empty.isConnected) empty.hidden = true;
      messages.append(prompt, pending);
      scroll();
      try {
        const result = await request('/api/assistant', { message, area: 'demografici', caseId, escalate });
        ({ caseId } = result);
        newCase.hidden = false;
        actions?.remove();
        const reply = element('div', 'cp-message cp-message-assistant');
        reply.append(element('span', `cp-level-tag level-${result.level}`, `Livello ${result.level} · ${labels[result.level - 1]}`));
        reply.append(element('p', 'cp-answer', result.answer));
        if (result.steps?.length) {
          const list = element('ol', 'cp-steps');
          result.steps.forEach((step) => list.append(element('li', '', step)));
          reply.append(list);
        }
        if (result.question) reply.append(element('p', 'cp-question', result.question));
        reply.append(sourceList(result.sources || []));
        actions = renderActions(result, message);
        reply.append(actions);
        messages.append(reply);
        input.value = '';
        if (result.ticket) {
          form.hidden = true;
          actions.querySelector('input').focus({ preventScroll: true });
        } else input.focus({ preventScroll: true });
      } catch (error) {
        prompt.remove();
        if (!caseId) empty.hidden = false;
        if (!escalate) input.value = message;
        showError(errorBox, error);
      } finally {
        pending.remove();
        busy(false);
        if (actions?.matches('.cp-ticket-form')) actions.scrollIntoView({ block: 'start' });
        else scroll();
      }
    }

    newCase.addEventListener('click', () => {
      empty.hidden = false;
      clear();
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      submit(input.value.trim());
    });
    empty.querySelectorAll('[data-prompt]').forEach((control) => {
      control.addEventListener('click', () => submit(control.dataset.prompt));
    });
  }

  function startQuiz() {
    const quiz = document.querySelector('#quiz');
    const start = document.querySelector('#start-quiz');
    const body = document.querySelector('#quiz-body');
    const errorBox = document.querySelector('#quiz-error');
    let quizId;
    let total;

    function renderQuestion(question, index) {
      body.replaceChildren();
      const progress = element('progress', 'cp-progress');
      progress.max = total;
      progress.value = index + 1;
      progress.setAttribute('aria-label', 'Avanzamento del quiz');
      const form = element('form', 'cp-question-form');
      const fields = element('fieldset');
      const title = element('legend', '', question.question);
      title.tabIndex = -1;
      fields.append(title);
      question.options.forEach((option, position) => {
        const label = element('label', 'cp-option');
        const radio = element('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = position;
        radio.required = true;
        label.append(radio, element('span', '', option));
        fields.append(label);
      });
      const submit = element('button', 'cp-btn cp-btn-primary', 'Conferma risposta');
      form.append(fields, submit);
      body.append(element('p', 'cp-eyebrow', `Domanda ${index + 1} di ${total}`), progress, form);
      title.focus();

      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (submit.disabled) return;
        submit.disabled = true;
        showError(errorBox);
        try {
          const answer = Number(new FormData(form).get('answer'));
          const result = await request('/api/quiz/attempt', { id: quizId, index, answer });
          fields.disabled = true;
          submit.remove();
          const feedback = element('div', `cp-feedback ${result.correct ? 'cp-feedback-success' : 'cp-feedback-review'}`);
          feedback.tabIndex = -1;
          feedback.append(element('strong', '', result.correct ? 'Risposta corretta' : 'Da ripassare'), element('p', '', result.explanation), sourceList([result.source]));
          body.append(feedback);
          const advance = button(result.next ? 'Prossima domanda' : 'Vedi risultato', 'cp-btn cp-btn-primary');
          advance.addEventListener('click', () => {
            if (result.next) renderQuestion(result.next, index + 1);
            else {
              const title = element('h2', '', `${result.score} su ${total} risposte corrette`);
              title.tabIndex = -1;
              body.replaceChildren(element('span', 'cp-eyebrow', 'Risultato salvato'), title, link(result.score < total ? 'Ripassa la lezione' : 'Torna al percorso', result.score < total ? '/formazione/cie' : '/', 'cp-btn cp-btn-primary'), link('I miei progressi', '/'));
              title.focus();
            }
          });
          body.append(advance);
          feedback.focus();
        } catch (error) {
          showError(errorBox, error);
          submit.disabled = false;
        }
      });
    }

    start.addEventListener('click', async () => {
      start.disabled = true;
      showError(errorBox);
      try {
        const result = await request('/api/quiz', { topic: quiz.dataset.topic });
        ({ id: quizId, total } = result);
        start.closest('.cp-quiz-start').hidden = true;
        renderQuestion(result.question, 0);
      } catch (error) {
        showError(errorBox, error);
        start.disabled = false;
      }
    });
  }

  if (document.querySelector('#chat-form')) startChat();
  if (document.querySelector('#quiz')) startQuiz();
})();
