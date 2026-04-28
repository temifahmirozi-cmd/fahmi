function doPost(e) {
    var ss = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
    var sheet = ss.getActiveSheet();
    var jsonData = JSON.parse(e.postData.contents);
    var name = jsonData.name;
    var email = jsonData.email;
    var date = new Date();

    // Simple validation
    if (!name || !email) {
        return ContentService.createTextOutput(JSON.stringify({
            "error": "Name and email are required."
        })).setMimeType(ContentService.MimeType.JSON);
    }

    // Save registration data
    try {
        sheet.appendRow([date, name, email]);
        return ContentService.createTextOutput(JSON.stringify({
            "status": "success",
            "message": "Registration data saved successfully."
        })).setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({
            "error": "Failed to save data." 
        })).setMimeType(ContentService.MimeType.JSON);
    }
}