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
vec vector = [int][1,2];

// mengakses 
int sample1 = vector[0]

// Menambahkan data secara dinamis
vector.push(100);
vector.push(200);

let total = list.len();`,
  },
  list: {
    title: "List",
    desc: "List adalah structure data yang memiliki expresi , dan bisa menyimpan banyak jenis type , bahkan operasi di dalam nya",
    code: `// Inisialisasi linked list baru
list listData = [];

// Menambah elemen di depan dan belakang
listData.push_front(5);
angka.push_back(40);`,
  },
};
