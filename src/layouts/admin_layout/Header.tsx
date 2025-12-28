import { Menu } from 'lucide-react';

import React from 'react'

type HeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ open, setOpen }: HeaderProps) => {
  return (
    <div>
      <header className="flex sticky top-0 items-center justify-between bg-white shadow px-6 py-4 ">
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="rounded-full"
        />
      </header>
    </div>
  );
};

export default Header