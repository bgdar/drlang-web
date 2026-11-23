import type { TipeSectionSelected } from "./docs/section";

export type pageLink = {
  name: string;
};

export type PropsGlobal = {
  handleChangePage: (page: string) => void;
};

// constanta penanda halaman
export const pagesName = {
  Index: "index",
  Docs: "docs",
  Install: "install",
  Tools: "tools",
  Blog: "blog",
} as const;

// -------SUB PAGE -------
// ------ page for Docs ----------
export type PageLinkDocs = Omit<pageLink, "onePage"> & {
  // hilangkan onePage dan tambhakan tipeSection
  tipeSection: TipeSectionSelected;
};
export const DocsName = {
  variabelTipeData: "variabel-tipe-data",
  Kolektif: "kolektif",
} as const;
