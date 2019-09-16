/* eslint-disable no-restricted-globals */
export function processLinebreaks(value) {
  const text = String(value || '');
  return text.replace(/\r?\n/g, '<br/>');
}

export function signed(value) {
  const normalized = Number(value);
  const num = isNaN(normalized) ? 0 : normalized;
  return `${num >= 0 ? '+' : '-'}${num}`;
}

export function toPropName(value) {
  return (value || '').replace(/ /g, '_').toLowerCase();
}
