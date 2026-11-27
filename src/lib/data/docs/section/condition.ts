import type { ConditionDokumentasiType } from "../../../type/docs/section";

import { CircleCheck, Split } from "@lucide/svelte";

export const ConditionDocsData: ConditionDokumentasiType = {
  if: {
    title: "Percabangan (If)",
    icon: CircleCheck,
    desc: "Mengontrol alur eksekusi program berdasarkan evaluasi kondisi boolean menggunakan blok indentasi setelah tanda titik dua (:).",
    code: `call std.drout
int nilai = false

if nilai :
    drout.log("di execusi")`,
  },
  ifElse: {
    title: "Percabangan (If / Else)",
    icon: Split,
    desc: "Mengontrol alur eksekusi saat if tidak bisa di tangani maka akan masuk ke blok else",
    code: `call std.drout

int nilai = 85

if nilai >= 75 :
    drout.log("Lulus")
else :
    drout.log("Mengulang")`,
  },
};
