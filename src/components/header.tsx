// app/components/header.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/lib/theme-toggle";
import UserMenu from "./User-menu"; // Your new client component
import { LanguageToggle } from "@/lib/LanguageToggle";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex border-b shadow-sm items-center justify-around flex-wrap gap-y-3 py-2 px-6">
      <Link href="/">
        <section className="flex items-center justify-between gap-2">
          <Image src="/meet.png" alt="logo" width={37} height={37} />
          <h1 className="title">Meetup</h1>
        </section>
      </Link>

      <section className="flex items-center justify-between gap-4">
        <UserMenu session={session} /> {/* Pass session as prop */}
        <ThemeToggle />
        <LanguageToggle />
      </section>
    </nav>
  );
}
