// components/ActiveLink.js
'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, className, activeClass, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${className} ${isActive ? activeClass : ""}`}>
      {children}
    </Link>
  );
}
