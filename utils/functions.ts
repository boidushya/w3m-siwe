export const truncate = (str: string, n: number = 4) => {
  return str?.length > n
    ? str.slice(0, n) + "..." + str.slice(str.length - 4, str.length)
    : str;
};
