import social from "../../constants/social";

const ContactSocialLinks = () => {
  return (
    <ul className="flex flex-col sm:mt-12 grow gap-3">
      {social.map((link) => (
        <li key={link.name}>
          <SocialLink target="_blank" href={link.href}>
            {link.icon} {link.name}
          </SocialLink>
        </li>
      ))}
    </ul>
  );
};

const SocialLink = ({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a {...props} className="relative block px-8 rounded-lg overflow-hidden transition-all duration-500 group">
      <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#654358] via-[#17092A] to-[#2F0D64]">
        <div className="absolute inset-0 bg-[#170928] rounded-lg opacity-90"></div>
      </div>
      <div className="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
      <div className="absolute inset-[2px] bg-gradient-to-r from-[#170928] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"></div>
      <div className="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"></div>
      <div className="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"></div>
      <div className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"></div>
      <div className="relative flex items-center justify-center gap-2">
        <span className="flex items-center gap-2 py-2 px-4 sm:text-lg text-base font-normal bg-gradient-to-b text-[#B873F8] drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter">
          {children}
        </span>
      </div>
      <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg"></div>
    </a>
  );
};

export default ContactSocialLinks;
