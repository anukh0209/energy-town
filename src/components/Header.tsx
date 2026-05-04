import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_MENUS } from "@/graphql/cms/queries/menu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Link from "next/link";

export default async function Header({ locale }: { locale: string }) {
  const client = await getServerApolloClient();
  const { data } = await client.query({
    query: CP_MENUS,
    variables: { language: locale, kind: "header" },
  });

  const menuItems = (data as any)?.cpMenus || [];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="text-xl font-bold text-[#2d5a3d]">
          Energy Town
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item: any) => (
            <Link
              key={item._id}
              href={item.url || "#"}
              className="text-sm font-medium text-gray-700 hover:text-[#2d5a3d] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
