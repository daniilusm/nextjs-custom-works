export const bytesForHuman = (
  bytes: number,
  bytesOneKb?: number,
  fixed?: number
) => {
  // some old files not contain data
  if (!bytes) return '';

  const bytesOnOneKb = bytesOneKb || 1000;
  const units = ['byte', 'KB', 'MB', 'GB', 'TB', 'PB'];
  let currentBytes = bytes;
  let i = 0;

  for (i; currentBytes > bytesOnOneKb; i += 1) {
    currentBytes /= bytesOnOneKb;
  }

  return `${currentBytes.toFixed(fixed === undefined ? i : fixed)} ${units[i]}`;
};
