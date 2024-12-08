import React from "react";

const AGB = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>
      <p className="mb-4">
        Willkommen zu unseren Allgemeinen Geschäftsbedingungen. Diese AGB regeln
        die Nutzung unserer Website und die Inanspruchnahme unserer
        Dienstleistungen.
      </p>
      <h2 className="text-2xl font-semibold mb-2">1. Einleitung</h2>
      <p className="mb-4">
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
        Geschäftsbeziehungen zwischen uns und unseren Kunden in der jeweils
        gültigen Fassung zum Zeitpunkt des Vertragsschlusses.
      </p>
      <h2 className="text-2xl font-semibold mb-2">2. Nutzung der Website</h2>
      <p className="mb-4">
        Die Nutzung unserer Website ist ausschließlich zu rechtmäßigen Zwecken
        gestattet. Der Nutzer verpflichtet sich, alle anwendbaren Gesetze und
        Vorschriften einzuhalten.
      </p>
      <h2 className="text-2xl font-semibold mb-2">3. Vertragsschluss</h2>
      <p className="mb-4">
        Die Darstellung der Produkte und Dienstleistungen auf unserer Website
        stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur
        Abgabe einer Bestellung dar. Durch Anklicken des Bestellbuttons gibt der
        Kunde eine verbindliche Bestellung der im Warenkorb enthaltenen Waren
        ab. Der Kaufvertrag kommt zustande, wenn wir die Bestellung durch eine
        Auftragsbestätigung per E-Mail annehmen.
      </p>
      <h2 className="text-2xl font-semibold mb-2">
        4. Preise und Zahlungsbedingungen
      </h2>
      <p className="mb-4">
        Die auf den Produktseiten genannten Preise enthalten die gesetzliche
        Mehrwertsteuer und sonstige Preisbestandteile. Die Zahlung erfolgt
        wahlweise per Vorkasse, Kreditkarte oder PayPal.
      </p>
      <h2 className="text-2xl font-semibold mb-2">
        5. Lieferung und Versandkosten
      </h2>
      <p className="mb-4">
        Die Lieferung erfolgt innerhalb Deutschlands. Die Versandkosten werden
        dem Kunden im Bestellprozess deutlich mitgeteilt und sind vom Kunden zu
        tragen.
      </p>
      <h2 className="text-2xl font-semibold mb-2">6. Widerrufsrecht</h2>
      <p className="mb-4">
        Verbraucher haben ein vierzehntägiges Widerrufsrecht. Weitere
        Informationen zum Widerrufsrecht finden Sie in unserer
        Widerrufsbelehrung.
      </p>
      <h2 className="text-2xl font-semibold mb-2">
        7. Gewährleistung und Haftung
      </h2>
      <p className="mb-4">
        Es gelten die gesetzlichen Gewährleistungsrechte. Unsere Haftung für
        vertragliche Pflichtverletzungen sowie aus Delikt ist auf Vorsatz und
        grobe Fahrlässigkeit beschränkt.
      </p>
      <h2 className="text-2xl font-semibold mb-2">8. Datenschutz</h2>
      <p className="mb-4">
        Informationen zum Datenschutz finden Sie in unserer
        Datenschutzerklärung.
      </p>
      <h2 className="text-2xl font-semibold mb-2">9. Änderungen der AGB</h2>
      <p className="mb-4">
        Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern. Die
        geänderten Bedingungen werden dem Kunden per E-Mail spätestens zwei
        Wochen vor ihrem Inkrafttreten zugesandt. Widerspricht der Kunde der
        Geltung der neuen AGB nicht innerhalb von zwei Wochen nach Empfang der
        E-Mail, gelten die geänderten AGB als angenommen.
      </p>
      <h2 className="text-2xl font-semibold mb-2">10. Schlussbestimmungen</h2>
      <p className="mb-4">
        Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so
        bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Es gilt
        deutsches Recht unter Ausschluss des UN-Kaufrechts.
      </p>
      <h2 className="text-2xl font-semibold mb-2">11. Kontakt</h2>
      <p className="mb-4">
        Bei Fragen zu diesen AGB kontaktieren Sie uns bitte unter{" "}
        <a
          href="mailto:abuse@zacklack.de"
          className="text-blue-500 hover:underline"
        >
          abuse@zacklack.de
        </a>
        .
      </p>
    </div>
  );
};

export default AGB;
