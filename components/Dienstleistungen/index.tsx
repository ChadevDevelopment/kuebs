import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const Dienstleistungen = () => {
  return (
    <section className="py-16 dark:bg-slate-900 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between lg:flex-nowrap lg:space-x-10">
          <div className="relative z-[1] mb-10 lg:w-1/2">
              <Image
                src="/images/services/service_7.jpg"
                alt=""
                width={540}
                height={540}
                className="h-4/4 rounded-lg hidden md:block w-full"
              />
          </div>

          <div className="w-full lg:w-[45%]">
            <h2>
              Dienstleistungen für Privatkunden
            </h2>
            <p className="mb-10 text-md">
              Bei [Firmenname] verstehen wir die individuellen Bedürfnisse unserer Privatkunden und bieten maßgeschneiderte Treuhanddienstleistungen an, 
              um Ihre finanziellen und rechtlichen Anliegen zu unterstützen. 
              Unsere Dienstleistungen umfassen:
            </p>
            <div className="mb-6 flex space-x-4">
              <div>
                <h3 className="mb-3 text-base">Steuerberatung und -erklärung:</h3>
                <p>Wir helfen Ihnen, Ihre Steuererklärung zu optimieren und mögliche Steuerersparnisse zu identifizieren.</p>
              </div>
            </div>
            <div className="mb-6 flex space-x-4">
              <div>
                <h3 className="mb-3 text-base">Vermögensverwaltung:</h3>
                <p>Unsere Experten beraten Sie in allen Fragen rund um die Verwaltung und Optimierung Ihres Vermögens.</p>
              </div>
            </div>
            <div className="mb-6 flex space-x-4">
              <div>
                <h3 className="mb-3 text-base">Versicherungsberatung:</h3>
                <p>Wir unterstützen Sie bei der Auswahl und Verwaltung Ihrer Versicherungen, um den bestmöglichen Schutz zu gewährleisten.</p>
              </div>
            </div>
            <div>
              <Link href="/privatkunden"
                className="flex items-center gap-2.5 text-blue mb-7"
              >
                <span className="hover:text-primary dark:text-slate-50 dark:hover:text-primary duration-500">Mehr erfahren</span>
                <ChevronRightIcon width={20} height={20} className="-mr-2 ml-1 dark:text-slate-50" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center lg:flex-nowrap lg:space-x-10">
          <div className="w-full lg:w-[45%]">
            <h2>
              Dienstleistungen für Geschäftskunden
            </h2>
            <p className="mb-10 text-md">
              [Firmenname] bietet Geschäftskunden eine breite Palette an Treuhanddienstleistungen, die darauf abzielen, Ihre betriebliche Effizienz zu steigern und Ihre geschäftlichen Ziele zu erreichen. 
              Unsere Dienstleistungen umfassen:
            </p>
            <div className="mb-6 flex space-x-4">
              <div>
                <h3 className="mb-3 text-base">Buchhaltung und Finanzmanagement:</h3>
                <p>Wir übernehmen Ihre Buchhaltung und das Finanzmanagement, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.</p>
              </div>
            </div>
            <div className="mb-6 flex space-x-4">
              <div>
                <h3 className="mb-3 text-base">Steuerberatung und MWST-Beratung:</h3>
                <p>Unsere Experten beraten Sie umfassend zu steuerlichen Angelegenheiten und Mehrwertsteuerfragen.</p>
              </div>
            </div>
            <div className="mb-6 flex space-x-4">
              <div>
                <h3 className="mb-3 text-base">Personaladministration:</h3>
                <p>Wir kümmern uns um die Personaladministration, einschließlich Lohnabrechnungen und Vertragsverwaltung.</p>
              </div>
            </div>
            <div>
              <Link href="/geschaeftskunden"
                className="flex items-center gap-2.5 text-blue mt-7.5"
              >
                <span className="hover:text-primary dark:text-slate-50 dark:hover:text-primary duration-500">Mehr erfahren</span>
                <ChevronRightIcon width={20} height={20} className="-mr-2 ml-1 dark:text-slate-50" />
              </Link>
            </div>
          </div>
          <div className="relative z-[1] mb-10 lg:w-1/2">
              <Image
                src="/images/services/service_9.jpg"
                alt=""
                width={540}
                height={540}
                className="ml-16 h-4/4 rounded-lg w-full hidden md:block overflow-hidden"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dienstleistungen;
