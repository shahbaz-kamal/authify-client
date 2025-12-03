export function Footer() {
  return (
    <footer id="footer-section" className="bg-background  py-10 mt-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <div className="footer-animate mb-6 text-foreground">{/* <Logo /> */}</div>

        {/* Description */}
        <p className="footer-animate max-w-md text-center text-muted-foreground leading-relaxed">
          Stay connected with VaultPay. Explore insights, updates, and useful resources crafted to help you stay informed.
        </p>

        {/* Navigation links */}
        <ul className="footer-animate mt-10 flex flex-wrap justify-between w-full gap-6 md:gap-10">
          {["About", "Careers", "History", "Services", "Projects", "Blog"].map((item) => (
            <li key={item}>
              <a href="#" className="text-foreground transition hover:text-foreground/70">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="footer-animate mx-auto flex max-w-7xl justify-center px-4 mt-10  sm:px-6">
          <p className="text-center font-medium text-balance text-muted-foreground">{`©${new Date().getFullYear()}`}</p>
        </div>
      </div>
    </footer>
  );
}
