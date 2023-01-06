/*
/^
  (?=.*\d)          // should contain at least one digit
  (?=.*[a-z])       // should contain at least one lower case
  (?=.*[A-Z])       // should contain at least one upper case
  [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
$/
*/
export const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@$!%*?&]{8,}$/;

export const email = /^[\w-.]+\+*\d*@([\w-]+\.)+[\w-]{2,15}$/;

export const phone = /^\+\d*$/;

export const image = /image\/(\*|gif|jpe?g|tiff?|png|webp|bmp)$/i;

export const emoji = /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]|💸️|🛡️|🖌️|🤙)\s+/g;

export const tags = /(<([^>]+)>)/gi;
