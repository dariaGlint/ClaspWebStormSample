function HelloWorld(){
    const sheet = SpreadsheetApp.getActive().getSheetByName("シート1");
    sheet.getRange(1,1).setValue('HelloWorld');
}