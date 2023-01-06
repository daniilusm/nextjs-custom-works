import React from 'react';

const BACKSPACE = 8;
const DELETE = 46;
const MIN_RANGE_OF_DIGITS = 48;
const MAX_RANGE_OF_DIGITS = 57;

export default (event: React.KeyboardEvent<HTMLInputElement>) => {
  const key = window.event ? event.keyCode : event.which;
  if (event.keyCode === BACKSPACE || event.keyCode === DELETE) {
    return true;
  }
  if (key < MIN_RANGE_OF_DIGITS || key > MAX_RANGE_OF_DIGITS) {
    return false;
  }
  return true;
};
