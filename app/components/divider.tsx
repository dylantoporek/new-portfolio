"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LavaLamp = () => {
  const svgRef = useRef(null);
  const blobsRef = useRef([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      blobsRef.current.forEach((blob, i) => {
        gsap.to(blob, {
          duration: 5 + Math.random() * 3, // Smooth flowing time
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          scale: 1.2 + Math.random() * 0.5, // Slight size variation
          x: "+=" + (Math.random() * 100 - 50), // Spread left & right
          y: "-=100", // Move upward
        });
      });
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 600 600" // Widened the view
      width="100%"
      height="300px"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gooey filter effect */}
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  
                    0 1 0 0 0  
                    0 0 1 0 0  
                    0 0 0 20 -10"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>

      {/* Animated Blobs */}
      <g filter="url(#goo)">
        {[...Array(7)].map((_, i) => (
          <circle
            key={i}
            //@ts-ignore
            ref={(el) => (blobsRef.current[i] = el)}
            cx={Math.random() * 500 + 50} // Spread blobs widely
            cy={Math.random() * 250 + 50} // Start within view
            r={Math.random() * 40 + 20} // Size variation
            fill="url(#lavaGradient)"
          />
        ))}
      </g>

      {/* Lava Gradient */}
      <defs>
        <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff5f6d" />
          <stop offset="100%" stopColor="#ffc371" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LavaLamp;
