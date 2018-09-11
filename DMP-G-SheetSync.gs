function copyDataToWorkingSpreadsheet() {
//*************************************************
// copy data from form sheet to live mapping sheet
// source doc
//var sss = SpreadsheetApp.openById('0An8....');

// source sheet
//var ss = sss.getSheetByName('Master spreadsheet');

// target spreadsheet
//var tss = SpreadsheetApp.openById('0An8.....');

// target sheet
//var ts = tss.getSheetByName('Working Spreadsheet');
//*************************************************  
  
  // source doc
  var sss = SpreadsheetApp.openById('1vQRgt-uPbLM2760O20hryid7KmrVemf5t6HPMODh7Wk');

  // source sheet
  var ss = sss.getSheetByName('DMP Responses');
  
  // Get full range of data
  var SRange = ss.getDataRange();

  // get A1 notation identifying the range
  var A1Range = SRange.getA1Notation();

  // get the data values in range
  var SData = SRange.getValues();

  // target spreadsheet
  var tss = SpreadsheetApp.openById('1XLj1jhu-oMusLX59_JdQ_GO1uAygvJtZrZhKEsTjGks');
  
  // target sheet
  var ts = tss.getSheetByName('Form Responses 14'); 

  // set the target range to the values of the source data
  ts.getRange(A1Range).setValues(SData);

};
