"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import Currency from "@/components/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  data: Product;
}

const CartItem = ({ data }: CartItemProps) => {
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt={data.name}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="abolute z-10 right-0 top-0">
          <Button size="icon" variant="secondary">
            <X size={15} />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
