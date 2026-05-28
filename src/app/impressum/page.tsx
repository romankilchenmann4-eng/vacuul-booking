import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – Vacuul",
  description: "Rechtliche Angaben gemäss Art. 49 AVG der Schweizer Bundesgesetzgebung.",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-vacuul-bg dark:bg-[#051E42]">
      <div className="max-w-3xl mx-auto px-6 py-20 pt-28">
        <Link
          href="/"
          className="text-vacuul-accent hover:underline text-sm mb-8 inline-block"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-vacuul-blue dark:text-white mb-10">
          Impressum
        </h1>

        <div className="space-y-8 text-vacuul-blue/80 dark:text-white/80 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              Herausgeber
            </h2>
            <p>
              4Grad & More, Martin Langanke<br />
              Vacuul – Vacuum Palm Cooling
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              Kontaktperson
            </h2>
            <p>
              Martin Langanke<br />
              E-Mail: info@vacuul.com<br />
              Telefon: +41 79 890 9999
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              Haftungsausschluss
            </h2>
            <p>
              Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit,
              Vollständigkeit oder Qualität der bereitgestellten Informationen.
              Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller
              oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der
              dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und
              unvollständiger Informationen verursacht wurden, sind grundsätzlich
              ausgeschlossen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              Haftung für Links
            </h2>
            <p>
              Bei direkten oder indirekten Verweisen auf fremde Webseiten (Hyperlinks),
              welche ausserhalb des Verantwortungsbereiches des Autors liegen, würde
              eine Haftungsverpflichtung ausschliesslich in dem Fall in Kraft treten,
              in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch
              möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte
              zu verhindern. Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt
              der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten
              erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte
              oder die Urheberschaft der verlinkten/verknüpften Seiten hat der Autor
              keinerlei Einfluss.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              Urheber- und Kennzeichenrecht
            </h2>
            <p>
              Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der
              verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu
              beachten, von ihm selbst erstellte Grafiken, Tondokumente,
              Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken,
              Tondokumente, Videosequenzen und Texte zurückzugreifen. Alle innerhalb
              des Internetangebotes genannten und ggf. durch Dritte geschützten
              Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen
              des jeweils gültigen Kennzeichenrechts und den Besitzrechten der
              jeweiligen eingetragenen Eigentümer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              Datenschutz
            </h2>
            <p>
              Soweit auf den Seiten personenbezogene Daten (Name, Anschrift,
              E-Mail-Adresse) erhoben werden, erfolgt dies auf freiwilliger Basis.
              Die Nutzung von im Rahmen des Impressumspflichtes veröffentlichten
              Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
              erwünschten Informationen ist untersagt. Die Betreiber der Seiten
              behalten sich ausdrücklich rechtliche Schritte im Falle der
              unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails,
              vor.
            </p>
            <p className="mt-2">
              Detaillierte Informationen zum Datenschutz finden Sie in unserer{" "}
              <Link href="/datenschutz" className="text-vacuul-accent hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              Anwendbares Recht
            </h2>
            <p>
              Es gilt ausschliesslich Schweizer Recht, unter Ausschluss des
              internationalen Privatrechts und der Bestimmungen des Wiener
              Kaufrechtsübereinkommens. Ausschließlicher Gerichtsstand ist der Sitz
              des Herausgebers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}