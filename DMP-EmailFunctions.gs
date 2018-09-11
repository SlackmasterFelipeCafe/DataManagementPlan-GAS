function SendEmailOnFormSubmit(e) {
// This function executes when there is a Gform response submitted to the Field Communications Gsheet.  To set up - "Edit > Current Projects Triggers"  >>-PJB->
// Objects returned from the Form submit event include authMode, values, range, namedValues  
// Created by Phil Brown for the USGS, 7/24/2017, pbrown@usgs.gov  >>-PJB->
  
  
  //Code example to set message values to the MailApp library in an intuative way.
  
     //var message = {
     //to: "recipient@example.com",
     //subject: "Weekly Agenda | " + dateRange,
     //htmlBody: "Hi Everyone-\n Here's the <a href='" + agendaURL + ''">agenda</a> for tomorrow's meeting.\n See you in the morning!\n-John Doe", 
     //name: "Automatic Emailer Script",
     //attachments: [file2.getAs(MimeType.PDF)]
     //};
  
  //Code example to load data from sheet into email
  
     //var sheet = SpreadsheetApp.getActiveSheet();
     //var startRow = 2;  // First row of data to process
     //var numRows = 2;   // Number of rows to process
     // Fetch the range of cells A2:B3
     //var dataRange = sheet.getRange(startRow, 1, numRows, 2)
     // Fetch values for each row in the Range.
     //var data = dataRange.getValues();
     //for (i in data) {
     //  var row = data[i];
  
  //Code currently used for this function:
  
    var namedValues = e.namedValues; //define form event object namedValues
    var values = e.values;
    var emailDMteam = "gs_gggsc_dm_team@usgs.gov,pbrown@usgs.gov,mrjohns@usgs.gov"; //add multiple people seperated by a comma, no space, within the quotes 
    //var emailFieldContact = values[5];
  //Logger.log(emailFieldContact)
    
    var emailOfficeContact = values[7];
  //Logger.log(emailOfficeContact)
    
  //Logger.log(e.values[3])
  //Logger.log(e.values[16])
    
  //Set var email based upon for response
    
    //if (values[3] == "CMERSC"){var emailAddress = emailCMERSC + "," + emailFieldContact + "," + emailOfficeContact;}
    //if (values[3] == "CGGSC"){var emailAddress = emailCGGSC + "," + emailFieldContact + "," + emailOfficeContact;}
  var emailAddress = emailDMteam; //emailGGGSC + "," + emailFieldContact + "," + emailOfficeContact;
    
  var subject = "New DMP Form Responses have been submitted for "+ values[4] + "'s project titled, " + values[2];
  var message = "New DMP Form Responses have been submitted for "+ values[4] + "'s project titled, " + values[2] + " on " + values[0]+ "\n\n";
  message += "Review or edit values here: https://docs.google.com/spreadsheets/d/1vQRgt-uPbLM2760O20hryid7KmrVemf5t6HPMODh7Wk/edit?usp=sharing" + "\n\n" + "\n\n";
  
  //Code below loops through e.namedValues object resulting from the form on-submit event - this presents the results in an order all mixed up compared to the Google Sheet/Form layout.  
      
  //for(var i in values) {
   // message += values[i] + ': '+ e.namedValues[values[i]].toString() + "\n\n"; 
  //}
  
      
  //for(var field in e.namedValues) 
  //{
        //If (e.namedValues[field].toString() =! ""); //is not equal to null
        //{
        //message += field + ' :: '
             //+ e.namedValues[field].toString() + "\n\n";
        //}
  //}
  
  for(var field in e.namedValues) 
        {
        message += field + ' :: '
             + e.namedValues[field].toString() + "\n\n";
        }
  
       
    MailApp.sendEmail(emailAddress, subject, message); //!!!Comment or uncomment this statement to disable mail being sent!!!\\
  
  
  
    //Browser.msgBox('Email Address:' + emailAddress); // - this doesn't work - wonder how to shoot off a message box?
    //Logger.log(emailAddress)

}
