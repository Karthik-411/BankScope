import Rightcard from "./Rightcard";
import { useGSAP } from "@gsap/react";

const Rightcontent = (props) => {
  return (
    <div
      id="right"
      className="flex gap-20  h-full  overflow-x-auto lg:w-3/4 lg:p-7 "
    >
      {props.user.map((elem, idx) => {
        return (
          <Rightcard
            key={idx}
            id={idx}
            img={elem.img}
            tag={elem.tag}
            content={elem.content}
          />
        );
      })}
    </div>
  );
};

export default Rightcontent;
