import { useState } from "react";
import { Modal } from "../base-modal";
import { Button } from "../button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/_lib/firebase";
import { useMutation } from "@tanstack/react-query";
import { LoadingSpinner } from "../loading-spinner";
import toast from "react-hot-toast";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

const validatePassword = (password: string) => {
  return password.length >= 8;
};

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
export function LoginModal({ isOpen, setIsOpen }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInWithEmailAndPassword(auth, email, password),
    onSuccess: () => setIsOpen(false),
    onError: () => toast("Invalid email or password", {  }),
  });

  return (
    <Modal title="Login" onHide={() => setIsOpen(false)} isOpen={isOpen}>
      <div className="flex flex-col">
        <span className="text-center">
          If you have an account with us please log in.
        </span>
        <label htmlFor="email" className="mt-4 font-bold uppercase">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 rounded-sm  border bg-[#f8f8f8] px-3 py-2 outline-none invalid:border-red-500 focus:border-slate-500"
        />
        <label htmlFor="password" className="mt-4 font-bold uppercase">
          Password
        </label>
        <input
          type="password"
          id="password"
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 rounded-sm  border bg-[#f8f8f8] px-3 py-2 outline-none invalid:border-red-500 focus:border-slate-500"
        />
        <Button
          className="mt-6"
          disabled={!validateEmail(email) || !validatePassword(password)}
          onClick={() => signInMutation.mutate({ email, password })}
        >
          {signInMutation.isLoading === true && <LoadingSpinner size={16} />}
          <span>Login</span>
        </Button>
      </div>
    </Modal>
  );
}
