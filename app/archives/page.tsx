/* eslint-disable @next/next/no-img-element */
// Archives page, pixel-perfect translation of Figma node 5311:9966.

const a = {
  meera: "/archives/meera.png",
  nature1: "/archives/nature-1.png",
  nature2: "/archives/nature-2.png",
  nature3: "/archives/nature-3.png",
  nature4: "/archives/nature-4.png",
  nature5: "/archives/nature-5.png",
  nature6: "/archives/nature-6.png",
  nature7: "/archives/nature-7.png",
  perspective1: "/archives/perspective-1.png",
  perspective2: "/archives/perspective-2.png",
  stilllife1: "/archives/stilllife-1.png",
  stilllife2: "/archives/stilllife-2.png",
  textile: "/archives/textile.png",
  casperIllustration: "/archives/casper-illustration.png",
  casperBottom: "/archives/casper-bottom.png",
};

const fontDM = "font-[family-name:var(--font-dm-sans)]";
const fontSerif = "font-[family-name:var(--font-instrument-serif)]";

import { MobileArchives } from "../components/mobile/MobileArchives";

export default function Archives() {
  return (
    <>
      {/* Mobile (≤640px) */}
      <div className="block sm:hidden">
        <MobileArchives />
      </div>

      {/* Desktop (>640px) */}
      <div className="hidden sm:block">
        <div className="page-shell min-h-screen bg-[#0a0a0a]">
          <div className="canvas-1440 relative w-[1440px] min-h-[5920px] bg-[#0a0a0a] overflow-hidden">
            {/* HERO */}
            <div
              className={`absolute flex flex-col gap-[17px] items-center text-center w-[688px] ${fontDM} font-normal`}
              style={{ left: 376, top: 151 }}
            >
              <div className="flex flex-col gap-[24px] items-start w-full">
                <p className="leading-normal w-full text-[20px] text-[#a3a3a3]">The Sketchbook</p>
                <p className="text-[42px] text-white w-full leading-normal">
                  No Clients. No Deadlines. Just{" "}
                  <span className={`${fontSerif} italic text-[#dba80e]`}>Paper</span>
                </p>
              </div>
              <p className="leading-[1.5] text-[24px] text-[#d4d4d4] w-full">
                Illustrations, studies, and experiments, the work that happens when there&rsquo;s no brief to follow.
              </p>
            </div>

            {/* SECTION 01, The Meera */}
            <div
              className="absolute flex flex-col gap-[12px] items-start -translate-y-1/2"
              style={{ left: 40, top: 977, width: 760 }}
            >
              <p className={`${fontDM} font-semibold leading-[1.5] text-[#333] text-[42px] whitespace-nowrap`}>01</p>
              <p className={`${fontSerif} italic leading-[1.5] text-[#f5f5f5] text-[42px] w-full`}>The Meera</p>
              <p className={`${fontDM} font-normal text-[24px] text-[#d4d4d4] w-full leading-[1.5]`}>
                A painting of Meera Bai, capturing the devotion and quiet defiance that defined her. Featured at{" "}
                <span className="font-medium italic">Kala Vithika Art Exhibition, Gwalior (2018) </span>
               , my first time seeing my work on a wall.
              </p>
            </div>
            <div className="absolute overflow-hidden" style={{ left: 882, top: 589, width: 518, height: 777 }}>
              <img alt="The Meera" src={a.meera} className="max-w-none" style={{ width: "101.39%", height: "100%", objectFit: "cover", objectPosition: "left top" }} />
            </div>

            {/* SECTION 02, Nature Study (mosaic) */}
            <div className="absolute flex flex-col gap-[42px] items-start" style={{ left: 40, top: 1486, width: 1340 }}>
              <div className="flex flex-col gap-[12px] items-start w-[1273px]">
                <p className={`${fontDM} font-semibold text-[#333] text-[42px] w-full leading-[1.5]`}>02</p>
                <div className="flex flex-col gap-[12px] items-start w-full">
                  <p className={`${fontSerif} italic text-[#f5f5f5] text-[42px] w-full leading-[1.5]`}>Nature Study</p>
                  <p className={`${fontDM} font-normal text-[24px] text-[#d4d4d4] w-full leading-[1.5]`}>
                    These sketches started with a simple intention, to look more carefully at the natural world. Leaves, wingspans, petals in mid-fold. The more closely I drew, the more I noticed. What began as observation became conversation, and what began as practice became a collection of quiet, careful studies drawn entirely by hand.
                  </p>
                </div>
              </div>
              {/* Mosaic grid */}
              <div className="relative" style={{ width: 1340, height: 771 }}>
                <NatureCard left={0} top={1} width={616} height={394} src={a.nature1} rotate={-90} innerW={354} innerH={568} imgStyle={{ height: "109.69%", left: "-0.01%", top: "-0.71%", width: "104.18%" }} />
                <NatureCard left={636} top={1} width={340} height={394} src={a.nature5} flat innerW={292} innerH={349} imgStyle={{ height: "120.17%", left: "-0.03%", top: "-9.36%", width: "100.07%" }} flatTopOffset={-0.5} />
                <NatureCard left={996} top={0} width={344} height={257} src={a.nature6} rotate={90} innerW={217} innerH={296} imgStyle={{ height: "109.98%", left: "-0.06%", top: "0", width: "100.12%" }} />
                <NatureCard left={996} top={277} width={344} height={250} src={a.nature4} rotate={90} innerW={210} innerH={323} imgStyle={{ height: "101.82%", left: "-0.08%", top: "-1.82%", width: "100.16%" }} centerOffset={0.5} />
                <NatureCard left={0} top={419} width={370} height={352} src={a.nature2} flat innerW={322} innerH={312} imgStyle={{ height: "146.49%", left: "-0.05%", top: "-28.32%", width: "100.1%" }} />
                <NatureCard left={390} top={419} width={302} height={352} src={a.nature3} flat innerW={254} innerH={308} imgStyle={{ height: "118.04%", left: "0", top: "-17.99%", width: "100%" }} />
                <NatureCard left={712} top={419} width={268} height={352} src={a.nature7} flat innerW={219} innerH={313} imgStyle={{ height: "106.72%", left: "-0.06%", top: "0", width: "100.12%" }} flatRightOffset={0.5} flatTopOffset={-0.5} />
              </div>
            </div>

            {/* SECTION 02, floating yellow bubbles + small image — Figma node 6048:23788 */}
            <div className="absolute" style={{ left: 1110, top: 2341, width: 330, height: 417 }}>
              <div className="absolute overflow-hidden" style={{ left: 95, top: 0, width: 235, height: 417 }}>
                <img alt="" src={a.casperIllustration} className="size-full object-cover" />
              </div>
              <div
                className="absolute bg-[#dba70e] flex items-center justify-center p-[12px] rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px]"
                style={{ left: 0, top: 62, filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))" }}
              >
                <p className={`${fontDM} font-medium text-[14px] text-[#1a1a1a] whitespace-nowrap leading-normal`}>
                  &ldquo;Not my department&rdquo;
                </p>
              </div>
              <div
                className="absolute bg-[#dba70e] flex items-center justify-center p-[12px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[16px]"
                style={{ left: 33, top: 157, filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))" }}
              >
                <p className={`${fontDM} font-medium text-[14px] text-[#1a1a1a] whitespace-pre leading-normal`}>
                  &ldquo;I&rsquo;m on a break.{"\n"}You scroll&rdquo;
                </p>
              </div>
            </div>

            {/* SECTION 03, Perspective Study */}
            <div className="absolute flex flex-col gap-[42px] items-start" style={{ left: 40, top: 2713, width: 1360 }}>
              <div className="flex flex-col gap-[12px] items-start w-full">
                <p className={`${fontDM} font-semibold text-[#333] text-[42px] w-full leading-[1.5]`}>03</p>
                <div className="flex flex-col gap-[12px] items-start w-full">
                  <p className={`${fontSerif} italic text-[#f5f5f5] text-[42px] w-full leading-[1.5]`}>Perspective Study</p>
                  <p className={`${fontDM} font-normal text-[24px] text-[#d4d4d4] w-full leading-[1.5]`}>
                    Buildings have a way of collapsing into the horizon if you look at them long enough. These sketches were an attempt to understand that collapse, to follow the lines of a structure as they converge, to find the vanishing point and work backwards from it. Eye-level, ant&rsquo;s-eye, one-point, two-point. The grid as a starting point. The drawing as the discovery.
                  </p>
                </div>
              </div>
              <div className="flex gap-[32px] items-start">
                <div className="bg-[#141414] border-2 border-[#222] h-[661px] overflow-hidden relative rounded-[12px] w-[497px]">
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-[12px] overflow-hidden" style={{ width: 449, height: 621 }}>
                    <img alt="" src={a.perspective1} className="absolute max-w-none top-0" style={{ height: "106.83%", left: "-0.06%", width: "100.13%" }} />
                  </div>
                </div>
                <div className="bg-[#141414] border-2 border-[#222] h-[546px] overflow-hidden relative rounded-[12px] w-[771px]">
                  <div className="absolute -translate-x-1/2 left-1/2 flex items-center justify-center" style={{ top: 18, width: 723, height: 506 }}>
                    <div className="rotate-90 relative" style={{ width: 506, height: 723 }}>
                      <img alt="" src={a.perspective2} className="absolute inset-0 size-full max-w-none object-cover pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 04, Still Life */}
            <div className="absolute flex flex-col gap-[42px] items-start" style={{ left: 40, top: 3794, width: 1360 }}>
              <div className="flex flex-col gap-[12px] items-start w-full">
                <p className={`${fontDM} font-semibold text-[#333] text-[42px] w-full leading-[1.5]`}>04</p>
                <div className="flex flex-col gap-[12px] items-start w-full">
                  <p className={`${fontSerif} italic text-[#f5f5f5] text-[42px] w-full leading-[1.5]`}>Still Life</p>
                  <p className={`${fontDM} font-normal text-[24px] text-[#d4d4d4] w-full leading-[1.5]`}>
                    There is something quietly radical about drawing what is already still. No movement to chase, no moment to catch, only the slow negotiation between what the light does and what you were certain it would do. These sketches began with arrangement, fabric draped, fruit placed, surfaces curved into position, and ended with something closer to surrender. You set up the scene. The light decides the rest.
                  </p>
                </div>
              </div>
              <div className="flex gap-[26px] items-center justify-center w-full">
                <div className="bg-[#141414] border-2 border-[#222] h-[440px] overflow-hidden relative rounded-[12px] w-[674px]">
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center left-1/2 top-1/2" style={{ width: 626, height: 400 }}>
                    <div className="rotate-90 relative" style={{ width: 400, height: 626 }}>
                      <div className="absolute inset-0 overflow-hidden">
                        <img alt="" src={a.stilllife1} className="absolute max-w-none" style={{ height: "107.99%", left: "-0.02%", top: "-7.99%", width: "100.03%" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#141414] border-2 border-[#222] h-[440px] overflow-hidden relative rounded-[12px] w-[658px]">
                  <div className="absolute flex items-center justify-center" style={{ left: 22, top: 18, width: 610, height: 400 }}>
                    <div className="rotate-90 relative" style={{ width: 400, height: 610 }}>
                      <img alt="" src={a.stilllife2} className="absolute inset-0 size-full max-w-none object-cover pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 05, Textile Print */}
            <div className="absolute" style={{ left: 40, top: 4753, width: 670, height: 675 }}>
              <img alt="Textile" src={a.textile} className="absolute inset-0 size-full max-w-none object-cover opacity-80" />
            </div>
            <div className="absolute flex flex-col gap-[12px] items-start leading-[1.5]" style={{ left: 752, top: 4860, width: 648 }}>
              <p className={`${fontDM} font-semibold leading-[1.5] text-[#333] text-[42px] whitespace-nowrap`}>05</p>
              <p className={`${fontSerif} italic text-[#f5f5f5] text-[42px] w-full`}>Textile Print</p>
              <p className={`${fontDM} font-normal text-[24px] text-[#d4d4d4] w-full`}>
                Surface pattern work rooted in the hand, motifs drawn, carved into wood, pressed into fabric. Flamingos translated into repeating prints that tile with a rhythm you can almost hear. Part design exercise, part craft experiment, entirely about the satisfaction of a pattern that works both up close and from a distance.
              </p>
            </div>

            {/* BOTTOM, speech bubbles + casper photo + 4 yellow contact buttons */}
            <div className="absolute" style={{ left: 1019, top: 5446, width: 421, height: 442 }}>
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" src={a.casperBottom} className="absolute max-w-none" style={{ height: "126.88%", left: 0, top: "-26.84%", width: "100%" }} />
              </div>
            </div>
            <div
              className="archive-bubble-float absolute bg-black border border-[#8b6800] flex items-center justify-center p-[12px] rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px]"
              style={{ left: 955, top: 5446, width: 297, filter: "drop-shadow(0px 4px 2px rgba(108,107,107,0.2))" }}
            >
              <div className={`${fontDM} font-medium text-[16px] text-[#d4d4d4] leading-tight`}>
                <p className="mb-0">&ldquo;Portfolio? Done. Sketchbook? Done.</p>
                <p className="mb-0">Still not convinced?</p>
                <p>I genuinely cannot help you.&rdquo;</p>
              </div>
            </div>
            <div
              className="archive-bubble-float delayed absolute bg-black border border-[#8b6800] flex items-center justify-center p-[12px] rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px]"
              style={{ left: 828, top: 5604, width: 268, filter: "drop-shadow(0px 4px 2px rgba(108,107,107,0.2))" }}
            >
              <div className={`${fontDM} font-medium text-[16px] text-[#d4d4d4] leading-tight`}>
                <p className="mb-0">&ldquo;She runs on chai and deadlines.</p>
                <p className="mb-0">I run on treats.</p>
                <p>You? Run on one of these links.&rdquo;</p>
              </div>
            </div>
            <div className="absolute flex flex-col gap-[24px] items-start" style={{ left: 40, top: 5595, width: 670 }}>
              <div className="flex gap-[24px] items-center w-full">
                <a href="mailto:aditidwivedi2108@gmail.com" className="bg-[#dba70e] flex flex-1 items-center justify-between p-[12px] hover:opacity-90 transition-opacity">
                  <p className={`${fontDM} font-medium text-[24px] text-[#1a1a1a] leading-[1.5]`}>Email</p>
                </a>
                <a href="https://www.behance.net/AditiDW" target="_blank" rel="noopener noreferrer" className="bg-[#dba70e] flex flex-1 items-start justify-between p-[12px] hover:opacity-90 transition-opacity">
                  <p className={`${fontDM} font-medium text-[24px] text-[#1a1a1a] leading-[1.5]`}>Behance</p>
                </a>
              </div>
              <div className="flex gap-[24px] items-center w-full">
                <a href="https://www.linkedin.com/in/dwivediaditi/" target="_blank" rel="noopener noreferrer" className="bg-[#dba70e] flex flex-1 items-start justify-between p-[12px] hover:opacity-90 transition-opacity">
                  <p className={`${fontDM} font-medium text-[24px] text-[#1a1a1a] leading-[1.5]`}>Linkedin</p>
                </a>
                <a href="https://x.com/aditidw" target="_blank" rel="noopener noreferrer" className="bg-[#dba70e] flex flex-1 items-start justify-between p-[12px] hover:opacity-90 transition-opacity">
                  <p className={`${fontDM} font-medium text-[24px] text-[#1a1a1a] leading-[1.5]`}>Twitter</p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

function NatureCard({
  left,
  top,
  width,
  height,
  src,
  rotate,
  flat,
  innerW,
  innerH,
  imgStyle,
  centerOffset = 0,
  flatTopOffset = 0,
  flatRightOffset = 0,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  src: string;
  rotate?: 90 | -90;
  flat?: boolean;
  innerW: number;
  innerH: number;
  imgStyle: React.CSSProperties;
  centerOffset?: number;
  flatTopOffset?: number;
  flatRightOffset?: number;
}) {
  return (
    <div
      className="absolute bg-[#141414] border-2 border-[#222] overflow-hidden rounded-[12px]"
      style={{ left, top, width, height }}
    >
      {flat ? (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-[12px] overflow-hidden"
          style={{
            left: `calc(50% + ${flatRightOffset}px)`,
            top: `calc(50% + ${flatTopOffset}px)`,
            width: innerW,
            height: innerH,
          }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <img alt="" src={src} className="absolute max-w-none" style={imgStyle} />
          </div>
        </div>
      ) : (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ left: `calc(50% + ${centerOffset}px)`, top: "50%", width: innerH, height: innerW }}
        >
          <div className={rotate === 90 ? "rotate-90" : "-rotate-90"} style={{ width: innerW, height: innerH }}>
            <div className="relative size-full overflow-hidden rounded-[12px]">
              <img alt="" src={src} className="absolute max-w-none" style={imgStyle} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
