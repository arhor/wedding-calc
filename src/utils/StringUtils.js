export function processLinebreaks(value) {
  const text = String(value || '');
  return text.replace(/(\n)|(\r\n)/g, '<br/>');
}

export function signed(value) {
  const num = value || 0;
  return `${num >= 0 ? '+' : '-'}${num}`;
}

export function toPropName(str) {
  return (str || '').replace(/ /g, '_').toLowerCase();
}
