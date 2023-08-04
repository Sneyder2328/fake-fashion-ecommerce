"use client";

import {
  MagnifyingGlassIcon,
  GlobeAmericasIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { ShoppingCartModal } from "../modals/shopping-cart-modal";
import { useQuery } from "@tanstack/react-query";
import { commerce } from "@/app/_lib/commerce";

export function NavActions({}) {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cartQuery = useQuery({
    queryKey: ["cart"],
    queryFn: () => commerce.cart.retrieve(),
  });

  return (
    <>
      <div className="flex space-x-4">
        <MagnifyingGlassIcon className="w-5" />
        <GlobeAmericasIcon className="w-5" />
        <UserIcon className="w-5" />
        <div className="relative">
          <ShoppingBagIcon
            className="w-5 hover:cursor-pointer"
            onClick={() => setIsShoppingCartOpen(true)}
          />
          {(cartQuery.data?.total_items ?? 0) > 0 && (
            <i className="absolute -right-2 -top-1 flex h-[14px] w-[14px] items-center justify-center rounded-full bg-black text-[10px] not-italic text-white">
              {cartQuery.data?.total_items}
            </i>
          )}
        </div>
      </div>
      <ShoppingCartModal
        isOpen={isShoppingCartOpen}
        setIsOpen={setIsShoppingCartOpen}
      />
    </>
  );
}
