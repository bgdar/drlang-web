import type { DokumentasiCodeItem } from "../codeItem";

export type TipeDocsSectionSelected =
  "kolektif" | "variabelTipe" | "fungsi" | "structurKontroll" | "operator";

// ------ Var tipe section -------
export type TipeVarTipeKey = "int" | "str" | "float";
export type VariableTipeDokumentasiType = Record<
  TipeVarTipeKey,
  DokumentasiCodeItem
>;

// -------- Operator ---------
export type TipeOperatorKey =
  "aritmatika" | "assignment" | "logika" | "unary" | "advancedAssignment";

export type OperatorDokumentasiType = Record<
  TipeOperatorKey,
  DokumentasiCodeItem
>;

// -------- kolektif ---------
export type TipeKolektifKey = "array" | "vector" | "list";
export type KolektifDokumentasiType = Record<
  TipeKolektifKey,
  DokumentasiCodeItem
>;

// -------- Function ---------
export type TipeFunctionKey = "basic" | "parameter" | "return" | "nested";
export type FunctionDokumentasiType = Record<
  TipeFunctionKey,
  DokumentasiCodeItem
>;

// -------- Control Flow ---------
export type TipeControlFlowKey = "ifElse" | "loop";
export type ControlFlowDokumentasiType = Record<
  TipeControlFlowKey,
  DokumentasiCodeItem
>;

// abungkan semua tipe dokumentasi di sini
export type AllDocsMap = VariableTipeDokumentasiType &
  KolektifDokumentasiType &
  FunctionDokumentasiType &
  ControlFlowDokumentasiType &
  OperatorDokumentasiType;

export type AllTypeDocsSelected = keyof AllDocsMap;

//  Partial agar tidak wajib mengisi semua key
export type PartialDocsSelected = Partial<AllDocsMap>;
