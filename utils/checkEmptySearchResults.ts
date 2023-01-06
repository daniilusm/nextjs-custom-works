import { SearchesType } from 'models/searches/types';

export default (search: SearchesType) => {
  let checkResult = true;
  Object.entries(search).map(item => {
    if (Array.isArray(item[1]) && item[1].length > 0) {
      checkResult = false;
    }
    return checkResult;
  });
  return checkResult;
};
