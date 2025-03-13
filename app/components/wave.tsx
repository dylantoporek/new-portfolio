import { useEffect, useState } from "react";

const Wave = () => {
  const wavePaths = [
    "M0,256L48,213.3C96,171,192,85,288,85.3C384,85,480,171,576,197.3C672,224,768,192,864,181.3C960,171,1056,181,1152,202.7C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,240L48,215C96,190,192,110,288,130C384,150,480,180,576,170C672,160,768,140,864,130C960,120,1056,140,1152,160C1248,180,1344,210,1392,230L1440,250L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,260L48,230C96,200,192,150,288,170C384,190,480,230,576,220C672,210,768,180,864,170C960,160,1056,170,1152,190C1248,210,1344,240,1392,250L1440,260L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ];

  // Mirroring the paths (reversing the direction of the wave)
  const mirrorWave = (path: any) => {
    //@ts-ignore
    const mirroredPath = path.replace(/M(\d+),(\d+)/g, (_, x, y) => `M${1440 - x},${y}`);
    return mirroredPath;
  };

  const generateRandomWavePath = () => {
    const randomIndex = Math.floor(Math.random() * wavePaths.length); // Random index
    const randomPath = wavePaths[randomIndex];
    const isMirrored = Math.random() > 0.5; // Randomly decide whether to mirror or not
    return isMirrored ? mirrorWave(randomPath) : randomPath;
  };

  const [wavePath, setWavePath] = useState(generateRandomWavePath);

  useEffect(() => {
    const interval = setInterval(() => {
      setWavePath(generateRandomWavePath()); // Update wave path every 3 seconds
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 216" className="wave">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#AAB2C6", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#0D1B2A", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path fill="url(#waveGradient)" fillOpacity="1" d={wavePath}></path>
      </svg>

      <style jsx>{`
        .wave {
          width: 100%;
          height: auto;
          animation: waveMove 15s infinite linear;
        }

        @keyframes waveMove {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(15px); /* Slight move to the right */
          }
          50% {
            transform: translateX(30px); /* Further move right */
          }
          75% {
            transform: translateX(15px); /* Move back to left */
          }
          100% {
            transform: translateX(0); /* Reset */
          }
        }

        path {
          transition: d 1s ease-in-out; /* Smooth path change */
        }
      `}</style>
    </>
  );
};

export default Wave;
