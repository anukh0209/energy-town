import type { MenuItem } from "@/graphql/cms/queries/menu";

export const mockHeaderMenu: MenuItem[] = [
  {
    _id: "1",
    clientPortalId: "akIbZDrrvIy2JAWKodjAs",
    label: "Нүүр",
    url: "/",
    kind: "header",
    order: 1,
  },
  {
    _id: "2",
    clientPortalId: "akIbZDrrvIy2JAWKodjAs",
    label: "Бидний тухай",
    url: "/about",
    kind: "header",
    order: 2,
  },
  {
    _id: "3",
    clientPortalId: "akIbZDrrvIy2JAWKodjAs",
    label: "Бүтээгдэхүүн",
    url: "/products",
    kind: "header",
    order: 3,
  },
  {
    _id: "4",
    clientPortalId: "akIbZDrrvIy2JAWKodjAs",
    label: "Холбоо барих",
    url: "/contact",
    kind: "header",
    order: 4,
  },
];

export const mockFooterMenu: MenuItem[] = [
  {
    _id: "5",
    clientPortalId: "akIbZDrrvIy2JAWKodjAs",
    label: "Нүүр",
    url: "/",
    kind: "footer",
    order: 1,
  },
  {
    _id: "6",
    clientPortalId: "akIbZDrrvIy2JAWKodjAs",
    label: "Бидний тухай",
    url: "/about",
    kind: "footer",
    order: 2,
  },
  {
    _id: "7",
    clientPortalId: "akIbZDrrvIy2JAWKodjAs",
    label: "Бүтээгдэхүүн",
    url: "/products",
    kind: "footer",
    order: 3,
  },
  {
    _id: "8",
    clientPortalId: "akIbZDrrvIy2JAWKodjAs",
    label: "Холбоо барих",
    url: "/contact",
    kind: "footer",
    order: 4,
  },
];

export async function getHeaderMenu(): Promise<MenuItem[]> {
  return mockHeaderMenu;
}

export async function getFooterMenu(): Promise<MenuItem[]> {
  return mockFooterMenu;
}
