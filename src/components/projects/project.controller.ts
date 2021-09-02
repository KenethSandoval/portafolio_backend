export function getAll<T>(xs: T[]): LazyList<T> {
  return () => {
    if (xs.length === 0) {
      throw { code: 404, message: "Void" };
    } else {
      return {
        head: () => xs[0],
        tail: getAll(xs.slice(1)),
      };
    }
  };
}
