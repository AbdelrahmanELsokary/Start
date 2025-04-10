import { Button } from '../Button';

export function Partners() {
  return (
    <>
      <section>
        <div className="container text-center p-5 pt-11">
          <span className=" text-[#74c69d] text-[19px] font-bold">PARTNERS</span>
          <h2 className=" text-[#212529] text-2xl font-bold my-4 ">Lorem Ipsum Dolor</h2>
          <p className="text-[#212529] leading-8	text-xl ">
            Lorem ipsum dolor sit amet consectetur
            <br />
            adipisicing elit.
          </p>
          <div className="images flex gap-14 justify-center items-center flex-wrap my-10 ">
            <img src="/assets/images/google.webp" alt="google image" />
            <img src="/assets/images/microsoft.webp" alt="microsoft image" />
            <img src="/assets/images/airbnb.webp" alt="airbnb image" />
            <img src="/assets/images/facebook.webp" alt="facebook image" />
            <img src="/assets/images/spotify.webp" alt="spotify image" />
          </div>
          <Button style="block mx-auto bg-[#212529] text-white py-2 px-10" Class="Learn More" />
        </div>
      </section>
    </>
  );
}
