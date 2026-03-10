import React, { useMemo, useEffect, useState } from 'react';
import './FallingLeaves.css';
import leaf1 from '../assets/images/leaf1.webp';
import leaf2 from '../assets/images/leaf2.webp';

const FallingLeaves = ({ count = 12 }) => {
  // Defer leaf rendering until after initial page paint to avoid competing with LCP
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const leaves = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      image: Math.random() > 0.5 ? leaf1 : leaf2,
      left: Math.random() * 100,
      delay: Math.random() * -20,
      duration: 30 + Math.random() * 40,
      size: 12 + Math.random() * 30,
      drift: (Math.random() - 0.5) * 150,
      rotation: Math.random() * 360,
      opacity: 0.5 + Math.random() * 0.4,
    }));
  }, [count]);

  if (!ready) return null;

  return (
    <div className="leaf-container">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="pixel-leaf"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            opacity: leaf.opacity,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            backgroundImage: `url(${leaf.image})`,
            '--drift': `${leaf.drift}px`,
            '--rot': `${leaf.rotation}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingLeaves;
