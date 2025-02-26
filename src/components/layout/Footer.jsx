import { Link } from 'react-router';
export function Footer() {
  return (
    <>
      <footer className=" bg-[#74c69d] py-6 mt-14">
        <div className="container flex flex-wrap items-center justify-around gap-10 px-5">
          <ul className="flex flex-wrap justify-center gap-5">
            <li>
              <Link>
                <img src="/public/assets/icons/facebook.webp" alt="facebook" />
              </Link>
            </li>
            <li>
              <Link>
                <img src="/public/assets/icons/instagram.webp" alt="instagram" />
              </Link>
            </li>
            <li>
              <Link>
                <img src="/public/assets/icons/twitter.webp" alt="twitter" />
              </Link>
            </li>
            <li>
              <Link>
                <img src="/public/assets/icons/pinterest.webp" alt="pinterest" />
              </Link>
            </li>
            <li>
              <Link>
                <img src="/public/assets/icons/tiktok.webp" alt="tiktok" />
              </Link>
            </li>
            <li>
              <Link>
                <img src="/public/assets/icons/whatsapp.webp" alt="whatsapp" />
              </Link>
            </li>
            <li>
              <Link>
                <img src="/public/assets/icons/youtube.webp" alt="youtube" />
              </Link>
            </li>
          </ul>
          <div className="copyrights">
            <p className=" text-white">© Start, 2022. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
