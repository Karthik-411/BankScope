import React from "react";
import Leftcontent from "./Leftcontent";
import Rightcontent from "./Rightcontent";

const Content = (props) => {
  return (
    <div className="h-[85vh] py-5 px-9  lg:flex gap-10 ">
      <Leftcontent />
      <Rightcontent user={props.user} />
    </div>
  );
};

export default Content;
