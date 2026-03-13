import React from "react";
import "./Hackatron2.css";
import SectionLayout from "./SectionLayout";
import { glimpseConfig } from "../../../config/glimpse";
import ProgressiveImage from "../ProgressiveImage";


const ImageCard = ({
  src1,
  src2,
  src3,
  src1Blur,
  src2Blur,
  src3Blur,
  className,
  content,
  content2
}) => {

  const numbers = content.match(/\d+/g);
  const text = content.replace(/\d+/g, "");

  const numbers2 = content2.match(/\d+/g);
  const text2 = content2.replace(/\d+/g, "");

  return (
    <div className="image-card" style={{ flexFlow: className }}>
      
      <div
        className="left-container"
        style={{ flexFlow: className ? "column-reverse" : "" }}
      >

        <div className="image-container">
          <ProgressiveImage
            src={src1}
            placeholder={src1Blur}
            width="570"
            height="270"
            alt="event"
          />

          <div className="content">
            <h2>{numbers?.[0]}+</h2>
            <p>{text}</p>
          </div>
        </div>

        <div className="image-container">
          
          <div className="content">
            <h2>{numbers2?.[0]}+</h2>
            <p>{text2}</p>
          </div>

          <ProgressiveImage
            src={src3}
            placeholder={src3Blur}
            width="570"
            height="370"
            alt="event"
          />
        </div>

      </div>

      <div className="right-container">
        <ProgressiveImage
          src={src2}
          placeholder={src2Blur}
          width="262"
          height="600"
          alt="event"
        />
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
  src1Blur={item.src1Blur}
  src2Blur={item.src2Blur}
  src3Blur={item.src3Blur}
  content={item.content}
  content2={item.content2}
  className={item.className}
/>
        ))}

        <div className="bottom-container">
          <ProgressiveImage
          src="/images/glimpse/pic7 (1).webp"
            width="500"
            height="150"
            alt="event"
            placeholder="/images/glimpse/glimpseMini/pic71.webp"/>

          <div className="content">
            <h2>50+</h2>
            <p>SUCCESSFUL EVENTS</p>
          </div>

          <ProgressiveImage
          src="/images/glimpse/pic12 (1).webp"
            width="450"
            height="300"
            alt="event"
            placeholder="/images/glimpse/glimpseMini/pic121.webp"/>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Glimpse;