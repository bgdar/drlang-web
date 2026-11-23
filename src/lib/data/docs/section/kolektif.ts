import type { KolektifDokumentasiType } from "../../../type/docs/section";

export const KolektifDocsData: KolektifDokumentasiType = {
  array: {
    title: "Array",
    desc: "Array adalah koleksi elemen dengan tipe data sejenis yang memiliki ukuran tetap (fixed-size). Dialokasikan langsung di dalam Stack untuk performa pencarian indeks yang instan dan penggunaan memori yang sangat efisien.",
    code: `// Inisialisasi array dengan ukuran tetap (5 elemen)
let data = [Int, 5][1,2,3,4,5];

// Akses elemen berbasis indeks (O(1))
let nilai = data[0];`,
  },
  vector: {
    title: "Vector",
    desc: "Vector adalah array dinamis yang ukurannya dapat bertambah atau berkurang secara fleksibel saat runtime. Dialokasikan di dalam Heap dan secara otomatis melakukan realokasi kapasitas ketika ruang penyimpanan penuh.",
    code: `// Membuat vector dinamis baru
vec list = [];

// Menambahkan data secara dinamis
list.push(100);
list.push(200);

let total = list.len();`,
  },
  list: {
    title: "Linked List",
    desc: "List (Linked List) adalah struktur data berantai yang menghubungkan setiap elemen (node) melalui pointer. Sangat efisien untuk operasi penyisipan atau penghapusan elemen di tengah koleksi tanpa perlu menggeser memori.",
    code: `// Inisialisasi linked list baru
list angka =;

// Menambah elemen di depan dan belakang
angka.push_front(5);
angka.push_back(40);`,
  },
};
