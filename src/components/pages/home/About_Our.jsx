import { Button } from '../Button';

export function About() {
  return (
    <>
      <section className="row_1">
        <div className="container flex items-center justify-center flex-wrap gap-20 pt-20 px-12 m-auto">
          <div className="col_1">
            <img src="/assets/images/communication.webp" alt="communication image" />
          </div>
          <div className="col_2">
            <h2 className=" text-[#212529] text-2xl font-bold my-4 ">Lorem ipsum dolor sit amet consectetur</h2>
            <p className=" text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error <br /> ipsum, voluptate culpa nesciunt delectus iste?
            </p>
            <Button style=" block bg-[#212529] text-white py-2 px-10 " Class="Learn More" />
          </div>
        </div>
      </section>
      <section className="row_1">
        <div className="container flex items-center justify-center flex-wrap gap-20 pt-20 px-12 m-auto">
          <div className="col_1">
            <h2 className=" text-[#212529] text-2xl font-bold my-4 ">Lorem ipsum dolor sit amet consectetur</h2>
            <p className=" text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error <br /> ipsum, voluptate culpa nesciunt delectus iste?
            </p>
            <Button style="bg-[#333] block  bg-[#212529] text-white py-2 px-10 " Class="Learn More" />
          </div>
          <div className="col_2">
            <img src="/assets/images/man-analyze.webp" alt="communication image" />
          </div>
        </div>
      </section>
    </>
  );
}
