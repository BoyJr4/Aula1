import React from "react";

const SubmitButton = () => {
  return (
    <div className="mt-8">
      <input
        type="submit"
        value={"Submit"}
        className="w-full h-[45px] rounded-md border-none bg-[#0A8270] text-white cursor-pointer hover:bg-[#0A8270]/90 transition-colors"
      />
    </div>
  );
};

export default SubmitButton;
