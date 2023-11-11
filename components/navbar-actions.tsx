"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button size="sm" onClick={() => router.push("/cart")}>
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
