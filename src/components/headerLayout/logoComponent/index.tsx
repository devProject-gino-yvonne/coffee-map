import Link from 'next/link';
import Image from 'next/image';

export default function LogoComponent() {
  return (
    <Link className="flex items-center gap-1" href={`/`}>
      <Image src="/logoImg.png" alt="logo image" width={40} height={40} />
      <span className="font-bold text-[#5a3d1b]">Coffee Map</span>
    </Link>
  );
}
