import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Vacuul",
  description: "Informationen zur Erhebung und Verarbeitung personenbezogener Daten auf vacuul.com.",
};

export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-vacuul-blue/80 dark:text-white/80 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              1. Verantwortliche Stelle
            </h2>
            <p>
              4Grad & More, Martin Langanke<br />
              Vacuul – Vacuum Palm Cooling<br />
              Ärztezentrum am Weinberg<br />
              Gaissbergstrasse 45<br />
              8280 Kreuzlingen<br />
              Kontaktperson: Martin Langanke<br />
              E-Mail: info@viergrad.cool
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p>
              Beim Aufrufen unserer Webseite werden durch den Browser automatisch
              Informationen an den Server unserer Webseite gesendet. Diese
              Informationen werden temporär in einem Log-File gespeichert und umfassen:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Webseite, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
              <li>Name des Access-Providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              3. Weitergabe personenbezogener Daten
            </h2>
            <p>
              Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nicht,
              ausser wenn eine gesetzliche Pflicht besteht oder Sie Ihre ausdrückliche
              Einwilligung erteilt haben.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              4. Buchungen über Calendly
            </h2>
            <p>
              Für die Buchung von Beratungsterminen nutzen wir den Dienst Calendly
              (Calendly, Inc., Atlanta, USA). Wenn Sie einen Termin buchen, werden Ihre
              eingegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, Terminzeit) direkt
              an Calendly übermittelt. Die Verarbeitung erfolgt gemäss der{" "}
              <a
                href="https://calendly.com/policies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vacuul-accent hover:underline"
              >
                Datenschutzerklärung von Calendly
              </a>
              . Wir erhalten von Calendly lediglich eine Bestätigung der Buchung mit
              Ihren Kontaktdaten, um das Beratungsgespräch durchzuführen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              5. Hosting
            </h2>
            <p>
              Unsere Webseite wird von Vercel Inc. (New York, USA) gehostet. Beim
              Aufruf der Webseite werden Ihre Daten an Vercel übermittelt. Die
              Verarbeitung erfolgt gemäss der{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vacuul-accent hover:underline"
              >
                Datenschutzerklärung von Vercel
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              6. Cookies
            </h2>
            <p>
              Unsere Webseite verwendet technische Cookies, die für den Betrieb der
              Seite erforderlich sind. Darüber hinaus wird ein Cookie eingesetzt, um
              Ihre Präferenz für das Farbschema (hell/dunkel) zu speichern. Es werden
              keine Tracking-Cookies oder Werbe-Cookies verwendet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              7. Ihre Rechte
            </h2>
            <p>
              Gemäss dem Schweizer Bundesgesetz über den Datenschutz (DSG) sowie der
              europäischen Datenschutz-Grundverordnung (DSGVO) haben Sie das Recht auf:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-2">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: info@vacuul.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              8. Datensicherheit
            </h2>
            <p>
              Wir setzen technische und organisatorische Sicherheitsmassnahmen ein,
              um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen,
              Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu
              schützen. Unsere Webseite wird über HTTPS verschlüsselt übertragen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-vacuul-blue dark:text-white mb-2">
              9. Änderungen
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
              stets den aktuellen rechtlichen Anforderungen entspricht. Die aktuelle
              Fassung finden Sie jederzeit unter{" "}
              <Link href="/datenschutz" className="text-vacuul-accent hover:underline">
                vacuul.com/datenschutz
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}