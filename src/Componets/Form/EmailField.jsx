import React from "react";

const EmailField = ({ setEmail }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">Email</label>
      <input
        type="email"
        className="w-full h-[35px] rounded-md border border-[#9CA3AF] px-5 cursor-pointer text-base mt-1 hover:border-[#0A8270] focus:outline-none focus:border-[#0A8270]"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default EmailField;
