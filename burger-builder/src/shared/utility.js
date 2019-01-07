export const updateObject = (oldObject, updatedProps) => {
  return {
    ...oldObject,
    ...updatedProps
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;

  if (rules.required) {
    isValid = value.trim() !== '';
  }

  if (rules.minLength && isValid) {
    isValid = value.length >= rules.minLength;
  }

  if (rules.maxLength && isValid) {
    isValid = value.length <= rules.maxLength;
  }

  return isValid;
};
