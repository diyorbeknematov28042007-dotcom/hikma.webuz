import { ArrowUpRight, MapPin } from "@phosphor-icons/react/dist/ssr";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  bodyLive: string;
  note: string;
  linkLabel: string;
  pinLabel: string;
};

const sampleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Amir+Temur+Square%2C+Tashkent";

function configuredMapsUrl() {
  const value = process.env.NEXT_PUBLIC_LAW_MAP_URL;
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol === "https:" && ["www.google.com", "google.com", "maps.app.goo.gl"].includes(url.hostname)
      && (url.hostname === "maps.app.goo.gl" || url.pathname.startsWith("/maps/")))
      return url.toString();
  } catch { /* Fall back to the sample destination. */ }
  return null;
}

function configuredGoogleMap() {
  const value = process.env.NEXT_PUBLIC_LAW_MAP_EMBED_URL;
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol === "https:" && url.hostname === "www.google.com" && url.pathname.startsWith("/maps/embed"))
      return url.toString();
  } catch { /* Invalid configuration falls back to the illustrated map. */ }
  return null;
}

export function LawMap({ eyebrow, title, body, bodyLive, note, linkLabel, pinLabel }: Props) {
  const configuredAddress = process.env.NEXT_PUBLIC_LAW_ADDRESS?.trim();
  const configuredUrl = configuredMapsUrl();
  const configuredEmbed = configuredGoogleMap();
  const isLive = Boolean(configuredAddress && configuredUrl && configuredEmbed);
  const address = isLive ? configuredAddress : null;
  const embed = isLive ? configuredEmbed : null;
  const mapsUrl = isLive ? configuredUrl! : sampleMapsUrl;
  return (
    <section className="law-location law-section" id="manzil" aria-labelledby="law-location-title">
      <div className="law-shell law-location-grid">
        <div className="law-location-copy" data-law-reveal>
          <p className="law-kicker">{eyebrow}</p>
          <h2 id="law-location-title">{title}</h2>
          <p>{address ? bodyLive : body}</p>
          <div className="law-location-address">
            <MapPin size={24} weight="duotone" aria-hidden="true" />
            <span>{address || note}</span>
          </div>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="law-map-link">
            {linkLabel}<ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="law-map" data-law-reveal>
          {embed ? (
            <iframe
              title={address || pinLabel}
              src={embed}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="law-map-art" role="img" aria-label={address || pinLabel}>
              <svg viewBox="0 0 860 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <rect width="860" height="520" fill="#e6e9dc" />
                <path d="M0 0h290v150H0zm395 0h260v130H395zm350 0h115v175H745zM0 270h210v250H0zm320 85h235v165H320zm350 0h155v165H705z" fill="#d3dccb" />
                <path d="M-50 110 910 400M-50 410 910 90M260-30 500 570M725-20 585 560" fill="none" stroke="#f9f8f1" strokeWidth="42" />
                <path d="M-50 110 910 400M-50 410 910 90M260-30 500 570M725-20 585 560" fill="none" stroke="#a8bbaa" strokeWidth="2" strokeDasharray="12 14" />
                <path d="M0 192h155m560 65h145M65 465h160m315-410h155" stroke="#b7c7b3" strokeWidth="12" />
                <circle cx="449" cy="248" r="84" fill="#b7ceb2" />
                <circle cx="449" cy="248" r="52" fill="#d9e5ce" />
              </svg>
              <span className="law-map-pin"><MapPin size={29} weight="fill" aria-hidden="true" /><strong>X.</strong></span>
              <span className="law-map-label">{address || pinLabel}</span>
              <span className="law-map-brand">MAP PREVIEW / 01</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
