import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean; // If true, rendering logo styled for dark backgrounds (white text)
}

export default function Logo({ className = "", iconOnly = false, light = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center select-none group ${className}`} aria-label="Aegis Nets Home">
      {iconOnly ? (
        <div className="relative flex-shrink-0 w-10 h-10 transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/logo/aegis-icon.svg"
            alt="Aegis Nets Shield Logo"
            fill
            sizes="40px"
            className="object-contain"
            priority
          />
        </div>
      ) : (
        <div className="relative h-12 w-64 transition-transform duration-300 group-hover:scale-[1.02]">
          <Image
            src={light ? "/images/logo/aegis-logo-light.svg" : "/images/logo/aegis-logo.svg"}
            alt="Aegis Nets Logo"
            fill
            sizes="256px"
            className="object-contain object-left"
            priority
          />
        </div>
      )}
    </Link>
  );
}


