import type { ConversiDokumentasiType } from "../../../type/stdMethod/section";
import { DecimalsArrowRight, Hash, ToggleRight, Type } from "@lucide/svelte";

export const ConversiDocsData: ConversiDokumentasiType = {
  int: {
    title: "Konversi ke Integer (conv.int)",
    icon: Hash,
    desc: "Mengubah nilai dari tipe data lain (seperti string angka atau bilangan desimal float) menjadi bilangan bulat (int). Catatan: Sebelumnya dipanggil secara global menggunakan int(), sekarang wajib mengimpor modul `call std.conv` dan memanggilnya melalui `conv.int()` (atau method chaining `.to_int()`).",
    code: `
call std.drout
call std.conv

string teksAngka = "150";
int angka = conv.int(teksAngka);

float desimal = 9.8;
int bulat = conv.int(desimal);

// Mendukung method chaining
int hasilChain = "25".to_int();

drout.log(angka + 50)
drout.log(bulat)
drout.log(hasilChain)
`,
  },
  float: {
    title: "Konversi ke Float (conv.float)",
    icon: DecimalsArrowRight,
    desc: "Mengubah nilai string atau bilangan bulat menjadi tipe data angka desimal (float) untuk perhitungan presisi. Catatan: Sebelumnya dipanggil secara global menggunakan float(), sekarang wajib mengimpor modul `call std.conv` dan memanggilnya melalui `conv.float()` (atau method chaining `.to_float()`).",
    code: `
call std.drout
call std.conv

string teksDesimal = "3.14";
float pi = conv.float(teksDesimal);

int nilai = 10;
float nilaiFloat = conv.float(nilai);

// Mendukung method chaining
float suhu = "36.5".to_float();

drout.log(pi)
drout.log(nilaiFloat)
drout.log(suhu)
`,
  },
  str: {
    title: "Konversi ke String (conv.str)",
    icon: Type,
    desc: "Mengubah tipe data angka (int/float) atau boolean menjadi teks (string) agar dapat digabungkan dengan teks lainnya. Catatan: Sebelumnya dipanggil secara global menggunakan str(), sekarang wajib mengimpor modul `call std.conv` dan memanggilnya melalui `conv.str()` (atau method chaining `.to_str()`).",
    code: `
call std.drout
call std.conv

int tahun = 2026;
string teksTahun = conv.str(tahun);

// Mendukung method chaining
bool status = true;
string teksStatus = status.to_str();

drout.log("Selamat datang di tahun " + teksTahun)
drout.log("Status aktif: " + teksStatus)
`,
  },
  bool: {
    title: "Konversi ke Boolean (conv.bool)",
    icon: ToggleRight,
    desc: "Mengevaluasi suatu nilai menjadi kondisi logika benar (true) atau salah (false). Nilai 0 atau string kosong akan bernilai false. Catatan: Sebelumnya dipanggil secara global menggunakan bool(), sekarang wajib mengimpor modul `call std.conv` dan memanggilnya melalui `conv.bool()` (atau method chaining `.to_bool()`).",
    code: `
call std.drout
call std.conv

int status = 1;
bool isAktif = conv.bool(status);

int kosong = 0;
bool isKosong = conv.bool(kosong);

// Mendukung method chaining
bool dariTeks = "true".to_bool();

drout.log(isAktif)
drout.log(isKosong)
drout.log(dariTeks)
`,
  },
};
