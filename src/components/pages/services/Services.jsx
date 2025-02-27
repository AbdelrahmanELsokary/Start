import { Button } from '../Button';
export function Services() {
  return (
    <>
      <section>
        <div className="container text-center pt-14 mx-auto ">
          <div className="col_1">
            <span className=" text-[#74c69d] text-[19px] font-bold">PLANS</span>
            <h2 className=" text-[#212529] text-4xl font-bold my-4 ">Our Services</h2>
            <p className=" text-[#212529] text-2xl">
              Lorem ipsum, dolor sit amet consectetur
              <br /> adipisicing elit.
            </p>
          </div>
          <div className="col_2 flex justify-center flex-wrap gap-8 pt-10">
            <div className="basic w-80 rounded-md shadow-lg shadow-[#6060606f] p-5 py-12">
              <span className=" inline-block pb-2">Basic</span>
              <br />
              <span className="text-5xl font-extrabold pt-7 text-slate-950 ">$100</span>
              <span className=" font-semibold text-slate-600">/month</span>
              <p className="text-slate-600 pt-4">
                Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Suscipit <br /> nemo hic quos, ab, dolor aperiam
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold pt-8 ">
                <img src=" /assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold p-2 ">
                <img src=" /assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold ">
                <img src=" /assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold pt-2 ">
                <img src=" /assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold pt-2 ">
                <img src=" /assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <Button style="bg-[#333] block  bg-[#212529] text-white py-2 px-10 mx-auto mt-7 " Class="Learn More" />
            </div>
            <div className="plus w-80 rounded-md shadow-lg shadow-[#6060606f] p-5 py-12">
              <span className=" inline-block pb-2">Plus</span>
              <br />
              <span className="text-5xl font-extrabold pt-7 text-slate-950 ">$250</span>
              <span className=" font-semibold text-slate-600">/month</span>
              <p className="text-slate-600 pt-4">
                Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Suscipit <br /> nemo hic quos, ab, dolor aperiam
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold pt-8 ">
                <img src="/assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold p-2 ">
                <img src="/assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold ">
                <img src="/assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold pt-2 ">
                <img src="/assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold pt-2 ">
                <img src="/assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <Button style="bg-[#333] block  bg-[#212529] text-white py-2 px-10 mx-auto mt-7 " Class="Learn More" />
            </div>
            <div className="pro w-80 rounded-md shadow-lg shadow-[#6060606f] p-5 py-12">
              <span className=" inline-block pb-2">Pro</span>
              <br />
              <span className="text-5xl font-extrabold pt-7 text-slate-950 ">$400</span>
              <span className=" font-semibold text-slate-600">/month</span>
              <p className="text-slate-600 pt-4">
                Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Suscipit <br /> nemo hic quos, ab, dolor aperiam
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold pt-8 ">
                <img src=" /assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold p-2 ">
                <img src=" /assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold ">
                <img src=" /assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold pt-2 ">
                <img src=" /assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <p className=" flex items-center justify-center gap-2 text-xl font-semibold pt-2 ">
                <img src=" /assets/icons/true.webp" alt="true icon" />
                lorem ipsum, dolor sit
              </p>
              <Button style="bg-[#333] block  bg-[#212529] text-white py-2 px-10 mx-auto mt-7 " Class="Learn More" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
