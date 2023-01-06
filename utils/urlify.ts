export default (text: string) => {
  const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/g;
  return text.replace(urlRegex, url => {
    return `<a target="_blank" href="${url.replace(
      /<\/?[^>]+(>|$)/g,
      ''
    )}">${url}</a>`;
  });
};
