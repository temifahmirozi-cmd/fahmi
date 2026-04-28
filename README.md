function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  // Mengambil data dari kiriman formulir web
  var data = JSON.parse(e.postData.contents);
  
  // Menambahkan data ke baris terakhir Sheets
  sheet.appendRow([
    data.nama,
    data.ttl,
    data.telp,
    data.sekolah,
    data.id_daftar
  ]);
  
  // Mengatur tinggi baris agar rapi (opsional)
  sheet.setRowHeight(sheet.getLastRow(), 30);

  return ContentService.createTextOutput(JSON.stringify({"result": "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}async function prosesPendaftaran() {
    const nama = document.getElementById('nama').value;
    const ttl = document.getElementById('ttl').value;
    const telp = document.getElementById('telp').value;
    const sekolah = document.getElementById('sekolah').value;

    if(!nama || !ttl || !telp || !sekolah) {
        alert("Harap lengkapi semua data!");
        return;
    }

    const idUnik = "UTA45-" + Math.floor(Date.now() / 1000);
    const dataKirim = { nama, ttl, telp, sekolah, id_daftar: idUnik };

    // TAMPILKAN LOADING
    document.querySelector('button').innerText = "Sedang Menyimpan...";

    try {
        // KIRIM DATA KE GOOGLE SHEETS/EXCEL
        await fetch('URL_WEB_APP_ANDA', {
            method: 'POST',
            body: JSON.stringify(dataKirim)
        });

        // TAMPILKAN KE KARTU (Sama seperti sebelumnya)
        document.getElementById('resID').innerText = idUnik;
        document.getElementById('resNama').innerText = nama.toUpperCase();
        document.getElementById('resTTL').innerText = ttl;
        document.getElementById('resSekolah').innerText = sekolah.toUpperCase();

        JsBarcode("#barcode", idUnik, { format: "CODE128", displayValue: true });

        document.querySelector('.no-print').style.display = 'none';
        document.getElementById('registrationCard').style.display = 'block';
        
    } catch (error) {
        alert("Gagal menyimpan data ke Excel. Periksa koneksi.");
        console.error(error);
    }
}
