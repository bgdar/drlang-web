import type {
  DokumentasiCodeItem,
  SectionSidebarTipe,
} from "../type/docs/codeItem";
import type {
  AllTypeSelected,
  PartialDocumentationSelected,
} from "../type/docs/section";

/**
 * Helper untuk mengambil properti id dan title saja
 */
// export function extractSectionNav(
//   items: DokumentasiCodeItem[],
// ): SectionSidebarTipe[] {
//   return items.map(({ id, title }) => ({ id, title }));
// } // array version
export type SectionNavItem = SectionSidebarTipe & {
  key: AllTypeSelected;
};

export function extractSectionNav(
  data: PartialDocumentationSelected,
): SectionNavItem[] {
  return Object.entries(data).flatMap(([key, item]) => {
    if (!item) return [];
    return [
      {
        key: key as AllTypeSelected,
        title: item.title,
      },
    ];
  });
}
