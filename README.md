# Eksa Shop

![Tangkapan Layar Utama Proyek](https://res.cloudinary.com/dzsqaauqn/image/upload/v1760803019/Screenshot_2025-10-18_225615_nib3t1.jpg)

Eksa Shop adalah aplikasi web e-commerce modern yang dibangun menggunakan framework **Flask** (Python) dan database **MongoDB**. Aplikasi ini dirancang sebagai solusi *all-in-one* untuk manajemen produk digital, layanan kustom website, sistem edukasi (kuis), hingga blog interaktif.

## Fitur Utama
- **Manajemen Produk**: Sistem CRUD lengkap bagi admin dengan integrasi **Imgur API** untuk penyimpanan gambar. Mendukung deskripsi kaya (rich description), URL demo, spesifikasi teknis, dan fitur produk.
- **Sistem Keranjang & Checkout**: Alur belanja yang mulus dengan fitur update kuantitas otomatis, kalkulasi subtotal, dan checkout yang terintegrasi dengan **WhatsApp API** (Encoded Data).
- **Sistem Edukasi & Kuis**: Pengguna dapat mengikuti kuis interaktif berdasarkan kategori. Jika lulus, sistem akan secara otomatis men-generate **Sertifikat PDF** menggunakan ReportLab.
- **Blog Interaktif**: Fitur manajemen artikel dengan dukungan komentar dan balasan berjenjang (threaded comments) untuk meningkatkan engagement pengguna.
- **Autentikasi & Keamanan**: Login aman menggunakan **Google OAuth** atau sistem registrasi manual dengan enkripsi password Werkzeug. Dilengkapi fitur **Reset Password** via token email (timed-danger).
- **PDF Generation**: Pembuatan struk pembelian dan sertifikat kuis secara dinamis dengan custom branding (Logo & Font Roboto).
- **SEO & Search Engine Ready**: Optimasi mesin pencari menggunakan **Schema.org (JSON-LD)**, `sitemap.xml` dinamis, dan `robots.txt` yang optimal.

## Teknologi yang Digunakan
- **Backend**: Python 3.12, Flask
- **Database**: MongoDB (Atlas/Local) via PyMongo
- **Frontend**: Jinja2, Bootstrap 5, Font Awesome, Animate.css
- **Integrasi API**: Imgur API (Images), Google OAuth 2.0 (Auth), Gmail SMTP (Mail)
- **Library PDF**: ReportLab
- **Performa**: Flask-Caching, Gunicorn (Production Server)

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
│   ├── img/
│   │   └── logo.png          # Logo untuk PDF dan branding
│   ├── ads.txt
│   └── llms.txt
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

## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## Kontak & Kontribusi

Jika Anda ingin berkontribusi atau memiliki pertanyaan:

* **Email**: komikers09@gmail.com
* **WhatsApp**: [+62895701060973](https://www.google.com/search?q=https://wa.me/62895701060973)
* **LinkedIn**: [Ishikawa Uta](https://www.linkedin.com/in/ishikawa-uta)