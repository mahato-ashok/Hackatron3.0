import { useState, useRef, useEffect, useCallback } from "react";

const ProgressiveImage = ({ src, placeholder, alt, style, ...props }) => {
  const [displaySrc, setDisplaySrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const imgLoaderRef = useRef(null);

  const loadFullImage = useCallback(() => {
    if (imgLoaderRef.current) return; // already loading

    const img = new Image();
    imgLoaderRef.current = img;

    img.onload = () => {
      setDisplaySrc(src);
      setIsLoaded(true);
    };

    img.onerror = () => {
      // On error, still show full src (browser will show broken image)
      setDisplaySrc(src);
      setIsLoaded(true);
    };

    // Set src AFTER registering callbacks to avoid race condition
    img.src = src;
  }, [src]);

  useEffect(() => {
    // Reset state when src changes
    setDisplaySrc(placeholder);
    setIsLoaded(false);
    imgLoaderRef.current = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadFullImage();
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" } // start loading 400px before entering viewport
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      observer.disconnect();
      if (imgLoaderRef.current) {
        imgLoaderRef.current.onload = null;
        imgLoaderRef.current.onerror = null;
      }
    };
  }, [src, placeholder, loadFullImage]);

  return (
    <img
      ref={containerRef}
      src={displaySrc}
      alt={alt}
      {...props}
      style={{
        ...style,
        filter: isLoaded ? "none" : "blur(10px)",
        transform: isLoaded ? "scale(1)" : "scale(1.03)",
        transition: "filter 0.5s ease-out, transform 0.5s ease-out",
      }}
    />
  );
};

export default ProgressiveImage;