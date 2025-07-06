'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginComponent() {
  const params = useParams();
  const lang = params.lang || 'zh';

  return (
    <Link className="cursor-pointer" href={`/${lang}/login`}>
      登入
    </Link>
  );
}
