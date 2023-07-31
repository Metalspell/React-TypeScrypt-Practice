import Link from "next/link";
import React from "react";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className="flex w-full p-2 border shadow bg-gradient-to-b from-sky-200 to-sky-50">
      <Link className="text-sky-600" href={"/"}>
        Home
      </Link>
      <Link className="ml-auto mr-4" href={"/cart"}>
        <CartButton />
      </Link>
    </header>
  );
};

export default Header;