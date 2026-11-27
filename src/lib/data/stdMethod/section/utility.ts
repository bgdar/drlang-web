import { MoveHorizontal, Ruler } from "@lucide/svelte";
import type { UtilityDokumentasiType } from "../../../type/stdMethod/section";

export const UtilityDocsData: UtilityDokumentasiType = {
  range: {
    icon: MoveHorizontal,
    title: "Range Generator (util.range)",
    desc: "Menghasilkan urutan deret angka secara otomatis dari batas awal hingga batas akhir tertentu. Sangat berguna untuk mengontrol jumlah iterasi pada perulangan (loop). Catatan: Sebelumnya dipanggil secara global menggunakan range(), sekarang wajib mengimpor modul `call std.util` dan memanggilnya melalui `util.range()`.",
    code: `
call std.drout
call std.util

// Menghasilkan urutan angka dari 0 sampai 4
for i in util.range(0, 5) {
  drout.log(i)
}
`,
  },
  len: {
    icon: Ruler,
    title: "Panjang Data / Koleksi (util.len)",
    desc: "Menghitung dan mengembalikan jumlah karakter pada teks (string) atau jumlah elemen di dalam koleksi data (Vec, List, dan Arr). Wajib mengimpor modul `call std.util` dan dapat dipanggil melalui `util.len()` maupun secara berantai (method chaining) menggunakan `.len()`.",
    code: `
call std.drout
call std.util

string teks = "Halo Dunia";
int panjangTeks = util.len(teks);

// Mendukung method chaining pada string maupun koleksi
int panjangRange = util.range(0, 10).len();

drout.log(panjangTeks)
drout.log(panjangRange)
`,
  },
};
