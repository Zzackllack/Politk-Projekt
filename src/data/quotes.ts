import { Quote, Choice } from "../types/quiz";

export const quotes: Quote[] = [
  {
    id: 1,
    text: "Ask not what your country can do for you – ask what you can do for your country.",
    author: "John F. Kennedy",
    party: "Democratic",
    year: 1961,
    context: "Inaugural Address",
    source: "Presidential Library Archives",
  },
  {
    id: 2,
    text: "Mr. Gorbachev, tear down this wall!",
    author: "Ronald Reagan",
    party: "Republican",
    year: 1987,
    context: "Speech at Brandenburg Gate",
    source: "Reagan Presidential Library",
  },
  {
    id: 3,
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    party: "Democratic",
    year: 1933,
    context: "First Inaugural Address",
    source: "National Archives",
  },
  {
    id: 4,
    text: "Government is not the solution to our problem, government is the problem.",
    author: "Ronald Reagan",
    party: "Republican",
    year: 1981,
    context: "First Inaugural Address",
    source: "Reagan Presidential Library",
  },
  {
    id: 5,
    text: "Yes we can!",
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
