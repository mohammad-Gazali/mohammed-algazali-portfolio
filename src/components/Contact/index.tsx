import { Container, Header } from "../common";
import ContactForm from "./ContactForm";
import ContactSocialLinks from "./ContactSocialLinks";
import { motion } from "framer-motion";



const Contact = () => {
  return (
    <Container className="pt-10 mb-20 min-h-screen scroll-mt-10" section id="contact-section">
      <Header animation>
        Contact
      </Header>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex sm:flex-row flex-col sm:gap-8"
      >
        <ContactForm />
        <hr className="sm:hidden my-8 border-2 border-primary-foreground/25" />
        <ContactSocialLinks />
      </motion.div>
    </Container>
  )
}

export default Contact