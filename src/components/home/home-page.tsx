import { ModeToggle } from "@/components/mode-toggle";
import About from "./about";
import Footer from "./footer";
import Header from "./header";
import MyBlogs from "./my-blogs";
import Project from "./projects";
import Reads from "./reads";
import Socials from "./socials";

const HomePage = () => {
  return (
    <main className="w-full mx-auto max-w-3xl px-4 ">
      <div className="fixed top-5 right-5">
        <ModeToggle />
      </div>
      <Header />
      <About />
      {/* looks good but dosent fit */}
      {/* <CtaSection/> */}
      <Project />
      <MyBlogs />
      <Reads />
      <Socials />
      <Footer />
    </main>
  );
};

export default HomePage;
