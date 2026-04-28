<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pendaftaran Mahasiswa Baru - UTA '45</title>
    <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f2f5; display: flex; justify-content: center; padding: 20px; }
        .container { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); width: 100%; max-width: 500px; }
        h2 { color: #b22222; text-align: center; margin-bottom: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box; }
        button { width: 100%; padding: 12px; background-color: #b22222; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: bold; }
        button:hover { background-color: #8b0000; }
        
        /* Kartu Hasil Pendaftaran */
        #registrationCard { display: none; margin-top: 30px; padding: 20px; border: 2px dashed #b22222; border-radius: 10px; text-align: center; background: #fffafb; }
        #registrationCard h3 { margin-top: 0; color: #333; }
        .data-result { text-align: left; margin: 15px 0; font-size: 14px; }
        .barcode-container { margin-top: 20px; }
        .btn-print { background-color: #4CAF50; margin-top: 10px; }
        
        @media print {
            .no-print { display: none; }
            #registrationCard { display: block !important; border: none; }
        }
    </style>
</head>
<body>

<div class="container">
    <div class="no-print">
        <h2>Pendaftaran UTA '45</h2>
        <div class="form-group">
            <label>Nama Lengkap</label>
            <input type="text" id="nama" placeholder="Masukkan nama sesuai ijazah">
        </div>
        <div class="form-group">
            <label>Tempat, Tanggal Lahir</label>
            <input type="text" id="ttl" placeholder="Contoh: Jakarta, 01-01-2005">
        </div>
        <div class="form-group">
            <label>Nomor Telepon (WA)</label>
            <input type="number" id="telp" placeholder="0812xxxx">
        </div>
        <div class="form-group">
            <label>Asal Sekolah</label>
            <input type="text" id="sekolah" placeholder="SMA/SMK Asal">
        </div>
        <button onclick="prosesPendaftaran()">Daftar Sekarang</button>
    </div>

    <div id="registrationCard">
        <h3>KARTU PENDAFTARAN</h3>
        <hr>
        <div class="data-result">
            <p><strong>ID DAFTAR:</strong> <span id="resID"></span></p>
            <p><strong>NAMA:</strong> <span id="resNama"></span></p>
            <p><strong>TTL:</strong> <span id="resTTL"></span></p>
            <p><strong>SEKOLAH:</strong> <span id="resSekolah"></span></p>
        </div>
        <div class="barcode-container">
            <svg id="barcode"></svg>
        </div>
        <p style="font-size: 10px; color: gray;">Harap simpan kartu ini untuk verifikasi di kampus.</p>
        <button class="btn-print no-print" onclick="window.print()">Cetak Kartu</button>
        <button style="background:#666; margin-top:5px;" class="no-print" onclick="location.reload()">Daftar Baru</button>
    </div>
</div>

<script>
    function prosesPendaftaran() {
        // Ambil Data
        const nama = document.getElementById('nama').value;
        const ttl = document.getElementById('ttl').value;
        const telp = document.getElementById('telp').value;
        const sekolah = document.getElementById('sekolah').value;

        if(!nama || !ttl || !telp || !sekolah) {
            alert("Harap lengkapi semua data!");
            return;
        }

        // Generate ID Unik (UTA45 + Timestamp)
        const idUnik = "UTA45-" + Math.floor(Date.now() / 1000);

        // Tampilkan ke Kartu
        document.getElementById('resID').innerText = idUnik;
        document.getElementById('resNama').innerText = nama.toUpperCase();
        document.getElementById('resTTL').innerText = ttl;
        document.getElementById('resSekolah').innerText = sekolah.toUpperCase();

        // Generate Barcode
        JsBarcode("#barcode", idUnik, {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 80,
            displayValue: true
        });

        // Sembunyikan form, tampilkan kartu
        document.querySelector('.no-print').style.display = 'none';
        document.getElementById('registrationCard').style.display = 'block';
    }
</script>

</body>
</html>
