function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
   var menuItems = [];
  menuItems.push({name: "Backup to To Google Drive", functionName: "BackUp"});
  menuItems.push({name: "Backup By Email", functionName: "sendEmail"});
  menuItems.push({name: "Snc Spreadsheet Data", functionName: "copyDataToWorkingSpreadsheet"});
  menuItems.push(null); // line separator
  menuItems.push({name: "Create DMP Document", functionName: "CreateDMP"});
  menuItems.push({name: "Create Form Edit URL", functionName: "assignEditUrlsDMP_Responses"});
  
  ss.addMenu("DM-Actions", menuItems);
  
};

function BackUp() {
DriveApp.getFileById(SpreadsheetApp.getActiveSpreadsheet()
    .getId())
    .makeCopy(SpreadsheetApp.getActiveSpreadsheet()
        .getName() + "_Backup", (DriveApp.getFolderById('1beQ6ygmJDO7kcYEk7t37R4Nab4lHQxmM')));
}



function createDoc() {
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getActiveSheet(), aRow = sh.getActiveCell().getRowIndex();
  var title = sh.getRange(aRow, 1).getValue(), docDate = new Date(); 
  var docTitle = title + "-" + docDate, doc = DocumentApp.create(docTitle);

  // create text in document
  var body = doc.getBody();
  body.appendParagraph("A paragraph " + docTitle); 

  // create app and panel
  var app = UiApp.createApplication().setTitle("Open Google Document")
    .setHeight(50).setWidth(400);
  var vPanel = app.createVerticalPanel()
    .add(app.createAnchor(docTitle, doc.getUrl()));

  // add to app
  app.add(vPanel);
  ss.show(app);  
}
