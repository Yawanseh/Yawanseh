// Animated liquid "water in space" orb — SVG metaballs merged with a gooey
// filter and rippled by animated turbulence displacement. Pure SVG/SMIL, so it
// works in the static export with no runtime JS or heavy WebGL dependency.
const LiquidOrb: React.FC = () => {
  return (
    <div className="liquid-orb" aria-hidden="true">
      <svg viewBox="0 0 220 220" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="lo-grad" cx="40%" cy="33%" r="74%">
            <stop offset="0%" stopColor="#aed5ff" />
            <stop offset="30%" stopColor="#4f8fd6" />
            <stop offset="62%" stopColor="#245685" />
            <stop offset="100%" stopColor="#0c2a4a" />
          </radialGradient>
          <radialGradient id="lo-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3f8fe0" stopOpacity="0.5" />
            <stop offset="65%" stopColor="#1c4f86" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#0d2c4c" stopOpacity="0" />
          </radialGradient>

          <filter id="lo-goo" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="b" />
            <feColorMatrix
              in="b"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -11"
            />
          </filter>

          <filter id="lo-liquid" x="-35%" y="-35%" width="170%" height="170%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.013"
              numOctaves="2"
              seed="4"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="22s"
                values="0.013;0.021;0.010;0.013"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="22"
              xChannelSelector="R"
              yChannelSelector="G"
            >
              <animate
                attributeName="scale"
                dur="12s"
                values="22;32;16;22"
                repeatCount="indefinite"
              />
            </feDisplacementMap>
          </filter>

          <filter id="lo-soft">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        {/* outer luminous halo */}
        <circle cx="110" cy="106" r="104" fill="url(#lo-glow)" />

        {/* rippling liquid metaball body */}
        <g filter="url(#lo-liquid)">
          <g filter="url(#lo-goo)" fill="url(#lo-grad)">
            <circle cx="110" cy="106" r="66">
              <animate
                attributeName="cx"
                dur="13s"
                values="110;122;98;110"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                dur="17s"
                values="106;95;117;106"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="78" cy="92" r="40">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="14s"
                values="0 0; 17 -12; -10 12; 0 0"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="142" cy="120" r="40">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="16s"
                values="0 0; -17 10; 12 -10; 0 0"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="112" cy="80" r="28">
              <animate
                attributeName="r"
                dur="9s"
                values="28;38;24;28"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="11s"
                values="0 0; -10 -8; 8 10; 0 0"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>

        {/* glossy specular highlight for a wet look */}
        <ellipse
          cx="88"
          cy="80"
          rx="21"
          ry="13"
          fill="#eaf5ff"
          opacity="0.45"
          filter="url(#lo-soft)"
        />
        <ellipse cx="84" cy="76" rx="6.5" ry="4.5" fill="#ffffff" opacity="0.85" />
      </svg>
    </div>
  );
};

export default LiquidOrb;
