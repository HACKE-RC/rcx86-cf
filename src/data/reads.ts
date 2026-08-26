export type ReadItem = {
  title: string;
  url: string;
  kind: "reading" | "watching";
};

export const reads: ReadItem[] = [
  {
    title: "The Melting Ice Cube, Airchat & Pieter Levels",
    url: "https://www.littlealmanack.com/p/the-melting-ice-cube-airchat-and?open=false#%C2%A7best-book-passage-no-context-needed",
    kind: "reading",
  },
  {
    title: "Edutainment is Not Learning",
    url: "https://giansegato.com/essays/edutainment-is-not-learning",
    kind: "reading",
  },
  {
    title: "How to Do Great Work",
    url: "https://www.paulgraham.com/greatwork.html",
    kind: "reading",
  },
  {
    title: "Crony Beliefs",
    url: "https://meltingasphalt.com/crony-beliefs/",
    kind: "reading",
  },
  {
    title: "The Techno-Optimist Manifesto",
    url: "https://a16z.com/the-techno-optimist-manifesto/",
    kind: "reading",
  },
  {
    title: "What You'll Wish You'd Known",
    url: "https://www.paulgraham.com/hs.html",
    kind: "reading",
  },
  {
    title: "The Tao of Seneca",
    url: "https://tim.blog/2017/07/06/tao-of-seneca/",
    kind: "reading",
  },
  {
    title: "Life is Not Short",
    url: "https://dkb.show/post/life-is-not-short",
    kind: "reading",
  },
  {
    title: "High Agency",
    url: "https://www.highagency.com/",
    kind: "reading",
  },
  {
    title: "Notes on Puzzles",
    url: "https://nabeelqu.substack.com/p/notes-on-puzzles",
    kind: "reading",
  },
  {
    title: "You and Your Research",
    url: "https://fs.blog/great-talks/richard-hamming-your-research/",
    kind: "watching",
  },
  {
    title: "Priming",
    url: "https://thedecisionlab.com/biases/priming",
    kind: "reading",
  },
  {
    title: "The Lost Art of Logarithms",
    url: "https://www.lostartoflogarithms.com/",
    kind: "reading",
  },
  {
    title: "Work Hard",
    url: "https://terrytao.wordpress.com/career-advice/work-hard/",
    kind: "reading",
  },
  {
    title: "Advice to Young People, The Lies I Tell Myself",
    url: "https://jxnl.github.io/blog/writing/2024/06/01/advice-to-young-people/",
    kind: "reading",
  },
  {
    title: "What I Wish Someone Had Told Me",
    url: "https://blog.samaltman.com/what-i-wish-someone-had-told-me",
    kind: "reading",
  },
  {
    title: "How To Be Successful",
    url: "https://blog.samaltman.com/how-to-be-successful",
    kind: "reading",
  },
  {
    title: "How to Become a Mathematical Genius",
    url: "https://www.butthistime.com/p/how-to-become-a-mathematical-genius",
    kind: "reading",
  },
  {
    title: "Does One Have to Be a Genius to Do Maths?",
    url: "https://terrytao.wordpress.com/career-advice/does-one-have-to-be-a-genius-to-do-maths/",
    kind: "reading",
  },
];

export const featuredReads: ReadItem[] = [
  reads[2],
  reads[13],
  reads[9],
  reads[4],
  reads[1],
];
