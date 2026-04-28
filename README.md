<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulir Calon Mahasiswa UTA '45 Jakarta</title>
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .form-card {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 450px;
        }
        .header {
            text-align: center;
            margin-bottom: 25px;
        }
        .header h2 { color: #d32f2f; margin: 0; }
        .header p { color: #666; font-size: 0.9rem; }
        
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; color: #333; }
        input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-sizing: border-box; /* Penting agar padding tidak merusak layout */
            font-size: 1rem;
        }
        input:focus { border-color: #d32f2f; outline: none; }
        
        button {
            width: 100%;
            background-color: #d32f2f;
            color: white;
            border: none;
            padding: 15px;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
            margin-top: 10px;
        }
        button:hover { background-color: #b71c1c; }
        
        #success-message {
            display: none;
            text-align: center;
            padding: 20px;
        }
        .qr-result {
            width: 150px;
            margin-top: 15px;
            border: 1px solid #ddd;
            padding: 10px;
        }
    </style>
</head>
<body>

<div class="form-card" id="main-content">
    <div class="header">
        <h2>Daftar UTA '45 Jakarta</h2>
        <p>Isi data diri untuk mendapatkan info beasiswa & akses pendaftaran</p>
    </div>

    <form id="leadForm">
        <div class="form-group">
            <label>Nama Lengkap</label>
            <input type="text" id="nama" placeholder="Contoh: Budi Santoso" required>
        </div>
        
        <div class="form-group">
            <label>Tempat, Tanggal Lahir</label>
            <input type="text" id="ttl" placeholder="Jakarta, 12-05-2008" required>
        </div>
        
        <div class="form-group">
            <label>Nomor WhatsApp</label>
            <input type="tel" id="telp" placeholder="0812xxxxxxxx" required>
        </div>
        
        <div class="form-group">
            <label>Asal Sekolah</label>
            <input type="text" id="sekolah" placeholder="SMA / SMK / MA..." required>
        </div>

        <button type="submit">Dapatkan Akses Pendaftaran</button>
    </form>
</div>

<div class="form-card" id="success-message">
    <h2 style="color: #2e7d32;">Terima Kasih!</h2>
    <p>Data Anda telah tersimpan. Silakan lanjut ke pendaftaran resmi:</p>
    
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://pendaftaran.uta45jakarta.ac.id/" class="qr-result" alt="QR Pendaftaran">
    
    <br><br>
    <a href="https://pendaftaran.uta45jakarta.ac.id/" style="text-decoration: none; color: white; background: #d32f2f; padding: 12px 25px; border-radius: 25px; display: inline-block; font-weight: bold;">Ke Laman Pendaftaran</a>
</div>

<script>
    document.getElementById('leadForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mengambil data dari form
        const dataCalon = {
            nama: document.getElementById('nama').value,
            ttl: document.getElementById('ttl').value,
            telp: document.getElementById('telp').value,
            sekolah: document.getElementById('sekolah').value
        };

        // Simulasi penyimpanan data (Dalam prakteknya dikirim ke Database/Google Sheets)
        console.log("Data Calon Mahasiswa Terinput:", dataCalon);
        alert("Data berhasil dicatat oleh sistem Tim Promosi!");

        // Sembunyikan form, tampilkan pesan sukses & link pendaftaran
        document.getElementById('main-content').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
    });
</script>

</body>
</html>
