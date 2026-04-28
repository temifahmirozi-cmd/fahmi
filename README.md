<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UTA'45 Jakarta - Form & QR Code</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f0f2f5; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; padding: 20px; }
        .card { background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); width: 100%; max-width: 400px; border-top: 10px solid #b30000; }
        h2 { color: #b30000; margin-bottom: 5px; text-align: center; }
        p { color: #555; text-align: center; font-size: 14px; margin-bottom: 20px; }
        label { display: block; margin-top: 15px; font-weight: bold; font-size: 14px; color: #333; }
        input { width: 100%; padding: 12px; margin-top: 5px; border: 1px solid #ccc; border-radius: 8px; box-sizing: border-box; font-size: 14px; }
        button { width: 100%; background: #b30000; color: white; border: none; padding: 14px; margin-top: 25px; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 16px; transition: 0.3s; }
        button:hover { background: #800000; }
        
        /* Gaya untuk area QR Code */
        #qrcode-container { margin-top: 25px; display: flex; flex-direction: column; align-items: center; border-top: 1px dashed #ccc; padding-top: 20px; }
        #qrcode { padding: 10px; background: white; }
        .qr-text { font-size: 12px; color: #666; margin-bottom: 10px; }
        
        .footer-text { font-size: 11px; color: #999; text-align: center; margin-top: 20px; }
    </style>
</head>
<body>

<div class="card">
    <h2>UTA'45 Jakarta</h2>
    <p>Selamat bagi peserta UTBK/SNBT! Isi data di bawah untuk mendapatkan E-Book Gratis.</p>

    <form action="https://formspree.io/f/mbdqvewk" method="POST">
        <label>Nama Lengkap</label>
        <input type="text" name="nama" placeholder="Nama sesuai KTP" required>

        <label>No. WhatsApp</label>
        <input type="tel" name="whatsapp" placeholder="0812xxxxxxxx" required>

        <input type="hidden" name="_next" value="https://pendaftaran.uta45jakarta.ac.id/">
        <button type="submit">AMBIL E-BOOK & DAFTAR</button>
    </form>

    <div id="qrcode-container">
        <span class="qr-text">Scan untuk buka di HP:</span>
        <div id="qrcode"></div>
    </div>
    
    <div class="footer-text">
        © 2026 Universitas 17 Agustus 1945 Jakarta
    </div>
</div>

<script>
    // Fungsi untuk generate QR Code otomatis dari URL saat ini
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: window.location.href, // Mengambil link halaman ini
        width: 128,
        height: 128,
        colorDark : "#b30000", // Warna QR merah sesuai tema
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
</script>

</body>
</html>
