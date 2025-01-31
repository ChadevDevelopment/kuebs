"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  // DialogTrigger,
} from "../ui/dialog";
import { AspectRatio } from "../ui/aspect-ratio";

const Ueberuns = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EBE4FA]/25 to-muted/25 pb-15 dark:bg-slate-900 dark:bg-none lg:py-32">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
          <div className="relative z-[1] mb-10 lg:w-1/2">
            {/* <Image
              src="/images/shape/circles_pattern.png"
              alt="circles pattern"
              width={640}
              height={561}
              className="absolute -z-[1] -translate-y-8 scale-110 dark:opacity-10"
            /> */}
            <Image
              src="/images/ueberuns/u1.jpg"
              alt="ueberuns"
              width={540}
              height={540}
              className="rounded-xl"
            />
            <div className="absolute -right-10 top-1/4 w-1/2 animate-fly rounded-xl lg:w-auto">
              <Image
                src="/images/ueberuns/u2.jpg"
                alt="ueberuns"
                width={320}
                height={320}
                className="rounded-xl hidden md:block"
              />
              <Dialog>
                {/* <DialogTrigger className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform will-change-transform hover:scale-90">
                  <Play />
                </DialogTrigger> */}
                <DialogContent className="max-w-5xl border-0 p-0">
                  <DialogHeader>
                    <AspectRatio
                      ratio={16 / 9}
                      className="overflow-hidden rounded-lg"
                    >
                      {/* <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
                        allow="autoplay"
                      ></iframe> */}
                    </AspectRatio>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="lg:w-2/5 lg:pl-10">
            <h2 className="max-w-sm">
              Ihre Vorteile bei Uns
            </h2>
            <p className="mb-8 text-md">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
            </p>
            <div className="mb-6 flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8 shrink-0 fill-blue"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
              </svg>
              <div>
                <h3 className="mb-3 text-base">Team Management</h3>
              </div>
            </div>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8 shrink-0 fill-blue"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
              </svg>
              <div>
                <h3 className="mb-9 text-base">Faire Preise</h3>
              </div>
            </div>
            <div className="mb-6 flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8 shrink-0 fill-blue"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
              </svg>
              <div>
                <h3 className="mb-3 text-base">Team Management</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ueberuns;
