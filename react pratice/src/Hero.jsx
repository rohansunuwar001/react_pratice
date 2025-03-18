<div className="relative w-full overflow-hidden bg-[url('/bg_img_rec.png')] bg-cover bg-center text-black">
  <div className="max-w-screen-xl mx-auto p-4">
    <div className="flex flex-col lg:flex-row justify-between items-center">
      {/* Left Content */}
      <div className="lg:mt-10">
        <h1 className="text-3xl font-bold md:text-4xl">
          Unlocking <span className="text-[#fbbc04]">Your</span>
          <br />
          <span className="text-[#fbbc04]">Potential with</span> Us
        </h1>
        <p className="mt-4 text-lg">
          We provide guaranteed internships and placement support to drive your career forward.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/Popularcourses">
            <button className="h-12 w-36 rounded-full bg-[#ffcf59] text-black text-lg hover:scale-110 transition-transform">
              Get Started
            </button>
          </Link>

          <button className="flex items-center text-white text-lg hover:scale-110 transition-transform">
            <FaPlayCircle className="h-10 w-10 bg-[#004aad] rounded-full" />
          </button>
        </div>

        <ul className="mt-8 flex gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm font-semibold">
              <img src="/mdi_tick-circle.png" alt="tick" className="h-5 w-5" />
              {feature.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image */}
      <div className="hidden md:block">
        <img src="/Img1.png" alt="Hero" className="h-[27rem] w-[27rem]" />
      </div>
    </div>

    {/* Floating WhatsApp */}
    <div className="fixed right-0 bottom-10 p-4 z-50">
      <a href="https://wa.me/9779851359759" target="_blank" rel="noopener noreferrer">
        <img
          src="/whatapp.svg"
          alt="WhatsApp"
          className="h-12 w-12 animate-spin-slow"
        />
      </a>
    </div>

    <style jsx>{`
      @keyframes spin-slow {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
</div>
