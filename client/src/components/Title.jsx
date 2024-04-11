import React from "react";

const Title = (props) => {
  return (
    <div className="flex justify-center items-center text-center flex-col padding-x py-8">
      <h1 className="text-4xl dark:text-cyber-blue text-slate-blue font-poppins font-bold mb-5 max-sm:pt-10">
        {props.title}
      </h1>
      <p className="text-base dark:text-white-primary text-black-text font-poppins font-medium lg:w-3/5">
        {props.description}
      </p>
    </div>
  );
};

export default Title;
