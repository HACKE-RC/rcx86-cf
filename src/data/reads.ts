export type ReadItem = {
  title: string;
  url: string;
  kind: "reading" | "watching";
};

export const reads: ReadItem[] = [
  {
    title: "How to Fail at Almost Everything and Still Win Big",
    url: "https://www.youtube.com/watch?v=uy6-fq8PwNk",
    kind: "watching",
  },
  {
    title: "24 Cognitive Biases",
    url: "https://www.youtube.com/watch?v=IRfv49wTkfw",
    kind: "watching",
  },
  {
    title: "Pmarca Guide to Career Planning: Introduction",
    url: "https://pmarchive.com/guide_to_career_planning_part0.html",
    kind: "reading",
  },
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
    title: "294 The Five Laws Of Stupidity",
    url: "https://youtu.be/3O9FFrLpinQ",
    kind: "watching",
  },
];

export const featuredReads: ReadItem[] = [
  reads[5],
  reads[16],
  reads[12],
  reads[7],
  reads[4],
];
