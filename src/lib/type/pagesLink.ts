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
  StdMethod: "std method",
  GlobalMethod: "global method",
  Install: "install",
  Tools: "tools",
  Blog: "blog",
} as const;

// -------SUB PAGE -------
// ------ page for Docs ----------

// export const DocsName = {
//   variabelTipeData: "variabel-tipe-data",
//   Kolektif: "kolektif",
// } as const;
