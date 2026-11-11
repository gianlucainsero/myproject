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

  function responseText(tag, className, value) {
    const node = element(tag, className);
    String(value)
      .split(/\*\*([^*\n]+)\*\*/)
      .forEach((part, index) => {
        node.append(index % 2 ? element('strong', '', part) : part);
      });
    return node;
  }

  function link(label, href, className = 'cp-text-link') {
    const control = element('a', className, label);
    control.href = href;
    return control;
  }

  function icon(name) {
    const symbol = element('i', `fa-solid ${name}`);
    symbol.setAttribute('aria-hidden', 'true');
    return symbol;
  }

  function showError(container, error) {
    container.hidden = !error;
    container.textContent = error?.message || '';
  }

  function sourceList(sources) {
    const wrapper = element('div', 'cp-sources');
    for (const source of sources) {
      const title = [source.module, source.title, source.section].filter(Boolean).join(' · ');
      const label = `Fonte: ${title}`;
      const item = source.url ? link('', source.url, 'cp-source') : element('span', 'cp-source');
      item.append(icon('fa-book-open'), label);
      if (source.url) {
        item.target = '_blank';
        item.rel = 'noopener';
        item.setAttribute('aria-label', `${label} (apre in un’altra scheda)`);
      }
      wrapper.append(item);
    }
    return wrapper;
  }

  function renderSteps(steps, level) {
    const checklist = level === 2;
    const list = element(checklist ? 'ul' : 'ol', checklist ? 'cp-checklist' : 'cp-steps');
    for (const step of steps) {
      const item = element('li');
      if (checklist) {
        const label = element('label');
        const check = element('input');
        check.type = 'checkbox';
        label.append(check, responseText('span', '', step));
        item.append(label);
      } else item.append(responseText('span', '', step));
      list.append(item);
    }
    if (!checklist) return list;
    const counter = element('p', 'cp-checklist-count');
    counter.setAttribute('role', 'status');
    const refresh = () => {
      const count = list.querySelectorAll(':checked').length;
      counter.textContent = count === 1 ? `1 passo su ${steps.length} completato` : `${count} passi su ${steps.length} completati`;
    };
    list.addEventListener('change', refresh);
    refresh();
    const guide = element('div', 'cp-guide');
    guide.append(list, counter);
    return guide;
  }

  function startChat() {
    const form = document.querySelector('#chat-form');
    const input = document.querySelector('#chat-input');
    const messages = document.querySelector('#messages');
    const empty = document.querySelector('#empty-chat');
    const newCase = document.querySelector('#new-case');
    const errorBox = document.querySelector('#chat-error');
    const send = form.querySelector('button');
    const levels = Array.from(document.querySelectorAll('[data-assistant-level]'));
    let caseId = null;
    let actions = null;
    let activeChoices = null;
    let waiting = false;

    const scroll = () => messages.scrollTo({ top: messages.scrollHeight });

    function showLevel(level) {
      for (const item of levels) {
        if (Number(item.dataset.assistantLevel) === level) item.setAttribute('aria-current', 'step');
        else item.removeAttribute('aria-current');
      }
    }

    function busy(value) {
      waiting = value;
      send.disabled = value;
      newCase.disabled = value;
      activeChoices?.querySelectorAll('button').forEach((control) => {
        control.disabled = value;
      });
    }

    function clear() {
      caseId = null;
      actions = null;
      activeChoices = null;
      showLevel(null);
      messages.replaceChildren(empty);
      newCase.hidden = true;
      form.hidden = false;
      input.value = '';
      showError(errorBox);
      input.focus();
    }

    function renderTicket(draft, message) {
      const panel = document.querySelector('#ticket-template').content.firstElementChild.cloneNode(true);
      panel.querySelector('[data-ticket-module]').textContent = draft.module || 'Cityware Online';
      const fields = panel.elements;
      const preview = panel.querySelector('.cp-ticket-preview');
      const editor = panel.querySelector('.cp-ticket-editor');
      const edit = panel.querySelector('[data-ticket-edit]');
      const confirm = panel.querySelector('button[type="submit"]');
      const ticketStatus = panel.querySelector('.cp-ticket-note');
      fields.summary.value = draft.summary || '';
      fields.description.value = draft.description || '';
      fields.stepsTried.value = (draft.stepsTried || []).join('\n');
      fields.type.value = draft.type;
      if (!fields.type.value) fields.type.value = 'altro';
      if (/ufficio.*bloccat/i.test(message)) fields.impact.value = 'ufficio';
      if (/\boggi\b/i.test(message)) fields.urgency.value = 'oggi';
      const priority = panel.querySelector('.cp-priority');
      const refreshPreview = () => {
        const high = fields.impact.value === 'ufficio' || fields.urgency.value === 'oggi';
        const medium = fields.impact.value === 'operatore' || fields.urgency.value === 'presto';
        const value = high ? 'alta' : medium ? 'media' : 'bassa';
        priority.textContent = `Priorità in coda: ${value}`;
        const previewPriority = panel.querySelector('[data-ticket-priority]');
        previewPriority.textContent = value;
        previewPriority.className = `cp-priority-tag priority-${value}`;
        const type = panel.querySelector('[data-ticket-type]');
        type.textContent = fields.type.selectedOptions[0].textContent;
        type.className = `cp-type-tag type-${fields.type.value}`;
        panel.querySelector('[data-ticket-summary]').textContent = fields.summary.value;
        panel.querySelector('[data-ticket-attempts]').textContent = fields.stepsTried.value.trim() || 'Nessun tentativo indicato';
      };
      const showEditor = (visible) => {
        editor.hidden = !visible;
        preview.hidden = visible;
        edit.textContent = visible ? 'Anteprima' : 'Modifica';
        edit.setAttribute('aria-expanded', String(visible));
      };
      refreshPreview();
      showEditor(!fields.summary.value.trim() || !fields.description.value.trim());
      panel.addEventListener('input', refreshPreview);
      edit.addEventListener('click', () => {
        if (!editor.hidden && !panel.reportValidity()) return;
        showEditor(editor.hidden);
        if (!editor.hidden) fields.summary.focus();
      });
      panel.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (waiting) return;
        busy(true);
        confirm.disabled = true;
        edit.disabled = true;
        ticketStatus.textContent = 'Sto inviando il ticket…';
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
          edit.disabled = false;
          ticketStatus.textContent = 'Invio nella coda simulata.';
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
      const block = element('div');
      if (result.quizTopic) {
        const suggestion = element('div', 'cp-quiz-suggestion');
        const query = new URLSearchParams({ topic: result.quizTopic });
        if (result.sources[0]?.module && result.sources[0].module !== 'Servizi Demografici') query.set('area', 'tutti');
        suggestion.append(element('strong', '', 'Vuoi fissarlo? Fai un mini-quiz'), link('Fai il ripasso', `/quiz?${query}`, 'cp-btn cp-btn-secondary'));
        block.append(suggestion);
      }
      if (result.question || result.level === 3) return block;
      const controls = element('div', 'cp-chat-actions');
      const direct = result.level === 1;
      const resolved = button(direct ? 'Mi è servito' : 'Ho risolto');
      const help = button(direct ? 'Ho ancora un dubbio' : 'Serve ancora aiuto');
      const status = element('p', 'cp-chat-pending');
      status.setAttribute('role', 'status');
      status.hidden = true;
      resolved.addEventListener('click', async () => {
        if (waiting) return;
        busy(true);
        status.hidden = false;
        status.textContent = 'Sto registrando la risposta…';
        showError(errorBox);
        try {
          await request('/api/assistant/resolve', { caseId });
          const notice = element('div', 'cp-feedback cp-feedback-success', 'Richiesta risolta.');
          controls.replaceWith(notice);
          form.hidden = true;
        } catch (error) {
          showError(errorBox, error);
        } finally {
          status.hidden = true;
          busy(false);
          if (form.hidden) newCase.focus();
          scroll();
        }
      });
      help.addEventListener('click', () => {
        if (direct) input.focus();
        else submit('Serve ancora aiuto.', true);
      });
      controls.append(resolved, help);
      block.prepend(controls, status);
      return block;
    }

    function renderChoices(choices) {
      if (!Array.isArray(choices)) return null;
      const controls = element('div', 'cp-chat-actions cp-choices level-2');
      controls.setAttribute('role', 'group');
      controls.setAttribute('aria-label', 'Risposte suggerite');
      for (const choice of choices) {
        if (typeof choice !== 'string' || !choice.trim()) continue;
        const control = button(choice);
        control.addEventListener('click', () => submit(choice));
        controls.append(control);
      }
      return controls.childElementCount ? controls : null;
    }

    async function submit(message, escalate = false) {
      if (waiting || !message) return;
      busy(true);
      showError(errorBox);
      const prompt = element('div', 'cp-message cp-message-user', message);
      const pending = element('p', 'cp-chat-pending', 'Sto cercando nei manuali…');
      if (empty.isConnected) empty.hidden = true;
      messages.append(prompt, pending);
      scroll();
      try {
        const result = await request('/api/assistant', { message, area: 'tutti', caseId, escalate });
        ({ caseId } = result);
        newCase.hidden = false;
        actions?.remove();
        activeChoices?.remove();
        activeChoices = null;
        const reply = element('div', `cp-message cp-message-assistant level-${result.level}`);
        const level = levels[result.level - 1];
        const badge = element('span', `cp-level-tag level-${result.level}`);
        badge.append(icon(level.dataset.icon), `Livello ${result.level} · ${level.dataset.label}`);
        reply.append(badge);
        showLevel(result.level);
        if (result.mock || result.fallback) reply.append(element('p', 'cp-chat-pending', 'Modalità di riserva'));
        reply.append(responseText('p', 'cp-answer', result.answer));
        if (result.steps?.length) reply.append(renderSteps(result.steps, result.level));
        if (result.question) {
          reply.append(element('p', 'cp-question', result.question));
          activeChoices = renderChoices(result.choices);
          if (activeChoices) reply.append(activeChoices);
        }
        reply.append(sourceList(result.sources || []));
        actions = renderActions(result, message);
        reply.append(actions);
        messages.append(reply);
        input.value = '';
        if (result.ticket) {
          form.hidden = true;
          actions.querySelector('button[type="submit"]').focus({ preventScroll: true });
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

  function setupAssignments() {
    const panel = document.querySelector('#assignment-preview');
    const status = document.querySelector('#assignment-status');
    const content = document.querySelector('#assignment-content');
    const errorBox = document.querySelector('#assignment-error');
    const publish = document.querySelector('#assignment-publish');
    const close = document.querySelector('#assignment-close');
    const triggers = document.querySelectorAll('.cp-create-review');
    let trigger;
    let draft;

    function setPending(pending, label = '') {
      status.textContent = label;
      content.setAttribute('aria-busy', String(pending));
      close.disabled = pending;
      publish.disabled = pending;
      triggers.forEach((control) => {
        control.disabled = pending;
      });
    }

    function renderPreview({ lesson, quiz, target }) {
      content.append(element('h3', '', lesson.title), element('p', '', lesson.intro), element('p', '', target));
      const points = element('ul');
      lesson.keyPoints.forEach((point) => points.append(responseText('li', '', point)));
      content.append(points);
      if (lesson.steps.length) content.append(renderSteps(lesson.steps, 1));
      content.append(sourceList(lesson.sources), element('h3', '', 'Quiz di ripasso'));
      const questions = element('ol', 'cp-assignment-questions');
      quiz.forEach((question) => {
        const item = element('li', '', question.question);
        const options = element('ul');
        question.options.forEach((option, index) => options.append(element('li', index === question.correctIndex ? 'fw-bold' : '', option)));
        item.append(options);
        questions.append(item);
      });
      content.append(questions);
    }

    triggers.forEach((control) =>
      control.addEventListener('click', async () => {
        trigger = control;
        draft = null;
        panel.hidden = false;
        publish.hidden = true;
        content.replaceChildren();
        showError(errorBox);
        panel.scrollIntoView({ block: 'start' });
        setPending(true, 'Sto preparando il ripasso dai manuali…');
        try {
          draft = await request('/api/assignments/preview', { topic: control.dataset.topic, origin: control.dataset.origin });
          renderPreview(draft);
          publish.hidden = false;
        } catch (error) {
          showError(errorBox, error);
        } finally {
          setPending(false);
          (draft ? publish : close).focus({ preventScroll: true });
        }
      }),
    );

    close.addEventListener('click', () => {
      panel.hidden = true;
      trigger.focus();
    });

    publish.addEventListener('click', async () => {
      setPending(true, 'Sto assegnando il ripasso…');
      showError(errorBox);
      try {
        const saved = await request('/api/assignments', { previewId: draft.previewId });
        const confirmation = document.querySelector('#assignment-confirmation');
        const entry = element('div', 'cp-topic-row');
        entry.append(element('strong', '', saved.title), element('span', '', saved.target), element('span', '', '0 completamenti'));
        document.querySelector('#assignments-empty')?.remove();
        document.querySelector('#assignment-list').prepend(entry);
        confirmation.hidden = false;
        confirmation.textContent = `Ripasso assegnato a ${saved.target}`;
        confirmation.tabIndex = -1;
        panel.hidden = true;
        confirmation.focus();
      } catch (error) {
        showError(errorBox, error);
      } finally {
        setPending(false);
      }
    });
  }

  function startQuiz() {
    const quiz = document.querySelector('#quiz');
    const start = document.querySelector('#start-quiz');
    const body = document.querySelector('#quiz-body');
    const errorBox = document.querySelector('#quiz-error');
    const statusBox = document.querySelector('#quiz-status');
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
        statusBox.hidden = false;
        statusBox.textContent = 'Sto verificando la risposta…';
        try {
          const answer = Number(new FormData(form).get('answer'));
          const result = await request('/api/quiz/attempt', { id: quizId, index, answer });
          fields.disabled = true;
          submit.remove();
          const feedback = element('div', `cp-feedback ${result.correct ? 'cp-feedback-success' : 'cp-feedback-review'}`);
          feedback.tabIndex = -1;
          const status = element('strong', 'cp-feedback-title');
          status.append(icon(result.correct ? 'fa-circle-check' : 'fa-circle-exclamation'), result.correct ? 'Risposta corretta' : 'Da ripassare');
          feedback.append(status, element('p', '', result.explanation), sourceList([result.source]));
          body.append(feedback);
          const advance = button(result.next ? 'Prossima domanda' : 'Vedi risultato', 'cp-btn cp-btn-primary');
          advance.addEventListener('click', () => {
            if (result.next) renderQuestion(result.next, index + 1);
            else if (quiz.dataset.assignment) window.location.assign('/');
            else {
              const title = element('h2', '', `${result.score} su ${total} risposte corrette`);
              title.tabIndex = -1;
              const actions = element('div', 'cp-study-actions');
              actions.append(link(result.score < total ? 'Ripassa la lezione' : 'Torna al percorso', result.score < total ? '/formazione/cie' : '/', 'cp-btn cp-btn-secondary'), link('I miei progressi', '/'));
              body.replaceChildren(element('span', 'cp-eyebrow', 'Risultato salvato'), title, actions);
              title.focus();
            }
          });
          body.append(advance);
          feedback.focus();
        } catch (error) {
          showError(errorBox, error);
          submit.disabled = false;
        } finally {
          statusBox.hidden = true;
        }
      });
    }

    start.addEventListener('click', async () => {
      start.disabled = true;
      showError(errorBox);
      statusBox.hidden = false;
      statusBox.textContent = 'Sto preparando il quiz…';
      try {
        const result = await request('/api/quiz', { topic: quiz.dataset.topic, area: quiz.dataset.area, assignmentId: quiz.dataset.assignment });
        ({ id: quizId, total } = result);
        start.closest('.cp-quiz-start').hidden = true;
        renderQuestion(result.question, 0);
      } catch (error) {
        showError(errorBox, error);
        start.disabled = false;
      } finally {
        statusBox.hidden = true;
      }
    });
  }

  if (document.querySelector('#chat-form')) startChat();
  if (document.querySelector('#quiz')) startQuiz();
  if (document.querySelector('#assignment-preview')) setupAssignments();
  const reset = document.querySelector('#reset-demo');
  reset?.addEventListener('submit', () => {
    reset.querySelector('button').disabled = true;
    document.querySelector('#reset-status').textContent = 'Sto ripristinando la demo…';
  });
})();
