export function Hero() {
  return (
    <>
      <section className="bg-[#74c69d]">
        <div className="container flex items-center justify-center flex-wrap h-[90vh] pt-4 px-12 m-auto">
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
            <button className="block bg-white py-[5px] px-10 rounded-md mt-5">Explore</button>
          </div>
          <div className="col_2">
            <img src="/public/assets/images/hero.webp" alt="hero image" />
          </div>
        </div>
      </section>
    </>
  );
}
