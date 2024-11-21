import { Quote, Choice } from "../types/quiz";

export const quotes: Quote[] = [
  {
    id: 1,
    text: "„Frage nicht, was dein Land für dich tun kann – frage, was du für dein Land tun kannst.“",
    author: "John F. Kennedy",
    party: "Democratic",
    year: 1961,
    context: "Inaugural Address",
    source: "Presidential Library Archives",
  },
  {
    id: 2,
    text: "„Herr Gorbatschow, reißen Sie diese Mauer nieder!“",
    author: "Ronald Reagan",
    party: "Republican",
    year: 1987,
    context: "Speech at Brandenburg Gate",
    source: "Reagan Presidential Library",
  },
  {
    id: 3,
    text: "„Das Einzige, was wir zu fürchten haben, ist die Furcht selbst.“",
    author: "Franklin D. Roosevelt",
    party: "Democratic",
    year: 1933,
    context: "First Inaugural Address",
    source: "National Archives",
  },
  {
    id: 4,
    text: "„Die Regierung ist nicht die Lösung unseres Problems, die Regierung ist das Problem.“",
    author: "Ronald Reagan",
    party: "Republican",
    year: 1981,
    context: "First Inaugural Address",
    source: "Reagan Presidential Library",
  },
  {
    id: 5,
    text: "„Ja, wir können!“",
    author: "Barack Obama",
    party: "Democratic",
    year: 2008,
    context: "Presidential Campaign Slogan",
    source: "Campaign Archives",
  },
];

export const choices: Choice[] = [
  {
    name: "John F. Kennedy",
    party: "Democratic",
  },
  {
    name: "Ronald Reagan",
    party: "Republican",
  },
  {
    name: "Franklin D. Roosevelt",
    party: "Democratic",
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
