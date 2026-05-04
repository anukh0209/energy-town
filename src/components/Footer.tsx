import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_MENUS } from "@/graphql/cms/queries/menu";
import Link from "next/link";

export default async function Footer() {
  const client = await getServerApolloClient();
  const { data } = await client.query({
    query: CP_MENUS,
    variables: { kind: "footer" },
  });

  const menuItems = (data as any)?.cpMenus || [];

  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-[#2d5a3d]">Energy Town</h3>
            <p className="mt-2 text-sm text-gray-600">
              Барилгын материалын төрөлжсөн дэлгүүр
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Холбоосууд</h4>
            <ul className="mt-4 space-y-2">
              {menuItems.map((item: any) => (
                <li key={item._id}>
                  <Link
                    href={item.url || "#"}
                    className="text-sm text-gray-600 hover:text-[#2d5a3d]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Холбоо барих</h4>
            <p className="mt-4 text-sm text-gray-600">Улаанбаатар хот</p>
            <p className="text-sm text-gray-600">+976 7711 2233</p>
            <p className="text-sm text-gray-600">info@energytown.mn</p>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Energy Town. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  );
}
