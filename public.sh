
#!/bin/bash


pr="web-production" 

read -rp "Hati hati saat di jalakan akan membersihkan branch, pastikan sudah di commit? (y/n): " confirm
case "$confirm" in
  [Yy]* ) echo "Proceeding...";;
  [Nn]* ) echo "Aborting."; exit;;
  * ) echo "Invalid response";;
esac

set -e  # berhenti jika ada error

echo "Build project"
npm run build

echo " Checkout orphan branch production"
git checkout --orphan "$pr"

echo "Hapus semua file lama (tanpa menyentuh .git)"
git rm -rf . >/dev/null 2>&1

# Pastikan dist ada
if [ ! -d "dist" ]; then
    echo "Folder dist/ tidak ditemukan!"
    exit 1
fi

echo " Copy isi dist ke root"
cp -r dist/* .

echo "Hapus folder dist"
rm -rf dist

echo "Buat .gitignore supaya node_modules tidak ikut"
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
echo "README.md" >> .gitignore  

echo " Add semua file ke git"
git add .

echo "Commit perubahan"
git commit -m "Deploy production build (clean, no node_modules)"

echo "Push ke production"
git push origin "$pr" --force

echo "Kembali ke main branch"
git switch drLang-web  # lebih modern dan aman daripada checkout
