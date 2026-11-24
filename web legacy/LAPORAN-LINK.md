# Hasil Pengecekan Link

Pengecekan dijalankan otomatis pada seluruh HTML dan CSS di folder `project`
menggunakan resolver path relatif. Setiap `href`, `src`, `srcset`, dan `url()`
di CSS diperiksa terhadap file di disk.

## Ringkasan

| Metrik | Hasil |
|---|---|
| File HTML | 64 |
| File CSS | 4 |
| Referensi internal/aset diperiksa | 3.910 |
| Tautan rusak (file tidak ditemukan) | **0** |
| Anchor rusak (`#id` tidak ada) | **0** |
| ID duplikat | **0** |
| Gambar tanpa atribut `alt` | **0** |
| Tautan eksternal | 141 |

## Tautan eksternal

Tautan berikut sengaja dipertahankan dan memerlukan koneksi internet. Tidak
diperiksa status HTTP-nya karena halaman statis tidak boleh bergantung pada
jaringan. Dari 141 referensi eksternal, 140 berupa tautan `<a>` (tabel di
bawah); 1 referensi lain berasal dari atribut/aset eksternal.

| Domain | Jumlah |
|---|---:|
| instagram.com | 65 |
| facebook.com | 64 |
| muslim.or.id | 4 |
| drive.google.com | 3 |
| google.com (Google Maps) | 2 |
| isdaryanto.com | 1 |
| digg.com | 1 |

## Catatan

- Semua tautan internal memakai path relatif, sehingga project bisa dipindah
  ke subfolder atau domain lain tanpa perubahan.
- Link ke halaman yang tidak terarsip sudah diarahkan ke stub, bukan 404.
- Link `mailto:`, `tel:`, `javascript:`, `data:`, dan `#` tidak dihitung
  sebagai tautan file.
- Form pencarian mengarah ke `pages/search.html` dan berfungsi lokal.
