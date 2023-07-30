import CommerceSDK from "@chec/commerce.js";

if (!process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY) {
  throw new Error(
    "Missing NEXT_PUBLIC_CHEC_PUBLIC_API_KEY environment variable",
  );
}
const client = new CommerceSDK(process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY!);

export default client;

export async function wrapAsync<T>(
  promise: Promise<T>,
): Promise<[T | undefined, unknown]> {
  try {
    const data = await promise;
    return [data, undefined];
  } catch (err) {
    return [undefined, err];
  }
}
