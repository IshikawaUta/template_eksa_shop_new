# Eksa Shop

![Tangkapan Layar Utama Proyek](https://res.cloudinary.com/dzsqaauqn/image/upload/v1760803019/Screenshot_2025-10-18_225615_nib3t1.jpg)

Eksa Shop adalah aplikasi web e-commerce yang dibangun menggunakan **Flask** sebagai framework backend, **MongoDB** sebagai database, dan berbagai layanan eksternal seperti Imgur untuk unggah gambar dan Google OAuth untuk autentikasi. Aplikasi ini menyediakan fitur seperti manajemen produk, keranjang belanja, blog, kuis interaktif dengan sertifikat PDF, ulasan produk, dan integrasi email untuk pengiriman struk pembelian serta reset kata sandi.

## Fitur Utama
- **Manajemen Produk**: Admin dapat menambah, mengedit, dan menghapus produk dengan gambar yang diunggah ke Imgur. Mendukung multi-gambar, kategori, deskripsi detail, URL demo, spesifikasi, fitur, tools/framework, dan catatan.
- **Keranjang Belanja dan Checkout**: Pengguna dapat menambahkan produk ke keranjang, mengupdate kuantitas, menghapus item, melihat subtotal, dan menyelesaikan pembelian melalui redirect WhatsApp dengan detail encoded. Struk PDF dikirim melalui email atau diunduh.
- **Autentikasi Pengguna**: Mendukung login/registrasi manual, login dengan Google OAuth, dan setup admin pertama untuk pengaturan awal.
- **Reset Kata Sandi**: Fitur pengaturan ulang kata sandi melalui email dengan tautan token aman (expired dalam 5 menit).
- **Blog**: Admin dapat membuat, mengedit, dan menghapus postingan blog dengan gambar. Pengguna logged-in dapat menambahkan komentar dan balasan berjenjang.
- **Kuis Interaktif**: Admin dapat mengelola kategori kuis, menambah/edit/hapus kuis dan soal (multiple choice dengan hingga 5 opsi). Pengguna dapat mengikuti kuis, melihat hasil skor dengan detail jawaban, dan unduh sertifikat PDF jika lulus (dibuat dengan ReportLab).
- **Ulasan Produk**: Pengguna logged-in dapat memberikan ulasan dengan rating bintang; admin dapat membalas ulasan.
- **Manajemen Kategori**: Admin dapat menambah, edit, dan hapus kategori untuk produk dan kuis, dengan hitungan jumlah kuis per kategori.
- **SEO dan Aksesibilitas**: Menyediakan sitemap.xml dinamis (termasuk produk, blog, kuis) dan robots.txt untuk optimasi mesin pencari. Meta tags OG/Twitter untuk sharing.
- **Integrasi Email**: Menggunakan Flask-Mail untuk mengirim struk pembelian, sertifikat kuis, dan email reset kata sandi.
- **PDF Generation**: Menggunakan ReportLab untuk membuat struk pembelian dan sertifikat kuis dalam format PDF, dengan custom fonts (Roboto) dan logo.
- **Caching**: Menggunakan Flask-Caching untuk meningkatkan performa pada halaman statis seperti 404.

## Teknologi yang Digunakan
- **Backend**: Flask (Python)
- **Database**: MongoDB (dengan PyMongo)
- **Autentikasi**: Google OAuth (google.oauth2), Werkzeug untuk hashing password
- **Email**: Flask-Mail dengan SMTP Gmail
- **PDF**: ReportLab untuk generate struk dan sertifikat
- **Image Upload**: Imgur API
- **Caching**: Flask-Caching
- **Frontend**: Bootstrap 5, Animate.css, Font Awesome, Jinja2 templates
- **Deployment**: Gunicorn untuk server, Vercel/Heroku support
- **Lainnya**: itsdangerous untuk token timed, requests untuk API calls, math untuk pagination

## Struktur File Lengkap
Berikut adalah struktur direktori lengkap dari proyek ini. Struktur ini mencakup semua file dan folder utama yang diperlukan untuk menjalankan aplikasi.

```
eksa_shop_new/
├── api/
│   ├── index.py              # Backend Flask utama: routes, logic, PDF generation
│   ├── Roboto-Regular.ttf      # Font Roboto reguler untuk PDF
│   ├── Roboto-Bold.ttf         # Font Roboto bold untuk PDF
│   └── logo.png                # Logo untuk struk PDF
├── static/                   # File statis (CSS, JS, images)
│   ├── css/
│   │   └── style.css         # Custom CSS untuk styling
│   ├── js/
│   │   └── main.js           # Custom JavaScript (e.g., cart, modal carousel)
│   └── img/
│       └── logo.png          # Logo untuk PDF dan branding
├── templates/                # Template Jinja2 untuk frontend
│   ├── includes/
│   │   └── flash.html        # Snippet untuk flash messages
│   ├── 404.html              # Halaman error 404
│   ├── add_product.html      # Form admin tambah produk
│   ├── add_quiz.html         # Form admin tambah kuis
│   ├── base.html             # Template dasar dengan navbar, footer
│   ├── blog.html             # Daftar blog
│   ├── blog_detail.html      # Detail blog dengan komentar
│   ├── blog_post_form.html   # Form add/edit blog
│   ├── cart.html             # Keranjang belanja
│   ├── categories.html       # Admin manage kategori kuis
│   ├── checkout_success.html # Halaman konfirmasi checkout
│   ├── contact.html          # Form kontak dengan Google Maps
│   ├── create_first_admin.html # Form setup admin pertama
│   ├── edit_product.html     # Form admin edit produk
│   ├── edit_quiz.html        # Form admin edit kuis
│   ├── forgot_password.html  # Form request reset password
│   ├── help.html            # Pusat bantuan dengan FAQ
│   ├── index.html           # Halaman utama (home)
│   ├── login.html           # Form login
│   ├── manage_questions.html # Admin manage soal kuis
│   ├── privacy_policy.html  # Kebijakan privasi
│   ├── product.html         # Daftar produk
│   ├── product_detail.html  # Detail produk dengan ulasan
│   ├── quiz_list.html       # Daftar kuis untuk pengguna
│   ├── quiz_result.html     # Hasil kuis dengan sertifikat
│   ├── quiz_take.html       # Form pengerjaan kuis
│   ├── register.html        # Form registrasi
│   ├── reset_password.html  # Form reset password
│   ├── terms_and_conditions.html # Syarat dan ketentuan
│   ├── website_services.html # Layanan custom website
│   └── quizzes.html         # Admin manage kuis
├── .env                    # Variabel lingkungan (MONGO_URI, GOOGLE_CLIENT_ID, dll.)
├── .python-version         # Versi Python (3.12.0)
├── LICENSE                 # Lisensi MIT
├── Procfile                # Config Heroku untuk Gunicorn
├── README.md               # Dokumentasi proyek
├── requirements.txt        # Daftar dependencies Python
├── run.sh                  # Script untuk run lokal
└── vercel.json             # Config Vercel untuk deployment
```

## Instalasi Lokal
1. Clone repositori:
   ```
   git clone https://github.com/IshikawaUta/eksa_shop_new.git
   cd eksa_shop_new
   ```
2. Buat virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # Untuk Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Buat file `.env` di root proyek dan isi dengan variabel dari contoh di dokumen (MONGO_URI, IMGUR_CLIENT_ID, SECRET_KEY, GOOGLE_CLIENT_ID/SECRET, MAIL_*).
5. Jalankan aplikasi:
   ```
   ./run.sh  # Atau: flask run --debug
   ```

## Konfigurasi .env
Pastikan variabel berikut diatur:
```
MONGO_URI="mongodb+srv://user:pass@cluster.mongodb.net/db_name?retryWrites=true&w=majority"
IMGUR_CLIENT_ID="your_imgur_client_id"
SECRET_KEY="your_secret_key"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
MAIL_SERVER="smtp.gmail.com"
MAIL_PORT="587"
MAIL_USE_TLS="True"
MAIL_USE_SSL="False"
MAIL_USERNAME="your_email@gmail.com"
MAIL_PASSWORD="your_app_password"
MAIL_DEFAULT_SENDER="your_email@gmail.com"
```

## Deployment
### Vercel
1. Push ke GitHub.
2. Di Vercel dashboard, import repo dan set env vars dari `.env`.
3. Vercel akan build berdasarkan `vercel.json` (Python build untuk index.py, static files).

### Heroku
1. Buat app di Heroku.
2. Set env vars via dashboard.
3. Deploy via Git: `git push heroku main`.
4. Scale dyno: `heroku ps:scale web=1`.

### Server VPS (Ubuntu)
1. Install Python 3.12, MongoDB, Git.
2. Clone repo, install deps.
3. Jalankan dengan Gunicorn: `gunicorn --bind 0.0.0.0:8000 index:app`.
4. Gunakan Nginx sebagai reverse proxy.
5. Set systemd service untuk auto-start.
6. Set environment variables di `/etc/environment` atau melalui script startup.

### Catatan Deployment
- Gunakan MongoDB Atlas untuk database cloud agar mudah skalabel.
- Pastikan SSL diaktifkan (gunakan Let's Encrypt atau cert dari platform).
- Monitor log dan error dengan tools seperti Sentry atau Heroku logs.
- Untuk produksi, set `DEBUG=False` di Flask config.
- Update dependencies secara berkala untuk keamanan (pip install -r requirements.txt --upgrade).

## Penggunaan
1. **Akses Halaman Utama**: Buka `http://localhost:5000` untuk melihat daftar produk.
2. **Login/Registrasi**: Gunakan `/login` atau `/register` untuk autentikasi.
3. **Blog**: Kunjungi `/blog` untuk melihat postingan.
4. **Kuis**: Akses `/quiz` untuk daftar kuis.
5. **Keranjang dan Checkout**: Tambahkan produk ke keranjang melalui `/add_to_cart/<id>`, update via `/update_cart/<id>`, selesaikan di `/checkout_success`.
6. **Struk PDF**: Struk akan dikirim ke email pengguna setelah checkout berhasil, atau diunduh melalui `/generate-receipt/<order_id>`.
7. **Sertifikat Kuis**: Jika lulus, unduh via `/quiz_result/<result_id>` (PDF dengan details skor).

## Catatan Penting
- Pastikan semua variabel lingkungan diatur dengan benar di `.env` untuk menghindari kesalahan seperti kegagalan unggah gambar atau pengiriman email.
- File font (`Roboto-Regular.ttf`, `Roboto-Bold.ttf`) dan logo (`logo.png`) harus ada di direktori proyek untuk pembuatan PDF.
- Aplikasi menggunakan caching untuk meningkatkan performa, dengan timeout 2 detik untuk halaman yang sering diakses.
- Di produksi, nonaktifkan route `/create_first_admin` setelah setup untuk keamanan.
- Tanggal update terakhir: 18 Oktober 2025.

## Kontribusi
1. Fork repositori ini.
2. Buat branch baru (`git checkout -b feature/nama-fitur`).
3. Commit perubahan (`git commit -m 'Menambahkan fitur X'`).
4. Push ke branch (`git push origin feature/nama-fitur`).
5. Buat Pull Request.

## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## Kontak
Untuk dukungan atau pertanyaan, hubungi melalui email: [komikers09@gmail.com](mailto:komikers09@gmail.com) atau WhatsApp: +62895701060973.