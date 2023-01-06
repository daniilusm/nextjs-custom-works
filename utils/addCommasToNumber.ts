export const addCommasToNumber = (value: string | number): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default addCommasToNumber;
