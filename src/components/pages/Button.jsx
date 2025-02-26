/* eslint-disable react/prop-types */

export function Button({ className, style }) {
  return (
    <>
      <button type="button" className={` block bg-white py-[5px] px-10 rounded-md mt-5 ${style}`}>
        {className}
      </button>
    </>
  );
}
