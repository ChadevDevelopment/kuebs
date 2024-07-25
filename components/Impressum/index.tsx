const Impressum = () => {
  
  return (
    <section className="py-16 dark:bg-slate-900 lg:py-24">
      <div className="container">
        <div className="flex flex-wrap items-center lg:flex-nowrap lg:space-x-16 pt-20">
          <div className="w-full lg:pr-20">
            <h2 className="mb-5 max-w-md">
             Impressum
            </h2>

            <h4 className="font-small text-lg text-blue mt-7.5 mb-3.5">
              Betreiber der Webseite
            </h4>

            <p className="pb-5">
              <a href="#" className="hover:text-primary dark:hover:text-primary" target="_blank">
                Lorem ipsum dolor sit amet <br />
                Lorem ipsum dolor sit amet 00 <br />
                0000 Lorem ipsum <br />
              </a>
            </p>

            <p className="py-1">
              <a href="tel:+00 00 000 00 00" className="hover:text-primary dark:hover:text-primary">
                +00 00 000 00 00
              </a>
            </p>

            <p className="py-1">
              <a href="mailto:hello@kuebs.com" className="hover:text-primary dark:hover:text-primary">
                hello@kuebs.com
              </a>
            </p>

            <p className="py-5">
              Firmen- und MWST-Nummer: <br />
              CHE-
            </p>

            <p>
              Der Inhalt dieser Webseite wurde von [Firmenname] mit der größtmöglichen Sorgfalt erstellt und gepflegt. <br /><br />
              Die [Firmenname] lehnt jede Haftung für allfällige Ansprüche im Zusammenhang mit der Webseite, deren Inhalte darin enthaltenen Hinweisen und Links auf Webseiten Dritter sowie für im Zusammenhang damit auftretende Probleme ausdrücklich und vollumfänglich ab. <br /> <br />
              
              Alle Texte, Logos und Bilder sind urheberrechtlich geschützt.
            </p>

            <h4 className="font-small text-lg text-blue mt-9 mb-3.5">
              Gesamtkonzept, Grafik und Webdesign
            </h4>

            <p>
              Webagentur <br />
              <a href="https://www.chadev.ch/" className="hover:text-primary dark:hover:text-primary" target="_blank">chadev.ch</a> 
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Impressum;
