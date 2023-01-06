// Dealing with Textarea Height
export default (value: string, initialMinHeight: number) => {
  const numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  const newHeight = initialMinHeight + numberOfLineBreaks * 16 + 57 + 2;
  return newHeight;
};
