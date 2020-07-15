export const deleteItemFromArrayById = (id, arr) => arr.filter((item) => item.id !== id);

export const updateItemFromArrayById = (id, arr, newItem) => {
  const idx = arr.findIndex((item) => item.id === id);
  return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
};

export const required = (value) => value ? undefined : 'Required';
