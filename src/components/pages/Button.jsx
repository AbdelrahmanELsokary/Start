/* eslint-disable react/prop-types */

export function Button({ Class, style }) {
  return (
    <>
      <button type="button" className={` block bg-[#333] py-[7px] px-10 rounded-md mt-5 ${style}`}>
        {Class}
      </button>
    </>
  );
}
