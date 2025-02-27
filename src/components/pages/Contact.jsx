import { useState } from 'react';
import { MapComponent } from './Map';
export function Contact() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [formInputs, setFormInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  function userLogin(event) {
    event.preventDefault();
    console.log(formInputs);
  }
  return (
    <>
      <section>
        <div className="container m-auto p-16">
          <div className="col_1 text-center">
            <h2 className=" text-[#212529] text-4xl font-bold my-4 ">Contact Us</h2>
            <p className=" text-[#212529] text-2xl">
              Lorem ipsum, dolor sit amet consectetur
              <br /> adipisicing elit.
            </p>
          </div>
          <div className="col_2 flex gap-12 justify-center items-center flex-wrap py-14">
            <div className="login flex-1">
              <form onSubmit={userLogin}>
                <label htmlFor="name" className=" block text-xl py-2 ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  autoFocus
                  required
                  className=" block outline-none border-solid border-2 border-gray-300 rounded-md p-1 min-w-full "
                  onChange={(e) => setFormInputs({ ...formInputs, name: e.target.value })}
                />
                <label htmlFor="email" className=" block text-xl py-2 ">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className=" block outline-none border-solid border-2 border-gray-300 rounded-md p-1 min-w-full"
                  onChange={(e) => setFormInputs({ ...formInputs, email: e.target.value })}
                />
                <label htmlFor="message" className=" block text-xl py-2 ">
                  Message
                </label>
                <textarea
                  id="message"
                  className=" block resize-none outline-none border-solid border-2 border-gray-300 rounded-md min-w-full h-20"
                  onChange={(e) => setFormInputs({ ...formInputs, message: e.target.value })}
                ></textarea>
                <input type="submit" className=" block cursor-pointer hover:bg-[#212529] duration-200 bg-[#5a6671] text-white py-3 px-10 mx-auto mt-7 min-w-full rounded-md" />
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
