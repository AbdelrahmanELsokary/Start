import { Button } from './Button';

export function Portfolio() {
  return (
    <>
      <section>
        <div className="container text-center pt-14 m-auto">
          <span className=" text-[#74c69d] text-[19px] font-bold">WORK</span>
          <h2 className=" text-[#212529] text-4xl font-bold my-4 ">Portfolio</h2>
          <p className=" text-[#212529] text-2xl">
            Lorem ipsum, dolor sit amet consectetur
            <br /> adipisicing elit.
          </p>
          <div className="images flex flex-wrap justify-center gap-6 p-9">
            <img src="/assets/images/work-1.webp" alt="work-1" />
            <img src="/assets/images/work-2.webp" alt="work-2" />
            <img src="/assets/images/work-3.webp" alt="work-3" />
            <img src="/assets/images/work-4.webp" alt="work-4" />
            <img src="/assets/images/work-5.webp" alt="work-5" />
            <img src="/assets/images/work-6.webp" alt="work-6" />
            <img src="/assets/images/work-7.webp" alt="work-7" />
            <img src="/assets/images/work-8.webp" alt="work-8" />
          </div>
          <Button style="bg-[#333] block  bg-[#212529] text-white py-2 px-10 mx-auto " Class="Learn More" />
        </div>
      </section>
    </>
  );
}
