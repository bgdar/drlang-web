import { Repeat, Infinity } from "@lucide/svelte";
import type { LoopDokumentasiType } from "../../../type/docs/section";

export const LoopDocsData: LoopDokumentasiType = {
  for: {
    title: "Perulangan (Loop)",
    icon: Repeat,
    desc: "Mengeksekusi blok kode secara berulang selama kondisi terpenuhi atau sepanjang elemen dalam koleksi.",
    code: `call std.drout

int i = 0
for i < 3 :
    drout.log(i)
    i +=  1`,
  },
  forOnly: {
    title: "Perulangan (Loop Only)",
    icon: Infinity,
    desc: "Akan terus di execusi tidak akan berhenti jika tidak menggunakan break",
    code: `call std.drout
for  :
    drout.log("loop terus")`,
  },
};
