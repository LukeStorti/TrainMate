import React from "react";
import MaxWidthWrapper from "../Global/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { FOOTERLINKS } from "@/constants";
import { Facebook, Instagram, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-4 w-full">
      <MaxWidthWrapper>
        <div className="flex flex-wrap items-start justify-between w-full mt-4">
          <Link href="/" className="hidden sm:flex z-40 font-semibold items-center">
            <Image alt="logo" src={logo} width={25} height={25} className="object-contain" />
            Train<span className="text-primary">Mate</span>
          </Link>
          <div className="flex flex-row flex-wrap gap-10">
            {FOOTERLINKS.map((item) => (
              <div key={item.label} className="flex flex-col space-y-1.5">
                <h4 className="font-bold">{item.label}</h4>
                {item.sublinks.map((sublink) => (
                  <p
                    className="text-muted-foreground text-sm hover:text-white cursor-pointer"
                    key={sublink}
                  >
                    {sublink}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="hidden sm:flex flex-col items-center">
            <h4 className="font-bold">Follow us</h4>
            <div className="flex items-center gap-4 mt-6">
              <Instagram className="hover:text-primary cursor-pointer" size={25} />
              <Facebook className="hover:text-primary cursor-pointer" size={25} />
              <Twitter className="hover:text-primary cursor-pointer" size={25} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
