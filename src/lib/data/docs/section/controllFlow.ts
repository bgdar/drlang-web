import type { ControlFlowDokumentasiType } from "../../../type/docs/section";

export const ControlFlowDocsData: ControlFlowDokumentasiType = {
  ifElse: {
    title: "Percabangan (If / Else)",
    desc: "Mengontrol alur eksekusi program berdasarkan evaluasi kondisi boolean menggunakan blok indentasi setelah tanda titik dua (:).",
    code: `call std.drout

int nilai = 85

if nilai >= 75 :
    drout.log("Lulus")
else :
    drout.log("Mengulang")`,
  },
  loop: {
    title: "Perulangan (Loop)",
    desc: "Mengeksekusi blok kode secara berulang selama kondisi terpenuhi atau sepanjang elemen dalam koleksi.",
    code: `call std.drout

int i = 0
for i < 3 :
    drout.log(i)
    i +=  1`,
  },
};
