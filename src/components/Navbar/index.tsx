import logo from "../../assets/LOGO.svg";

export default function Navbar() {
  return (
    <div className="sumitw-flex md:sumitw-flex-row sumitw-flex-col">
      <div className="sumitw-w-[26rem]">
        <img
          src={logo}
          alt="logo"
          className="sumitw-w-[10rem] hover:sumitw-animate-pulse sumitw-cursor-pointer sumitw-h-[5.75rem] sumitw-bg-cover sumitw-bg-no-repeat"
        />
      </div>
      <div className="sumitw-w-3/4 sumitw-flex sumitw-flex-row sumitw-cursor-pointer sumitw-mt-[2.38rem] sumitw-text-[#000] sumitw-text-base sumitw-font-semibold sumitw-gap-9">
        <p className="hover:sumitw-bg-orange-400 sumitw-p-2 sumitw-flex sumitw-items-center sumitw-rounded-md hover:sumitw-text-white sumitw-h-[1.75rem]">
          Home
        </p>
        <p className="hover:sumitw-bg-orange-400 sumitw-p-2 sumitw-flex sumitw-items-center sumitw-rounded-md hover:sumitw-text-white sumitw-h-[1.75rem]">
          Features
        </p>
        <p className="hover:sumitw-bg-orange-400 sumitw-p-2 sumitw-flex sumitw-items-center sumitw-rounded-md hover:sumitw-text-white sumitw-h-[1.75rem]">
          Menu
        </p>
        <p className="hover:sumitw-bg-orange-400 sumitw-p-2 sumitw-flex sumitw-items-center sumitw-rounded-md hover:sumitw-text-white sumitw-h-[1.75rem]">
          Pricing
        </p>
        <p className="hover:sumitw-bg-orange-400 sumitw-p-2 sumitw-flex sumitw-items-center sumitw-rounded-md hover:sumitw-text-white sumitw-h-[1.75rem]">
          Contact
        </p>
      </div>
      <div className="sumitw-mt-[2.5rem] sumitw-w-1/5">
        <button className=" sumitw-h-10 sumitw-font-semibold sumitw-w-24 sumitw-border sumitw-border-[#000000C7] sumitw-rounded-xl hover:sumitw-bg-orange-400 hover:sumitw-text-white hover:sumitw-border-none">
          Sign up
        </button>
      </div>
    </div>
  );
}
