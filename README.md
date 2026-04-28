function generateStudentSystem() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  
  for (var i = 2; i <= lastRow; i++) {
    var studentID = sheet.getRange(i, 5).getValue(); // Mengambil ID di Kolom E
    
    if (studentID != "") {
      // Membuat URL Barcode
      var barcodeUrl = "https://bwipjs-api.metafloor.com/?bcid=code128&text=" + studentID;
      
      // Menampilkan di Kolom F
      sheet.setRowHeight(i, 60); // Memperbesar baris agar barcode terlihat
      sheet.getRange(i, 6).setFormula('=IMAGE("' + barcodeUrl + '")');
    }
  }
}
