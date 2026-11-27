import type { DokumentasiCodeItem } from "../codeItem";

export type TipeStdSectionSelected =
  "drout" | "drin" | "mem" | "conversi" | "utility";

export type TipeDroutSelected = "log";
export type DroutTipeDokumentasiType = Record<
  TipeDroutSelected,
  DokumentasiCodeItem
>;

export type TipeDrinSelected = "input";
export type DrinTipeDokumentasiType = Record<
  TipeDrinSelected,
  DokumentasiCodeItem
>;

export type TipeConversiSelected = "int" | "float" | "str" | "bool";
export type ConversiDokumentasiType = Record<
  TipeConversiSelected,
  DokumentasiCodeItem
>;

export type TipeUtilitySelected = "range" | "len";
export type UtilityDokumentasiType = Record<
  TipeUtilitySelected,
  DokumentasiCodeItem
>;

export type AllStdMap = DroutTipeDokumentasiType &
  DrinTipeDokumentasiType &
  ConversiDokumentasiType &
  UtilityDokumentasiType;

export type AllTypeStdSelected = keyof AllStdMap;
//  Partial agar tidak wajib mengisi semua key
export type PartialStdSelected = Partial<AllStdMap>;
