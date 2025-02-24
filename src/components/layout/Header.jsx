import { useState } from 'react';
import { Link } from 'react-router';
export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header className=" sticky top-0 bg-[#74c69d] text-white   py-5">
        <div className="container flex justify-between items-center w-[78%] m-auto">
          <div className="logo">
            <Link to="/" className="flex items-center text-4xl">
              <img className=" w-12 mr-2" src="/assets/icons/logo.webp" alt="logo" />
              start
            </Link>
          </div>
          <nav>
            <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
              <img src="/assets/icons/menu.webp" alt="menu icon" />
            </button>
            <ul className={`${openMenu ? 'absolute right-0 top-16 w-[200px] rounded-xl bg-[#74c69d] p-3' : 'hidden'} md:flex gap-9 items-center`}>
              <li>
                <Link className=" text-[18px] font-semibold" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className=" text-[18px] font-semibold" to="/">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className=" text-[18px] font-semibold" to="/">
                  Services
                </Link>
              </li>
              <li>
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
