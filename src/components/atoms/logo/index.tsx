import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/assets/img/logo@3x.webp" alt="Free WebP Converter - Home" width={49} height={55} />
    </Link>
  );
};

export default Logo;
