import type { TipeDocsSectionSelected } from "../type/docs/section";
import type { pageLink } from "../type/pagesLink";
import type { TipeStdSectionSelected } from "../type/stdMethod/section";

// Docs
export const pageDocsData: (pageLink & {
  tipeSection: TipeDocsSectionSelected;
})[] = [
  { name: "kolektif", tipeSection: "kolektif" },
  { name: "variabel-tipe-data", tipeSection: "variabelTipe" },
  { name: "Operator", tipeSection: "operator" },
  { name: "fungsi-dasar", tipeSection: "fungsi" },
  { name: "loop", tipeSection: "loop" },
  { name: "condition", tipeSection: "condition" },
];

// Standar method
export const pageStdMethodData: (pageLink & {
  tipeSection: TipeStdSectionSelected;
})[] = [
  { name: "drout", tipeSection: "drout" },
  { name: "drin", tipeSection: "drin" },
  { name: "mem", tipeSection: "mem" },
  { name: "conv", tipeSection: "conversi" },
  { name: "mem", tipeSection: "utility" },
];
