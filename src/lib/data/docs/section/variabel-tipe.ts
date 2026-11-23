import type { VariableTipeDokumentasiType } from "../../../type/docs/section";

export const VariableTipeDocsData: VariableTipeDokumentasiType = {
  int: {
    title: "Integer (int)",
    desc: "Tipe data untuk bilangan bulat (tanpa pecahan). Di Dr Lang, int direpresentasikan sebagai i32 secara default untuk efisiensi pemrosesan CPU optimal.",
    code: `
call std.drout
int umur = 25;
int tahun = 2026;

drout.log(umur)
drout.log(tahun)
`,
  },

  str: {
    title: "String (str)",
    desc: "Tipe data untuk deretan karakter teks UTF-8. Bersifat immutable secara default dan efisien dalam pengelolaan alokasi memori string literal.",
    code: `
let nama: str = "Dr Lang";
let salam: str = "Halo Dunia!";

print(salam, " Selamat datang di ", nama);`,
  },
  float: {
    title: "Floating-Point (float)",
    desc: "Tipe data untuk bilangan desimal atau pecahan. Menggunakan presisi standar f64 untuk perhitungan matematis dengan tingkat akurasi tinggi.",
    code: `
let ipk: float = 3.92;
let versi: float = 1.0;

let hasil: float = ipk * versi;
print("Hasil kalkulasi: ", hasil);`,
  },
};
