import { redirect } from "next/navigation";
import { InternalLinks } from "../_lib/constants";

export default function Home() {
  return redirect(InternalLinks.HOME);
}
