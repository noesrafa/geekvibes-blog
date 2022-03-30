export default function Footer() {
  return (
    <div className="bg-[#202124] pt-20">
      <div className="max-w-screen-xl m-auto px-4">
        <span className="text-center block text-white text-2xl">
          Lets make your project come true!
        </span>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8 pb-32">
          <button className="flex gap-2 text-[#54F293] border border-[#54F293] p-3 rounded-full">
            <img src="/icons/whats.svg" alt="" />
            Text us via Whatsapp!
          </button>
          <button className="flex gap-2 text-[#54F293] border border-[#54F293] p-3 rounded-full">
            <img src="/icons/email.svg" alt="" />
            hello@geeekvibes.agency
          </button>
        </div>
        <div className="flex justify-between pb-8">
          <img src="/geekvibes_full.svg" alt="" />
          <div className="flex gap-3">
            <img className="w-6 h-6" src="/icons/facebook.svg" alt="link" />
            <img className="w-6 h-6" src="/icons/twitter.svg" alt="link" />
            <img className="w-6 h-6" src="/icons/linkedin.svg" alt="link" />
            <img className="w-6 h-6" src="/icons/telegram.svg" alt="link" />
            <img className="w-6 h-6" src="/icons/rss.svg" alt="link" />
          </div>
        </div>
        <div className="h-[1px] w-full bg-slate-300"></div>
        <div className="py-8 flex justify-between text-slate-300 text-[10px]">
            <span  className="">Geek Vibes 2022</span>
            <div className="flex gap-6">
                <span>Terms & Services</span>
                <span>Privacy police</span>
            </div>
        </div>
      </div>
    </div>
  );
}
