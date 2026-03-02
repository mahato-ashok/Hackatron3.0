import React from "react";
import "./Hackatron2.css";
import SectionLayout from "./SectionLayout";
import { glimpseConfig } from "../../../config/glimpse";

const ImageCard = ({ src1, src2, src3, className, content, content2 }) => {
  const numbers = content.match(/\d+/g);
  const text = content.replace(numbers, "");

  const numbers2 = content2.match(/\d+/g);
  const text2 = content2.replace(numbers2, "");

  return (
    <div className="image-card" style={{ flexFlow: className }}>
      <div
        className="left-container"
        style={{ flexFlow: className ? "column-reverse" : "" }}
      >
        <div className="image-container">
          <img src={src1} height="2700" width="570" alt="event" loading="lazy" decoding="async" />
          <div className="content">
            <h2>{numbers[0]}+</h2>
            <p>{text}</p>
          </div>
        </div>

        <div className="image-container">
          <div className="content">
            <h2>{numbers2[0]}+</h2>
            <p>{text2}</p>
          </div>
          <img src={src3} height="370" width="570" alt="event" loading="lazy" decoding="async" />
        </div>
      </div>

      <div className="right-container">
        <img src={src2} height="600" width="262" alt="event" loading="lazy" decoding="async" />
      </div>
    </div>
  );
};

const Glimpse = () => {
  return (
    <SectionLayout
      Title={
        <span className="text-[#9E9E9E]">

          $ man <span className="text-white">Previous</span> <span className="text-[#ff0000]">Events</span>

        </span>
      }
      id="Glimpse"
    >
      <div className="glimpse-container">
        {glimpseConfig.map((item) => (
          <ImageCard
            key={item.id}
            src1={item.src1}
            src2={item.src2}
            src3={item.src3}
            content={item.content}
            content2={item.content2}
            className={item.className}
          />
        ))}

        <div className="bottom-container">
          <img
            src="/images/glimpse/pic7.webp"
            width="500"
            height="150"
            alt="event"
            loading="lazy"
            decoding="async"
          />

          <div className="content">
            <h2>50+</h2>
            <p>SUCCESSFUL EVENTS</p>
          </div>

          <img
            src="/images/glimpse/pic12.webp"
            width="450"
            height="300"
            alt="event"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Glimpse;