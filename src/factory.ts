/**
 * Factory function that returns a function for generating a sequence of numbers
 *
 * @param {number} [start] - The starting number for the sequence. Default is 0.
 * @param {number} [step] - The step to increment each number in the sequence. Default is 1.
 * @returns {Function} - A function that generates the number sequence every time it is called.
 */
export const factory = (start?: number, step?: number) => {
  start = !isNaN(start as number) ? start : 0;
  step = !isNaN(step as number) ? step : 1;

  let current: number = Number(start);
  return () => {
    current += Number(step);
    return current;
  };
};
