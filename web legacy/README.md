# Yayasan At-Taufiq Malang — Arsip Statis

Versi statis dari situs **attaufiqmlg.com** berdasarkan snapshot Wayback Machine
**25 September 2022 (14:44:25 WIB)**. Project ini dibuat agar dapat dibuka
tanpa WordPress, tanpa PHP, dan tanpa koneksi ke server lama.

> Arsip asli tetap disimpan di `../attaufiq/attaufiqmlg.com` dan tidak diubah.

## Struktur

```
project/
├─ index.html                  # Beranda
├─ index.md                    # Versi Markdown beranda
├─ pages/
│  ├─ profil.html
│  ├─ profil.md                # Versi Markdown profil
│  ├─ berita.html
│  ├─ kegiatan.html
│  ├─ pembangunan-asrama-putri.html
│  ├─ hikmah-ramadhan.html     # + halaman 2, 3, 4
│  ├─ rencana-pembangunan-asrama-dan-pesantren-putri-taufiq.html
│  ├─ daftar-donasi-pembangunan-asrama-putri.html
│  ├─ daftar-donasi-material-pembangunan-asrama-putri.html
│  ├─ progress-pembangunan-asrama-putri.html
│  ├─ galeri-instagram.html
│  ├─ hubungi-kami.html
│  ├─ search.html              # hasil pencarian lokal
│  └─ posts/                   # 38 artikel + 10 halaman stub
├─ assets/
│  ├─ css/                     # theme, theme-cranium, fonts, site
│  ├─ js/                      # jquery, theme, cornerstone, main, search
│  ├─ img/                     # gambar + placeholder
│  └─ fonts/                   # Google Fonts, Font Awesome
├─ README.md
├─ LAPORAN.md
└─ LAPORAN-LINK.md
```

## Menjalankan lokal

### Python (paling sederhana)

```bash
cd project
python -m http.server 8000
```

Buka <http://localhost:8000>.

### Node.js

```bash
cd project
npx serve .
```

Buka alamat yang ditampilkan (biasanya <http://localhost:3000>).

> Jangan membuka `index.html` lewat `file://` jika ingin fitur pencarian
> berjalan. Pencarian memakai JavaScript dan sebaiknya dijalankan lewat server
> lokal. Navigasi halaman tetap memakai path relatif sehingga tetap bisa dibuka
> langsung sebagai file, tetapi browser membatasi beberapa fitur.

## Deploy

Project ini murni statis (HTML, CSS, JS, gambar, font). Tidak perlu build step.

- **Netlify**: drag-and-drop folder `project`, atau `npx netlify deploy --dir=project --prod`.
- **Vercel**: `npx vercel --prod` dari folder `project`.
- **GitHub Pages**: push isi folder `project` ke branch `gh-pages` (atau folder `/docs`), lalu aktifkan Pages.
- **cPanel / hosting biasa**: upload isi folder `project` ke `public_html`.
  Pastikan `index.html` berada di root domain.
- **Subfolder**: semua path relatif, jadi project juga bisa diletakkan di
  `https://contoh.com/attaufiq/` tanpa mengubah konfigurasi.

## Catatan penting

- **Formulir Hubungi Kami** tidak aktif. Arsip tidak memiliki backend
  Contact Form 7; tombol submit dinonaktifkan dan diganti keterangan kontak.
- **Galeri Instagram** tidak dapat dipulihkan karena feed Instagram tidak
  tersimpan di Wayback. Halaman menampilkan keterangan + tautan ke akun resmi.
- **Tabel donasi** di dua halaman daftar donasi dimuat lewat AJAX WordPress dan
  datanya tidak ikut terarsip. Halaman menampilkan keterangan, bukan data karangan.
- **10 artikel** yang terdaftar di kategori Hikmah Ramadhan tidak memiliki
  halaman di arsip. Tersedia halaman stub yang menjelaskan hal tersebut.
- **21 gambar** tidak tersedia di Wayback dan diganti placeholder
  `assets/img/placeholder-missing.svg`. Daftar lengkap ada di `LAPORAN.md`.
- **Peta Google Maps** diganti kartu alamat + tautan ke Google Maps agar tidak
  membutuhkan API key dan tetap tampil offline.
- **Pencarian** berjalan lokal lewat `assets/js/search-index.js`; tidak ada
  server pencarian.
- Semua tautan eksternal (Facebook, Instagram, Google Maps, Drive, muslim.or.id)
  tetap mengarah ke internet dan dibuka di tab baru.

## Mengubah konten

Karena ini statis, header/footer setiap halaman adalah salinan. Jika mengubah
menu atau footer, ubah di semua file HTML. Untuk perubahan kecil pada artikel,
sunting file di `pages/posts/`. Untuk menambah halaman, buat file baru di
`pages/` dan tambahkan ke `assets/js/search-index.js` (atau regenerasi index).

## Kredit

- Konten, logo, dan foto: Yayasan Anak Yatim At-Taufiq Malang.
- Rekonstruksi arsip: snapshot Wayback Machine, 25 September 2022.
- Tema asli: X Theme 5.1.0 (ThemeCo), WordPress 5.5.10.
- Font: Source Sans Pro, Montserrat, Oregano (Google Fonts, SIL Open Font License);
  Font Awesome 4.7 (SIL OFL 1.1).
- Gambar latar bertekstur: aset demo X Theme (arsip 2014).

## Lisensi

Kode HTML/CSS/JS hasil pembersihan boleh digunakan untuk keperluan yayasan.
Konten dan foto memiliki hak masing-masing. Tema dan font mengikuti lisensi
masing-masing pemilik.
