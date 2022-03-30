import { useState, useEffect } from "react";

export default function Navbar() {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
  return (
    <div className={`fixed w-full ${offset > 150 && 'scrolled'} px-10 xl:p-0 z-40`}>
      <div
        className="max-w-screen-xl m-auto py-5 flex justify-between
     top-0"
      >
        <div className="flex items-center gap-1">
          <img className="blog-logo-svg" src="/geekvibes_full.svg" alt="logo" />
          <div className="blog-logo text-white">
            <i>_blog</i>{" "}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="#"
            className="hidden md:block text-white border border-white px-4 py-1 rounded-[50px] text-sm"
          >
            Contact
          </a>
          <img className="cursor-pointer" src="/icons/menu.svg" alt="menu" />
        </div>
      </div>
    </div>
  );
}
