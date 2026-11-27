import type { OperatorDokumentasiType } from "../../../type/docs/section";

import {
  ArrowLeftRight,
  Binary,
  Calculator,
  Equal,
  Sparkles,
} from "@lucide/svelte";

export const OperatorDocsData: OperatorDokumentasiType = {
  aritmatika: {
    title: "Operator Aritmatika",
    icon: Calculator,
    desc: "Digunakan untuk melakukan operasi perhitungan matematika dasar pada tipe numerik (int dan float), meliputi perkalian (*), pembagian (/), penjumlahan (+), dan pengurangan (-).",
    code: `call std.drout

int a = 20
int b = 4

drout.log(a + b) // Penjumlahan: 24
drout.log(a - b) // Pengurangan: 16
drout.log(a * b) // Perkalian: 80
drout.log(a / b) // Pembagian: 5`,
  },
  assignment: {
    title: "Assignment Operator",
    icon: Equal,
    desc: "Digunakan untuk memberikan atau memperbarui nilai ke dalam sebuah variabel secara ringkas menggunakan operator dasar (=) maupun compound assignment (+= dan -=).",
    code: `call std.drout

int skor = 10

skor += 5  // Sama dengan: skor = skor + 5 (15)
skor -= 3  // Sama dengan: skor = skor - 3 (12)

drout.log(skor)`,
  },
  logika: {
    title: "Operator Logika & Kondisi",
    icon: Binary,
    desc: "Digunakan untuk menggabungkan atau membalikkan ekspresi kondisi boolean menggunakan kata kunci yang mudah dibaca: and (dan), or (atau), serta not (negasi).",
    code: `call std.drout

bool aktif = true
bool admin = false

drout.log(aktif and admin) // false
drout.log(aktif or admin)  // true
drout.log(not admin)       // true`,
  },
  unary: {
    title: "Unary Operator",
    icon: ArrowLeftRight,
    desc: "Operator yang bekerja pada satu buah operan saja, yaitu tanda minus (-) untuk membalikkan tanda nilai numerik dan kata kunci (not) untuk membalikkan nilai kebenaran boolean.",
    code: `call std.drout

int angka = 42
int negatif = -angka // Membalikkan nilai menjadi -42

bool status = true
bool kebalikan = not status // Membalikkan menjadi false

drout.log(negatif)
drout.log(kebalikan)`,
  },
  advancedAssignment: {
    title: "Assignment Lanjutan & Indexing",
    icon: Sparkles,
    desc: "Mendukung pengisian nilai tingkat lanjut seperti chained assignment (berantai), tuple unpacking untuk menukar nilai, walrus operator (:=) di dalam kondisi, serta pengubahan elemen koleksi melalui indeks.",
    code: `call std.drout

// 1. Chained Assignment
int a = b = c = 10

// 2. Tuple Unpacking & Swap
int x, y = 10, 20
x, y = y, x

// 3. Indexing Assignment pada koleksi
let data = [Int, 3][1, 2, 3]
data[0] = 5
data[1] += 10

// 4. Walrus Operator di dalam kondisi
if (n := data.len()) > 2 :
    drout.log(n)`,
  },
};
