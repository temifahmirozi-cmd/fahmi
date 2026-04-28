// ============ GOOGLE APPS SCRIPT BACKEND ============
// File: Code.gs (Deploy as Web App)

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    
    // Parse incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.nama || !data.telp || !data.sekolah || !data.id_daftar) {
      return ContentService.createTextOutput(JSON.stringify({
        "result": "error", 
        "message": "Missing required fields"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add row to spreadsheet
    sheet.appendRow([
      new Date(),
      data.nama,
      data.ttl,
      data.telp,
      data.sekolah,
      data.id_daftar
    ]);
    
    sheet.setRowHeight(sheet.getLastRow(), 30);
    
    return ContentService.createTextOutput(JSON.stringify({
      "result": "success",
      "message": "Data saved successfully",
      "id": data.id_daftar
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      "result": "error",
      "message": error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ============ FRONTEND JAVASCRIPT ============
// File: registration.html or in script tag

async function prosesPendaftaran() {
    const nama = document.getElementById('nama').value.trim();
    const ttl = document.getElementById('ttl').value.trim();
    const telp = document.getElementById('telp').value.trim();
    const sekolah = document.getElementById('sekolah').value.trim();

    // Validation
    if(!nama || !ttl || !telp || !sekolah) {
        alert("⚠️ Harap lengkapi semua data!");
        return;
    }

    // Validate phone number (basic)
    if(telp.length < 10 || telp.length > 13) {
        alert("⚠️ Nomor telepon tidak valid!");
        return;
    }

    // Generate unique ID
    const idUnik = "UTA45-" + Math.floor(Date.now() / 1000);
    const dataKirim = { 
        nama: nama.toUpperCase(), 
        ttl: ttl,
        telp: telp, 
        sekolah: sekolah.toUpperCase(), 
        id_daftar: idUnik 
    };

    // Show loading state
    const btn = document.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = "⏳ Sedang Menyimpan...";
    btn.disabled = true;

    try {
        // SEND DATA TO GOOGLE SHEETS
        // Replace 'YOUR_DEPLOYMENT_URL_HERE' with your Google Apps Script deployment URL
        const response = await fetch('YOUR_DEPLOYMENT_URL_HERE', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataKirim)
        });
        
        // Check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        // Check server response
        if (result.result !== 'success') {
            alert(`❌ Gagal: ${result.message || 'Unknown error'}`);
            btn.innerText = originalText;
            btn.disabled = false;
            return;
        }

        // Display registration card
        document.getElementById('resID').innerText = idUnik;
        document.getElementById('resNama').innerText = nama;
        document.getElementById('resTTL').innerText = ttl;
        document.getElementById('resSekolah').innerText = sekolah;

        // Generate barcode
        if(typeof JsBarcode !== 'undefined') {
            JsBarcode("#barcode", idUnik, { 
                format: "CODE128", 
                displayValue: true,
                height: 50,
                width: 2
            });
        }

        // Hide form and show card
        document.querySelector('.no-print').style.display = 'none';
        document.getElementById('registrationCard').style.display = 'block';
        
        // Show success message
        alert("✅ Pendaftaran berhasil! Silakan cetak kartu registrasi Anda.");
        
    } catch (error) {
        console.error('Error:', error);
        alert("❌ Gagal menyimpan data ke Google Sheets.\n\nPastikan:\n1. URL deployment sudah benar\n2. Koneksi internet aktif\n3. Google Apps Script sudah di-deploy");
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

// Optional: Reset form
function resetForm() {
    document.getElementById('registrationForm').reset();
    document.querySelector('.no-print').style.display = 'block';
    document.getElementById('registrationCard').style.display = 'none';
    const btn = document.querySelector('button');
    btn.innerText = "Daftar";
    btn.disabled = false;
}