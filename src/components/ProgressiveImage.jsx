import { useState } from "react";

const ProgressiveImage = ({ src, placeholder, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <img
          src={placeholder}
          alt={alt}
          {...props}
          style={{
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
          display: loaded ? "block" : "none"
        }}
      />
    </>
  );
};

export default ProgressiveImage;