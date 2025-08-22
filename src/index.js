module.exports = function towelSort(matrix) {
  if ((matrix ?? []).length === 0) return [];
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 0) {
      result.push(...matrix[i]);
    } else {
      result.push(...matrix[i].reverse());
    }
  }
  return result;
};
