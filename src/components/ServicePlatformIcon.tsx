import Image from "next/image";
import { Browser } from "@phosphor-icons/react/dist/ssr";

/** The platform mark is decorative whenever the service name is already visible. */
export function ServicePlatformIcon({
  service,
  className = "",
}: {
  service: string;
  className?: string;
}) {
  if (!["landing", "bot", "instagram", "telegram"].includes(service)) return null;
  const platform = service === "bot" ? "telegram" : service;

  return (
    <span
      className={`platform-icon platform-icon--${platform} ${className}`.trim()}
      aria-hidden="true"
      data-platform={platform}
    >
      {platform === "landing" ? (
        <Browser weight="regular" />
      ) : (
        <Image
          src={
            platform === "instagram"
              ? "/brand/instagram-glyph.png"
              : "/brand/telegram-logo.svg"
          }
          alt=""
          width={96}
          height={96}
        />
      )}
    </span>
  );
}
