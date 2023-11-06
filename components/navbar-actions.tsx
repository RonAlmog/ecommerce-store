"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

const NavbarActions = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button size="sm">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
