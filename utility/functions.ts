export const numberToMoneyFormat = (num: number) => {
  return `${new Intl.NumberFormat().format(num)} VND`;
}