import type { TipeDocsSectionSelected } from "../type/docs/section";
import type { TipeGlobalSectionSelected } from "../type/globalMethod/section";
import type { pageLink } from "../type/pagesLink";
import type { TipeStdSectionSelected } from "../type/stdMethod/section";


// Docs 
export const pageDocsData: (pageLink & {tipeSection : TipeDocsSectionSelected})[] = [
  { name: "kolektif", tipeSection: "kolektif" },
  { name: "variabel-tipe-data", tipeSection: "variabelTipe" },
  { name: "Operator", tipeSection: "operator" },
  { name: "fungsi-dasar", tipeSection: "fungsi" },
  { name: "struktur-kontrol", tipeSection: "structurKontroll" },
];


// Standar method 
export const pageStdMethodData:  (pageLink & {tipeSection : TipeStdSectionSelected})[] = [
  { name: "drout", tipeSection: "drout" },
  { name: "drin", tipeSection: "drin" },
  { name: "mem", tipeSection: "mem" },
];

// Global method 
export const pageGlobalMethodData:  (pageLink & {tipeSection : TipeGlobalSectionSelected})[] = [
  { name: "drout", tipeSection: "conversi" },
  { name: "mem", tipeSection: "utility" },
];
