export default function Hero() {
  return (
    <div className="bg-[url('/background.png')] bg-cover h-[800px] p-10 xl:p-0">
      <div className="
        flex flex-col items-center md:flex-row gap-10
         pt-36 justify-between max-w-screen-xl m-auto">
        <div className="text-white flex flex-col gap-10">
          <div>
            <div className="flex gap-3 mb-4 text-md font-light tracking-wider text-blue-300">
              <span>THE BLOG YOU NEED!</span>
              <img src="/icons/right-arrow.svg" alt="arrow" />
            </div>
            <h1 className="text-5xl font-bold nunito">
              Discover News <br /> on our blog.
            </h1>
          </div>
          <p className="max-w-md">
            We want to share with you our way of seeing the world and our
            creative process to solve your problems.
          </p>
          <div className="flex gap-2">
            <input
              className="py-4 pl-6 px-4 text-sm rounded-[50px] text-black"
              type="text"
              placeholder="Enter your email"
            />
            <button className="flex items-center pl-6 pr-4 gap-1 rounded-[50px]  text-sm border-[#54F293] border ">
              <span className="font-medium text-[#54F293] ">Suscribe</span>
              <img className="h-6 hidden xl:block" src="/icons/right.svg" alt="left" />
            </button>
          </div>
        </div>
        <div className="w-[320px] md:w-[650px] hidden md:block">
          <img  src="/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
}
