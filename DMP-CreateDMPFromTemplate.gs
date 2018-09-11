function CreateDMP() {
  //Created for Mikki Johnson's DM Project by Phil Brown (pbrown@usgs.gov) in December 2017 using an example found at http://www.dannyblaker.com/fishinfordham/autofill-a-template-from-a-google-sheet-and-email-as-a-pdf-using-google-scripts
 
  var templateid = "GoogleDocTemplateID"; // this is the template file id. You can find this in the URL of the google document template. For example, if your URL Looks like this: https://docs.google.com/document/d/1SDTSW2JCItWMGkA8cDZGwZdAQa13sSpiYhiH-Kla6VA/edit, THEN the ID would be 1SDTSW2JCItWMKkA8cDZGwZdAQa13sSpiYhiH-Kla6VA
  var FOLDER_NAME = "GoogleDriveFolderID"; // Enter the ID of the folder where you want to save your new documents. This ID is found in the Folders URL.
  var date = new Date();

  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();//will need to add worksheet ID and gid here if we want to make more automatic
  //var data = sheet.getRange(2, 1, sheet.getLastRow()-1, sheet.getLastColumn()).getValues();//This seems to only get the first row of data
  var activeRow = ss.getActiveCell().getRow();//Modified var data to be the active row.  Users activates a row or cell and then creats a DMP mannually >>-PJB->
  var data = sheet.getRange("A"+activeRow+":BC"+activeRow).getValues();//Hard coded data to collect from A to BC - may want to use get last column object >>-PJB->
  var DMPProjectTitle = sheet.getRange(activeRow, 3, 1, 1).getValues();
  var DMP_PI = sheet.getRange(activeRow, 5, 1, 1).getValues();
  var usernamefordoctitle = sheet.getRange(activeRow, 1, 1, 1).getValues();
  var newDoc = DocumentApp.create("DMP-" + DMP_PI + '-' + DMPProjectTitle + "-" + date);
  var file = DriveApp.getFileById(newDoc.getId());
  var folder = DriveApp.getFolderById("1beQ6ygmJDO7kcYEk7t37R4Nab4lHQxmM"); // INSERT the destination folder ID. Once again, this can be found in the URL once you have the folder openned in your browser
  folder.addFile(file)
  for (var i in data){
    var values = data[i];
    var docid = DriveApp.getFileById(templateid).makeCopy().getId();
    var doc = DocumentApp.openById(docid);
    var body = doc.getActiveSection();
    body.replaceText("%DateCreated%", date);// To add more auto gen fields, add them below along with the column number
    body.replaceText("%Timestamp%", values[0]);
    body.replaceText("%ProjectTitle%", values[2]);
    body.replaceText("%PrincipalInvestigator%", values[4]); 
    body.replaceText("%EmailAddress%", values[1]);
    body.replaceText("%StartDate%", values[5]);
    body.replaceText("%ProjectContinuation%", values[6]);
    body.replaceText("%DataContact%", values[7]);
    body.replaceText("%FundingSource%", values[9]);
    body.replaceText("%Abstract%", values[8]);
    body.replaceText("%DataAgreement%", values[10]);
    body.replaceText("%EndDate%", values[11]);
    if (values[12] == "Yes"){ body.replaceText("%Collaborators%", values[13]);}
    if (values[12] == "No"){ body.replaceText("%Collaborators%", "None");}
    body.replaceText("%DataCollection%", values[16]);
    body.replaceText("%Ownership%", values[14]);
    body.replaceText("%ExistingData%", values[17]);
    if (values[17] == "Yes"){body.replaceText("%SourceExisting%", values[18]);}
    if (values[17] == "No"){body.replaceText("%SourceExisting%", "Not Applicable");}
    body.replaceText("%ContractData%", values[19]);
    if (values[19] == "Yes"){body.replaceText("%SourceContract%", values[20]);}
    if (values[19] == "No"){body.replaceText("%SourceContract%", "Not Applicable");}    
    body.replaceText("%RawFormat%", values[21]);
    body.replaceText("%DataVolume%", values[22]);
    body.replaceText("%HardwareEnvironment%", values[23]);
    body.replaceText("%FileNamingConv%", values[24]);
    body.replaceText("%GeospatialExtent%", values[25]);//May want to add If then with N/A for the GIS stuff
    body.replaceText("%StudyAreaGIS%", values[26]);
    body.replaceText("%GISfootprint%", values[27]);
    body.replaceText("%ModelSoftware%", values[28]);
    if (values[28] == "Yes"){body.replaceText("%SoftwareUtilized%", values[29]);}
    if (values[28] == "No"){body.replaceText("%SoftwareUtilized%", "Not Applicable");}
    body.replaceText("%ProcessingData%", values[31]);
    body.replaceText("%ToolsSoftware%", values[32]);
    body.replaceText("%Provenance%", values[33]);
    body.replaceText("%QAQC%", values[34]);
    body.replaceText("%Analyze%", values[35]);
    body.replaceText("%AnalysisSteps%", values[36]);
    body.replaceText("%Method%", values[37]);
    body.replaceText("%BackupAndStorage%", values[39]);
    body.replaceText("%BackupProtocol%", values[40]);
    body.replaceText("%PublishResponsibility%", values[41]);
    body.replaceText("%VersionControl%", values[42]);
    body.replaceText("%OperationalCopy%", values[43]);
    body.replaceText("%Risks%", values[44]);
    body.replaceText("%PreserveFormat%", values[45]);
    body.replaceText("%PublishVersions%", values[47]);
    body.replaceText("%Deadline%", values[48]);
    body.replaceText("%Metadata%", values[49]);
    body.replaceText("%Restrictions%", values[50]);
    body.replaceText("%DistributionPlatform%", values[51]);
    body.replaceText("%DataURL%", values[52]);
    body.replaceText("%PersistentIdentifier%", values[53]);
    body.replaceText("%DOI%", values[54]);
    
    appendToDoc(doc, newDoc);//Call Append to doc function
    
    doc.saveAndClose();
    newDoc.saveAndClose();
    
    var message = "Attached is a recently generated Data Management Plan (DMP)"; // Customize message
    var emailOriginator = values[1];
    var emailTo = "pbrown@usgs.gov,gs_cmersc_cggsc_dm_team@usgs.gov,mrjohns@usgs.gov," + emailOriginator;//,mrjohns@usgs.gov,ericanderson@usgs.gov" // replace with list of emails including the users email subitted by the form
    var subject = "Auto generated Data Management Plan"; // customize subject 
    var pdf = DriveApp.getFileById(newDoc.getId()).getAs('application/pdf').getBytes();
    var attach = {fileName:'DMP-' + DMP_PI + '-' + DMPProjectTitle + "-" + date + '.pdf',content:pdf, mimeType:'application/pdf'}; // customize file name: "Autogenerated template"
    MailApp.sendEmail(emailTo, subject, message, {attachments:[attach]});
    
    DriveApp.getFileById(docid).setTrashed(true);
    
  }
  ss.toast("Template complied. Feed the unicorns and hi-five your neighbor!!!");
  
}

function appendToDoc(src, dst) {
  for (var i = 0; i < src.getNumChildren(); i++) {
    appendElementToDoc(dst, src.getChild(i));
  }
}

function appendElementToDoc(doc, object) {
  var type = object.getType();
  var element = object.copy();
  Logger.log("Element type is "+type);
  if (type == "PARAGRAPH") {
    doc.appendParagraph(element);
  } else if (type == "TABLE") {
    doc.appendTable(element);
  } 
  
}
