import { basic } from "../constants";
import { Container } from "./common";



const Footer = () => {
  return (
    <footer className="text-center py-6 mt-4 text-primary-light-foreground bg-primary-light border-t-2 border-primary-light-foreground/40">
      <Container>
        Copyright © 2023 <strong>{basic.name}</strong>. All rights reserved.
      </Container>
    </footer>
  )
}

export default Footer