export interface DokumentasiCodeItem {
  title: string;
  desc: string;
  code: string;
}

export type SectionSidebarTipe = Pick<DokumentasiCodeItem, "title">;
