function assignEditUrlsDMP_Responses() {
  var formID = 'CopyFormIdHere';//enter form ID here
  var form = FormApp.openById(FormID);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DMP Responses');//change sheet name here
  
    //Change the sheet name as appropriate
  var data = sheet.getDataRange().getValues();
  var urlCol = 56; // column number where URL's should be populated; A = 1, B = 2 etc
  var responses = form.getResponses();
  var timestamps = [], urls = [], resultUrls = [];
  
  for (var i = 0; i < responses.length; i++) {
    timestamps.push(responses[i].getTimestamp().setMilliseconds(0));
    urls.push(responses[i].getEditResponseUrl());
  }
  for (var j = 1; j < data.length; j++) {
    resultUrls.push([urls[timestamps.indexOf(data[j][0].setMilliseconds(0))]]);
  }
  sheet.getRange(2, urlCol, resultUrls.length).setValues(resultUrls);  
};
