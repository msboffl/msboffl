import { SocialLinks } from "@/data/SocialLinks";
import Link from "next/link";

export function SocialIcons() {
  return (
    <>
      <div className="mt-6 flex flex-row items-center justify-center">
        {SocialLinks.map(({ id, href, icon: Icon }) => (
          <Link
            href={href}
            key={id}
            target="_blank"
            className="mx-2 rounded-full border-2 p-2 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-red-650 hover:bg-red-650 hover:shadow-lg dark:text-white"
          >
            <Icon size={14} />
          </Link>
        ))}
      </div>
    </>
  );
}
