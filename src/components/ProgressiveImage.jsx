import { useState } from "react";

const ProgressiveImage = ({ src, placeholder, alt, style, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <img
          src={placeholder}
          alt={alt}
          {...props}
          style={{
            ...style,
            filter: "blur(12px)",
            transform: "scale(1.05)"
          }}
        />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        {...props}
        onLoad={() => setLoaded(true)}
        style={{
          ...style,
          display: loaded ? "block" : "none"
        }}
      />
    </>
  );
};

export default ProgressiveImage;