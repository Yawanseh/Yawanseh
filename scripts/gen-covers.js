// Generates cohesive monochrome geometric placeholder covers (1600x900).
// Text-free (SVG text needs fonts sharp may lack); shapes render reliably.
// Replace with Gemini-generated images later, keeping the same filenames.
const fs = require("fs");
const path = require("path");
const sharp = require("/Users/laithyounes/workspace/Yawanseh/node_modules/.pnpm/sharp@0.32.6/node_modules/sharp");

const OUT = path.join(__dirname, "..", "public", "images", "covers");
fs.mkdirSync(OUT, { recursive: true });

const W = 1600;
const H = 900;
const white = (o) => `#ffffff" stroke-opacity="${o}`;

// Each entry returns the inner SVG motif. Distinct per topic, one cohesive style.
const motifs = {
  rings: () => {
    let s = "";
    for (let i = 1; i <= 7; i++)
      s += `<circle cx="1180" cy="470" r="${i * 95}" fill="none" stroke="#ffffff" stroke-opacity="${0.14 - i * 0.014}" stroke-width="2"/>`;
    return s + `<circle cx="1180" cy="470" r="26" fill="#ffffff" fill-opacity="0.85"/>`;
  },
  diagonals: () => {
    let s = "";
    for (let i = -4; i <= 22; i++)
      s += `<line x1="${i * 90}" y1="0" x2="${i * 90 + 500}" y2="900" stroke="#ffffff" stroke-opacity="0.06" stroke-width="2"/>`;
    return s + `<line x1="820" y1="0" x2="1320" y2="900" stroke="#ffffff" stroke-opacity="0.9" stroke-width="3"/>`;
  },
  dotgrid: () => {
    let s = "";
    for (let x = 0; x < 22; x++)
      for (let y = 0; y < 12; y++) {
        const on = (x + y) % 7 === 0 && x > 12;
        s += `<circle cx="${90 + x * 66}" cy="${70 + y * 66}" r="${on ? 9 : 3.2}" fill="#ffffff" fill-opacity="${on ? 0.9 : 0.09}"/>`;
      }
    return s;
  },
  bigcircle: () => `
    <circle cx="1420" cy="240" r="520" fill="#ffffff" fill-opacity="0.05"/>
    <circle cx="1420" cy="240" r="520" fill="none" stroke="#ffffff" stroke-opacity="0.18" stroke-width="2"/>
    <circle cx="1090" cy="600" r="18" fill="#ffffff" fill-opacity="0.9"/>`,
  arcs: () => {
    let s = "";
    for (let i = 1; i <= 6; i++)
      s += `<path d="M 1600 ${900 - i * 150} A ${i * 150} ${i * 150} 0 0 1 ${1600 - i * 150} 900" fill="none" stroke="#ffffff" stroke-opacity="${0.16 - i * 0.017}" stroke-width="2"/>`;
    return s + `<circle cx="1450" cy="750" r="20" fill="#ffffff" fill-opacity="0.85"/>`;
  },
  venn: () => `
    <circle cx="960" cy="450" r="300" fill="none" stroke="#ffffff" stroke-opacity="0.5" stroke-width="2"/>
    <circle cx="1230" cy="450" r="300" fill="none" stroke="#ffffff" stroke-opacity="0.5" stroke-width="2"/>
    <circle cx="1095" cy="450" r="300" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="2"/>`,
  burst: () => {
    let s = "";
    const cx = 1220, cy = 460;
    for (let i = 0; i < 28; i++) {
      const a = (i / 28) * Math.PI * 2;
      s += `<line x1="${cx}" y1="${cy}" x2="${cx + Math.cos(a) * 620}" y2="${cy + Math.sin(a) * 620}" stroke="#ffffff" stroke-opacity="0.07" stroke-width="2"/>`;
    }
    return s + `<circle cx="${cx}" cy="${cy}" r="16" fill="#ffffff" fill-opacity="0.9"/>`;
  },
  bars: () => {
    let s = "";
    const widths = [560, 380, 700, 300, 620, 460, 520];
    widths.forEach((w, i) => {
      s += `<rect x="90" y="${140 + i * 92}" width="${w}" height="20" rx="10" fill="#ffffff" fill-opacity="${i === 2 ? 0.9 : 0.09}"/>`;
    });
    return s;
  },
  gappedring: () => `
    <circle cx="1140" cy="450" r="330" fill="none" stroke="#ffffff" stroke-opacity="0.16" stroke-width="2" stroke-dasharray="1900 180" transform="rotate(-30 1140 450)"/>
    <circle cx="1140" cy="450" r="230" fill="none" stroke="#ffffff" stroke-opacity="0.1" stroke-width="2"/>
    <circle cx="1470" cy="450" r="18" fill="#ffffff" fill-opacity="0.9"/>`,
  chevrons: () => {
    let s = "";
    for (let i = 0; i < 8; i++)
      s += `<path d="M ${820 + i * 70} 240 L ${1040 + i * 70} 450 L ${820 + i * 70} 660" fill="none" stroke="#ffffff" stroke-opacity="${i === 7 ? 0.85 : 0.1}" stroke-width="${i === 7 ? 4 : 2}"/>`;
    return s;
  },
};

const items = [
  { slug: "what-chatgpt-changes-for-engineering-teams", motif: "rings", cx: "26%", cy: "20%" },
  { slug: "prompt-engineering-is-just-engineering", motif: "bars", cx: "20%", cy: "26%" },
  { slug: "rag-context-beats-a-bigger-model", motif: "venn", cx: "50%", cy: "18%" },
  { slug: "react-server-components-changed-how-i-think", motif: "chevrons", cx: "30%", cy: "22%" },
  { slug: "platform-engineering-end-of-the-ops-ticket", motif: "dotgrid", cx: "24%", cy: "16%" },
  { slug: "six-months-of-ai-pair-programming", motif: "diagonals", cx: "34%", cy: "20%" },
  { slug: "shipping-ai-agents-without-embarrassing-yourself", motif: "burst", cx: "28%", cy: "24%" },
  { slug: "doing-more-with-less-leading-after-layoffs", motif: "arcs", cx: "22%", cy: "18%" },
  { slug: "evals-are-the-new-unit-tests", motif: "gappedring", cx: "30%", cy: "22%" },
  { slug: "mcp-and-the-case-for-boring-standard-tools", motif: "bigcircle", cx: "26%", cy: "20%" },
];

function svg(item) {
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="${item.cx}" cy="${item.cy}" r="100%">
      <stop offset="0%" stop-color="#1e1e22"/>
      <stop offset="55%" stop-color="#0c0c0e"/>
      <stop offset="100%" stop-color="#050506"/>
    </radialGradient>
    <pattern id="dots" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" fill-opacity="0.04"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${motifs[item.motif]()}
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect x="0" y="0" width="${W}" height="${H}" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="2"/>
</svg>`;
}

(async () => {
  for (const item of items) {
    const file = path.join(OUT, `${item.slug}.png`);
    await sharp(Buffer.from(svg(item))).png().toFile(file);
    console.log("wrote", item.slug + ".png", "(" + item.motif + ")");
  }
  console.log("done:", items.length, "covers");
})();
