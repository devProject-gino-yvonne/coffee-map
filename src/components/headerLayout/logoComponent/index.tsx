'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LogoComponent() {
  const params = useParams();
  const lang = params.lang || 'zh';

  return (
    <Link className="flex items-center gap-1" href={`/${lang}`}>
      <Image src="/logoImg.png" alt="logo image" width={40} height={40} />
      <span className="font-bold text-[#5a3d1b]">Coffee Map</span>
    </Link>
  );
}
