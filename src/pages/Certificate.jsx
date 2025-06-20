import React, { useState } from "react";

const Certificate = () => {
  const [regNo, setRegNo] = useState();
  const handleCheckCertificate = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-120">
      <h2 className="text-center text-xl md:text-3xl font-semibold mt-4">
        Check your Certificate
      </h2>
      <form onSubmit={handleCheckCertificate} className="mt-15 ">
        <div className="flex flex-col gap-4 justify-center items-center">
          <label htmlFor="registration" className="text-xl font-semibold"> Registration Number </label>
          <input
            type="text"
            name="registration"
            onChange={(e) => setRegNo(e.target.value)}
            className="outline-amber-500 border-black border-2 rounded-md w-full md:w-1/2 py-2 px-4 text-center font-semibold text-xl"
            placeholder="Enter your Registration Number"
          />
        </div>
        <div className="flex justify-center items-center mt-10">
            <button type="submit" className="bg-amber-500 text-white py-2 px-4 rounded-xl font-semibold md:w-1/6 cursor-pointer active:scale-105 transition-all hover:bg-amber-600 text-xl">View Certificate</button>
        </div>
      </form>
    </div>
  );
};

export default Certificate;
