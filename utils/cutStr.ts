export const cutStr = (string = '', maxStr = 35) => {
  const stringLength = string.length;
  if (stringLength > maxStr) {
    return `${string.substr(0, maxStr)}...`;
  }
  return string;
};

export const cutStrCenter = (string = '', startMaxStr = 20, endMaxStr = 20) => {
  const stringLength = string.length;
  if (stringLength > startMaxStr + endMaxStr) {
    return `${string.substr(0, startMaxStr)}...${string.slice(-endMaxStr)}`;
  }
  return string;
};
