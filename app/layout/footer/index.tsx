import { EmailForm } from "./email-form";
import { NavMenu } from "./nav-menu";

export function Footer() {
  return (
    <div className="w-full">
      <EmailForm />
      <NavMenu />
      <div className="bg-gray-200 py-2">
        <div className="inner flex justify-between">
          <span className="text-sm font-semibold text-gray-500">
            Coded by{" "}
            <strong className="font-bold text-gray-700">Sneyder Angulo</strong>
          </span>
          <span className="text-sm font-semibold text-gray-500">
            Designed by{" "}
            <strong className="font-bold text-gray-700">Oleh Chabanov</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
