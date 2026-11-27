import {
  BracesIcon,
  CornerDownLeft,
  GitFork,
  SlidersHorizontal,
} from "@lucide/svelte";
import type { FunctionDokumentasiType } from "../../../type/docs/section";

export const FunctionDocsData: FunctionDokumentasiType = {
  basic: {
    title: "Deklarasi Function (fn)",
    icon: BracesIcon,
    desc: "Function di Dr Lang diawali dengan kata kunci fn, diikuti tanda titik dua (:) dan indentasi spasi sebagai penanda blok kode. Secara default, parameter dan nilai kembalian bernilai void/Null jika tidak didefinisikan.",
    code: `call std.drout

// Deklarasi dasar tanpa parameter
fn sapa() :
    drout.log("Halo dari Dr Lang!")

sapa()`,
  },
  parameter: {
    title: "Parameter Function",
    icon: SlidersHorizontal,
    desc: "Parameter ditulis di dalam tanda kurung dengan menyebutkan tipe data diikuti nama variabelnya. Jika dikosongkan, parameter akan dianggap void secara default.",
    code: `call std.drout

fn tampilkan_user(int umur, str nama) :
    drout.log(nama)
    drout.log(umur)

tampilkan_user(25, "Budi")`,
  },
  return: {
    title: "Return Value",
    icon: CornerDownLeft,
    desc: "Tipe nilai kembalian ditentukan menggunakan tanda panah (->) sebelum tanda titik dua (:). Jika tidak ada tipe return yang ditulis, compiler otomatis mengisinya dengan tipe Null (TokenType).",
    code: `call std.drout

// Dengan return eksplisit
fn tambah(int a, int b) -> int :
    return a + b

// Tanpa return (otomatis -> Null)
fn log_pesan(str pesan) :
    drout.log(pesan)

int hasil = tambah(10, 20)
drout.log(hasil)`,
  },
  nested: {
    title: "Nested Function",
    icon: GitFork,
    desc: "Dr Lang mendukung fungsi bersarang (nested function) yang diproses menggunakan pembacaan rekursif. Catatan: untuk saat ini, child function belum dapat mengakses variabel milik parent secara langsung kecuali diteruskan melalui parameter.",
    code: `call std.drout

fn proses_luar(int nilai_induk) :
    // Child menerima data induk lewat parameter
    fn proses_dalam(int x) -> int :
        return x * 2

    int hasil = proses_dalam(nilai_induk)
    drout.log(hasil)

proses_luar(15)`,
  },
};
