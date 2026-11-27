import type { DokumentasiCodeItem, SectionSidebarTipe } from "./type/codeItem";
import type { AllTypeSectionSelected } from "./type/sections";

/**
 * Helper untuk mengambil properti id dan title saja
 */
// export function extractSectionNav(
//   items: DokumentasiCodeItem[],
// ): SectionSidebarTipe[] {
//   return items.map(({ id, title }) => ({ id, title }));

// } // array version
// export type SectionNavItem = SectionSidebarTipe & {
//   key: AllTypeSectionSeletcted;
// };
//
// export function extractSectionNav (
//   data:AllPartialSectionSelected
// ): SectionNavItem[] {
//   return Object.entries(data).flatMap(([key, item]) => {
//     if (!item) return [];
//     return [
//       {
//         key: key as AllTypeSectionSeletcted,
//         title: item.title,
//       },
//     ];
//   });
// }

// Gunakan Generic <K> agar tipe key dinamis mengikuti input
export type SectionNavItem<K extends string = AllTypeSectionSelected> =
  SectionSidebarTipe & {
    key: K;
  };

export function extractSectionNav<K extends AllTypeSectionSelected>(
  data: Partial<Record<K, DokumentasiCodeItem>>,
): SectionNavItem<K>[] {
  return (
    Object.entries(data) as [K, DokumentasiCodeItem | undefined][]
  ).flatMap(([key, item]) => {
    if (!item) return [];
    return [
      {
        key,
        title: item.title,
        icon: item.icon,
      },
    ];
  });
}
