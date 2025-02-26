import { Button } from '../Button';
export function Team() {
  return (
    <>
      <section>
        <div className="container text-center p-5 pt-20">
          <div className="row_1">
            <span className=" text-[#74c69d] text-[19px] font-bold">PARTNERS</span>
            <h2 className=" text-[#212529] text-2xl font-bold my-4 ">Lorem Ipsum Dolor</h2>
            <p className="text-[#212529] leading-8	text-xl ">
              Lorem ipsum dolor sit amet consectetur
              <br />
              adipisicing elit.
            </p>
          </div>
          <div className="row_2 flex justify-center gap-10 flex-wrap pt-7">
            <div className="name_of_team rounded-md shadow-lg shadow-[#6060606f] p-5 w-60 ">
              <img src="/assets/images/person-1.webp" alt="person-1" className="mx-auto" />
              <h3 className="text-[#212529] font-bold text-2xl">Peg Legge</h3>
              <span className=" font-semibold">CEO</span>
            </div>
            <div className="name_of_team rounded-md shadow-lg shadow-[#6060606f] p-5 w-60 ">
              <img src="/assets/images/person-2.webp" alt="person-1" className="mx-auto" />
              <h3 className="text-[#212529] font-bold text-2xl">Richard Guerra</h3>
              <span className=" font-semibold">CTO</span>
            </div>
            <div className="name_of_team rounded-md shadow-lg shadow-[#6060606f] p-5 w-60 ">
              <img src="/assets/images/person-3.webp" alt="person-1" className="mx-auto" />
              <h3 className="text-[#212529] font-bold text-2xl">Alexandra Stolz</h3>
              <span className=" font-semibold">DESIGNER</span>
            </div>
            <div className="name_of_team rounded-md shadow-lg shadow-[#6060606f] p-5 w-60 ">
              <img src="/assets/images/person-4.webp" alt="person-1" className="mx-auto" />
              <h3 className="text-[#212529] font-bold text-2xl">Janet Bray</h3>
              <span className=" font-semibold">DEVELOPER</span>
            </div>
          </div>
        </div>
      </section>
      <Button style="block bg-[#212529] text-white py-2 px-10 mx-auto" Class="View Team" />
    </>
  );
}
