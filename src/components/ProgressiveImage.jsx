import { useState, useRef, useEffect } from "react";

const ProgressiveImage = ({ src, placeholder, alt, style, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Reset loaded state when src changes
    setLoaded(false);

    const img = new Image();
    img.src = src;

    // Fast path: image is fully cached and decoded
    if (img.complete && img.naturalHeight > 0) {
      setLoaded(true);
      return;
    }

    // Standard path: fetch image once the placeholder starts coming into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          img.onload = () => setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // Load well before the image is fully in the viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
      img.onload = null;
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
      style={{
        ...style,
        filter: loaded ? "none" : "blur(12px)",
        transform: loaded ? "none" : "scale(1.05)",
        transition: "filter 0.5s ease-out, transform 0.5s ease-out"
      }}
    />
  );
};

export default ProgressiveImage;