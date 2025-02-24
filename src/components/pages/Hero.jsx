import { Button } from './Button';

export function Hero() {
  return (
    <>
      <section className="bg-[#74c69d] h-[89vh] ">
        <div className="container flex justify-center items-center gap-14 pt-24">
          <div className="col_1">
            <span className="text-white font-mono font-semibold ">WELCOME</span>
            <h1 className="text-white font-bold text-4xl pt-2">
              Lorem ipsum dolor sit <br /> amet consectetur
            </h1>
            <p className="text-white pt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Placeat, voluptatibus. ipsum dolor, sit amet consectetur <br /> adipisicing elit. Odio harum rem dolor quos impedit ea.
              Lorem ipsum <br />
              dolor sit amet consectetur, adipisicing elit. Dolorem, optio?
            </p>
            <Button />
          </div>
          <div className="col_2">
            <img src="/public/assets/images/hero.webp" alt="hero image" />
          </div>
        </div>
      </section>
    </>
  );
}
