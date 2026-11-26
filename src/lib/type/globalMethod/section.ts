import type { DokumentasiCodeItem } from "../codeItem";

export type TipeGlobalSectionSelected = "conversi" | "utility";

export type TipeConversiSelected = "int" | "float" | "str" | "bool";
export type ConversiDokumentasiType = Record<
  TipeConversiSelected,
  DokumentasiCodeItem
>;

export type TipeUtilitySelected = "range";
export type UtilityDokumentasiType = Record<
  TipeUtilitySelected,
  DokumentasiCodeItem
>;

export type AllGlobalMap = ConversiDokumentasiType &
  UtilityDokumentasiType;

export type AllTypeGlobalSelected = keyof AllGlobalMap;
//  Partial agar tidak wajib mengisi semua key
export type PartialGlobalSelected = Partial<AllGlobalMap>;
