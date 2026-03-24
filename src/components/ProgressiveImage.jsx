import { useState, useRef, useEffect } from "react";

const ProgressiveImage = ({ src, placeholder, alt, style, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // If the image is cached by the browser, it might complete before the onLoad event listener is attached.
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [src]);

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
        ref={imgRef}
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