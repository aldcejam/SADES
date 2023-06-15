export const RemoveSlashIfLastLetter = (variable: string) => {
  if (variable.endsWith("/")) {
    return variable.slice(0, -1);
  }
  return variable;
};
