import Container from "../../components/ui/container";
import Header from "../../components/ui/header";
import ContactSocialLinks from "./contact-social-links";
import ContactForm from "./contact-form";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <Container
      className="pt-10 mb-20 min-h-screen scroll-mt-10"
      section
      id="contact-section"
    >
      <Header animation>Contact</Header>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex sm:flex-row flex-col sm:gap-8"
      >
        <ContactForm />
        <hr className="sm:hidden my-8 border-2 border-background-foreground/25" />
        <ContactSocialLinks />
      </motion.div>
    </Container>
  );
};

export default Contact;
