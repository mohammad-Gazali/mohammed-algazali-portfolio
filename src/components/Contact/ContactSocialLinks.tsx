import social from "../../constants/social"
import { Button } from "../common"



const ContactSocialLinks = () => {
  return (
    <ul className="flex flex-col sm:mt-12 grow gap-3">
        {social.map(link => (
            <li key={link.name}>
                <Button target="_blank" variant="primary-light" href={link.href} asLink>
                    {link.icon} {link.name}
                </Button>
            </li>
        ))}
    </ul>
  )
}

export default ContactSocialLinks