'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
}

const Navigation = ({ navLinks }: { navLinks: NavLink[] }) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((navLink) => {
        const isActive = pathname.startsWith(navLink.href);

        return (
          <Link
            className={isActive ? 'nav-link-active text-blue-500' : 'nav-link text-white'}
            href={navLink.href}
            key={navLink.name}
          >
            {navLink.name}
          </Link>
        )
      })}
    </>
  );
}

export default Navigation;