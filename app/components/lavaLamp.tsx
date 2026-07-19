'use client'
import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface Blob {
    cx: number;
    cy: number;
    r: number;
    rise: number;
    drift: number;
    duration: number;
    delay: number;
}

// Fixed values (no Math.random) so the server and client render the same frame.
// Some blobs share nearby x positions with offset phases so they pass through
// each other mid-air and merge via the goo filter.
const blobs: Blob[] = [
    { cx: 180, cy: 255, r: 42, rise: 150, drift: 25, duration: 12, delay: 0 },
    { cx: 250, cy: 260, r: 24, rise: 130, drift: -20, duration: 9, delay: 4 },
    { cx: 470, cy: 258, r: 30, rise: 120, drift: 25, duration: 10, delay: 2 },
    { cx: 620, cy: 252, r: 50, rise: 165, drift: 30, duration: 14, delay: 1 },
    { cx: 680, cy: 262, r: 22, rise: 145, drift: -25, duration: 9.5, delay: 5.5 },
    { cx: 900, cy: 250, r: 46, rise: 155, drift: -28, duration: 13, delay: 0.5 },
    { cx: 965, cy: 260, r: 26, rise: 135, drift: 20, duration: 8.5, delay: 3 },
    { cx: 1150, cy: 258, r: 32, rise: 125, drift: 22, duration: 10, delay: 6 },
    { cx: 1300, cy: 252, r: 40, rise: 145, drift: -24, duration: 11, delay: 1.5 },
]

const LavaLamp = () => {
    // Unique per instance: the component renders more than once per page,
    // and SVG ids are looked up document-wide
    const id = useId()
    const gradientId = `lava-gradient-${id}`
    const gooId = `lava-goo-${id}`
    // MotionConfig's reducedMotion setting doesn't cover SVG attribute
    // animations (cx/cy/r), so this component checks the preference itself
    const reduceMotion = useReducedMotion()

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 280"
            width="100%"
            style={{ display: 'block' }}
        >
            <defs>
                <linearGradient
                    id={gradientId}
                    gradientUnits="userSpaceOnUse"
                    x1="0" y1="40" x2="0" y2="280"
                >
                    <stop offset="0%" stopColor="#AAB2C6" />
                    <stop offset="100%" stopColor="#223349" />
                </linearGradient>

                {/* Gooey filter so blobs merge into each other and the pool */}
                <filter id={gooId} x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 22 -11"
                        result="goo"
                    />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>

            <g filter={`url(#${gooId})`} fill={`url(#${gradientId})`}>
                {/* Molten pool along the bottom that blobs emerge from and sink back into */}
                <path d="M0,246 C180,232 360,254 540,242 C720,230 900,252 1080,240 C1260,230 1380,248 1440,242 L1440,280 L0,280 Z" />

                {blobs.map((blob, i) => (
                    <motion.circle
                        key={i}
                        cx={blob.cx}
                        cy={reduceMotion ? blob.cy - blob.rise * 0.5 : blob.cy}
                        r={blob.r}
                        animate={reduceMotion ? undefined : {
                            cy: [blob.cy, blob.cy - blob.rise, blob.cy],
                            cx: [blob.cx, blob.cx + blob.drift, blob.cx],
                            r: [blob.r, blob.r * 0.85, blob.r],
                        }}
                        transition={{
                            duration: blob.duration,
                            delay: blob.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </g>
        </svg>
    )
}

export default LavaLamp
