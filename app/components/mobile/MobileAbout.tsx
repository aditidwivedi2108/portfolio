"use client";

import { useEffect, useRef, useState } from "react";

/* eslint-disable @next/next/no-img-element */
// Mobile About page matching Figma node 6045:22794.

const fontDM = "font-[family-name:var(--font-dm-sans)]";
const fontSerif = "font-[family-name:var(--font-instrument-serif)]";

const img = {
  aditiPhoto: "/figma-mobile/about-aditi-photo.png",
  casperClaude: "/about/casper-claude.png",
  chaiSticker: "/about/aa626.png",
  logoInstantpay: "/about/logo-instantpay.svg",
  logoNoormer: "/about/logo-noormer.svg",
  logoBridge: "/about/logo-bridge.svg",
  logoMorph: "/about/logo-morph.svg",
  pinkDog: "/about/pink-dog-footer.png",
  gal01: "/about/gal-01.png",
  gal02: "/about/gal-02.png",
  gal03: "/about/gal-03.png",
  gal04: "/about/gal-04.png",
  gal05: "/about/gal-05.png",
  gal06: "/about/gal-06.png",
  gal07: "/about/gal-07.png",
  gal08: "/about/gal-08.png",
  gal09: "/about/gal-09.png",
  gal10: "/about/gal-10.png",
  gal11: "/about/gal-11.png",
  gal12: "/about/gal-12.png",
  gal13: "/about/gal-13.png",
  gal14: "/about/gal-14.png",
  gal15: "/about/gal-15.png",
  gal16: "/about/gal-16.png",
  gal17: "/about/gal-17.png",
  gal18: "/about/gal-18.png",
  gal19: "/about/gal-19.png",
  gal20: "/about/gal-20.png",
};

export function MobileAbout() {
  const [skillsInView, setSkillsInView] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSkillsInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a] text-white overflow-x-hidden pt-[72px]"
      style={{ fontFamily: "var(--font-dm-sans), system-ui" }}
    >
      {/* ═══ 1. HERO — Figma: pad=(16,16,62,62) ═══ */}
      <section className="px-[16px] pt-[62px] pb-[62px]">
        <div className="flex flex-col gap-[24px] items-start">
          <div className="flex flex-col gap-[42px] w-full">
            <div className="flex flex-col gap-[12px]" style={{ maxWidth: 197 }}>
              <p className={`${fontDM} font-normal text-[16px] text-[#a3a3a3] leading-[1.5]`}>
                The short version
              </p>
              <p className={`${fontDM} font-normal text-[24px] text-white leading-[1.5]`}>
                My human, briefly
              </p>
            </div>
            <div className="flex flex-col gap-[42px] w-full">
              <p className={`${fontDM} font-medium text-[14px] text-[#d4d4d4] leading-[1.5]`}>
                Research first. Design second. Nothing ships until it&rsquo;s right. Two years of building intuitive, human-centered experiences — from the first insight to the final pixel, full ownership every time. The tools and skills that make it happen are right below.
              </p>
              {/* Stats row — Figma: 361×64, gap=22, widths: 93/76/148 */}
              <div className="flex gap-[22px] items-start w-full">
                <div className="flex flex-col gap-[16px] shrink-0" style={{ width: 93 }}>
                  <div className="flex gap-[4px] items-center">
                    <img alt="" src="/about/icon-experience.svg" className="size-[16px]" />
                    <p className={`${fontDM} font-normal text-[14px] text-[#a3a3a3] whitespace-nowrap`}>Experience</p>
                  </div>
                  <p className={`${fontSerif} italic text-[20px] text-white`}>2 years</p>
                </div>
                <div className="flex flex-col gap-[16px] shrink-0" style={{ width: 76 }}>
                  <div className="flex gap-[4px] items-center">
                    <img alt="" src="/about/icon-location.svg" className="size-[16px]" />
                    <p className={`${fontDM} font-normal text-[14px] text-[#a3a3a3] whitespace-nowrap`}>Location</p>
                  </div>
                  <p className={`${fontSerif} italic text-[20px] text-white`}>Delhi, IN</p>
                </div>
                <div className="flex flex-col gap-[16px] shrink-0" style={{ width: 148 }}>
                  <div className="flex gap-[4px] items-center">
                    <img alt="" src="/about/icon-freelance.svg" className="size-[16px]" />
                    <p className={`${fontDM} font-normal text-[14px] text-[#a3a3a3] whitespace-nowrap`}>Freelance+Full time</p>
                  </div>
                  <p className={`${fontSerif} italic text-[20px] text-white`}>Available</p>
                </div>
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="w-full overflow-hidden rounded-[32px] bg-[#141414]" style={{ aspectRatio: "361/481" }}>
            <img alt="Aditi" src={img.aditiPhoto} className="size-full object-cover" />
          </div>
        </div>
      </section>

      {/* ═══ 2. HOW I DESIGN NOW ═══ */}
      <section className="px-[16px] pt-[62px] pb-[62px] bg-[#111]">
        <div className="flex flex-col gap-[55px] w-full">
          <div className="flex flex-col gap-[32px] w-full">
            <div className="flex flex-col gap-[12px]">
              <p className={`${fontDM} font-normal text-[16px] text-[#a3a3a3] leading-[1.5]`}>
                How I design now
              </p>
              <p className={`${fontDM} font-normal text-[24px] text-white leading-[1.5]`}>
                She talks to robots now
              </p>
            </div>
            <p className={`${fontDM} font-normal text-[14px] text-[#d4d4d4] leading-[1.5]`}>
              I&rsquo;m weaving Claude and AI-assisted workflows into my process — using them to prototype faster, explore research patterns, and move from concept to production without losing the craft. Figma still comes in when precision matters: variables, components, visual refinement. The rest of the time, I&rsquo;m exploring how AI can make me a better, faster, more curious designer. In fact, the site you&rsquo;re scrolling is one of those experiments.{" "}
              <span className="font-semibold">Still learning.</span>
            </p>
          </div>
          {/* Principle cards */}
          <div className="flex flex-col gap-[14px] w-full">
            <PrincipleCard bg="#3d1f18" tag="CRAFT" title="Speed without shortcuts" body="AI compresses my timeline; it never lowers the bar. Every screen still earns its place — pixel, padding, and purpose intact." />
            <PrincipleCard bg="#3a2a14" tag="CURIOUS" title="Built to learn" body="Tools change every six months now. Curiosity is the only durable skill — every new pattern is a chance to sharpen the craft." />
            <PrincipleCard bg="#1a2d2c" tag="HUMAN" title="Empathy stays manual" body="Tools can prototype faster, but they can't understand the person on the other side. Research, judgement, and instinct — those stay mine to do." />
          </div>
          {/* Dog + bubble */}
          <div className="relative w-full" style={{ height: 141 }}>
            <div className="absolute" style={{ left: 0, top: 0, width: 141, height: 141 }}>
              <img alt="" src={img.casperClaude} className="size-full object-cover" />
            </div>
            <div className="absolute bg-[#dba70e] p-[12px] rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px]"
              style={{ left: 70, top: 99, zIndex: 1, filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.25))" }}
            >
              <p className={`${fontDM} font-medium text-[14px] text-[#1a1a1a] whitespace-nowrap leading-normal`}>
                New collaborator. We&rsquo;re adjusting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. THE CAREER SO FAR ═══ */}
      <section className="px-[16px] pt-[62px] pb-[62px]">
        <div className="flex flex-col gap-[62px] w-full">
          <div className="flex flex-col gap-[16px] w-full">
            <div className="flex flex-col gap-[12px]">
              <p className={`${fontDM} font-normal text-[16px] text-[#a3a3a3] leading-[1.5]`}>
                The career so far
              </p>
              <p className={`${fontDM} font-normal text-[24px] text-white leading-[1.5]`}>
                Where she&rsquo;s been clocking in.
              </p>
            </div>
            <p className={`${fontDM} font-normal text-[14px] text-[#d4d4d4] leading-[1.5]`}>
              Two years of shipping product across fintech, studios, and freelance. Below — the skills I&rsquo;ve built along the way.
            </p>
          </div>
          {/* Experience cards */}
          <div className="flex flex-col gap-[16px] w-full">
            <ExpCard
              role="Sr.Product Designer"
              date="(Apr 24- Current)"
              body="From pre-login pages to post-login dashboards to a full insurance module — I owned the design end-to-end, and the product grew 42.3% in new users as a result."
              company="Instantpay India Ltd."
              location="Delhi"
              logoSrc={img.logoInstantpay}
            />
            <ExpCard
              role="Freelance UI Designer"
              date="(July-Sep 23)"
              body="From a travel platform's navigation flows to an e-commerce UI rooted in brand identity — designed wireframes, interactive prototypes, and clean user-friendly interfaces, iterating with stakeholder feedback."
              company="Noormer Tech"
              location="Gurgaon"
              logoSrc={img.logoNoormer}
            />
            <ExpCard
              role="Visual Design Intern"
              date="(Mar -Aug 23)"
              body="Owned research and design across mobile apps and websites — user research, personas, heuristic evaluations, UX audits, wireframes, and prototypes. Published articles on UX along the way."
              company="Bridge UX  Design Studio"
              location="Bangalore"
              logoSrc={img.logoBridge}
            />
            <ExpCard
              role="Graphic Design Intern"
              date="(Jun -Jul 22)"
              body="Designed a digital kiosk experience for Titan retail stores — and contributed digital emailers, campaign assets, and website graphics across the brand's wider design needs."
              company="Morph Digital Solutions"
              location="Bangalore"
              logoSrc={img.logoMorph}
            />
          </div>
          {/* Skills cluster — Figma: 361×423 with flowing skill chips */}
          <div ref={skillsRef} className={`skills-cluster flex flex-wrap content-start items-start gap-[12px_10px] pt-[8px] pb-[8px] overflow-hidden w-full${skillsInView ? " in-view" : ""}`}>
            <SkillChip text="End-to-end Product Design" size={15} px={22} py={11} />
            <SkillChip text="User Research" size={15} px={22} py={11} />
            <SkillChip text="UX Audits" size={13} px={26} py={14} />
            <SkillChip text="Design Systems" size={13} px={16} py={8} />
            <SkillChip text="Product Thinking" size={15} px={22} py={11} />
            <SkillChip text="Visual Design" size={15} px={22} py={11} />
            <SkillChip text="Interaction Design" size={15} px={22} py={11} />
            <SkillChip text="Usability Testing" size={13} px={16} py={8} />
            <SkillChip text="Design Strategy" size={15} px={22} py={11} accent />
            <SkillChip text="Information Architecture" size={13} px={16} py={8} />
            <SkillChip text="Storyboarding" size={13} px={16} py={8} />
            <SkillChip text="AI Fluency" size={13} px={22} py={11} accent />
          </div>
          <div className="learning-more flex items-center justify-center w-full pt-[8px]">
            <p className="font-semibold whitespace-nowrap" style={{ fontFamily: "Caveat, cursive", color: "#c9a96e", fontSize: 22, transform: "rotate(-1.5deg)" }}>
              & always learning more
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 4. OFF THE CLOCK — Figma node 6045:22969, 361×263 ═══ */}
      <section className="relative px-[16px] pt-[62px] pb-0 bg-[#111]" style={{ minHeight: 367 }}>
        <div className="flex flex-col gap-[12px]" style={{ maxWidth: 197 }}>
          <p className={`${fontDM} font-normal text-[16px] text-[#a3a3a3] leading-[1.5]`}>
            The short version
          </p>
          <p className={`${fontDM} font-normal text-[24px] text-white leading-[1.5]`}>
            My human, briefly
          </p>
        </div>
        <p className={`${fontDM} font-medium text-[14px] text-[#d4d4d4] leading-[1.5] mt-[12px] w-full`} style={{ maxWidth: 361 }}>
          She has three personalities: Chai aditi, Travel aditi, Foodie aditi. I live with all of them.
        </p>
        {/* Dog sticker + bubble — absolute at (191, 197) = Figma's 135 + 62px pt */}
        <div className="absolute" style={{ left: 191, top: 197, width: 170, height: 128 }}>
          <div className="absolute bg-[#dba70e] p-[8px] rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px]"
            style={{ left: 0, top: 48, width: 104, filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.25))" }}
          >
            <p className={`${fontDM} font-medium text-[12px] text-[#1a1a1a] leading-normal whitespace-nowrap`}>
              Proof attached.
            </p>
          </div>
          <div className="absolute overflow-hidden" style={{ left: 69, top: 0, width: 101, height: 128 }}>
            <img alt="" src={img.chaiSticker} className="size-full object-contain" />
          </div>
        </div>
      </section>

      {/* ═══ 5. PHOTO GALLERY — Figma node 6045:22980, same layout as web ═══ */}
      <section className="pt-0 pb-[62px] bg-[#111] overflow-hidden">
        {/* Row 1 (Food) — 324px high, zigzag, scrolls left */}
        <div className="flex gap-[24px]" style={{ width: "max-content", animation: "marqueeGroup 60s linear infinite" }}>
          <div className="relative shrink-0" style={{ width: 2216, height: 324 }}>
            <PhotoCard caption="Local Bites" src={img.gal01} style={{ position: "absolute", left: 0, top: 0 }} />
            <PhotoCard caption="Swaad AF" src={img.gal02} style={{ position: "absolute", left: 448, top: 0 }} />
            <PhotoCard caption="Chai > Heat" src={img.gal03} style={{ position: "absolute", left: 896, top: 0 }} />
            <PhotoCard caption="500km Worth It" src={img.gal04} style={{ position: "absolute", left: 1344, top: 0 }} />
            <PhotoCard caption="Banaras Bites" src={img.gal05} style={{ position: "absolute", left: 1792, top: 0 }} />
            <PhotoCard caption="Ghar Gourmet" src={img.gal06} style={{ position: "absolute", left: 224, top: 88 }} />
            <PhotoCard caption="Cheese Rush" src={img.gal07} style={{ position: "absolute", left: 672, top: 88 }} />
            <PhotoCard caption="Teekha Fix" src={img.gal08} style={{ position: "absolute", left: 1120, top: 88 }} />
            <PhotoCard caption="No Sharing" src={img.gal09} style={{ position: "absolute", left: 1568, top: 88 }} />
            <PhotoCard caption="Meethi Bliss" src={img.gal10} style={{ position: "absolute", left: 2016, top: 88 }} />
          </div>
          <div className="relative shrink-0" style={{ width: 2216, height: 324 }}>
            <PhotoCard caption="Local Bites" src={img.gal01} style={{ position: "absolute", left: 0, top: 0 }} />
            <PhotoCard caption="Swaad AF" src={img.gal02} style={{ position: "absolute", left: 448, top: 0 }} />
            <PhotoCard caption="Chai > Heat" src={img.gal03} style={{ position: "absolute", left: 896, top: 0 }} />
            <PhotoCard caption="500km Worth It" src={img.gal04} style={{ position: "absolute", left: 1344, top: 0 }} />
            <PhotoCard caption="Banaras Bites" src={img.gal05} style={{ position: "absolute", left: 1792, top: 0 }} />
            <PhotoCard caption="Ghar Gourmet" src={img.gal06} style={{ position: "absolute", left: 224, top: 88 }} />
            <PhotoCard caption="Cheese Rush" src={img.gal07} style={{ position: "absolute", left: 672, top: 88 }} />
            <PhotoCard caption="Teekha Fix" src={img.gal08} style={{ position: "absolute", left: 1120, top: 88 }} />
            <PhotoCard caption="No Sharing" src={img.gal09} style={{ position: "absolute", left: 1568, top: 88 }} />
            <PhotoCard caption="Meethi Bliss" src={img.gal10} style={{ position: "absolute", left: 2016, top: 88 }} />
          </div>
        </div>
        {/* Row 2 (Nature) — 324px high, zigzag, scrolls right */}
        <div className="flex gap-[24px] mt-[32px]" style={{ width: "max-content", animation: "marqueeGroupReverse 60s linear infinite" }}>
          <div className="relative shrink-0" style={{ width: 2216, height: 324 }}>
            <PhotoCard caption="Nature Fix" src={img.gal11} style={{ position: "absolute", left: 0, top: 0 }} />
            <PhotoCard caption="Chasing Views" src={img.gal12} style={{ position: "absolute", left: 448, top: 0 }} />
            <PhotoCard caption="Nature High" src={img.gal13} style={{ position: "absolute", left: 896, top: 0 }} />
            <PhotoCard caption="Tiny Treasures" src={img.gal14} style={{ position: "absolute", left: 1344, top: 0 }} />
            <PhotoCard caption="Soft Evenings" src={img.gal15} style={{ position: "absolute", left: 1792, top: 0 }} />
            <PhotoCard caption="Beer O'Clock" src={img.gal16} style={{ position: "absolute", left: 224, top: 88 }} />
            <PhotoCard caption="Beach Doggo" src={img.gal17} style={{ position: "absolute", left: 672, top: 88 }} />
            <PhotoCard caption="On Wheels" src={img.gal18} style={{ position: "absolute", left: 1120, top: 88 }} />
            <PhotoCard caption="Lost Here" src={img.gal19} style={{ position: "absolute", left: 1568, top: 88 }} />
            <PhotoCard caption="Mountain Buddy" src={img.gal20} style={{ position: "absolute", left: 2016, top: 88 }} />
          </div>
          <div className="relative shrink-0" style={{ width: 2216, height: 324 }}>
            <PhotoCard caption="Nature Fix" src={img.gal11} style={{ position: "absolute", left: 0, top: 0 }} />
            <PhotoCard caption="Chasing Views" src={img.gal12} style={{ position: "absolute", left: 448, top: 0 }} />
            <PhotoCard caption="Nature High" src={img.gal13} style={{ position: "absolute", left: 896, top: 0 }} />
            <PhotoCard caption="Tiny Treasures" src={img.gal14} style={{ position: "absolute", left: 1344, top: 0 }} />
            <PhotoCard caption="Soft Evenings" src={img.gal15} style={{ position: "absolute", left: 1792, top: 0 }} />
            <PhotoCard caption="Beer O'Clock" src={img.gal16} style={{ position: "absolute", left: 224, top: 88 }} />
            <PhotoCard caption="Beach Doggo" src={img.gal17} style={{ position: "absolute", left: 672, top: 88 }} />
            <PhotoCard caption="On Wheels" src={img.gal18} style={{ position: "absolute", left: 1120, top: 88 }} />
            <PhotoCard caption="Lost Here" src={img.gal19} style={{ position: "absolute", left: 1568, top: 88 }} />
            <PhotoCard caption="Mountain Buddy" src={img.gal20} style={{ position: "absolute", left: 2016, top: 88 }} />
          </div>
        </div>
      </section>

      {/* ═══ 6. BOTTOM — Figma node 6074:24088, 393×564 ═══ */}
      <section className="relative bg-[#0a0a0a] overflow-hidden pt-[62px]" style={{ minHeight: 564 }}>
        {/* Dog sticker — peeking from top at (-52, -40), 204×193 */}
        <div className="absolute pointer-events-none" style={{ left: -52, top: -40, width: 204, height: 193 }}>
          <img alt="" src={img.pinkDog} className="size-full object-cover" />
        </div>
        {/* Speech bubble — absolute at (71, 71), 155×32 */}
        <div className="absolute bg-[#dba70e] p-[8px] rounded-tr-[12px] rounded-br-[12px] rounded-tl-[12px]"
          style={{ left: 71, top: 71, filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.25))" }}
        >
          <p className={`${fontDM} font-medium text-[12px] text-[#1a1a1a] whitespace-nowrap leading-normal`}>
            My job is done. Yours starts here.
          </p>
        </div>
        {/* Contact rows — at y=146, gap 24 between rows */}
        <div className="flex flex-col gap-[24px] w-full px-[16px] pt-[103px]">
          <ContactRow title="Email" subtitle="She responds faster than she fills my bowl." href="mailto:aditidwivedi2108@gmail.com" iconSrc="/figma/icon-gmail.svg" />
          <ContactRow title="Linkedin" subtitle="Very professional. Different energy from home." href="https://www.linkedin.com/in/dwivediaditi/" external iconSrc="/figma/icon-linkedin.svg" />
          <ContactRow title="Behance" subtitle="More work. She really never stops. I've verified this." href="https://www.behance.net/AditiDW" external iconSrc="/figma/icon-behance.svg" />
          <ContactRow title="Twitter" subtitle="No mention of me in it. Rude, but accurate." href="https://x.com/aditidw" external iconSrc="/figma/icon-twitter.svg" noBorder />
        </div>
      </section>
    </div>
  );
}

function SkillChip({ text, size, px, py, accent }: { text: string; size: number; px: number; py: number; accent?: boolean }) {
  const bg = accent ? "rgba(201,169,110,0.05)" : "rgba(237,229,211,0.02)";
  const borderColor = accent ? "rgba(201,169,110,0.45)" : "rgba(237,229,211,0.18)";
  return (
    <div
      className="skill-enter rounded-[999px]"
      style={{
        background: bg,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor,
        paddingLeft: px,
        paddingRight: px,
        paddingTop: py,
        paddingBottom: py,
      }}
    >
      <p className={`${fontDM} font-semibold whitespace-nowrap`} style={{ color: "#b5a992", fontSize: size, lineHeight: "normal" }}>
        {text}
      </p>
    </div>
  );
}

function PhotoCard({ caption, src, style }: { caption: string; src: string; style?: React.CSSProperties }) {
  return (
    <div className="flex flex-col gap-[12px]" style={{ width: 200, ...style }}>
      <p className={`${fontDM} font-medium text-[16px] text-white leading-[1.5]`}>{caption}</p>
      <div className="bg-white overflow-hidden rounded-[8px] size-[200px]">
        <img alt="" src={src} className="size-full object-cover" />
      </div>
    </div>
  );
}

function PrincipleCard({ bg, tag, title, body }: { bg: string; tag: string; title: string; body: string }) {
  return (
    <div className="flex flex-col p-[16px] rounded-[12px] w-full" style={{ background: bg }}>
      <div className="border border-dashed flex flex-col gap-[11px] p-[16px] rounded-[8px] w-full" style={{ borderColor: "#ffffff30" }}>
        <p className={`${fontDM} text-[14px] text-white leading-[1.5]`} style={{ letterSpacing: "0.56px" }}>{tag}</p>
        <p className={`${fontDM} text-[16px] text-white leading-[1.5]`}>{title}</p>
        <p className={`${fontDM} text-[14px] text-[#d4d4d4] leading-[1.5] w-full`}>{body}</p>
      </div>
    </div>
  );
}

function ExpCard({ role, date, body, company, location, logoSrc }: {
  role: string; date: string; body: string; company: string; location: string; logoSrc: string;
}) {
  return (
    <div className="flex flex-col gap-[16px] p-[24px_24px_12px] rounded-[24px] w-full bg-[#141414] border border-[#222]">
      <div className="flex flex-col gap-[17px] w-full">
        <div className="flex items-center justify-between w-full">
          <p className={`${fontDM} font-medium text-[20px] text-white leading-[1.5]`}>{role}</p>
          <p className={`${fontDM} font-medium text-[14px] text-[#d4d4d4] leading-[1.5]`}>{date}</p>
        </div>
        <p className={`${fontDM} font-medium text-[14px] text-[#d4d4d4] leading-[1.5] w-full`}>{body}</p>
      </div>
      <div className="flex items-center justify-between w-full border-t border-[#222] pt-[12px]">
        <div className="flex items-center gap-[4px]">
          <div className="size-[24px] flex items-center justify-center overflow-hidden">
            <img alt="" src={logoSrc} className="max-w-full max-h-full object-contain" />
          </div>
          <p className={`${fontDM} font-medium text-[14px] text-[#d4d4d4] leading-[1.5]`}>{company}</p>
        </div>
        <div className="flex items-center gap-[4px]">
          <img alt="" src="/about/icon-location.svg" className="size-[16px]" />
          <p className={`${fontDM} font-medium text-[14px] text-white leading-[1.5]`}>{location}</p>
        </div>
      </div>
    </div>
  );
}

function ContactRow({ title, subtitle, href, external, iconSrc, noBorder }: {
  title: string; subtitle: string; href: string; external?: boolean; iconSrc: string; noBorder?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`flex gap-[12px] items-start py-[12px] w-full ${noBorder ? "" : "border-b border-[#404040]"}`}
    >
      <img alt="" src={iconSrc} className="block size-[24px] object-contain shrink-0" />
      <div className="flex min-w-0 flex-1 flex-col">
        <p className={`${fontDM} font-medium text-[16px] text-white leading-[1.3]`}>{title}</p>
        <p className={`${fontDM} font-normal text-[14px] text-[#a3a3a3] leading-[1.5]`}>{subtitle}</p>
      </div>
    </a>
  );
}
