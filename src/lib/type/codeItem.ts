import type { Component } from "@lucide/svelte";

export interface DokumentasiCodeItem {
  title: string;
  desc: string;
  code: string;
  icon: Component;
}

export type SectionSidebarTipe = Pick<DokumentasiCodeItem, "title" | "icon">;
