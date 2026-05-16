/* eslint-disable @next/next/no-img-element */
// Pixel-perfect translation of Figma node 5202:15007 ("homepage").
// Fixed 1440px desktop layout, sections are absolute-positioned per Figma.

const img = {
  illustration: "/figma/illustration.png",
  usabilityThumb: "/figma/usability-thumb.png",
  heatmappingThumb: "/figma/heatmapping-thumb.png",
  insurance: "/figma/insurance.png",
  postLogin: "/figma/post-login.png",
  preLogin: "/figma/pre-login.png",
  driveasy: "/figma/driveasy.png",
  aditiPhoto: "/figma/aditi-photo.png",
  casperPhoto: "/figma/casper-photo.png",
  iconBriefcase: "/figma/icon-work.svg",
  iconLocation: "/figma/icon-location.svg",
  arrowDecoration: "/figma/arrow-decoration.svg",
  maroonGlow: "/figma/maroon-glow.svg",
  iconContact: "/figma/icon-contact.png",
  iconArrowCta: "/figma/icon-arrow-cta.svg",
};

// Tailwind-friendly font shortcuts mapping to next/font CSS variables.
const fontDM = "font-[family-name:var(--font-dm-sans)]";
const fontSerif = "font-[family-name:var(--font-instrument-serif)]";
const fontManrope = "font-[family-name:var(--font-manrope)]";
const fontLora = "font-[family-name:var(--font-lora)]";

import { MobileHomepage } from "./components/mobile/MobileHomepage";

export default function Home() {
  return (
    <>
      {/* Mobile (≤640px): Figma 1:1 layout */}
      <div className="block sm:hidden">
        <MobileHomepage />
      </div>

      {/* Desktop (>640px): existing 1440px canvas */}
      <div className="hidden sm:block">
        <div className="page-shell min-h-screen bg-[#0a0a0a]">
          <div className="canvas-1440 relative w-[1440px] min-h-[5800px] bg-[#0a0a0a] overflow-hidden">
        {/* HERO (5202:15263) */}
        <div className="hero-section absolute left-1/2 -translate-x-1/2 top-[101px] w-[1440px] bg-[#0a0a0a] overflow-hidden flex flex-col items-center pb-[80px]">
          <div className="hero-row flex items-end pr-[139px] w-[1360px]">
            <div className="hero-col flex flex-col gap-[124px] items-start mr-[-139px] w-[688px]">
              <div className="flex flex-col gap-[24px] items-start w-full">
                <p className={`${fontSerif} italic text-[24px] text-white leading-normal`}>
                  Sr. Associate UI/UX Designer
                </p>
                <p className={`hero-headline ${fontDM} font-normal text-[42px] leading-[1.5] text-white w-[688px]`}>
                  I design with{" "}
                  <span className={`${fontSerif} italic text-[#dba80e] gold-accent`}>empathy</span>, think in{" "}
                  <span className={`${fontSerif} italic text-[#dba80e] gold-accent`}>systems</span>, and
                  believe the best experiences are the ones{" "}
                  <span className={`${fontSerif} italic text-[#dba80e] gold-accent`}>nobody notices</span>,
                  because they just work
                  <span className={`${fontSerif} italic text-white`}>.</span>
                </p>
              </div>
              <div className="hero-designation flex flex-col gap-[12px] items-start w-[413.71px]">
                <div className="flex gap-[9px] items-start w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <img alt="" src={img.iconBriefcase} className="absolute inset-0 size-full" />
                  </div>
                  <p className="hero-designation-text leading-[1.5] whitespace-nowrap">
                    <span className={`${fontDM} font-semibold text-[#d4d4d4] text-[16px]`}>
                      Sr. Associate UI/UX Designer at
                    </span>
                    <span className={`${fontDM} font-semibold text-[16px]`}> </span>
                    <span
                      className={`${fontDM} font-bold capitalize text-[24px] text-white`}
                      style={{ letterSpacing: "-0.48px" }}
                    >
                      Instantpay India Ltd.
                    </span>
                  </p>
                </div>
                <div className="flex gap-[9px] items-center">
                  <div className="relative shrink-0 size-[24px]">
                    <img alt="" src={img.iconLocation} className="absolute inset-0 size-full" />
                  </div>
                  <p className={`${fontDM} font-semibold text-[16px] text-[#d4d4d4] leading-[1.5] whitespace-nowrap`}>
                    Delhi
                  </p>
                </div>
              </div>
            </div>
            {/* Right column: illustration + 3 floating cards */}
            <div className="hero-illustration relative shrink-0 mr-[-139px]" style={{ width: 652, height: 652 }}>
              <div className="absolute inset-0 size-[652px]">
                <img
                  alt=""
                  src={img.illustration}
                  className="absolute inset-0 size-full object-cover pointer-events-none"
                />
              </div>
              {/* Bubble 1, "Hi, I am Aditi", appears at 0.8s */}
              <div
                className="aditi-bubble absolute anim-bubble-in"
                style={{ left: 49, top: 65, animationDelay: "0.8s" }}
              >
                <div
                  className="aditi-bubble-inner bg-black border border-[#8b6800] inline-flex items-baseline gap-[6px] p-[12px] rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px] anim-float"
                  style={{
                    filter: "drop-shadow(0px 4px 2px rgba(108,107,107,0.2))",
                    animationDelay: "1.4s",
                  }}
                >
                  <span className={`aditi-bubble-pre ${fontDM} font-medium text-[#d4d4d4] text-[14px] leading-none whitespace-nowrap`}>
                    Hi, I am
                  </span>
                  <span className={`aditi-bubble-name ${fontSerif} italic text-white text-[20px] leading-none whitespace-nowrap`}>
                    Aditi
                  </span>
                </div>
              </div>
              {/* Bubble 2, "and I'm Casper. Her supervisor", appears at 2.0s */}
              <div
                className="casper-bubble absolute anim-bubble-in"
                style={{ left: 437, top: 403, animationDelay: "1.6s" }}
              >
                <div
                  className="casper-bubble-inner bg-black border border-[#8b6800] inline-flex items-baseline gap-[6px] p-[10px_14px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] anim-float whitespace-nowrap"
                  style={{
                    filter: "drop-shadow(0px 4px 2px rgba(108,107,107,0.2))",
                    animationDelay: "2.2s",
                  }}
                >
                  <span className={`casper-bubble-pre ${fontDM} font-medium text-[#d4d4d4] text-[16px] leading-none`}>
                    and I&rsquo;m
                  </span>
                  <span className={`casper-bubble-name ${fontSerif} italic text-white text-[24px] leading-none`}>
                    Casper.
                  </span>
                  <span className={`casper-bubble-pre ${fontDM} font-medium text-[#d4d4d4] text-[16px] leading-none`}>
                    Her supervisor
                  </span>
                </div>
              </div>
              {/* Bubble 3, "Scroll on...", appears at 3.2s */}
              <div
                className="casper-bubble absolute anim-bubble-in"
                style={{ left: 460, top: 477, animationDelay: "2s" }}
              >
                <div
                  className="casper-bubble-inner bg-black border border-[#8b6800] inline-flex items-center p-[10px_14px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] anim-float whitespace-nowrap"
                  style={{
                    filter: "drop-shadow(0px 4px 2px rgba(108,107,107,0.2))",
                    animationDelay: "2.6s",
                  }}
                >
                  <span className={`casper-bubble-pre ${fontDM} font-medium text-[14px] text-[#d4d4d4] leading-none`}>
                    Scroll on. She&rsquo;s done good work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SELECTED WORK (5202:15181) */}
        <div id="works" className="scroll-mt-[100px] absolute left-1/2 -translate-x-1/2 top-[833px] w-[1440px] bg-[#111] flex flex-col gap-[49px] items-start px-[40px] py-[120px]">
          {/* Decorative arrow, native SVG already points down */}
          <div className="absolute anim-pulse-soft" style={{ left: 856, top: -23, width: 151, height: 151 }}>
            <img
              alt=""
              src={img.arrowDecoration}
              className="block size-full"
            />
          </div>
          <div className="flex flex-col gap-[12px] items-start">
            <p className={`${fontDM} font-normal leading-[1.5] text-[20px] text-[#a3a3a3]`}>
              Selected Work
            </p>
            <p className={`${fontDM} font-medium text-[42px] text-white whitespace-nowrap leading-normal`}>
              The proof is in the pixels.
            </p>
          </div>
          <div className="flex flex-col gap-[32px] items-start w-full">
            <div className="work-row flex gap-[32px] items-stretch w-full">
              <ProjectCard
                imageSrc={img.insurance}
                imageStyle={{
                  height: 441,
                  width: 662,
                  left: "calc(50% - 18px)",
                  top: "calc(50% + 0.5px)",
                  transform: "translate(-50%, -50%)",
                }}
                title="Insurance"
                href="https://insurancepost.framer.website/"
                description="End-to-end insurance flow across web and mobile, policy discovery to post-purchase. Owned design solo from research to handoff. Now the primary insurance buying flow used by both users and agents at Instantpay."
              />
              <ProjectCard
                imageSrc={img.postLogin}
                imageStyle={{
                  height: 400,
                  width: 616,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  objectPosition: "bottom",
                }}
                title="Post-login Redesign"
                href="https://postlogin.framer.website/"
                description="Redesigned the post-login dashboard for Instantpay's web platform. Restructured information hierarchy, simplified daily workflows, and shipped a new component library now used across the product."
              />
            </div>
            <div className="work-row flex gap-[32px] items-stretch w-full">
              <ProjectCard
                imageSrc={img.preLogin}
                imageStyle={{
                  height: 451,
                  width: 649,
                  left: "calc(50% + 19.5px)",
                  top: "calc(50% + 0.5px)",
                  transform: "translate(-50%, -50%)",
                }}
                title="Pre-login Web Revamp"
                href="https://prelogin.framer.website/"
                description="Rebuilt Instantpay's pre-login experience, landing pages, sign-up, and onboarding. Redesigned for clarity and conversion. Drove a 42.3% lift in new user signups."
              />
              <ProjectCard
                imageSrc={img.driveasy}
                imageStyle={{
                  height: 437,
                  width: 624,
                  left: "50%",
                  top: "calc(50% + 2.5px)",
                  transform: "translate(-50%, -50%)",
                }}
                title="DrivEasy"
                href="https://driveasy.framer.website/"
                description="DrivEasy is a digital platform that makes it easier for individuals to lease or subscribe to vehicles. Designed the mobile experience end-to-end, discovery, browsing, and subscription flows."
              />
            </div>
          </div>
        </div>

        {/* BEYOND DESIGN (5202:15404) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[2362px] w-[1440px] bg-[#0a0a0a] flex flex-col gap-[49px] items-start px-[40px] py-[120px]">
          <div className={`${fontDM} font-normal flex flex-col gap-[12px] items-start leading-[1.5] w-[578px]`}>
            <p className="text-[20px] text-[#a3a3a3]">Beyond Design</p>
            <p className="text-[42px] text-white whitespace-nowrap">
              Not just pixels. Words too
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <div className="work-row flex gap-[32px] items-stretch w-full">
              <ProjectCard
                imageSrc={img.usabilityThumb}
                imageStyle={{
                  height: "130.25%",
                  width: "127.62%",
                  left: "-15.55%",
                  top: "-15%",
                }}
                imageWrapClassName="left-[calc(50%+7.5px)] top-1/2 w-[631px] h-[400px] -translate-x-1/2 -translate-y-1/2"
                title="Usability Testing - Article"
                href="https://www.linkedin.com/pulse/usability-testing-bridge-ux-design-studios%3FtrackingId=MQAfHV9XQyWJrVoELsrEeA%253D%253D/?trackingId=MQAfHV9XQyWJrVoELsrEeA%3D%3D"
                description="Published while at Bridge UX Design Studio. A practical guide to running usability tests that actually move the work forward, methods, mistakes, and how to read results honestly."
              />
              <ProjectCard
                imageSrc={img.heatmappingThumb}
                imageStyle={{
                  height: "124.25%",
                  width: "138.49%",
                  left: "-19.24%",
                  top: "-12.12%",
                }}
                imageWrapClassName="left-1/2 top-1/2 w-[616px] h-[400px] -translate-x-1/2 -translate-y-1/2"
                title="Heat Mapping - Article"
                href="https://www.linkedin.com/pulse/heat-mapping-bridge-ux-design-studios%3FtrackingId=AwI5rMuNRa%252B4O2zsHvhOXw%253D%253D/?trackingId=AwI5rMuNRa%2B4O2zsHvhOXw%3D%3D"
                description="Published while at Bridge UX Design Studio. A look at what heat maps actually tell you about user behaviour, and what they don't. With examples and honest caveats."
              />
            </div>
          </div>
        </div>

        {/* SIDE HUSTLE, DUKPDF (5661:71270) */}
        <div className="absolute -translate-x-1/2 left-[calc(50%-4px)] top-[3305px] w-[1440px] bg-[#0a0a0a] flex flex-col gap-[49px] items-start px-[40px] py-[120px]">
          <div className={`${fontDM} font-normal flex flex-col gap-[12px] items-start leading-[1.5] w-[578px]`}>
            <p className="text-[20px] text-[#a3a3a3]">On the side</p>
            <p className="text-[42px] text-white whitespace-nowrap">Her side hustle</p>
          </div>
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center w-full">
              <a
                href="https://dukpdf.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card no-underline text-inherit bg-[#141414] border-2 border-[#222] flex flex-col gap-[16px] items-start p-[24px] rounded-[24px] w-[664px]"
              >
                <div className="bg-[#1a1a1a] h-[400px] overflow-hidden relative rounded-[16px] w-full flex items-center justify-center p-[24px]">
                  <div className="card-image flex items-center justify-center w-full h-full">
                    <DukPdfWordmark />
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start w-full">
                  <div className="flex items-center justify-between w-full">
                    <p className={`${fontDM} font-semibold text-[24px] text-white whitespace-nowrap leading-normal`}>
                      DukPdf
                    </p>
                    <ViewProjectPill href="https://dukpdf.com/" />
                  </div>
                  <p className={`${fontDM} font-normal leading-[1.5] text-[14px] text-[#d4d4d4] w-full`}>
                    DukPdf, a free PDF toolkit for everyday tasks: merge, split, compress,
                    convert, and more. Owned product design from concept to launch as a
                    freelance engagement.{" "}
                    <span className="font-bold">Now live.</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* AS A DESIGNER (5306:9527) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[4248px] w-[1440px] bg-[#111] flex gap-[58px] items-start px-[40px] py-[120px]">
          <div className="flex flex-col gap-[62px] items-start self-stretch w-[840px]">
            <div className={`${fontDM} font-normal flex flex-col gap-[36px] items-start w-full`}>
              <div className="flex flex-col gap-[12px] items-start w-[578px]">
                <p className="leading-[1.5] text-[20px] text-[#a3a3a3]">As a Designer</p>
                <p className="text-white whitespace-nowrap leading-normal">
                  <span className="text-[42px] leading-[1.5]">My human, </span>
                  <span className={`${fontSerif} italic text-[#dba80e] text-[52px] leading-[1.5]`}>
                    Professionally
                  </span>
                </p>
              </div>
              <p
                className="leading-[1.5] text-[24px] text-[#d4d4d4]"
                style={{ letterSpacing: "0.48px" }}
              >
                I&rsquo;ve spent two years designing across fintech, studios, and freelance,
                from end-to-end product flows to brand systems to side projects shipped live.
                The best work happens at the seams: where research turns into systems, where
                systems turn into screens, where pixels turn into something people actually
                use. I take full ownership from insight to handoff, and I&rsquo;m currently
                weaving AI workflows into how I prototype, research, and ship.
              </p>
            </div>
            <a
              href="/about"
              className="cta-pill bg-[#291c18] flex gap-[10px] items-center justify-center px-[32px] py-[12px] rounded-[91px] cursor-pointer"
            >
              <p className={`${fontSerif} italic leading-[1.5] text-[#e8643a] text-[24px] whitespace-nowrap`}>
                More about me
              </p>
              <div className="cta-arrow overflow-hidden relative size-[24px]">
                <img alt="" src={img.iconArrowCta} className="absolute inset-0 size-full" />
              </div>
            </a>
          </div>
          <div className="h-[550px] relative rounded-[32px] w-[472px] overflow-hidden">
            <img
              alt="Aditi"
              src={img.aditiPhoto}
              className="absolute h-full max-w-none top-0"
              style={{ left: "-44.04%", width: "207.25%" }}
            />
          </div>
          {/* Casper avatar circle + bubble */}
          <div className="casper-group absolute" style={{ left: 720, top: 594 }}>
            <div
              className="casper-sticker absolute bg-[#dba80e] overflow-hidden rounded-[90px] size-[100px]"
              style={{ left: 902 - 720, top: 0 }}
            >
              <div
                className="absolute"
                style={{
                  height: 119,
                  width: 92,
                  left: "50%",
                  top: "calc(50% + 9.5px)",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  alt="Casper"
                  src={img.casperPhoto}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
            </div>
            <div
              className="casper-bubble absolute bg-black border border-[#8b6800] flex items-center justify-center p-[12px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[16px]"
              style={{
                left: 0,
                top: 59,
                filter: "drop-shadow(0px 4px 2px rgba(108,107,107,0.2))",
              }}
            >
              <p
                className={`${fontDM} font-medium leading-normal text-[16px] text-[#d4d4d4] whitespace-nowrap`}
              >
                &ldquo;No paparazzi, please.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT (5281:9535) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[5038px] w-[1440px] bg-[#0a0a0a] flex items-start justify-between overflow-hidden px-[40px] pt-[120px] pb-0">
          {/* Maroon glow background */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "calc(50% + 41.39px)",
              top: "calc(50% - 212.69px)",
              transform: "translate(-50%, -50%)",
              width: 1862.405,
              height: 607.097,
            }}
          >
            <div className="rotate-[-1.58deg] flex items-center justify-center w-full h-full">
              <div style={{ height: 556.343, width: 1847.763, position: "relative" }}>
                <div style={{ position: "absolute", inset: "-34.15% -10.28%" }}>
                  <img
                    alt=""
                    src={img.maroonGlow}
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-[24px] items-center w-[622px]">
            <div className={`${fontDM} font-medium text-[42px] text-white w-full whitespace-pre-wrap leading-[1.5]`}>
              <p className="mb-0">
                <span className={`${fontSerif} italic text-[#dba80e]`}>
                  Let&rsquo;s make
                </span>{" "}
              </p>
              <p>something worth remembering.</p>
            </div>
            <p className={`${fontDM} font-normal leading-[1.5] text-[24px] text-[#d4d4d4] w-full`}>
              She brings the ideas, the craft, and the obsessive attention to detail. I bring
              moral support and occasional interruptions. Between us, you&rsquo;re in good
              hands.
            </p>
          </div>
          <div className="relative flex flex-col gap-[24px] items-start w-[548px]">
            <ContactRow
              title="Email"
              subtitle="She responds faster than she fills my bowl."
              href="mailto:aditidwivedi2108@gmail.com"
              iconSrc="/figma/icon-gmail.svg"
            />
            <ContactRow
              title="Linkedin"
              subtitle="Very professional. Different energy from home."
              href="https://www.linkedin.com/in/dwivediaditi/"
              external
              iconSrc="/figma/icon-linkedin.svg"
            />
            <ContactRow
              title="Behance"
              subtitle="More work. She really never stops. I've verified this."
              href="https://www.behance.net/AditiDW"
              external
              iconSrc="/figma/icon-behance.svg"
            />
            <ContactRow
              title="Twitter"
              subtitle="She talks about her work. Apparently I'm not work."
              href="https://x.com/aditidw"
              external
              noBorder
              iconSrc="/figma/icon-twitter.svg"
            />
            </div>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}

function ProjectCard({
  imageSrc,
  imageStyle,
  imageWrapClassName,
  title,
  href,
  description,
}: {
  imageSrc: string;
  imageStyle?: React.CSSProperties;
  imageWrapClassName?: string;
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card no-underline text-inherit bg-[#141414] border-2 border-[#222] flex flex-1 min-w-px flex-col gap-[16px] items-start p-[24px] rounded-[24px]">
      <div
        className="h-[400px] overflow-hidden relative rounded-[16px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(0.7626795260356971deg, rgb(244, 243, 243) 17.436%, rgb(255, 255, 255) 13.005%, rgb(255, 255, 255) 51.88%, rgb(255, 255, 255) 94.997%, rgb(244, 243, 243) 125.97%)",
        }}
      >
        {imageWrapClassName ? (
          <div className={`card-image absolute rounded-[12px] ${imageWrapClassName}`}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
              <img
                alt=""
                src={imageSrc}
                className="absolute max-w-none"
                style={imageStyle}
              />
            </div>
          </div>
        ) : (
          <div className="card-image absolute" style={{ left: imageStyle?.left, top: imageStyle?.top, width: imageStyle?.width, height: imageStyle?.height }}>
            <div className="size-full absolute left-0 top-0" style={{ transform: imageStyle?.transform }}>
              <img
                alt=""
                src={imageSrc}
                className="absolute inset-0 size-full max-w-none object-cover pointer-events-none"
                style={{ objectPosition: imageStyle?.objectPosition }}
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-[12px] items-start w-full">
        <div className="flex items-center justify-between w-full">
          <p className="font-[family-name:var(--font-dm-sans)] font-semibold text-[24px] text-white whitespace-nowrap leading-normal">
            {title}
          </p>
          <ViewProjectPill href={href} />
        </div>
        <p className="font-[family-name:var(--font-dm-sans)] font-normal leading-[1.5] text-[14px] text-[#d4d4d4] w-full">
          {description}
        </p>
      </div>
    </a>
  );
}

function ViewProjectPill({ href }: { href: string }) {
  return (
    <span
      className="pill bg-[#291c18] flex items-center gap-[4px] justify-center px-[12px] py-[4px] rounded-[91px] cursor-pointer hover:bg-[#3a2620] transition-colors"
      data-href={href}
    >
      <span
        className="font-[family-name:var(--font-manrope)] font-semibold text-[#e8643a] text-[12px] whitespace-nowrap underline leading-normal"
        style={{ letterSpacing: "0.24px" }}
      >
        View project
      </span>
      <span className="pill-arrow text-[#e8643a] text-[12px] leading-none" aria-hidden>↗</span>
    </span>
  );
}

function ContactRow({
  title,
  subtitle,
  href,
  external,
  noBorder,
  iconSrc,
}: {
  title: string;
  subtitle: string;
  href: string;
  external?: boolean;
  noBorder?: boolean;
  iconSrc: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`contact-row group flex gap-[20px] items-start py-[12px] w-full${noBorder ? "" : " border-b border-[#404040]"}`}
    >
      <img alt="" src={iconSrc} className="contact-icon block size-[42px] object-contain shrink-0" />
      <div className="flex flex-col items-start gap-[6px]">
        <p className="contact-title font-[family-name:var(--font-dm-sans)] font-medium text-[24px] text-white leading-none">
          {title}
        </p>
        <p className="font-[family-name:var(--font-dm-sans)] font-normal text-[16px] text-[#a3a3a3] leading-[1.5]">
          {subtitle}
        </p>
      </div>
    </a>
  );
}

function DukPdfWordmark() {
  return (
    <img
      alt="DukPdf"
      src="/figma/dukpdf-wordmark.svg"
      className="block max-w-full max-h-full object-contain"
      style={{ width: 420, height: "auto" }}
    />
  );
}
