import type { Page } from "@/graphql/cms/queries/page";

export const mockPages: Page[] = [
  {
    _id: "1",
    clientPortalId: "akIbZDrrvIy2JAWKodjAs",
    name: "Нүүр",
    slug: "home",
    description: "Energy Town нүүр хуудас",
    content: "<h1>Energy Town</h1><p>Барилгын материалын төрөлжсөн дэлгүүр</p>",
    status: "published",
    type: "page",
  },
  {
    _id: "2",
    clientPortalId: "akIbZDrrvIy2JAWKodjAs",
    name: "Бидний тухай",
    slug: "about",
    description: "Бидний тухай мэдээлэл",
    content: "<h1>Бидний тухай</h1><p>Energy Town нь 2010 оноос хойш үйл ажиллагаа явуулж байна.</p>",
    status: "published",
    type: "page",
  },
  {
    _id: "3",
    clientPortalId: "akIbZDrrvIy2JAWKodjAs",
    name: "Бүтээгдэхүүн",
    slug: "products",
    description: "Бүтээгдэхүүний жагсаалт",
    content: "<h1>Бүтээгдэхүүн</h1><p>Барилгын материалууд</p>",
    status: "published",
    type: "page",
  },
  {
    _id: "4",
    clientPortalId: "akIbZDrrvIy2JAWKodjAs",
    name: "Холбоо барих",
    slug: "contact",
    description: "Холбоо барих мэдээлэл",
    content: "<h1>Холбоо барих</h1><p>Бидэнтэй холбоо барина уу</p>",
    status: "published",
    type: "page",
  },
];

export async function getPages(): Promise<Page[]> {
  return mockPages;
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  return mockPages.find((p) => p.slug === slug) || null;
}
