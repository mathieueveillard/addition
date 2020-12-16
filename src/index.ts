export function add(first: string, second: string): string {
  const n1: number[] = toArrayOfIntegers(first);
  const n2: number[] = toArrayOfIntegers(second);
  return internalAdd(n1, n2, 0).reverse().join("");
}

function toArrayOfIntegers(numberAsString: string): number[] {
  return numberAsString
    .split("")
    .map((n) => parseInt(n, 10))
    .reverse();
}

function internalAdd(n1: number[], n2: number[], power: number): number[] {
  const [lower1, ...rest1] = n1.length === 0 ? [0] : n1;
  const [lower2, ...rest2] = n2.length === 0 ? [0] : n2;
  const value = lower1 + lower2 + power;
  const digit = value % 10;
  const nextPower = (value - digit) / 10;

  if (rest1.length === 0 && rest2.length === 0) {
    if (nextPower === 0) {
      return [digit];
    }
    return [digit, nextPower];
  }

  return [digit, ...internalAdd(rest1, rest2, nextPower)];
}
