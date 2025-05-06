import Button from "../../components/ui/button";
import social from "../../constants/social";

const ContactSocialLinks = () => {
  return (
    <ul className="flex flex-col sm:mt-12 grow gap-3">
      {social.map((link) => (
        <li key={link.name}>
          <Button target="_blank" href={link.href}>
            {link.icon} {link.name}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ContactSocialLinks;
