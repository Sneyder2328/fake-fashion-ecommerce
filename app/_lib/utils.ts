const createQueryString = (name: string, value: string) => {
  const params = new URLSearchParams(window.location.search);
  params.set(name, value);
  return params.toString();
};

/**
 * This utility function helps to replace the query string on the url in a sort of 'shallow' way without re-rendering the whole page every time the query params get updated.
 * Note that the default behavior in Next.js 13 is to re-render the whole page on every query param update while using the useRouter hook.
 * This hack should be temporal as the framework authors come up with an official solution. 
 * This code snippet comes from open discussion about the topic on:
 * https://github.com/vercel/next.js/discussions/48110#discussioncomment-6614653
 * @param key
 * @param value
 * @returns
 */
export const replaceShallow = (key: string, value: string) =>
  history.replaceState(
    null,
    "",
    window.location.pathname + "?" + createQueryString(key, value),
  );
