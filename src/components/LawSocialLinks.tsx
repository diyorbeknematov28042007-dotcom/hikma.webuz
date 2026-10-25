import { ArrowUpRight, InstagramLogo, TelegramLogo } from "@phosphor-icons/react/dist/ssr";

type Props = { title: string; intro: string; pending: string };

function profileUrl(value: string | undefined, service: "telegram" | "instagram") {
  if (!value) return null;
  try {
    const url = new URL(value);
    const hosts = service === "telegram" ? ["t.me", "www.t.me"] : ["instagram.com", "www.instagram.com"];
    if (url.protocol === "https:" && hosts.includes(url.hostname) && url.pathname.length > 1)
      return url.toString();
  } catch { /* Unconfigured or invalid profile; show the pending state. */ }
  return null;
}

export function LawSocialLinks({ title, intro, pending }: Props) {
  const socials = [
    { label: "Telegram", href: profileUrl(process.env.NEXT_PUBLIC_LAW_TELEGRAM_URL, "telegram"), Icon: TelegramLogo },
    { label: "Instagram", href: profileUrl(process.env.NEXT_PUBLIC_LAW_INSTAGRAM_URL, "instagram"), Icon: InstagramLogo },
  ];
  return (
    <div className="law-socials">
      <div className="law-socials-heading"><h3>{title}</h3><p>{intro}</p></div>
      <div className="law-socials-grid">
        {socials.map(({ label, href, Icon }) => href ? (
          <a className="law-social-card" key={label} href={href} target="_blank" rel="noopener noreferrer">
            <Icon size={27} weight="duotone" aria-hidden="true" />
            <span>{label}</span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        ) : (
          <div className="law-social-card law-social-pending" key={label}>
            <Icon size={27} weight="duotone" aria-hidden="true" />
            <span>{label}<small>{pending}</small></span>
          </div>
        ))}
      </div>
    </div>
  );
}
