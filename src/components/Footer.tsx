const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center">
      <div className="glass-card rounded-2xl max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} LeoSetter. Open source under MIT.</span>
        <a
          href="https://github.com/AHJ32/LeoSetter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
