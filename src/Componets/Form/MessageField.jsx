import React from "react";

const MessageField = ({ setMessage }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">Message</label>
      <textarea
        className="w-full h-[100px] rounded-md border border-[#9CA3AF] p-5 mt-1 leading-[22px] text-base hover:border-[#0A8270] focus:outline-none focus:border-[#0A8270]"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
    </div>
  );
};

export default MessageField;
