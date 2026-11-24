# Laporan Rekonstruksi Arsip — attaufiqmlg.com

## 1. Ringkasan

| Item | Hasil |
|---|---|
| Sumber | Wayback Machine, snapshot **25 September 2022 14:44:25** (`web.archive.org/web/20220925144425/https://attaufiqmlg.com/`) |
| Teknologi asli | WordPress 5.5.10, X Theme 5.1.0 (Integrity Light), Cornerstone 2.0.5, Revolution Slider 5.4.5.1, Contact Form 7 4.8, Content Views, WP DataTables, WD Instagram Feed, Yoast SEO 4.9 |
| Halaman asli yang berhasil diarsipkan | 53 halaman unik (1 beranda, 7 halaman statis, 7 arsip kategori, 38 artikel) |
| Halaman di project | 64 HTML (53 halaman + 10 stub + 1 halaman pencarian) |
| Aset | 83 file, ±3,5 MB (41 WOFF2 + 4 CSS + 11 JS + 27 gambar/font lain) |
| Total project | 150 file, ±4,5 MB |
| Hasil link checker | 3.910 referensi, **0 tautan rusak**, 0 anchor rusak, 0 ID duplikat, 0 gambar tanpa `alt` |
| Validasi HTML | `html-validate` — **0 error** (aturan gaya seperti `no-inline-style` dimatikan karena desain asli memakai inline style) |
| Responsif | Diuji 1366, 768, dan 375 px; tidak ada overflow horizontal, 0 error console, 0 request gagal |

Arsip mentah tetap ada di `../attaufiq/attaufiqmlg.com`. Folder `project`
adalah salinan yang sudah dibersihkan dan direstrukturisasi.

## 2. Struktur halaman

| Halaman | File |
|---|---|
| Beranda | `index.html` |
| Profil | `pages/profil.html` |
| Berita (kategori) | `pages/berita.html` |
| Kegiatan (kategori) | `pages/kegiatan.html` |
| Pembangunan Asrama Putri (kategori) | `pages/pembangunan-asrama-putri.html` |
| Hikmah Ramadhan (kategori, 4 halaman) | `pages/hikmah-ramadhan.html`, `-2.html`, `-3.html`, `-4.html` |
| Rencana Pembangunan | `pages/rencana-pembangunan-asrama-dan-pesantren-putri-taufiq.html` |
| Daftar Donasi Pembangunan | `pages/daftar-donasi-pembangunan-asrama-putri.html` |
| Daftar Donasi Material | `pages/daftar-donasi-material-pembangunan-asrama-putri.html` |
| Progress Pembangunan | `pages/progress-pembangunan-asrama-putri.html` |
| Galeri Instagram | `pages/galeri-instagram.html` |
| Hubungi Kami | `pages/hubungi-kami.html` |
| Pencarian | `pages/search.html` |
| 38 artikel | `pages/posts/<slug>.html` |
| 10 artikel tidak terarsip | `pages/posts/<slug>.html` (stub) |

## 3. Pembersihan yang dilakukan

### Wayback dan WordPress
- Semua halaman diambil lewat endpoint `id_` sehingga tidak mengandung toolbar
  Wayback, tetapi URL lama tetap dibersihkan.
- Prefix `web.archive.org/web/2022.../`, host `www`, `52.58.226.141`, dan
  parameter `?ver=` dihapus.
- Tag WordPress yang tidak diperlukan dihapus: feed RSS, komentar feed,
  `wp-json`, oEmbed, shortlink, pingback, XML-RPC, generator, Yoast/OG/Twitter
  meta, WP emoji, `wp-embed`, `comment-reply`, dan admin bar.
- Google Analytics `UA-48822484-4` dihapus.
- Contact Form 7, reCAPTCHA, WP DataTables, dan Instagram Feed tidak lagi
  dimuat sebagai script/CSS.

### URL dan aset
- Semua `href`, `src`, `srcset`, dan `url()` di CSS diubah menjadi path relatif.
- Nama aset PageSpeed (`A.*.pagespeed.*`, `*.pagespeed.ce.*`, dan bundle
  gabungan) dipetakan ke file asli atau dihapus jika bundle tidak diperlukan.
- Aset diletakkan di `assets/css`, `assets/js`, `assets/img`, dan
  `assets/fonts`.
- Google Fonts (Source Sans Pro, Montserrat, Oregano) diunduh dan dilokalkan
  (41 file WOFF2).
- Font Awesome 4.7 dan tekstur `noisy_gridgreen7w.png` dilokalkan. Tekstur
  diambil dari arsip 2014 karena URL aslinya sudah mati.
- CSS inline besar `x-generated-css` (±7,3 KB) dipindahkan ke
  `assets/css/site.css`.
- Script inline analytics, emoji, CF7, Content Views, dan Google Maps dihapus.

### Tampilan yang direkonstruksi
- **Slider Revolution** tidak dapat dijalankan karena file extension-nya tidak
  pernah diarsipkan. Tiga slider diganti dengan markup sendiri:
  - Beranda: hero fullscreen memakai `slide.jpg`, logo, dua baris teks, dan
    tombol gulir.
  - Profil: banner biru `bgslider.jpg` dengan judul “Profil At-Taufiq”.
  - Rencana Pembangunan: slider 3 gambar (maket, desain lantai 1, lantai 2)
    dengan navigasi prev/next, dot, dan auto-rotate.
- Grid kategori yang semula memakai Isotope (dan membuat semua artikel
  `opacity: 0`) diganti CSS Grid 3/2/1 kolom.
- Kartu “Kegiatan Kami” di beranda yang juga tertahan di `opacity: 0`
  ditampilkan dengan CSS.
- Angka counter (34, 13, 6, 11, 4) ditulis langsung ke HTML agar tetap tampil
  tanpa script animasi.
- Peta Google Maps di beranda dan halaman Rencana diganti kartu alamat +
  tautan ke Google Maps.

### Fitur statis pengganti
- **Pencarian lokal**: `assets/js/search-index.js` + `search.js`; form lama di
  sidebar diarahkan ke `pages/search.html`.
- **Form kontak**: tampilan dipertahankan, tetapi submit dinonaktifkan dan
  diberi keterangan kontak.
- **Galeri Instagram**: diganti keterangan bahwa feed tidak terarsip + tautan
  ke akun resmi.
- **Tabel donasi**: diganti keterangan bahwa data dimuat via AJAX dan tidak
  tersimpan di arsip.

## 4. Konten yang tidak dapat dipulihkan

### 4.1 Sepuluh artikel tidak terarsip
Artikel-artikel ini muncul di daftar kategori, tetapi halaman aslinya tidak
pernah ditangkap Wayback. Dibuat halaman stub yang menyatakan hal tersebut
(tanpa mengarang isi):

1. Hikmah Ramadhan 5 : Dahsyatnya Sedekah di Bulan Ramadhan (Bag. 3)
2. Hikmah Ramadhan 6 : Duabelas Keutamaan Bersedekah (Bag. 1)
3. Hikmah Ramadhan 9 : 11 Amal Ibadah pada Bulan Ramadhan
4. Hikmah Ramadhan 13 : Memberi Makan Berbuka Puasa
5. Hikmah Ramadhan 14 : 10 Hari Pertama Adalah Rahmat (Bag. 1)
6. Hikmah Ramadhan 15 : 10 Hari Kedua Adalah Maghfirah (Pengampunan)
7. Hikmah Ramadhan 16 : 10 Hari Ketiga Terbebas dari Api Neraka
8. Hikmah Ramadhan 17 : Keutamaan dan Fungsi Al-Quran (Bag. 1)
9. Hikmah Ramadhan 24 : Hikmah Nuzulul Quran (Bag. 3)
10. Lima Nilai Keunggulan Ramadhan

### 4.2 Gambar yang hilang (21 file)
Gambar-gambar ini tidak ada di Wayback. Di halaman, posisinya diganti
`assets/img/placeholder-missing.svg` dengan label “Gambar tidak tersedia di
arsip”. Beberapa thumbnail berhasil dipetakan ke versi asli yang lebih besar
(misalnya `1-box-rully-1-1086x681.jpg` memakai `1-box-rully-1-1400x878.jpg`).

- `2013/12/e9b78-1045223_624008600943010_257260613_n.jpg`
- `2016/06/13450842_1085879648138517_5197337088967923035_n.jpg`
- `2016/06/phone.jpg`
- `2016/07/13566918_1230888736921657_3203901828567300720_n.jpg`
- `2016/07/13600180_1230888686921662_7760720459830711557_n.jpg`
- `2016/07/13600315_1114457691944055_5314919936960092091_n.jpg`
- `2016/07/13606736_1114458725277285_121997292683430368_n.jpg`
- `2016/07/13615331_1230888923588305_6880453432102310676_n.jpg`
- `2016/07/13619886_1230889083588289_4898576620621442602_n.jpg`
- `2016/07/4c89c-dscf1806.jpg`
- `2016/07/4e770-dscf1730.jpg`
- `2016/07/98cf9-579595_566227250100438_142373402_n.jpg`
- `2016/07/fe52c-1005764_566227580100405_455068155_n.jpg`
- `2016/12/15326535_1240369919356155_6578058087250841490_n.jpg`
- `2016/12/15380533_1240369932689487_4828096628448576080_n.jpg`
- `2017/05/18527812_1416672715055883_7846419203101082943_n.jpg`
- `2017/05/WhatsApp-Image-2017-05-11-at-13.08.18.jpeg`
- `2017/05/WhatsApp-Image-2017-05-14-at-20.49.34.jpeg`
- `2017/05/WhatsApp-Image-2017-05-14-at-20.49.36.jpeg`
- `2017/05/WhatsApp-Image-2017-05-21-at-07.04.13.jpeg`
- `2017/05/WhatsApp-Image-2017-05-21-at-07.20.23.jpeg`

### 4.3 Tabel donasi
Dua halaman daftar donasi memakai WP DataTables yang mengambil data lewat AJAX
dari WordPress. Isi tabel tidak ada di HTML arsip (semua sel kosong dan tabel
disembunyikan). Data tidak dikarang; halaman menampilkan keterangan dan kontak.

### 4.4 Feed Instagram
Widget WD Instagram Feed hanya menyisakan container kosong dan pesan error.
Feed asli tidak tersimpan. Halaman galeri sekarang berisi keterangan + tautan
ke `instagram.com/yayasan_attaufiqmlg`.

## 5. Optimasi

- Gambar diperiksa; yang lebih lebar dari 1600 px diperkecil, JPEG dikompresi
  ulang pada kualitas wajar, dan tidak ada upscaling.
- Contoh: `maket-modif_001.png` turun dari 359,7 KB menjadi 283,4 KB.
  `alquran2.png` (247,4 KB) dipertahankan karena masih wajar untuk gambar
  fotografi 500×350.
- Tidak ada gambar logo/transparan yang diubah menjadi lossy.
- Project akhir ±4,5 MB, sebagian besar berasal dari 41 file font WOFF2.

## 6. Validasi

### Link checker
- 64 file HTML, 4 file CSS.
- 3.910 referensi internal/aset diperiksa.
- **0 file hilang**, **0 anchor rusak**, **0 ID duplikat**, **0 gambar tanpa alt**.
- 141 tautan eksternal (Facebook, Instagram, Google Maps, Google Drive,
  muslim.or.id, dsb.) sengaja dibiarkan dan memerlukan internet.

### HTML
`html-validate` dijalankan pada seluruh 64 halaman. Aturan struktur dan
aksesibilitas dasar lolos. Aturan gaya yang tidak relevan dengan validitas
(`no-inline-style`, `void-style`, `script-type`, `long-title`, dan sejenisnya)
dimatikan karena desain asli memang memakai inline style dan markup tema.

### Responsif & fungsi
Diuji dengan Chromium pada 1366×900, 768×1024, dan 375×812:

- Tidak ada overflow horizontal.
- Tidak ada error console atau request 404.
- Menu mobile (hamburger) berfungsi.
- Dropdown “Informasi” berfungsi.
- Pencarian lokal berfungsi (contoh “pesantren” → 4 hasil).
- Slider Rencana berganti slide dengan tombol next.
- Form kontak benar-benar disabled.

Screenshot bukti ada di `../attaufiq/screenshots/` (tidak disertakan di folder
deploy agar project tetap ringan).

## 7. Saran langkah berikutnya

1. **Data donasi**: jika ada backup database WordPress atau export Excel,
   tabel donasi bisa diisi ulang sebagai HTML statis.
2. **Form kontak**: ganti dengan Formspree, Netlify Forms, atau endpoint
   email/WhatsApp milik yayasan agar berfungsi.
3. **Galeri**: unggah ulang foto Instagram terpilih sebagai galeri statis,
   atau tempel widget feed Instagram resmi yang masih aktif.
4. **Foto hilang**: minta file asli dari pengurus yayasan, lalu ganti
   placeholder satu per satu.
5. **SEO**: tambahkan `sitemap.xml`, `robots.txt`, dan gambar Open Graph
   lokal jika situs akan dipublikasikan.
6. **Header/footer**: jika situs akan sering diedit, pertimbangkan generator
   statis (Astro/Eleventy) agar header/footer tidak diduplikasi di 64 file.
7. **Arsip**: simpan folder `../attaufiq` sebagai bukti sumber; jangan
   menimpa `project` jika ingin membandingkan hasil.
