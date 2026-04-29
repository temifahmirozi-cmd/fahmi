<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pendaftaran Calon Mahasiswa UTA'45</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; background-color: #f0f2f5; }
        .container { max-width: 400px; margin: auto; background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 25px; }
        .header h2 { color: #ce1212; margin-bottom: 5px; }
        .header p { color: #666; font-size: 14px; }
        label { font-weight: bold; display: block; margin-top: 10px; color: #333; }
        input { width: 100%; padding: 12px; margin: 8px 0; border: 1px solid #ddd; border-radius: 8px; box-sizing: border-box; }
        button { width: 100%; padding: 15px; background-color: #ce1212; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold; margin-top: 20px; transition: 0.3s; }
        button:hover { background-color: #a00d0d; }
        #loading { display: none; text-align: center; color: #666; margin-top: 10px; }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h2>UTA'45 JAKARTA</h2>
        <p>Isi data untuk info beasiswa & e-brochure</p>
    </div>

    <form id="studentForm">
        <label for="nama">Nama Lengkap</label>
        <input type="text" id="nama" name="nama" placeholder="Contoh: Budi Santoso" required>

        <label for="ttl">Tempat, Tanggal Lahir</label>
        <input type="text" id="ttl" name="ttl" placeholder="Jakarta, 12-05-2007" required>

        <label for="telepon">Nomor WhatsApp</label>
        <input type="tel" id="telepon" name="telepon" placeholder="0812xxxxxx" required>

        <label for="sekolah">Asal Sekolah</label>
        <input type="text" id="sekolah" name="sekolah" placeholder="SMAN 1 Jakarta" required>

        <button type="submit" id="submitBtn">KIRIM DATA</button>
        <div id="loading">Sedang mengirim data...</div>
    </form>
</div>

<script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzRyJwCjvjF9MbLowZvAlbggLDCApB-13Mjahr2BG6uLIKI3epjoOjan_GOd_8yNVx76Q/exec';
    const form = document.getElementById('studentForm');
    const btn = document.getElementById('submitBtn');
    const loading = document.getElementById('loading');

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        btn.style.display = 'none';
        loading.style.display = 'block';

        // Mengambil data langsung dari input
        const formData = new URLSearchParams();
        formData.append('nama', document.getElementById('nama').value);
        formData.append('ttl', document.getElementById('ttl').value);
        formData.append('telepon', document.getElementById('telepon').value);
        formData.append('sekolah', document.getElementById('sekolah').value);

        fetch(scriptURL, { 
            method: 'POST', 
            body: formData,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(response => {
            alert("Terima kasih! Data Anda telah berhasil tersimpan di Database UTA'45.");
            form.reset();
            btn.style.display = 'block';
            loading.style.display = 'none';
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("Terjadi kesalahan saat mengirim data.");
            btn.style.display = 'block';
            loading.style.display = 'none';
        });
    });
</script>

</body>
</html>
