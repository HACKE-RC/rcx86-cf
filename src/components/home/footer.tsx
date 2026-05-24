import { home_page_data } from "@/data/home";

const Footer = () => {
  return (
    <footer className="flex w-full items-end justify-between gap-6 border-t py-3">
      <p className="text-xs text-muted-foreground opacity-70">
        &copy; {new Date().getFullYear()} {home_page_data.name}
      </p>
      <p className="max-w-md text-right text-xs text-muted-foreground opacity-70">
        A problem worth attack proves its worth by fighting back
      </p>
    </footer>
  );
};

export default Footer;
