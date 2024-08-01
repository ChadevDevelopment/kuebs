"use client";

import * as React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import { ScrollArea } from "../Search/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "../Search/sheet";
import { Phone, Email, Address } from "../icons/icons";
import Image from "next/image";

export function Offcanvas() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="group ml-2 flex h-8 w-8 items-center justify-center rounded-full transition-colors lg:ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="h-6 w-6 fill-foreground transition-colors group-hover:fill-primary group-focus:fill-primary dark:fill-white"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="pl-1 pr-0">
        <ScrollArea className="mb-4 mt-16 h-[calc(100vh-8rem)] px-16 pb-10">
          <div className="pl-1 pr-7">
            <Link href="/" className="">
              <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={123}
                height={39}
                className="dark:hidden dark:block hidden"
              />
            </Link>
            <p className="mb-8 mt-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </p>
            <div className="mb-12 flex space-x-2">
              <a
                href="#"
                className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-black text-white transition-colors hover:bg-foreground hover:text-white"
              >
                <FontAwesomeIcon icon={faXTwitter} width={15} />
              </a>
              <a
                href="#"
                className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-[#324e8c] text-white transition-colors hover:bg-foreground hover:text-white"
              >
                <FontAwesomeIcon icon={faFacebook} width={15} />
              </a>
              {/* <a
                href="#"
                className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-[#cd201f] text-white transition-colors hover:bg-foreground hover:text-white"
              >
                <FontAwesomeIcon icon={faYoutube} width={15} />
              </a> */}
            </div>
            <h2 className="text-sm">Kontakt</h2>
            <ul className="space-y-5 text-sm">
              <li className="flex space-x-4">
                <Phone />
                <a
                  href="tel:+1-800-1554-456-123"
                  className="hover:text-primary"
                >
                  + 1 (800) 155 4561
                </a>
              </li>
              <li className="flex space-x-4">
                <Email />
                <a
                  href="mailto:hello@kuebs.com"
                  className="hover:text-primary"
                >
                  hello@kuebs.com
                </a>
              </li>
              <li className="flex space-x-4">
                <Address />
                <address className="-mt-px leading-6">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                </address>
              </li>
            </ul>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
