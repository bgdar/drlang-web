import type { DrinTipeDokumentasiType } from "../../../type/stdMethod/section";

export const DrinStdData: DrinTipeDokumentasiType = {
  input: {
    title: "Input String (drin.input)",
    desc: "Membaca satu baris teks masukan dari terminal pengguna dan mengembalikannya sebagai tipe data string.",
    code: `
call std.drout
call std.drin

drout.log("Masukkan nama Anda: ")
string nama = drin.input();

drout.log("Halo, " + nama)
`,
  },
  //   readInt: {
  //     title: "Read Integer (drin.readInt)",
  //     desc: "Membaca masukan dari terminal dan langsung mengonversinya menjadi bilangan bulat (int).",
  //     code: `
  // call std.drout
  // call std.drin
  //
  // drout.log("Masukkan umur Anda: ")
  // int umur = drin.readInt();
  //
  // drout.log(umur)
  // `,
  //   },
  //   readFloat: {
  //     title: "Read Float (drin.readFloat)",
  //     desc: "Membaca masukan angka desimal dari terminal pengguna dan mengembalikannya sebagai tipe data float.",
  //     code: `
  // call std.drout
  // call std.drin
  //
  // drout.log("Masukkan tinggi badan (cm): ")
  // float tinggi = drin.readFloat();
  //
  // drout.log(tinggi)
  // `,
  //   },
};
