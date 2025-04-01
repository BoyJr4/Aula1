import React from "react";

const ConsentCheckbox = () => {
  return (
    <div className="my-8">
      <label className="flex items-center cursor-pointer">
        <input type="checkbox" className="mr-2 cursor-pointer" />I consent to
        being contacted by the team
      </label>
    </div>
  );
};

export default ConsentCheckbox;
