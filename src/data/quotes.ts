import { Quote, Choice } from "../types/quiz";

export const quotes: Quote[] = [
  {
    id: 1,
    text: "„Linksextreme Lumpen müssen von deutschen Hochschulen verbannt werden“ und statt einem Studienplatz „lieber praktischer Arbeit zugeführt werden“",
    author: "André Poggenburg",
    party: "AFD",
    year: 2017,
    context: "Landtag Sachsen-Anhalt",
    source: "Mitteldeutsche Zeitung",
  },
  {
    id: 2,
    text: "„Noch sitzt ihr da oben, ihr feigen Gestalten. Doch einst wird wieder Gerechtigkeit walten. Dann richtet das Volk, dann Gnade euch Gott“",
    author: "Jürgen Pohl",
    party: "AFD Thüringen",
    year: 2017,
    context: "Erstmaliger einzug in den Bundestag",
    source: "Spiegel Online",
  },
  {
    id: 3,
    text: "„Ich will, dass Deutschland nicht nur eine tausendjährige Vergangenheit hat. Ich will, dass Deutschland auch eine tausendjährige Zukunft hat.“",
    author: "Björn Höcke",
    party: "AFD",
    year: 2015,
    context: "Kundgebung im Oktober 2015",
    source: "Focus",
  },
  {
    id: 4,
    text: "„Ich möchte, dass ihr euch im Dienst verzehrt. Ich möchte euch als neue Preußen.“",
    author: "Björn Höcke",
    party: "AFD",
    year: 2017,
    context: "Persönliche Facebook-Seite",
    source: "Welt",
  },
  {
    id: 5,
    text: "„Ich will auch gar nicht, daß Sie dafür stimmen! Deutschland soll frei werden, aber nicht durch Sie!“",
    author: "Adolf Hitler",
    party: "NSDAP",
    year: 1933,
    context: "Als Antwort auf Otto Wels",
    source: "Archiv der Gegenwart",
  },
];

export const choices: Choice[] = [
  {
    name: "André Poggenburg",
    party: "AFD",
  },
  {
    name: "Jürgen Pohl",
    party: "AFD Thüringen",
  },
  {
    name: "Björn Höcke",
    party: "AFD",
  },
  {
    name: "Barack Obama",
    party: "Democratic",
  },
  {
    name: "Donald Trump",
    party: "Republican",
  },
  {
    name: "George W. Bush",
    party: "Republican",
  },
];
