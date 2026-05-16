"use client";

/* eslint-disable @next/next/no-img-element */
// Pixel-perfect mobile homepage matching Figma node 6002:20617.
// 393px layout, 16px gutters → 361px content column.

const fontDM = "font-[family-name:var(--font-dm-sans)]";
const fontSerif = "font-[family-name:var(--font-instrument-serif)]";

const img = {
  illustration: "/figma-mobile/illustration.png",
  insurance: "/figma-mobile/insurance.png",
  postLogin: "/figma-mobile/post-login.png",
  preLogin: "/figma-mobile/pre-login.png",
  driveasy: "/figma-mobile/driveasy.png",
  usability: "/figma-mobile/usability.png",
  heatmap: "/figma-mobile/heatmap.png",
  aditiPhoto: "/figma-mobile/aditi-photo.png",
  casperPhoto: "/figma-mobile/casper-photo.png",
};

const ArrowUpRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M7 17 17 7M9 7h8v8" stroke="#e8643a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <rect x="2" y="5" width="12" height="9" rx="1.2" stroke="#d4d4d4" strokeWidth="1.2" />
    <path d="M6 5V3.5A1 1 0 0 1 7 2.5h2A1 1 0 0 1 10 3.5V5" stroke="#d4d4d4" strokeWidth="1.2" />
    <path d="M2 9h12" stroke="#d4d4d4" strokeWidth="1.2" />
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M8 14s4.5-4.5 4.5-8a4.5 4.5 0 1 0-9 0c0 3.5 4.5 8 4.5 8Z" stroke="#d4d4d4" strokeWidth="1.2" strokeLinejoin="round" />
    <circle cx="8" cy="6" r="1.6" stroke="#d4d4d4" strokeWidth="1.2" />
  </svg>
);

// ── Bubble primitive ──
type BubbleRadius = "tl-tr-bl" | "tl-tr-br" | "tl-bl-br";

function Bubble({
  children,
  radius,
  className = "",
  style,
}: {
  children: React.ReactNode;
  radius: BubbleRadius;
  className?: string;
  style?: React.CSSProperties;
}) {
  const radii: Record<BubbleRadius, string> = {
    "tl-tr-bl": "rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[16px]",
    "tl-tr-br": "rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px]",
    "tl-bl-br": "rounded-tl-[16px] rounded-bl-[16px] rounded-br-[16px]",
  };
  return (
    <div
      className={`inline-flex items-center justify-center border border-[#8b6800] bg-black ${radii[radius]} ${className}`}
      style={{ filter: "drop-shadow(0 4px 2px rgba(108,107,107,0.2))", ...style }}
    >
      {children}
    </div>
  );
}

function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  href,
  children,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  const content = (
    <>
      <div
        className="relative h-[250px] w-full overflow-hidden rounded-[16px]"
        style={{
          backgroundImage:
            "linear-gradient(0.76deg, #f4f3f3 17.4%, #fff 13%, #fff 51.9%, #fff 95%, #f4f3f3 126%)",
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 size-full object-cover pointer-events-none"
        />
      </div>
      <div className="flex w-full flex-col gap-[12px]">
        <p className={`${fontDM} font-semibold text-[20px] text-white leading-normal whitespace-nowrap`}>
          {title}
        </p>
        <div className={`${fontDM} font-normal text-[14px] leading-[1.5] text-[#d4d4d4]`}>
          {children}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-[24px] border-2 border-[#222] bg-[#141414] p-[16px] flex flex-col gap-[16px] no-underline text-inherit"
      >
        {content}
      </a>
    );
  }

  return (
    <article className="w-full rounded-[24px] border-2 border-[#222] bg-[#141414] p-[16px] flex flex-col gap-[16px]">
      {content}
    </article>
  );
}

export function MobileHomepage() {
  return (
    <div
      className="w-full bg-[#0c0a0b] text-white overflow-x-hidden pt-[72px]"
      style={{ fontFamily: "var(--font-dm-sans), system-ui" }}
    >
      {/* ═══ 1. HERO — Figma: 6002:20604, 393×698 ═══ */}
      <section className="flex flex-col items-center bg-[#0c0a0b] px-[16px] pt-[32px] pb-[32px]">
        <div className="flex w-full flex-col" style={{ gap: 73 }}>
          {/* Subtitle + headline + illustration group: gap=24+4+24 */}
          <div className="flex flex-col gap-[24px] items-start">
            <p className={`${fontSerif} italic text-[16px] text-white leading-normal`}>
              sr. Associate UI/UX Designer
            </p>
            <p className={`${fontDM} font-normal text-[24px] leading-[1.5] text-white`}>
              I design with{" "}
              <span className={`${fontSerif} italic text-[#dba80e]`}>empathy</span>, think in{" "}
              <span className={`${fontSerif} italic text-[#dba80e]`}>systems</span>, and
              believe the best experiences are the ones{" "}
              <span className={`${fontSerif} italic text-[#dba80e]`}>nobody notices</span>
              — because they just work
              <span className={`${fontSerif} italic text-white`}>.</span>
            </p>
          </div>

          {/* Illustration + 3 bubbles — Figma group: 361×326 */}
          <div className="relative w-[361px] overflow-visible" style={{ height: 326 }}>
            {/* Illustration — 326×326 at left edge */}
            <div className="absolute left-0 top-0 size-[326px]">
              <img
                alt="Aditi illustration"
                src={img.illustration}
                className="size-full object-cover pointer-events-none"
              />
            </div>

            {/* Bubble 1 — "Hi, I am Aditi", Figma: (0, 0) */}
            <Bubble radius="tl-tr-bl" className="absolute p-[8px]" style={{ left: 0, top: 0 }}>
              <span className={`${fontDM} font-medium text-[#d4d4d4] text-[14px] leading-none whitespace-nowrap`}>
                Hi, I am
              </span>
              <span className={`${fontSerif} italic text-white text-[20px] leading-none whitespace-nowrap ml-[6px]`}>
                Aditi
              </span>
            </Bubble>

            {/* Bubble 2 — "and I'm Casper. Her supervisor", Figma: 140×55 pad=8 */}
            <div className="absolute" style={{ left: 213, top: 159 }}>
              <Bubble radius="tl-tr-br" className="p-[8px]">
                <p className={`${fontDM} font-medium text-[#d4d4d4] text-[14px] leading-[1.4]`} style={{ width: 124 }}>
                  and I&rsquo;m <span className={`${fontSerif} italic text-white text-[16px]`}>Casper.</span>{" "}
                  Her supervisor
                </p>
              </Bubble>
            </div>

            {/* Bubble 3 — "Scroll on. She's done good work", Figma: (234, 249) pad=8 */}
            <div className="absolute" style={{ left: 234, top: 249 }}>
              <Bubble radius="tl-tr-br" className="p-[8px]">
                <span className={`${fontDM} font-medium text-[14px] text-[#d4d4d4] leading-none`}>
                  Scroll on. She&rsquo;s done good work
                </span>
              </Bubble>
            </div>
          </div>

          {/* Work + location rows */}
          <div className="flex w-full flex-col gap-[12px] pt-[4px]">
            <div className="flex items-start gap-[9px]">
              <BriefcaseIcon />
              <p className={`${fontDM} text-[14px] leading-[1.5] font-normal text-[#d4d4d4]`}>
                Sr. Associate UI/UX Designer at{" "}
                <span className="font-normal text-white capitalize tracking-[-0.28px] whitespace-nowrap">
                  Instantpay India Ltd.
                </span>
              </p>
            </div>
            <div className="flex items-center gap-[9px]">
              <PinIcon />
              <p className={`${fontDM} text-[14px] leading-[1.5] font-normal text-[#d4d4d4]`}>
                Delhi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. SELECTED WORK — Figma: 6002:20605, 393×2058 ═══ */}
      <section className="flex w-full flex-col gap-[49px] bg-[#111] px-[16px] py-[62px]">
        <div className="flex flex-col gap-[12px] items-start">
          <p className={`${fontDM} font-normal text-[16px] leading-[1.5] text-[#a3a3a3]`}>
            Selected Work
          </p>
          <p className={`${fontDM} font-semibold text-[24px] text-white leading-[1.5]`}>
            The proof is in the pixels.
          </p>
        </div>
        <div className="flex w-full flex-col gap-[32px]">
          <ProjectCard imageSrc={img.insurance} imageAlt="Insurance" title="Insurance" href="https://insurancepost.framer.website/">
            End-to-end insurance flow across web and mobile — policy discovery to post-purchase. Owned design solo from research to handoff. Now the primary insurance buying flow used by both users and agents at Instantpay.
          </ProjectCard>
          <ProjectCard imageSrc={img.postLogin} imageAlt="Post-login" title="Post-login Redesign" href="https://postlogin.framer.website/">
            Redesigned the post-login dashboard for Instantpay&rsquo;s web platform. Restructured information hierarchy, simplified daily workflows, and shipped a new component library now used across the product.
          </ProjectCard>
          <ProjectCard imageSrc={img.preLogin} imageAlt="Pre-login" title="Pre-login Web Revamp" href="https://prelogin.framer.website/">
            Rebuilt Instantpay&rsquo;s pre-login experience — landing pages, sign-up, and onboarding. Redesigned for clarity and conversion. Drove a 42.3% lift in new user signups.
          </ProjectCard>
          <ProjectCard imageSrc={img.driveasy} imageAlt="DrivEasy" title="DrivEasy" href="https://driveasy.framer.website/">
            DrivEasy is a digital platform that makes it easier for individuals to lease or subscribe to vehicles. Designed the mobile experience end-to-end — discovery, browsing, and subscription flows.
          </ProjectCard>
        </div>
      </section>

      {/* ═══ 4. BEYOND DESIGN — Figma: 6002:20607, 393×1117 ═══ */}
      <section className="flex w-full flex-col gap-[49px] bg-[#0a0a0a] px-[16px] py-[62px]">
        <div className="flex flex-col gap-[12px] items-start">
          <p className={`${fontDM} font-normal text-[16px] leading-[1.5] text-[#a3a3a3]`}>
            Beyond Design
          </p>
          <p className={`${fontDM} font-semibold text-[24px] text-white leading-[1.5]`}>
            Not just pixels. Words too
          </p>
        </div>
        <div className="flex w-full flex-col gap-[32px]">
          <ProjectCard imageSrc={img.usability} imageAlt="Usability Testing" title="Usability Testing - Article" href="https://www.linkedin.com/pulse/usability-testing-bridge-ux-design-studios%3FtrackingId=MQAfHV9XQyWJrVoELsrEeA%253D%253D/?trackingId=MQAfHV9XQyWJrVoELsrEeA%3D%3D">
            Published while at Bridge UX Design Studio. A practical guide to running usability tests that actually move the work forward — methods, mistakes, and how to read results honestly.
          </ProjectCard>
          <ProjectCard imageSrc={img.heatmap} imageAlt="Heat Mapping" title="Heat Mapping - Article" href="https://www.linkedin.com/pulse/heat-mapping-bridge-ux-design-studios%3FtrackingId=AwI5rMuNRa%252B4O2zsHvhOXw%253D%253D/?trackingId=AwI5rMuNRa%2B4O2zsHvhOXw%3D%3D">
            Published while at Bridge UX Design Studio. A look at what heat maps actually tell you about user behaviour — and what they don&rsquo;t. With examples and honest caveats.
          </ProjectCard>
        </div>
      </section>

      {/* ═══ 5. ON THE SIDE — DUKPDF, Figma: 6002:20608, 393×670 ═══ */}
      <section className="flex w-full flex-col gap-[49px] bg-[#111] px-[16px] py-[62px]">
        <div className="flex flex-col gap-[12px] items-start">
          <p className={`${fontDM} font-normal text-[16px] leading-[1.5] text-[#a3a3a3]`}>
            On the side
          </p>
          <p className={`${fontDM} font-semibold text-[24px] text-white leading-[1.5]`}>
            Her side hustle
          </p>
        </div>
        <a
          href="https://dukpdf.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-[24px] border-2 border-[#222] bg-[#141414] p-[16px] flex flex-col gap-[16px] no-underline text-inherit"
        >
          <div className="relative h-[250px] w-full overflow-hidden rounded-[16px] bg-[#1a1a1a] flex items-center justify-center p-[24px]">
            <img
              alt="DukPdf"
              src="/figma/dukpdf-wordmark.svg"
              className="block max-w-full max-h-full object-contain pointer-events-none"
            />
          </div>
          <div className="flex w-full flex-col gap-[12px]">
            <p className={`${fontDM} font-semibold text-[20px] text-white leading-normal`}>
              DukPdf
            </p>
            <p className={`${fontDM} font-normal text-[14px] leading-[1.5] text-[#d4d4d4]`}>
              DukPdf — a free PDF toolkit for everyday tasks: merge, split, compress, convert, and more. Owned product design from concept to launch as a freelance engagement.{" "}
              <span className="font-bold">Now live.</span>
            </p>
          </div>
        </a>
      </section>

      {/* ═══ 6. AS A DESIGNER — Figma: 6002:20609, 393×977, pad=16/16/62/62 gap=24 ═══ */}
      <section className="relative flex w-full flex-col gap-[24px] bg-[#0a0a0a] px-[16px] pt-[62px] pb-[62px]">
        <div className="flex flex-col gap-[24px] items-start w-full">
          <div className="flex flex-col items-start">
            <p className={`${fontDM} font-normal text-[16px] leading-[1.5] text-[#a3a3a3]`}>
              As a Designer
            </p>
            <p className="text-white leading-[1.5]" style={{ marginTop: 12 }}>
              <span className={`${fontDM} font-semibold text-[20px]`}>My human, </span>
              <span className={`${fontSerif} italic font-semibold text-[20px] text-[#dba80e]`}>Professionally</span>
            </p>
          </div>
          <p className={`${fontDM} font-normal text-[14px] leading-[1.5] text-[#d4d4d4]`} style={{ letterSpacing: "0.28px" }}>
            I&rsquo;ve spent two years designing across fintech, studios, and freelance — from end-to-end product flows to brand systems to side projects shipped live. The best work happens at the seams: where research turns into systems, where systems turn into screens, where pixels turn into something people actually use. I take full ownership from insight to handoff, and I&rsquo;m currently weaving AI workflows into how I prototype, research, and ship.
          </p>
        </div>

        <div className="relative flex w-full flex-col gap-[74px]">
          {/* Aditi photo — 361×403, rounded-[32px] */}
          <div className="relative w-full overflow-hidden rounded-[32px]" style={{ aspectRatio: "361 / 403" }}>
            <img
              alt="Aditi"
              src={img.aditiPhoto}
              className="absolute inset-0 size-full object-cover pointer-events-none"
            />
          </div>

          {/* More about me CTA */}
          <a
            href="/about"
            className="inline-flex items-center justify-center gap-[10px] self-start rounded-[91px] bg-[#291c18] px-[32px] py-[12px] transition-colors hover:bg-[#3a2620]"
          >
            <span className={`${fontSerif} italic text-[#e8643a] text-[24px] leading-normal`}>
              More about me
            </span>
            <ArrowUpRight />
          </a>
        </div>

        {/* Casper avatar + bubble — over the photo */}
        <div className="pointer-events-none absolute" style={{ left: 181, top: 710 }}>
          {/* Yellow circle 62px */}
          <div className="absolute size-[62px] overflow-hidden rounded-full bg-[#dba80e]" style={{ left: 119, top: 0 }}>
            <img
              alt="Casper"
              src={img.casperPhoto}
              className="absolute object-cover pointer-events-none"
              style={{ width: 61, height: 79, left: "calc(50% + 0.5px - 30.5px)", top: "calc(50% + 2.5px - 39.5px)" }}
            />
          </div>
          {/* Bubble — "No paparazzi, please." */}
          <Bubble radius="tl-bl-br" className="absolute p-[12px]" style={{ left: 0, top: 49 }}>
            <p className={`${fontDM} font-medium text-[14px] text-[#d4d4d4] whitespace-nowrap leading-normal`}>
              &ldquo;No paparazzi, please.&rdquo;
            </p>
          </Bubble>
        </div>
        {/* Reserve space for the absolute elements */}
        <div className="h-[120px] w-full" aria-hidden />
      </section>

      {/* ═══ 7. CONTACT — Figma: 6002:20610, 393×867, pad=16/16/62/32 gap=62 ═══ */}
      <section className="relative flex w-full flex-col gap-[62px] overflow-clip bg-[#0a0a0a] px-[16px] pt-[62px] pb-[32px]">
        {/* Maroon glow — large rotated radial behind heading */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: "calc(50% + 41.89px)",
            top: "calc(50% - 402.69px)",
            transform: "translate(-50%, -50%) rotate(-1.58deg)",
            width: 1862.4,
            height: 607.1,
          }}
          aria-hidden
        >
          <div
            className="size-full"
            style={{
              background: "linear-gradient(to right, rgba(255,0,4,0.24), rgba(174,0,105,0.24))",
              filter: "blur(95px)",
              borderRadius: "50%",
            }}
          />
        </div>

        <div className="relative flex w-full flex-col gap-[24px] items-start">
          <p className={`${fontDM} font-medium text-[24px] text-white leading-[1.5] w-full whitespace-pre-wrap`}>
            <span className={`${fontSerif} italic text-[#dba80e]`}>Let&rsquo;s make</span>{"\n"}
            something worth remembering.
          </p>
          <p className={`${fontDM} font-normal text-[20px] text-[#d4d4d4] leading-[1.5] w-full`}>
            She brings the ideas, the craft, and the obsessive attention to detail. I bring moral support and occasional interruptions. Between us, you&rsquo;re in good hands.
          </p>
        </div>

        {/* Contact rows — Figma: gap=24 between rows */}
        <div className="relative flex w-full flex-col gap-[24px]">
          <ContactRow
            title="Email"
            subtitle="She responds faster than she fills my bowl."
            href="mailto:aditidwivedi2108@gmail.com"
            iconSrc="/figma/icon-gmail.svg"
            iconSize={24}
            titleSize={16}
            subtitleSize={14}
          />
          <ContactRow
            title="Linkedin"
            subtitle="Very professional. Different energy from home."
            href="https://www.linkedin.com/in/dwivediaditi/"
            iconSrc="/figma/icon-linkedin.svg"
            external
          />
          <ContactRow
            title="Behance"
            subtitle="More work. She really never stops. I've verified this."
            href="https://www.behance.net/AditiDW"
            iconSrc="/figma/icon-behance.svg"
            external
          />
          <ContactRow
            title="Twitter"
            subtitle="No mention of me in it. Rude, but accurate."
            href="https://x.com/aditidw"
            external
            iconSrc="/figma/icon-twitter.svg"
            noBorder
          />
        </div>
      </section>
    </div>
  );
}

function ContactRow({
  title,
  subtitle,
  href,
  external,
  noBorder,
  iconSrc,
  iconSize = 24,
  titleSize = 16,
  subtitleSize = 14,
}: {
  title: string;
  subtitle: string;
  href: string;
  external?: boolean;
  noBorder?: boolean;
  iconSrc: string;
  iconSize?: number;
  titleSize?: number;
  subtitleSize?: number;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group flex w-full items-start py-[12px] gap-[12px] ${noBorder ? "" : "border-b border-[#404040]"}`}
    >
      <img alt="" src={iconSrc} className={`block shrink-0 object-contain rounded-[6px]`} style={{ width: iconSize, height: iconSize }} />
      <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
        <p className={`${fontDM} font-medium text-white leading-[1.3]`} style={{ fontSize: titleSize }}>{title}</p>
        <p className={`${fontDM} font-normal text-[#a3a3a3] leading-[1.5]`} style={{ fontSize: subtitleSize }}>{subtitle}</p>
      </div>
    </a>
  );
}
