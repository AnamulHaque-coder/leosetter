const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center">
      <div className="glass-card rounded-2xl max-w-4xl mx-auto px-6 py-4 flex items-center justify-center text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Anamul Haque | All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
