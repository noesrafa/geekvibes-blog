export default function Suscribe() {
  return (
    <div className="mt-32 text-white">
      <div className="bg-[#0071EB] pb-10 relative">
        <div className="wave"></div>
        <div className="max-w-screen-xl m-auto flex justify-center gap-4">
          <div className="flex flex-col justify-center md:mr-20 px-3 py-6">
            <span className="text-[#54F293] text-sm md:text-xs ">
              GET TO KNOW US
            </span>
            <h4 className="text-3xl font-medium mb-3">Subscribe to our blog</h4>
            <p className="max-w-sm pb-3">
              Do you already have an idea or wanted to know more about us?
            </p>
            <div>
              <input
                className="text-black px-4 py-2 rounded-full mr-2 w-full mb-3 md:w-fit md:mb-0"
                type="text"
                placeholder="Your Email"
              />
              <button className="bg-[#54F293] text-black px-6 py-2 rounded-full w-full md:w-fit">
                Suscribe
              </button>
            </div>
          </div>
          <img
            className="hidden md:block w-[250px] mt-[-70px] z-10"
            src="/suscribe.png"
            alt="suscribe"
          />
        </div>
      </div>
    </div>
  );
}
