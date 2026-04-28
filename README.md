<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PMB UTA '45 Jakarta - UTBK 2026</title>
    <style>
        /* Gaya Visual Modern & Mobile Friendly */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .card {
            background: white;
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 400px;
            width: 90%;
        }
        .header {
            color: #d32f2f; /* Warna Merah UTA '45 */
            margin-bottom: 1rem;
        }
        .promo-text {
            color: #555;
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
        }
        /* Bagian Barcode */
        .qr-section {
            background: #fff;
            padding: 15px;
            border: 2px dashed #d32f2f;
            border-radius: 15px;
            margin-bottom: 1.5rem;
        }
        .qr-section img {
            width: 100%;
            max-width: 180px;
        }
        /* Tombol Pendaftaran */
        .btn-pendaftaran {
            display: block;
            background-color: #d32f2f;
            color: white;
            padding: 14px;
            text-decoration: none;
            border-radius: 30px;
            font-weight: bold;
            font-size: 1.1rem;
            transition: 0.3s;
            box-shadow: 0 4px 15px rgba(211, 47, 47, 0.3);
        }
        .btn-pendaftaran:hover {
            background-color: #b71c1c;
            transform: translateY(-2px);
        }
        .footer {
            margin-top: 1.5rem;
            font-size: 0.75rem;
            color: #999;
        }
    </style>
</head>
<body>

    <div class="card">
        <h1 class="header">UTA '45 Jakarta</h1>
        <p class="promo-text">
            <strong>Halo Calon Mahasiswa!</strong><br>
            Lupakan cara lama. Scan barcode di bawah untuk klaim beasiswa dan daftar kuliah hari ini!
        </p>

        <div class="qr-section">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://pendaftaran.uta45jakarta.ac.id/" alt="QR Code Pendaftaran">
            <p style="margin-top: 10px; font-weight: bold; color: #333;">SCAN UNTUK MENDAFTAR</p>
        </div>

        <a href="https://pendaftaran.uta45jakarta.ac.id/" class="btn-pendaftaran">Daftar Sekarang</a>

        <div class="footer">
            Tim Promosi Technopreneurship © 2026<br>
            Universitas 17 Agustus 1945 Jakarta
        </div>
    </div>

</body>
</html>
