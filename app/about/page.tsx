/* eslint-disable @next/next/no-img-element */
// About page, pixel-perfect translation of Figma node 5658:71068.

import { SkillsCluster } from "./SkillsCluster";

const a = {
  hero: "/figma-mobile/about-aditi-photo.png",
  iconBriefcase: "/about/icon-experience.svg",
  iconLocationHero: "/about/icon-location.svg",
  iconStatus: "/about/icon-freelance.svg",
  iconLocSmall: "/about/icon-location.svg",
  logoInstantpay: "/about/logo-instantpay.svg",
  logoNoormer: "/about/logo-noormer.svg",
  logoBridge: "/about/logo-bridge.svg",
  logoMorph: "/about/logo-morph.svg",
  casperSpeech: "/about/casper-photo.png",
  casperBig: "/about/download.png",
  chaiSticker: "/about/aa626.png",
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

const fontDM = "font-[family-name:var(--font-dm-sans)]";
const fontSerif = "font-[family-name:var(--font-instrument-serif)]";

import { MobileAbout } from "../components/mobile/MobileAbout";

export default function About() {
  return (
    <>
      {/* Mobile (≤640px) */}
      <div className="block sm:hidden">
        <MobileAbout />
      </div>

      {/* Desktop (>640px) */}
      <div className="hidden sm:block">
        <div className="page-shell min-h-screen bg-[#0a0a0a]">
          <div className="canvas-1440 relative bg-[#0a0a0a] overflow-hidden" style={{ width: 1440, minHeight: 4750 }}>
        {/* HERO, "My human, briefly" */}
        <div className="about-hero absolute bg-[#0a0a0a] flex items-center justify-between px-[40px] py-[180px] w-[1440px]" style={{ left: 0, top: 89 }}>
          <div className="flex flex-col gap-[50px] items-start w-[841px]">
            <div className="flex flex-col gap-[24px] items-start">
              <p className={`${fontDM} font-normal text-[20px] text-[#a3a3a3]`}>The short version</p>
              <p className={`${fontDM} font-normal text-[42px] text-white leading-[1.5] whitespace-nowrap`}>
                My human, briefly
              </p>
            </div>
            <div className="flex flex-col gap-[95px] items-start w-full">
              <p className={`${fontDM} font-normal text-[24px] text-[#d4d4d4] leading-[1.5]`} style={{ letterSpacing: "0.48px" }}>
                Research first. Design second. Nothing ships until it&rsquo;s right. Two years of building intuitive, human-centered experiences, from the first insight to the final pixel, full ownership every time. The tools and skills that make it happen are right below.
              </p>
              <div className="flex gap-[112px] items-center w-full">
                <div className="flex flex-col gap-[16px] items-start flex-1 about-fade-up" style={{ animationDelay: "150ms" }}>
                  <div className="flex gap-[6px] items-center">
                    <div className="overflow-hidden relative size-[20px]">
                      <img alt="" src={a.iconBriefcase} className="absolute inset-0 size-full" />
                    </div>
                    <p className={`${fontDM} font-normal text-[20px] text-[#a3a3a3]`}>Experience</p>
                  </div>
                  <p className={`${fontSerif} text-[42px] text-white leading-[1.5]`}>2 years</p>
                </div>
                <div className="flex flex-col gap-[16px] items-start flex-1 about-fade-up" style={{ animationDelay: "280ms" }}>
                  <div className="flex gap-[6px] items-center">
                    <div className="relative size-[20px]">
                      <img alt="" src={a.iconLocationHero} className="absolute inset-0 size-full" />
                    </div>
                    <p className={`${fontDM} font-normal text-[20px] text-[#a3a3a3]`}>Location</p>
                  </div>
                  <p className={`${fontSerif} text-[42px] text-white leading-[1.5]`}>Delhi, IN</p>
                </div>
                <div className="flex flex-col gap-[16px] items-start flex-1 about-fade-up" style={{ animationDelay: "410ms" }}>
                  <div className="flex gap-[6px] items-center">
                    <div className="overflow-hidden relative size-[20px]">
                      <img alt="" src={a.iconStatus} className="absolute inset-0 size-full" />
                    </div>
                    <p className={`${fontDM} font-normal text-[20px] text-[#a3a3a3]`}>Freelance+Full time</p>
                  </div>
                  <p className={`${fontSerif} text-[42px] text-white leading-[1.5]`}>Available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[32px] overflow-hidden shrink-0" style={{ width: 380, height: 507 }}>
            <img alt="Aditi" src={a.hero} className="absolute inset-0 size-full object-cover" />
          </div>
        </div>

        {/* SECTION 2, "She talks to robots now" */}
        <div className="about-ai absolute bg-[#111] flex gap-[55px] items-start px-[40px] pt-[120px] pb-[180px] w-[1440px]" style={{ left: 0, top: 978, minHeight: 960 }}>
          <div className="flex flex-col gap-[32px] items-start w-[820px]">
            <div className="flex flex-col gap-[24px] items-start w-[626px]">
              <p className={`${fontDM} font-normal text-[20px] text-[#a3a3a3]`}>How I design now</p>
              <p className={`${fontDM} font-normal text-[42px] text-white leading-[1.5]`}>She talks to robots now</p>
            </div>
            <p className={`${fontDM} font-normal text-[24px] text-[#d4d4d4] leading-[1.5] w-full`} style={{ letterSpacing: "0.48px" }}>
              I&rsquo;m weaving Claude and AI-assisted workflows into my process, using them to prototype faster, explore research patterns, and move from concept to production without losing the craft. Figma still comes in when precision matters: variables, components, visual refinement. The rest of the time, I&rsquo;m exploring how AI can make me a better, faster, more curious designer. In fact, the <span className="font-semibold">site you&rsquo;re scrolling</span> is one of those experiments. <span className="font-semibold">Still learning.</span>
            </p>
          </div>
          <div className="flex gap-[14px] items-center">
            <div className="flex flex-col gap-[28px] items-start w-[243px]">
              <PrincipleCard bg="#3d1f18" border="#e8b89c" tag="CRAFT" title="Speed without shortcuts" body="AI compresses my timeline; it never lowers the bar. Every screen still earns its place, pixel, padding, and purpose intact." />
              <PrincipleCard bg="#3a2a14" border="#e8c88a" tag="CURIOUS" title="Built to learn" body="Tools change every six months now. Curiosity is the only durable skill, every new pattern is a chance to sharpen the craft." />
            </div>
            <div className="w-[243px]">
              <PrincipleCard bg="#1a2d2c" border="#a8c9c2" tag="HUMAN" title="Empathy stays manual" body="Tools can prototype faster, but they can't understand the person on the other side. Research, judgement, and instinct, those stay mine to do." />
            </div>
          </div>
          {/* Floating dog illustration, upper-left */}
          <div
            className="absolute flex items-center justify-center"
            style={{ left: 40, top: 700, width: 140.512, height: 140.512 }}
          >
            <div className="about-claude-dog relative" style={{ width: 111, height: 111 }}>
              <img alt="" src="/about/casper-claude.png" className="absolute inset-0 size-full object-cover pointer-events-none" />
            </div>
          </div>
          {/* Yellow speech bubble, overlaps dog's lower-right area */}
          <div
            className="claude-bubble absolute bg-[#dba70e] border border-[#8b6800] flex items-center justify-center p-[12px] rounded-bl-[16px] rounded-br-[16px] rounded-tr-[16px]"
            style={{
              left: 120,
              top: 800,
              filter: "drop-shadow(0px 4px 2px rgba(108,107,107,0.2))",
            }}
          >
            <p className={`${fontDM} font-medium text-[14px] text-[#1a1a1a] whitespace-nowrap leading-normal`}>
              New collaborator. We&rsquo;re adjusting.
            </p>
          </div>
        </div>

        {/* SECTION 3, "Where she's been clocking in" */}
        <div className="about-experience absolute bg-[#0a0a0a] flex gap-[140px] items-stretch px-[40px] py-[120px] w-[1440px]" style={{ left: 0, top: 1938 }}>
          <div className="flex flex-col justify-between items-start w-[651px]">
            <div className="flex flex-col gap-[16px] items-start w-[635px]">
              <div className="flex flex-col gap-[16px] items-start w-full">
                <p className={`${fontDM} font-normal text-[20px] text-[#a3a3a3]`}>The career so far</p>
                <p className={`${fontDM} font-normal text-[42px] text-white leading-[1.5] whitespace-nowrap`}>Where she&rsquo;s been clocking in.</p>
              </div>
              <p className={`${fontDM} font-normal text-[24px] text-[#d4d4d4] leading-[1.5]`} style={{ letterSpacing: "0.48px" }}>
                Two years of shipping product across fintech, studios, and freelance. Below, the skills I&rsquo;ve built along the way.
              </p>
            </div>
            <div className="flex flex-col gap-[34px] items-start w-full">
              <SkillsCluster>
                <SkillChip text="End-to-end Product Design" rotate={-2} px={22} py={11} fontSize={15} />
                <SkillChip text="User Research" rotate={-2} px={22} py={11} fontSize={15} />
                <SkillChip text="UX Audits" rotate={1} px={26} py={14} fontSize={13} innerRotate={-3.5} />
                <SkillChip text="Design Systems" rotate={-2.5} px={16} py={8} fontSize={13} />
                <SkillChip text="Product Thinking" rotate={2} px={22} py={11} fontSize={15} />
                <SkillChip text="Visual Design" rotate={-1.5} px={22} py={11} fontSize={15} />
                <SkillChip text="Interaction Design" rotate={2.5} px={22} py={11} fontSize={15} />
                <SkillChip text="Usability Testing" rotate={-1} px={16} py={8} fontSize={13} />
                <SkillChip text="Design Strategy" rotate={1.5} px={22} py={11} fontSize={15} innerRotate={-3} />
                <SkillChip text="Information Architecture" rotate={-2} px={16} py={8} fontSize={13} />
                <SkillChip text="Storyboarding" rotate={1} px={16} py={8} fontSize={13} />
                <SkillChip text="AI Fluency" rotate={-1.5} px={22} py={11} fontSize={13} innerRotate={2.5} />
              </SkillsCluster>
              <div className="learning-more flex items-center justify-center w-full" style={{ height: 47 }}>
                <div className="-rotate-[1.5deg] w-full">
                  <p style={{ fontFamily: "Caveat, cursive", color: "#c9a96e", fontSize: 24 }}>
                    & always learning more
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-[24px] items-start w-[569px]">
            <ExperienceCard
              role="Sr.Product Designer"
              date="(Apr 24- Current)"
              body="From pre-login pages to post-login dashboards to a full insurance module, I owned the design end-to-end, and the product grew 42.3% in new users as a result."
              company="Instantpay India Ltd."
              location="Delhi"
              logoSrc={a.logoInstantpay}
              logoBg="transparent"
              isCoverLogo
              locIcon={a.iconLocSmall}
            />
            <ExperienceCard
              role="Freelance UI Designer"
              date="(July-Sep 23)"
              body="From a travel platform's navigation flows to an e-commerce UI rooted in brand identity, designed wireframes, interactive prototypes, and clean user-friendly interfaces, iterating with stakeholder feedback."
              company="Noormer Tech"
              location="Gurgaon"
              logoSrc={a.logoNoormer}
              logoBg="transparent"
              isCoverLogo
              locIcon={a.iconLocSmall}
            />
            <ExperienceCard
              role="Visual Design Intern"
              date="(Mar -Aug 23)"
              body="Owned research and design across mobile apps and websites, user research, personas, heuristic evaluations, UX audits, wireframes, and prototypes. Published articles on UX along the way."
              company="Bridge UX  Design Studio"
              location="Bangalore"
              logoSrc={a.logoBridge}
              logoBg="transparent"
              isCoverLogo
              locIcon={a.iconLocSmall}
            />
            <ExperienceCard
              role="Graphic Design Intern"
              date="(Jun -Jul 22)"
              body="Designed a digital kiosk experience for Titan retail stores, and contributed digital emailers, campaign assets, and website graphics across the brand's wider design needs."
              company="Morph Digital Solutions"
              location="Bangalore"
              logoSrc={a.logoMorph}
              logoBg="transparent"
              isCoverLogo
              locIcon={a.iconLocSmall}
            />
          </div>
        </div>

        {/* SECTION 4 background, covers heading area + marquee gallery, 120px top + 120px bottom padding */}
        <div className="about-gallery-bg absolute left-0 w-[1440px] bg-[#111]" style={{ top: 2960, height: 1270 }} />

        {/* SECTION 4 HEADING, "My human, off the clock." with dog + Proof attached on the right */}
        <div className="about-offclock absolute flex items-center justify-between gap-[40px] w-[1440px] px-[40px]" style={{ left: 0, top: 3080 }}>
          <div className="flex flex-col gap-[24px] items-start">
            <div className="flex flex-col gap-[16px] items-start">
              <p className={`${fontDM} font-normal text-[20px] text-[#a3a3a3]`}>When I am not designing</p>
              <p className={`${fontDM} font-normal text-[42px] text-white leading-[1.5] whitespace-nowrap`}>My human, off the clock.</p>
            </div>
            <p className={`${fontDM} font-normal text-[24px] text-[#d4d4d4] w-[749px]`} style={{ letterSpacing: "0.48px", lineHeight: 1.5 }}>
              She has three personalities:{" "}
              <span className={`${fontSerif} italic text-[#dba60e] text-[32px]`}>Chai</span> aditi,{" "}
              <span className={`${fontSerif} italic text-[#dba60e] text-[32px]`}>Travel</span> aditi,{" "}
              <span className={`${fontSerif} italic text-[#dba60e] text-[32px]`}>Foodie</span> aditi. I live with all of them.
            </p>
          </div>
          {/* Dog + bubble, keep dog SVG at 150px; HTML bubble overlays the SVG's bubble area with 14px text */}
          <div className="relative shrink-0" style={{ width: 171, height: 150 }}>
            <img alt="" src="/about/proof-attached.svg" className="block" style={{ width: 171, height: 150 }} />
            <div
              className="about-bubble absolute bg-[#dba70e] border border-[#8b6800] flex items-center justify-center px-[12px] py-[8px] rounded-bl-[14px] rounded-tl-[14px] rounded-tr-[14px]"
              style={{ left: 0, top: 88, filter: "drop-shadow(0px 4px 2px rgba(108,107,107,0.2))" }}
            >
              <p className={`${fontDM} font-medium text-[14px] text-[#1a1a1a] whitespace-nowrap leading-normal`}>
                Proof attached.
              </p>
            </div>
          </div>
        </div>

        {/* Marquee photo gallery, SVG rows looped with 24px seam between copies, 72px vertical gap between rows */}
        <div className="about-marquee-1 absolute left-0 w-[1440px] overflow-hidden" style={{ top: 3390, height: 324 }}>
          <div className="flex gap-[24px]" style={{ width: "max-content", animation: "marqueeGroup 50s linear infinite" }}>
            <img alt="" src="/about/row-1.svg" className="block shrink-0" style={{ width: 2216, height: 324 }} />
            <img alt="" src="/about/row-1.svg" className="block shrink-0" style={{ width: 2216, height: 324 }} />
          </div>
        </div>
        <div className="about-marquee-2 absolute left-0 w-[1440px] overflow-hidden" style={{ top: 3786, height: 324 }}>
          <div className="flex gap-[24px]" style={{ width: "max-content", animation: "marqueeGroupReverse 50s linear infinite" }}>
            <img alt="" src="/about/row-2.svg" className="block shrink-0" style={{ width: 2216, height: 324 }} />
            <img alt="" src="/about/row-2.svg" className="block shrink-0" style={{ width: 2216, height: 324 }} />
          </div>
        </div>

        {/* Bottom block: pink dog + bubble (centered) on left, contact pills on right, wrapped as a section */}
        <div className="about-contact absolute flex items-center justify-between w-[1440px] bg-[#0a0a0a] pt-[80px] pb-0 pl-0 pr-[40px] gap-[40px]" style={{ left: 0, top: 4230 }}>
          <div className="flex items-center shrink-0">
            <img alt="" src="/about/pink-dog.svg" className="about-pink-dog block shrink-0" style={{ width: 350, height: 426 }} />
            <div
              className="about-bubble bg-[#dba70e] border border-[#8b6800] flex items-center justify-center p-[12px] shrink-0"
              style={{
                filter: "drop-shadow(0px 4px 2px rgba(108,107,107,0.2))",
                marginLeft: -150,
                marginTop: 100,
                borderRadius: "16px 16px 16px 0",
              }}
            >
              <p className={`${fontDM} font-medium text-[14px] text-[#1a1a1a] whitespace-nowrap leading-normal`}>My job is done. Yours starts here.</p>
            </div>
          </div>
          <div className="grid gap-[4px]" style={{ gridTemplateColumns: "max-content max-content" }}>
            <ContactRow title="Email" subtitle="She responds faster than she fills my bowl." href="mailto:aditidwivedi2108@gmail.com" iconSrc="/figma/icon-gmail.svg" />
            <ContactRow title="Linkedin" subtitle="Very professional. Different energy from home." href="https://www.linkedin.com/in/dwivediaditi/" external iconSrc="/figma/icon-linkedin.svg" />
            <ContactRow title="Behance" subtitle="More work. She really never stops. I've verified this." href="https://www.behance.net/AditiDW" external noBorder iconSrc="/figma/icon-behance.svg" />
            <ContactRow title="Twitter" subtitle="No mention of me in it. Rude, but accurate." href="https://x.com/aditidw" external noBorder iconSrc="/figma/icon-twitter.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

// Marquee horizontal scroll component
// New marquee row using individual photos with exactly 24px gap, seamless loop in either direction
function PhotoMarqueeRow({
  top,
  direction,
  photos,
}: {
  top: number;
  direction: "rtl" | "ltr";
  photos: { src: string; caption: string }[];
}) {
  // 10 photos × 200 + 9 internal gaps × 24 = 2216; with 24px gap to next copy → translate -2240
  const doubled = [...photos, ...photos];
  return (
    <div className="absolute left-0 w-[1440px] overflow-hidden" style={{ top, height: 252 }}>
      <div
        className="flex gap-[24px]"
        style={{
          width: "max-content",
          animation: `${direction === "rtl" ? "photoRow" : "photoRowReverse"} 60s linear infinite`,
        }}
      >
        {doubled.map((p, i) => (
          <div key={i} className="flex flex-col gap-[12px] items-start shrink-0 w-[200px]">
            <p className={`${fontDM} font-medium text-[16px] text-white whitespace-nowrap leading-[1.5]`}>{p.caption}</p>
            <div className="bg-white overflow-hidden relative rounded-[12px] size-[200px]">
              <img alt="" src={p.src} className="absolute inset-0 size-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhotoMarquee({ captions, duration, reverse }: { captions: { src: string; caption: string }[]; duration: number; reverse?: boolean }) {
  // Duplicate the list once so the loop is seamless
  const doubled = [...captions, ...captions];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-[24px]"
        style={{
          width: "max-content",
          animation: `${reverse ? "marqueeReverse" : "marquee"} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex flex-col gap-[12px] items-start shrink-0 w-[200px]">
            <p className={`${fontDM} font-medium text-[16px] text-white whitespace-nowrap leading-[1.5]`}>{item.caption}</p>
            <div className="bg-white overflow-hidden relative rounded-[12px] size-[200px]">
              <img alt="" src={item.src} className="absolute inset-0 size-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Components ─────────────────────────────────────────────────────

// Contact row, brand icon + title + subtitle, wrapped in a bordered box
function ContactRow({
  title,
  subtitle,
  href,
  external,
  iconSrc,
}: {
  title: string;
  subtitle: string;
  href: string;
  external?: boolean;
  iconSrc: string;
  noBorder?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="contact-link flex gap-[16px] items-start p-[32px] w-full"
    >
      <img alt="" src={iconSrc} className="block size-[32px] object-contain shrink-0" />
      <div className="flex flex-col items-start gap-[12px]">
        <p className={`${fontDM} font-medium text-[18px] text-white leading-none`}>{title}</p>
        <p className={`${fontDM} font-normal text-[14px] text-[#a3a3a3] leading-[1.5] whitespace-nowrap`}>{subtitle}</p>
      </div>
    </a>
  );
}

function PrincipleCard({ bg, border, tag, title, body }: { bg: string; border: string; tag: string; title: string; body: string }) {
  return (
    <div className="about-principle flex flex-col items-start p-[16px] rounded-[12px] w-full" style={{ background: bg }}>
      <div className="border border-dashed flex flex-col gap-[11px] items-start p-[16px] rounded-[8px] w-full" style={{ borderColor: border }}>
        <div className="text-white">
          <p className="text-[14px] mb-0 leading-[1.5]" style={{ letterSpacing: "0.56px" }}>{tag}</p>
          <p className="text-[16px] leading-[1.5]">{title}</p>
        </div>
        <p className="text-[14px] text-[#d4d4d4] leading-[1.5] w-full">{body}</p>
      </div>
    </div>
  );
}

function SkillChip({
  text,
  rotate,
  px,
  py,
  fontSize,
  primary,
  accent,
  innerRotate,
}: {
  text: string;
  rotate: number;
  px: number;
  py: number;
  fontSize: number;
  primary?: boolean;
  accent?: boolean;
  innerRotate?: number;
}) {
  const bg = accent ? "rgba(201,169,110,0.05)" : "rgba(237,229,211,0.02)";
  const borderColor = accent ? "rgba(201,169,110,0.45)" : "rgba(237,229,211,0.18)";
  // primary param is accepted but treated identically to other chips now
  void primary;
  return (
    <div className="skill-enter">
      <div className="flex items-center justify-center" style={{ transform: `rotate(${rotate}deg)` }}>
        <div
          className="about-skill flex items-center overflow-hidden rounded-[999px]"
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
          <div style={{ transform: innerRotate ? `rotate(${innerRotate}deg)` : undefined }}>
            <p
              className={`${fontDM} font-semibold`}
              style={{ color: "#b5a992", fontSize, whiteSpace: "nowrap", lineHeight: "normal" }}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({
  role,
  date,
  body,
  company,
  location,
  logoSrc,
  logoBg,
  logoInset,
  isCoverLogo,
  locIcon,
}: {
  role: string;
  date: string;
  body: string;
  company: string;
  location: string;
  logoSrc: string;
  logoBg: string;
  logoInset?: { top: string; bottom: string; left: string; right: string };
  isCoverLogo?: boolean;
  locIcon: string;
}) {
  return (
    <div className="about-exp-card bg-[#141414] border border-[#222] flex flex-col gap-[16px] items-start px-[24px] py-[12px] rounded-[24px] w-full">
      <div className={`${fontDM} font-medium flex flex-col gap-[17px] items-start w-full`}>
        <div className="flex items-center justify-between w-full whitespace-nowrap leading-[1.5]">
          <p className="text-[20px] text-white">{role}</p>
          <p className="text-[14px] text-[#d4d4d4]">{date}</p>
        </div>
        <p className="text-[14px] text-[#d4d4d4] leading-[1.5] text-justify w-full">{body}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-[4px] items-center w-[323px]">
          <div className="overflow-hidden relative size-[24px] flex items-center justify-center" style={{ background: logoBg }}>
            {isCoverLogo ? (
              <img alt="" src={logoSrc} className="block max-w-full max-h-full object-contain" />
            ) : (
              <div className="absolute" style={logoInset}>
                <img alt="" src={logoSrc} className="absolute inset-0 size-full" />
              </div>
            )}
          </div>
          <p className={`${fontDM} font-medium text-[14px] text-[#d4d4d4] whitespace-nowrap leading-[1.5]`}>{company}</p>
        </div>
        <div className="flex gap-[4px] items-center justify-end">
          <div className="relative size-[16px]">
            <img alt="" src={locIcon} className="absolute inset-0 size-full" />
          </div>
          <p className={`${fontDM} font-medium text-[14px] text-white whitespace-nowrap leading-[1.5]`}>{location}</p>
        </div>
      </div>
    </div>
  );
}

function PhotoCard({
  left,
  top,
  caption,
  src,
  imgStyle,
  imgWrap,
  rotate,
  innerW,
  innerH,
  clip,
}: {
  left: number;
  top: number;
  caption: string;
  src: string;
  imgStyle?: React.CSSProperties;
  imgWrap?: string;
  rotate?: string;
  innerW?: number;
  innerH?: number;
  clip?: boolean;
}) {
  return (
    <div className="absolute flex flex-col gap-[12px] items-start w-[200px]" style={{ left, top }}>
      <p className={`${fontDM} font-medium text-[16px] text-white whitespace-nowrap leading-[1.5]`}>{caption}</p>
      <div className="bg-white overflow-hidden relative rounded-[12px] size-[200px]">
        {imgWrap ? (
          <div className={imgWrap}>
            <div className={rotate ?? ""} style={{ width: innerW, height: innerH, position: "relative" }}>
              <img alt="" src={src} className="absolute inset-0 size-full max-w-none object-cover pointer-events-none" />
            </div>
          </div>
        ) : (
          <div className="absolute" style={imgStyle}>
            {clip ? (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" src={src} className="absolute inset-0 size-full max-w-none object-cover" style={{ height: "99.52%", left: 0, top: 0, width: "100%" }} />
              </div>
            ) : (
              <img alt="" src={src} className="absolute inset-0 size-full max-w-none object-cover pointer-events-none" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
