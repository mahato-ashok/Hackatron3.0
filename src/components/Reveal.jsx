import React, { useEffect, useRef, useState } from 'react';
import './Reveal.css';

const Reveal = ({ children, threshold = 0.1, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`section-reveal ${isVisible ? 'visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default Reveal;
