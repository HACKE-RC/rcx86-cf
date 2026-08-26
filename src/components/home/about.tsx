import Link from "next/link";

const About = () => {
  return (
    <div className="about-me text-muted-foreground flex flex-col gap-4">
      <p>
        I build systems, I break systems, I build systems that build systems,
        and I build systems that break systems.
      </p>
      <p>
        Agentic Research @ Stealth. Previously @ Pwno.io. Youngest Magnificent
        Grants Fellow '24.{" "}
        <Link
          href="https://paradigm.xyz"
          target="_blank"
          className="underline underline-offset-2 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          Paradigm
        </Link>{" "}
        Fellow '26.
      </p>
      <p></p>
    </div>
  );
};

export default About;
