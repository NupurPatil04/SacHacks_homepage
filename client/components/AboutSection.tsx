export default function AboutSection() {
  return (
    <section id="about" className="relative py-[104px] px-[136px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-start gap-[136px]">
          {/* Globe */}
          <div className="flex flex-col items-center gap-[25px] w-[355px]">
            <div className="w-[190px] h-[190px] rounded-full relative"
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(225deg, #CEF 0%, #001EB2 77.37%)',
                boxShadow: '0 0 112px 20px #02C inset',
                filter: 'drop-shadow(0 0 114px rgba(0, 43, 255, 0.80)) drop-shadow(0 0 20px #02C)'
              }}>
              {/* Pale ellipse removed to prevent large overlay */}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-10 flex-1">
            <div className="flex flex-col gap-12">
              <h2 className="text-white text-[48px] font-bold leading-[26px] tracking-[-0.96px]">
                A Space for Everyone
              </h2>
              
              <p className="text-white text-[24px] font-normal leading-[35px]">
                SacHacks is the <span className="font-bold">first major intercollegiate hackathon in the Sacramento</span>, California area.
              </p>
              
              <p className="text-white text-[24px] font-normal leading-[35px] max-w-[678px]">
                We provide the place, you bring your ideas to our friendly competition between where all creative coders launch their ideas into action during a 24-hour hackathon.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center gap-[112px] mt-[31px] pt-[20px]">
          <div className="relative w-[298px] h-[193px]">
            <div className="absolute inset-0 rounded-[150px_10px_10px_10px] border-[10px] border-white"
              style={{ background: 'radial-gradient(231.03% 215.69% at 69.94% -79.61%, #000 0%, #0B081B 54.81%, #6155DD 67.79%, #AAA4F9 80.77%)' }} />
            <div className="absolute top-[60px] left-[56px] w-[200px] h-[91px] flex flex-col justify-center items-center text-center font-unbounded font-bold text-[36px] tracking-[0.72px]"
              style={{
                background: 'linear-gradient(95deg, rgba(215, 215, 215, 0.20) -7.54%, #FFF 11.23%, #FFF 30.19%, #FFF 72.65%, rgba(255, 255, 255, 0.20) 114.15%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              1000+<br />Hackers
            </div>
          </div>

          <div className="relative w-[298px] h-[193px]">
            <div className="absolute inset-0 rounded-[150px_10px_10px_10px] border-[10px] border-white"
              style={{ background: 'radial-gradient(231.03% 215.69% at 69.94% -79.61%, #000 0%, #0B081B 54.81%, #9747FF 67.79%, #D6B7FF 80.77%)' }} />
            <div className="absolute top-[60px] left-[60px] w-[203px] h-[91px] flex flex-col justify-center items-center text-center font-unbounded font-bold text-[36px] tracking-[0.72px]"
              style={{
                background: 'linear-gradient(95deg, rgba(215, 215, 215, 0.20) -7.54%, #FFF 11.23%, #FFF 30.19%, #FFF 72.65%, rgba(255, 255, 255, 0.20) 114.15%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              80+<br />Projects
            </div>
          </div>

          <div className="relative w-[298px] h-[193px]">
            <div className="absolute inset-0 rounded-[150px_10px_10px_10px] border-[10px] border-white"
              style={{ background: 'radial-gradient(231.03% 215.69% at 69.94% -79.61%, #000 0%, #0B081B 54.81%, #618EFF 67.79%, #A4C6F9 80.77%)' }} />
            <div className="absolute top-[60px] left-[77px] w-[157px] h-[91px] flex flex-col justify-center items-center text-center font-unbounded font-bold text-[36px] tracking-[0.72px]"
              style={{
                background: 'linear-gradient(95deg, rgba(215, 215, 215, 0.20) -7.54%, #FFF 11.23%, #FFF 30.19%, #FFF 72.65%, rgba(255, 255, 255, 0.20) 114.15%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              $42k +<br />Prizes
            </div>
          </div>
        </div>

        {/* We're Virtual Section */}
        <div className="flex items-start gap-[136px] mt-[104px]">
          <div className="flex justify-end items-center pl-[26px]">
            <div className="w-[400px] h-[405px] flex items-center justify-center">
              <svg width="297" height="263" viewBox="0 0 297 263" fill="none" className="shadow-[0_0_30px_0_#83A3FC]">
                <defs>
                  <linearGradient id="rocket-grad" x1="0" y1="0" x2="0" y2="100%">
                    <stop offset="0%" stopColor="#9A98FF" />
                    <stop offset="100%" stopColor="#5957FF" />
                  </linearGradient>
                </defs>
                <rect width="297" height="263" fill="url(#rocket-grad)" rx="8" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-10 flex-1">
            <div className="flex flex-col gap-12">
              <h2 className="text-white text-[48px] font-bold leading-[26px] tracking-[-0.96px]">
                We're Virtual!
              </h2>
              
              <p className="text-white text-[24px] font-normal leading-[35px] max-w-[666px]">
                This year, SacHacks VI is <span className="font-bold">fully virtual</span>, so you can participate from anywhere! But if you're near Davis, you're in luck—we're offering in-person workspaces for our participants, giving you a dedicated space to collaborate and hack alongside others. Plus, enjoy live-streamed workshops and virtual submissions to make the most of your experience!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
