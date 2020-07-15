const generateAction = (namespace) => ({
  request: `${namespace}/request`,
  success: `${namespace}/success`,
  error: `${namespace}/error`,
  save: `${namespace}/save`,
  update: `${namespace}/update`,
  delete: `${namespace}/delete`,
});

export const menu = generateAction('menu');
