export const keyToLabel = (str) => {
  return str.replace(/([A-Z])/g, " $1").replace(/^./, function (value) {
    return value.toUpperCase();
  });
};

export const getError = (name, errors) => {
  if (!Object.keys(errors).length) return undefined;

  return name
    .split(".")
    .map((item) => item.replaceAll("[", "").replaceAll("]", ""))
    .reduce((prev, curr) => (prev ? prev[curr] : prev), errors);
};

export const isFormEdited = (dirtyFields, fields) => {
  return fields.reduce((prev, curr) => {
    return prev || dirtyFields[curr];
  }, false);
};
