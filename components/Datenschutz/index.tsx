"use client";

import React from "react";

const Datenschutz = () => {
  return (
    <section className="py-16 dark:bg-slate-900 lg:py-24">
      <div className="container">
        <div className="flex flex-wrap items-center lg:flex-nowrap lg:space-x-16 pt-20">
          <div className="w-full lg:pr-20">
            <h2 className="relative font-bold text-3xl xl:text-hero mb-6">
              Datenschutz
            </h2>
            <h4 className="font-small text-lg mt-7.5 mb-3.5">
              Datenschutzerklärung
            </h4>
            <h4 className="font-medium text-lg xl:text-itemtitle2 mt-7.5 mb-3.5">
              Erhebung, Verarbeitung und Nutzung personenbezogener Daten
            </h4>
            {/* Desktop view */}
            <div className="lg:w-full">
              <p className="hidden lg:block">
                Bei einem Besuch dieser Website erheben wir keine personenbezogenen Daten von Ihnen. 
                Personenbezogene Daten werden nur erhoben, wenn Sie uns diese über unser Kontaktformular mitteilen. 
                Diese Daten werden ausschließlich zur Beantwortung Ihres Anliegens genutzt und danach wieder gelöscht.
              </p>
              {/* Mobile view */}
              <div className="block lg:hidden flex flex-col gap-3">
                <p>Bei einem Besuch dieser Website erheben wir keine personenbezogenen Daten von Ihnen.</p>
                <p>Personenbezogene Daten werden nur erhoben, wenn Sie uns diese über unser Kontaktformular mitteilen.</p>
                <p>Diese Daten werden ausschließlich zur Beantwortung Ihres Anliegens genutzt und danach wieder gelöscht.</p>
              </div>
            </div>
            <h4 className="font-medium text-lg mt-7.5 mb-3.5 pt-5">
              Verwendung von eigenen Cookies
            </h4>
            <div className="lg:w-full">
              {/* Desktop view */}
              <p className="hidden lg:block">
                Beim Aufruf bestimmter Seiten wird ein sogenanntes «Session-Cookie» gesetzt. 
                Hierbei handelt es sich um eine kleine Textdatei, die nach Ende der Browser-Sitzung automatisch wieder von Ihrem Computer gelöscht wird. 
                Diese Datei dient ausschließlich dazu, bestimmte Applikationen nutzen zu können. Sie können bei den meisten Webbrowsern die Einstellungen so ändern, dass Ihr Browser neue Cookies nicht akzeptiert oder Sie können erhaltene Cookies löschen lassen. 
                Wie dies konkret für Ihren Browser funktioniert, kann in der Regel über dessen Hilfe-Funktion in Erfahrung gebracht werden.
              </p>
              {/* Mobile view */}
              <div className="block lg:hidden flex flex-col gap-3">
                <p>Beim Aufruf bestimmter Seiten wird ein sogenanntes «Session-Cookie» gesetzt.</p>
                <p>Hierbei handelt es sich um eine kleine Textdatei, die nach Ende der Browser-Sitzung automatisch wieder von Ihrem Computer gelöscht wird.</p>
                <p>Diese Datei dient ausschließlich dazu, bestimmte Applikationen nutzen zu können. Sie können bei den meisten Webbrowsern die Einstellungen so ändern, dass Ihr Browser neue Cookies nicht akzeptiert oder Sie können erhaltene Cookies löschen lassen.</p>
                <p>Wie dies konkret für Ihren Browser funktioniert, kann in der Regel über dessen Hilfe-Funktion in Erfahrung gebracht werden.</p>
              </div>
            </div>
            <h4 className="font-medium text-lg mt-7.5 mb-3.5 pt-5">
              Google Analytics
            </h4>
            <div className="lg:w-full">
              <p className="hidden lg:block">
                Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. 
                Google Analytics verwendet sog. «Cookies», d. h. Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. 
                Google nutzt diese Informationen, um im Auftrag des Betreibers dieser Website Ihre Nutzung der Website auszuwerten, um Reports über die Website Aktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
                Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. 
                Durch eine entsprechende Einstellung in Ihrem Browser können Sie die Speicherung der Cookies verhindern oder löschen.
              </p>
              <div className="block lg:hidden flex flex-col gap-3">
                <p>Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
                <p>Google Analytics verwendet sog. «Cookies», d. h. Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.</p>
                <p>Google nutzt diese Informationen, um im Auftrag des Betreibers dieser Website Ihre Nutzung der Website auszuwerten, um Reports über die Website Aktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.</p>
                <p>Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</p>
                <p>Durch eine entsprechende Einstellung in Ihrem Browser können Sie die Speicherung der Cookies verhindern oder löschen.</p>
              </div>
            </div>
            <h4 className="font-medium text-lg mt-7.5 mb-3.5 pt-5">
              Ihre Rechte
            </h4>
            <div className="lg:w-full">
              <p className="hidden lg:block">
                Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Daten, Übertragbarkeit, Widerruf und Widerspruch zu. 
                Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. 
                Sie erreichen uns unter folgenden Kontaktdaten: <br /> <br />
                <a href="#" className="hover:text-primary dark:hover:text-primary" target="_blank">
                  Lorem ipsum dolor sit amet <br />
                  Lorem ipsum dolor sit amet 00 <br />
                  0000 Lorem ipsum <br /> <br />
                </a>
                <a href="mailto:hello@kuebs.com" className="hover:text-primary dark:hover:text-primary">hello@kuebs.com</a>
              </p>
              <div className="block lg:hidden flex flex-col gap-3">
                <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Daten, Übertragbarkeit, Widerruf und Widerspruch zu.</p>
                <p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.</p>
                <p>Sie erreichen uns unter folgenden Kontaktdaten:</p>
                <a href="#" className="hover:text-primary dark:hover:text-primary" target="_blank">
                  Lorem ipsum dolor sit amet <br />
                  Lorem ipsum dolor sit amet 00 <br />
                  0000 Lorem ipsum <br />
                </a>
                <a href="mailto:hello@kuebs.com" className="hover:text-primary dark:hover:text-primary">hello@kuebs.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Datenschutz;
                    