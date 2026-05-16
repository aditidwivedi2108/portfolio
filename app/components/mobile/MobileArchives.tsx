"use client";

/* eslint-disable @next/next/no-img-element */
// Mobile Archives page matching Figma node 6006:21110.
// 393px layout, content column 361px (16px gutters).

const fontDM = "font-[family-name:var(--font-dm-sans)]";
const fontSerif = "font-[family-name:var(--font-instrument-serif)]";

const a = {
  meera: "/archives-mobile/meera.png",
  nature1: "/archives-mobile/nature-1.png",
  nature2: "/archives-mobile/nature-2.png",
  nature3: "/archives-mobile/nature-3.png",
  nature4: "/archives-mobile/nature-4.png",
  nature5: "/archives-mobile/nature-5.png",
  nature6: "/archives-mobile/nature-6.png",
  nature7: "/archives-mobile/nature-7.png",
  perspective1: "/archives-mobile/perspective-1.png",
  perspective2: "/archives-mobile/perspective-2.png",
  still1: "/archives-mobile/still-1.png",
  still2: "/archives-mobile/still-2.png",
  textile: "/archives-mobile/textile.png",
  casperBottom: "/archives-mobile/casper-bottom.png",
};

export function MobileArchives() {
  return (
    <div className="w-full bg-[#0a0a0a] text-white overflow-x-hidden pt-[72px]"
      style={{ fontFamily: "var(--font-dm-sans), system-ui" }}
    >
      {/* ═══ HERO — Figma: 361×222, gap=24 ═══ */}
      <section className="px-[16px] pt-[16px]">
        <div className="flex flex-col gap-[24px] items-start w-full">
          <div className="flex flex-col gap-[24px] items-center self-center" style={{ width: 283 }}>
            <p className={`${fontDM} font-normal text-[16px] leading-[1.5] text-[#a3a3a3] text-center`}>
              The Sketchbook
            </p>
            <p className={`${fontDM} font-normal text-[24px] leading-[1.5] text-white text-center`}>
              No Clients. No Deadlines.<br />
              Just{" "}
              <span className={`${fontSerif} italic text-[#dba80e]`}>Paper</span>
            </p>
          </div>
          <p className={`${fontDM} font-normal text-[18px] leading-[1.5] text-[#d4d4d4] w-full text-center`}>
            Illustrations, studies, and experiments — the work that happens when there&rsquo;s no brief to follow.
          </p>
        </div>
      </section>

      {/* ═══ SECTIONS 01-05 — Figma: gap=62 between sections ═══ */}
      <div className="flex flex-col gap-[62px] w-full px-[16px] pt-[62px] pb-[32px]">

        {/* ═══ 01 - THE MEERA — Figma: 361×815.5, gap=12 ═══ */}
        <section className="flex flex-col gap-[12px] items-start w-full">
          <div className="flex flex-col gap-[1px] w-full">
            <p className={`${fontDM} font-semibold text-[42px] leading-[1.5] text-[#333] w-full`}>01</p>
            <div className="flex flex-col gap-[12px] items-start w-full">
              <p className={`${fontSerif} italic text-[24px] leading-[1.5] text-[#f5f5f5] w-full`}>The Meera</p>
              <p className={`${fontDM} font-normal text-[16px] leading-[1.5] text-[#d4d4d4] w-full`}>
                A painting of Meera Bai — capturing the devotion and quiet defiance that defined her. Featured at{" "}
                <span className="font-medium italic">Kala Vithika Art Exhibition, Gwalior (2018)</span>, my first time seeing my work on a wall.
              </p>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-[12px] bg-[#141414]">
            <img alt="The Meera" src={a.meera} className="size-full object-cover" style={{ aspectRatio: "361 / 541.5" }} />
          </div>
        </section>

        {/* ═══ 02 - NATURE STUDY — Figma: 361×1196, gap=12 ═══ */}
        <section className="flex flex-col gap-[12px] items-start w-full">
          <div className="flex flex-col gap-[1px] w-full">
            <p className={`${fontDM} font-semibold text-[42px] leading-[1.5] text-[#333] w-full`}>02</p>
            <div className="flex flex-col gap-[12px] items-start w-full">
              <p className={`${fontSerif} italic text-[24px] leading-[1.5] text-[#f5f5f5] w-full`}>Nature Study</p>
              <p className={`${fontDM} font-normal text-[16px] leading-[1.5] text-[#d4d4d4] w-full`}>
                These sketches started with a simple intention — to look more carefully at the natural world. Leaves, wingspans, petals in mid-fold. The more closely I drew, the more I noticed. What began as observation became conversation, and what began as practice became a collection of quiet, careful studies drawn entirely by hand.
              </p>
            </div>
          </div>
          {/* Mosaic grid — Figma node 6042:22341, 361×802 group with 7 images */}
          <div className="flex flex-col gap-[12px] w-full">
            {/* Row 1: WA0012 (nature1) — 357×228 */}
            <div className="w-full bg-[#141414] overflow-hidden rounded-[8px]" style={{ aspectRatio: "357/228" }}>
              <img alt="" src={a.nature1} className="size-full object-cover" />
            </div>
            {/* Row 2: WA0013 (nature2, 194×200) + WA0014 (nature3, 151×200) */}
            <div className="flex gap-[14px] w-full">
              <div className="flex-1 bg-[#141414] overflow-hidden rounded-[8px]" style={{ aspectRatio: "194/200" }}>
                <img alt="" src={a.nature2} className="size-full object-cover" />
              </div>
              <div className="flex-1 bg-[#141414] overflow-hidden rounded-[8px]" style={{ aspectRatio: "151/200" }}>
                <img alt="" src={a.nature3} className="size-full object-cover" />
              </div>
            </div>
            {/* Row 3: WA0015 (nature6, 189×141) + WA0023 (nature4, 164×145) */}
            <div className="flex gap-[14px] w-full">
              <div className="flex-1 bg-[#141414] overflow-hidden rounded-[8px]" style={{ aspectRatio: "189/141" }}>
                <img alt="" src={a.nature6} className="size-full object-cover" />
              </div>
              <div className="flex-1 bg-[#141414] overflow-hidden rounded-[8px]" style={{ aspectRatio: "164/145" }}>
                <img alt="" src={a.nature4} className="size-full object-cover" />
              </div>
            </div>
            {/* Row 4: WA0019 (nature5, 170×197) + WA0002 (nature7, 170×197) */}
            <div className="flex gap-[11px] w-full">
              <div className="flex-1 bg-[#141414] overflow-hidden rounded-[8px]" style={{ aspectRatio: "170/197" }}>
                <img alt="" src={a.nature5} className="size-full object-cover" />
              </div>
              <div className="flex-1 bg-[#141414] overflow-hidden rounded-[8px]" style={{ aspectRatio: "170/197" }}>
                <img alt="" src={a.nature7} className="size-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 03 - PERSPECTIVE STUDY — Figma: 361×1176, gap=12 ═══ */}
        <section className="flex flex-col gap-[12px] items-start w-full">
          <div className="flex flex-col gap-[1px] w-full">
            <p className={`${fontDM} font-semibold text-[42px] leading-[1.5] text-[#333] w-full`}>03</p>
            <div className="flex flex-col gap-[12px] items-start w-full">
              <p className={`${fontSerif} italic text-[24px] leading-[1.5] text-[#f5f5f5] w-full`}>Perspective Study</p>
              <p className={`${fontDM} font-normal text-[16px] leading-[1.5] text-[#d4d4d4] w-full`}>
                Buildings have a way of collapsing into the horizon if you look at them long enough. These sketches were an attempt to understand that collapse, to follow the lines of a structure as they converge, to find the vanishing point and work backwards from it. Eye-level, ant&rsquo;s-eye, one-point, two-point. The grid as a starting point. The drawing as the discovery.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] w-full">
            <div className="w-full bg-[#141414] overflow-hidden rounded-[8px]" style={{ aspectRatio: "361/471" }}>
              <img alt="" src={a.perspective1} className="size-full object-cover" />
            </div>
            <div className="w-full bg-[#141414] overflow-hidden rounded-[8px]" style={{ aspectRatio: "361/269" }}>
              <img alt="" src={a.perspective2} className="size-full object-cover" />
            </div>
          </div>
        </section>

        {/* ═══ 04 - STILL LIFE — Figma: 361×968, gap=12 ═══ */}
        <section className="flex flex-col gap-[12px] items-start w-full">
          <div className="flex flex-col gap-[1px] w-full">
            <p className={`${fontDM} font-semibold text-[42px] leading-[1.5] text-[#333] w-full`}>04</p>
            <div className="flex flex-col gap-[12px] items-start w-full">
              <p className={`${fontSerif} italic text-[24px] leading-[1.5] text-[#f5f5f5] w-full`}>Still Life</p>
              <p className={`${fontDM} font-normal text-[16px] leading-[1.5] text-[#d4d4d4] w-full`}>
                There is something quietly radical about drawing what is already still. No movement to chase, no moment to catch, only the slow negotiation between what the light does and what you were certain it would do. These sketches began with arrangement, fabric draped, fruit placed, surfaces curved into position, and ended with something closer to surrender. You set up the scene. The light decides the rest.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] w-full">
            <div className="w-full bg-[#141414] overflow-hidden rounded-[8px]" style={{ aspectRatio: "361/236" }}>
              <img alt="" src={a.still1} className="size-full object-cover" />
            </div>
            <div className="w-full bg-[#141414] overflow-hidden rounded-[8px]" style={{ aspectRatio: "361/236" }}>
              <img alt="" src={a.still2} className="size-full object-cover" />
            </div>
          </div>
        </section>

        {/* ═══ 05 - TEXTILE PRINT — Figma: 361×758, gap=12 ═══ */}
        <section className="flex flex-col gap-[12px] items-start w-full">
          <div className="flex flex-col gap-[1px] w-full">
            <p className={`${fontDM} font-semibold text-[42px] leading-[1.5] text-[#333] w-full`}>05</p>
            <div className="flex flex-col gap-[12px] items-start w-full">
              <p className={`${fontSerif} italic text-[24px] leading-[1.5] text-[#f5f5f5] w-full`}>Textile Print</p>
              <p className={`${fontDM} font-normal text-[16px] leading-[1.5] text-[#d4d4d4] w-full`}>
                Surface pattern work rooted in the hand — motifs drawn, carved into wood, pressed into fabric. Flamingos translated into repeating prints that tile with a rhythm you can almost hear. Part design exercise, part craft experiment, entirely about the satisfaction of a pattern that works both up close and from a distance.
              </p>
            </div>
          </div>
          <div className="w-full bg-[#141414] overflow-hidden rounded-[8px] opacity-80" style={{ aspectRatio: "361/364" }}>
            <img alt="" src={a.textile} className="size-full object-cover" />
          </div>
        </section>

        {/* ═══ BOTTOM — Figma node 6006:21104, 361×540, pb=32 ═══ */}
        <section className="flex flex-col gap-[24px] items-start w-full pb-[32px]">
          {/* Speech bubbles + Casper photo — Figma: Group 1597880332 */}
          <div className="relative w-full" style={{ height: 194 }}>
            {/* Bubble 1: 221×64, pad=8, DM Sans 12px/500 */}
            <div className="absolute bg-black border border-[#8b6800] p-[8px] rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px]"
              style={{ left: 38, top: 0, filter: "drop-shadow(0 4px 2px rgba(108,107,107,0.2))" }}
            >
              <p className={`${fontDM} font-medium text-[12px] text-[#d4d4d4] leading-snug`}>
                &ldquo;Portfolio? Done. Sketchbook? Done.<br />
                Still not convinced?<br />
                I genuinely cannot help you.&rdquo;
              </p>
            </div>
            {/* Bubble 2: 199×64, pad=8, DM Sans 12px/500, gap 33.5 below bubble 1 */}
            <div className="absolute bg-black border border-[#8b6800] p-[8px] rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px]"
              style={{ left: 0, top: 97, filter: "drop-shadow(0 4px 2px rgba(108,107,107,0.2))" }}
            >
              <p className={`${fontDM} font-medium text-[12px] text-[#d4d4d4] leading-snug`}>
                &ldquo;She runs on chai and deadlines.<br />
                I run on treats.<br />
                You? Run on one of these links.&rdquo;
              </p>
            </div>
            {/* Casper photo: 185×194 */}
            <div className="absolute w-[185px] overflow-hidden" style={{ left: 176, top: 0 }}>
              <img alt="" src={a.casperBottom} className="w-full object-cover" />
            </div>
          </div>

          {/* Contact buttons — Figma: full-width 361×60, stacked, gap 24 */}
          <div className="flex flex-col gap-[24px] w-full">
            <a href="mailto:aditidwivedi2108@gmail.com"
              className="w-full bg-[#dba70e] flex items-center justify-center p-[12px] no-underline hover:opacity-90 transition-opacity"
              style={{ minHeight: 60 }}
            >
              <p className={`${fontDM} font-medium text-[24px] text-[#1a1a1a] leading-[1.5]`}>Email</p>
            </a>
            <a href="https://www.behance.net/AditiDW" target="_blank" rel="noopener noreferrer"
              className="w-full bg-[#dba70e] flex items-center justify-center p-[12px] no-underline hover:opacity-90 transition-opacity"
              style={{ minHeight: 60 }}
            >
              <p className={`${fontDM} font-medium text-[24px] text-[#1a1a1a] leading-[1.5]`}>Behance</p>
            </a>
            <a href="https://www.linkedin.com/in/dwivediaditi/" target="_blank" rel="noopener noreferrer"
              className="w-full bg-[#dba70e] flex items-center justify-center p-[12px] no-underline hover:opacity-90 transition-opacity"
              style={{ minHeight: 60 }}
            >
              <p className={`${fontDM} font-medium text-[24px] text-[#1a1a1a] leading-[1.5]`}>Linkedin</p>
            </a>
            <a href="https://x.com/aditidw" target="_blank" rel="noopener noreferrer"
              className="w-full bg-[#dba70e] flex items-center justify-center p-[12px] no-underline hover:opacity-90 transition-opacity"
              style={{ minHeight: 60 }}
            >
              <p className={`${fontDM} font-medium text-[24px] text-[#1a1a1a] leading-[1.5]`}>Twitter</p>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
