import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative">
        <section className="mt-[4.5rem] bg-white py-32 dark:bg-slate-900 lg:mt-[161px]">
          <div className="container text-center">
            <Image
              src="/images/not-found/404 3.png"
              width={340}
              height={340}
              alt="not found"
              className="mb-12 inline-block"
            />
            <h1 className="mb-3">Leider können wir diese Seite nicht finden!</h1>
            <p className="mb-12">
              Die Seite, die Sie suchen, wurde verschoben, entfernt, umbenannt oder hat nie
              existiert.
            </p>
            <Button size="lg" asChild>
              <a href="/">Zurück zur Homepage</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
