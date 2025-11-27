import React from "react";

const Loader = () => {
  return (
    <div className="h-full w-full flex items-center justify-center relative z-50">
      <div className="loader size-7 relative">
        <div className="size-2.5 rounded-full bg-violet-700 absolute top-0 left-1/2 -translate-x-1/2"></div>
        <div className="size-2.5 rounded-full bg-violet-700 absolute bottom-0 left-0"></div>
        <div className="size-2.5 rounded-full bg-violet-700 absolute bottom-0 right-0"></div>
      </div>
    </div>
  );
};

export default Loader;
