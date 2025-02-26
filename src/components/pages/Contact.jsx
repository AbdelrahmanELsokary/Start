import { Button } from './Button';
import { MapComponent } from './Map';
export function Contact() {
  return (
    <>
      <section>
        <div className="container mx-auto p-10">
          <div className="col_1 text-center">
            <h2 className=" text-[#212529] text-4xl font-bold my-4 ">Contact Us</h2>
            <p className=" text-[#212529] text-2xl">
              Lorem ipsum, dolor sit amet consectetur
              <br /> adipisicing elit.
            </p>
          </div>
          <div className="col_2 flex gap-12 justify-center items-center flex-wrap py-14">
            <div className="login flex-1">
              <form>
                <label htmlFor="name" className=" block text-xl py-2 ">
                  Name
                </label>
                <input type="text" id="name" autoFocus required className=" block outline-none border-solid border-2 border-gray-300 rounded-md p-1 min-w-full " />
                <label htmlFor="email" className=" block text-xl py-2 ">
                  Email
                </label>
                <input type="email" id="email" required className=" block outline-none border-solid border-2 border-gray-300 rounded-md p-1 min-w-full" />
                <label htmlFor="message" className=" block text-xl py-2 ">
                  Message
                </label>
                <textarea id="message" className=" block resize-none outline-none border-solid border-2 border-gray-300 rounded-md min-w-full h-20"></textarea>
                <Button type="submit" style="bg-[#333] block  bg-[#212529] text-white py-3 px-10 mx-auto mt-7 min-w-full " Class="Submit" />
              </form>
            </div>
            <div className="map min-w-[50%]">
              <MapComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
