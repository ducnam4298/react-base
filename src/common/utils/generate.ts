export const GenerateGUID = (length?: number) => {
  return [...Array(length ?? 10)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
};
