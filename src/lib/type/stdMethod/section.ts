import type { DokumentasiCodeItem } from "../codeItem";

export type TipeStdSectionSelected = "drout" | "drin" | "mem";

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

export type AllStdMap = DroutTipeDokumentasiType & DrinTipeDokumentasiType;

export type AllTypeStdSelected = keyof AllStdMap;
//  Partial agar tidak wajib mengisi semua key
export type PartialStdSelected = Partial<AllStdMap>;
