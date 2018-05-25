/**
 * Wrap a function to convert it to a void-returning function
 * @param fn
 */
export const asVoid = <A>(fn: () => A): () => void => {
    return () => fn();
};
