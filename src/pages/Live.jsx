import React from "react";
import DetailsCard from "../components/DetailsCard";
import LivePreview from "../components/LivePreview";

const Live = () => {
  return (
    <div className="  p-6 flex flex-col items-center space-y-8">
      <DetailsCard />
      <LivePreview />
    </div>
  );
};

export default Live;
