import { SquareTerminal } from "@lucide/svelte";
import type { DroutTipeDokumentasiType } from "../../../type/stdMethod/section";

export const DroutStdData: DroutTipeDokumentasiType = {
  log: {
    title: "Output Log (drout.log)",
    desc: "Mencetak teks string atau hasil evaluasi ekspresi matematika langsung ke terminal output standar.",
    icon: SquareTerminal,
    code: `
call std.drout
drout.log("Masukkan nama Anda: ")
drout.log(10 + 20)
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
