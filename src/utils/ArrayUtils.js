export function notEmptyArray(items) {
  return items !== null
      && items !== undefined
      && items.length > 0;
}

export function commaSeparate(items) {
  return (items || []).reduce((prev, curr) => `${prev}, ${curr}`);
}
