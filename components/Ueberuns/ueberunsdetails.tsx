import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  // DialogTrigger,
} from "../ui/dialog";
import { AspectRatio } from "../ui/aspect-ratio";

const UeberUnsDetails = () => {
  
  return (
    <section className="py-16 dark:bg-slate-900 lg:py-24">
      <div className="container">
        <div className="flex flex-wrap items-center lg:flex-nowrap lg:space-x-16 pt-20">
          <div className="w-full lg:w-[54%] lg:pr-20">
            <h2 className="mb-5 max-w-md">
              Über uns
            </h2>
            <p className="mb-8 text-md">
             Herzlich willkommen bei [Firmenname], Ihrem erfahrenen Partner für maßgeschneiderte Treuhanddienstleistungen seit [Gründungsjahr].
            </p>
            <p className="mb-10">
             Unser Leistungsspektrum umfasst die vollständige Buchhaltung, die professionelle Führung der Personaladministration sowie die zuverlässige Erstellung und Verwaltung von Lohnabrechnungen und Arbeitsverträgen. <br /> <br />
             Wir bieten Ihnen umfassende MWST-Beratung, um steuerliche Belange effizient zu regeln, sowie gründliche Revisionsarbeiten, um die Ordnungsmäßigkeit Ihrer Geschäftsunterlagen sicherzustellen.
            </p>
          </div>
          <div className="relative z-[1] mb-10 lg:w-1/2">
            <Image
              src="/images/ueberuns/u3.jpg"
              alt="ueberuns"
              width={540}
              height={540}
              className="rounded-xl"
            />
            <div className="absolute -right-10 top-1/4 w-1/2 animate-fly rounded-xl lg:w-auto">
              <Dialog>
                <DialogContent className="max-w-5xl border-0 p-0">
                  <DialogHeader>
                    <AspectRatio
                      ratio={16 / 9}
                      className="overflow-hidden rounded-lg"
                    >
                    </AspectRatio>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center lg:flex-nowrap lg:space-x-16">
          <div className="relative z-[1] mb-10 lg:w-1/2">
            <Image
              src="/images/ueberuns/u4.jpg"
              alt="ueberuns"
              width={540}
              height={540}
              className="rounded-xl hidden md:block"
            />
            <div className="absolute -right-10 top-1/4 w-1/2 animate-fly rounded-xl lg:w-auto">
              <Dialog>
                <DialogContent className="max-w-5xl border-0 p-0">
                  <DialogHeader>
                    <AspectRatio
                      ratio={16 / 9}
                      className="overflow-hidden rounded-lg"
                    >
                    </AspectRatio>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="w-full lg:w-[54%] lg:pr-20">
            <p className="mb-10 md:pl-12">
             In rechtlichen Angelegenheiten wie Betreibungs- und Konkursverfahren stehen wir Ihnen als kompetenter Partner zur Seite, um Ihre Interessen bestmöglich zu vertreten. 
             Unsere allgemeine Unternehmensberatung unterstützt Sie bei strategischen Entscheidungen und der erfolgreichen Gründung von Gesellschaften.
            </p>
            <p className="mb-10 md:pl-12">
             Bei Fragen des Arbeitsrechts, Mietrechts und bei Scheidungen bieten wir Ihnen ebenfalls fundierte rechtliche Beratung. 
             Unser engagiertes Team aus erfahrenen Experten kümmert sich um alle administrativen Angelegenheiten, damit Sie sich ganz auf Ihr Kerngeschäft konzentrieren können. <br /> <br />

             Vertrauen Sie auf [Firmenname], um gemeinsam mit Ihnen Mehrwert zu schaffen und langfristige Vorteile zu sichern.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default UeberUnsDetails;
