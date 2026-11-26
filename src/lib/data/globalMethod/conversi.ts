import type { DokumentasiCodeItem } from "../../type/codeItem";

export type TipeConversiSelected = "int" | "float" | "str" | "bool";

export type ConversiTipeDokumentasiType = Record<
  TipeConversiSelected,
  DokumentasiCodeItem
>;

export const ConversiDocsData: ConversiTipeDokumentasiType = {
  int: {
    title: "Konversi ke Integer (int)",
    desc: "Mengubah nilai dari tipe data lain (seperti string angka atau bilangan desimal float) menjadi bilangan bulat (int).",
    code: `
call std.drout

string teksAngka = "150";
int angka = int(teksAngka);

float desimal = 9.8;
int bulat = int(desimal);

drout.log(angka + 50)
drout.log(bulat)
`,
  },
  float: {
    title: "Konversi ke Float (float)",
    desc: "Mengubah nilai string atau bilangan bulat menjadi tipe data angka desimal (float) untuk perhitungan presisi.",
    code: `
call std.drout

string teksDesimal = "3.14";
float pi = float(teksDesimal);

int nilai = 10;
float nilaiFloat = float(nilai);

drout.log(pi)
drout.log(nilaiFloat)
`,
  },
  str: {
    title: "Konversi ke String (str)",
    desc: "Mengubah tipe data angka (int/float) atau boolean menjadi teks (string) agar dapat digabungkan dengan teks lainnya.",
    code: `
call std.drout

int tahun = 2026;
string teksTahun = str(tahun);

drout.log("Selamat datang di tahun " + teksTahun)
`,
  },
  bool: {
    title: "Konversi ke Boolean (bool)",
    desc: "Mengevaluasi suatu nilai menjadi kondisi logika benar (true) atau salah (false). Nilai 0 atau string kosong akan bernilai false.",
    code: `
call std.drout

int status = 1;
bool isAktif = bool(status);

int kosong = 0;
bool isKosong = bool(kosong);

drout.log(isAktif)
drout.log(isKosong)
`,
  },
};
