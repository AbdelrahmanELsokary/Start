import { useState } from 'react';
import { Link } from 'react-router';
export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header className=" sticky top-0 bg-[#74c69d] text-white py-5">
        <div className="container flex justify-between items-center w-[80%] mx-auto">
          <div className="logo">
            <Link to="/App" className="flex items-center text-4xl">
              <img className=" w-12 mr-2" src="/assets/icons/logo.webp" alt="logo" />
              start
            </Link>
          </div>
          <nav>
            <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
              <img src="/assets/icons/menu.webp" alt="menu icon" />
            </button>
            <ul className={`${openMenu ? 'absolute right-0 top-16 w-[200px] rounded-xl bg-[#498a6a] p-4' : 'hidden'} md:flex gap-9 items-center`}>
              <li className=" md:border-none border-solid border-b py-2">
                <Link className=" text-[18px] font-semibold" to="/App">
                  Home
                </Link>
              </li>
              <li className=" md:border-none border-solid border-b py-2">
                <Link className=" text-[18px] font-semibold" to="/Portfolio">
                  Portfolio
                </Link>
              </li>
              <li className=" md:border-none border-solid border-b py-2">
                <Link className=" text-[18px] font-semibold" to="/">
                  Services
                </Link>
              </li>
              <li className="py-2">
                <Link className=" text-[18px] font-semibold" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
