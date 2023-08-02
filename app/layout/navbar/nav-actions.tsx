"use client";

import {
  MagnifyingGlassIcon,
  GlobeAmericasIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { ShoppingCartModal } from "../modals/shopping-cart-modal";

export function NavActions({}) {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <>
      <div className="flex space-x-4">
        <MagnifyingGlassIcon className="w-5" />
        <GlobeAmericasIcon className="w-5" />
        <UserIcon className="w-5" />
        <ShoppingBagIcon
          className="w-5 hover:cursor-pointer"
          onClick={() => setIsShoppingCartOpen(true)}
        />
      </div>
      <ShoppingCartModal
        isOpen={isShoppingCartOpen}
        setIsOpen={setIsShoppingCartOpen}
      />
    </>
  );
}
