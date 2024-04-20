/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/**
 * @returns true when string, object, array are empty as well as when null/undefined
 */
// eslint-disable-next-line @typescript-eslint/prefer-optional-chain
const isEmpty = (obj: any) =>
  [Object, Array].includes(obj?.constructor) &&
  !Object.entries(obj || {}).length;

export {isEmpty};
