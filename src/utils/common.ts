// TODO: Date dep

function uuid(text: String) {
  text = text || '';
  return new Date().getTime() + text.substring(0, 100);
}

function interpolate(params: Object) {
  console.info(params);
  const names = Object.keys(params);
  const vals = Object.values(params);
  return new Function(...names, `return \`${this}\`;`)(...vals);
}

export {uuid,interpolate};
