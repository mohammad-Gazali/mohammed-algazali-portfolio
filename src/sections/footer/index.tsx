import Container from "../../components/ui/container";
import { basic } from "../../constants";

const Footer = () => {
  return (
    <footer className="text-center py-6 mt-4 bg-[#16161b] border-t-2 border-background-foreground/40 z-10">
      <Container>
        Copyright © 2025 <strong>{basic.name}</strong>. All rights reserved.
      </Container>
    </footer>
  );
};

export default Footer;
