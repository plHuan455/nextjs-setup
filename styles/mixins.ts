export const rem = (pixel: number) => {
  return `${pixel/16}rem`;
}

export const fontFamily = (font: 'jost') => {
  if(font === 'jost') return 'Jost, sans-serif';
  return undefined;
}