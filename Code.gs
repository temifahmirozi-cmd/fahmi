function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    
    var data = JSON.parse(e.postData.contents);
    
    if (!data.nama || !data.telp || !data.sekolah || !data.id_daftar) {
      return ContentService.createTextOutput(JSON.stringify({
        "result": "error", 
        "message": "Missing required fields"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
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