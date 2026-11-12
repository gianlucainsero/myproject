function cleanLessonText(value) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/\*\*\[(?:ID\s+)?\d+(?:\s*[,–-]\s*\d+)*\]\*\*|\[(?:ID\s+)?\d+(?:\s*[,–-]\s*\d+)*\]/gi, ' ')
    .replace(/[ \t]+([,.;:!?])/g, '$1')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

function lineKey(line) {
  return line
    .normalize('NFC')
    .toLocaleLowerCase('it')
    .replace(/[*_]/g, '')
    .replace(/[.!?:;]+$/, '')
    .trim();
}

function uniqueLines(values) {
  if (!Array.isArray(values)) return [];
  const lines = values.flatMap((value) => cleanLessonText(value).split(/\r?\n/)).map((line) => line.replace(/^\s*(?:[-*•]|\d+[.)])\s+/, '').trim());
  return [...new Map(lines.filter(Boolean).map((line) => [lineKey(line), line])).values()];
}

function cleanLesson(lesson) {
  const intro = uniqueLines([lesson.intro]).join(' ');
  const keyPoints = uniqueLines(lesson.keyPoints)
    .filter((point) => lineKey(point) !== lineKey(intro))
    .slice(0, 5);
  const presented = new Set(keyPoints.map(lineKey));
  const steps = new Map();
  for (const step of uniqueLines(lesson.steps)) {
    const action = step.replace(/^\*\*[^*]+\*\*:\s*/, '');
    const key = lineKey(action);
    if (!presented.has(key)) steps.set(key, steps.has(key) ? action : step);
  }
  return { ...lesson, title: cleanLessonText(lesson.title), intro, keyPoints, steps: [...steps.values()] };
}

module.exports = { cleanLesson, cleanLessonText };
