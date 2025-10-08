import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TeamPage() {
  const teamMembers = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: "Insert Name",
    role: "Director",
  }));

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />

      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-140px] left-[-190px] w-[427px] h-[427px] rounded-full bg-gradient-radial from-[#5D2DA0] via-[#6625C3] via-[#9C50FE] to-[#EBBEFF] opacity-80 blur-[125px]" />
          <div className="absolute top-[181px] left-[-145px] w-[382px] h-[382px] rounded-full bg-[#D0625E] opacity-60 blur-[150px]" />
          <div className="absolute top-[72px] left-[-447px] w-[780px] h-[709px] rounded-full bg-gradient-to-br from-[#321FE3]/22 via-[#A7764A]/22 to-[#745233]/22 blur-[125px]" />
          <div className="absolute top-[-92px] right-[142px] w-[458px] h-[431px] rounded-full bg-[#321FE3] blur-[125px]" />
          <div className="absolute top-[287px] right-[34px] w-[330px] h-[308px] rounded-full bg-[#D36428] blur-[150px]" />
          <div className="absolute top-[57px] right-[-109px] w-[382px] h-[382px] rounded-full bg-[#6600AA] blur-[150px]" />
          <div className="absolute top-[57px] right-[-115px] w-[137px] h-[137px] rounded-full bg-gradient-radial from-[#570069] via-[#720077] via-[#88098D] to-[#EC80F0] shadow-[0_0_150px_#DB47F3]" />
          <div className="absolute bottom-[100px] right-[60px] w-[212px] h-[212px] rounded-full bg-gradient-radial from-[#24198C] via-[#2D20A7] via-[#3728C2] to-[#8674FF] shadow-[0_0_250px_#432FFF]" />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1726px] pointer-events-none">
          <svg
            viewBox="0 0 1440 875"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <g filter="url(#filter0_ddi)">
              <path
                d="M720 320C389.075 320 86.939 387.487 -143 498.695V881V1482V1569.31C86.939 1680.51 389.075 1748 720 1748C1050.93 1748 1353.06 1680.51 1583 1569.31V1482V881V498.695C1353.06 387.487 1050.93 320 720 320Z"
                fill="url(#paint0_radial)"
              />
            </g>
            <defs>
              <filter
                id="filter0_ddi"
                x="-393"
                y="0"
                width="2226"
                height="1928"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-70" />
                <feGaussianBlur stdDeviation="125" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.512856 0 0 0 0 0.251942 0 0 0 0 0.524038 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="25" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.774499 0 0 0 0 0 0 0 0 0 0.807692 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow"
                  result="effect2_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="60" />
                <feGaussianBlur stdDeviation="125" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.626976 0 0 0 0 0 0 0 0 0 0.653846 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect3_innerShadow"
                />
              </filter>
              <radialGradient
                id="paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(720 -184.5) rotate(90) scale(1906.5 2304.36)"
              >
                <stop offset="0.59815" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="relative container mx-auto px-4 sm:px-8 lg:px-16 pt-32 lg:pt-40 pb-20">
          <div className="text-center mb-12 lg:mb-20">
            <h1 className="font-unbounded text-5xl sm:text-6xl lg:text-8xl xl:text-[96px] font-bold mb-6 lg:mb-8 bg-gradient-to-r from-white/20 via-white via-white to-white/20 bg-clip-text text-transparent leading-tight">
              Our Team
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-6 flex flex-col items-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 mb-4 flex items-center justify-center">
                  <div className="w-full h-full rounded-2xl bg-white/20" />
                </div>
                <h3 className="text-white text-lg font-dm-sans font-medium text-center">
                  {member.name}
                </h3>
                <p className="text-white/70 text-sm font-dm-sans text-center mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
