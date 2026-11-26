import type { UtilityTipeDokumentasiType } from "../../type/globalMethod/section";

export const UtilityDocsData: UtilityTipeDokumentasiType = {
  range: {
    title: "Range Generator (range)",
    desc: "Menghasilkan urutan deret angka secara otomatis dari batas awal hingga batas akhir tertentu. Sangat berguna untuk mengontrol jumlah iterasi pada perulangan (loop).",
    code: `
call std.drout

// Menghasilkan urutan angka dari 0 sampai 4
for i in range(0, 5) {
  drout.log(i)
}
`,
  },
};
