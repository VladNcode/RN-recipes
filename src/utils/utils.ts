export const convertSnakeCaseToNormalCase = (str: string) =>
  str.slice(0, 1).toUpperCase() + str.slice(1).replace(/_\w/g, match => ' ' + match[1].toUpperCase());

export const convertNormalCaseToSnakeCase = (str: string) =>
  str.slice(0, 1).toLowerCase() + str.slice(1).replace(/\s\w/g, match => '_' + match[1].toLowerCase());

export const getRandomArbitrary = () => {
  return Math.random() * (1400 - 1) + 1;
};
