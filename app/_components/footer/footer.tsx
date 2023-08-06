import { FooterEmailForm } from "./footer-email-form";
import { FooterNavMenu } from "./footer-nav-menu";

export function Footer() {
  return (
    <div className="w-full">
      <FooterEmailForm />
      <FooterNavMenu />
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
