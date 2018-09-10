//function onOpen() {
  //var ss = SpreadsheetApp.getActiveSpreadsheet();
  //var menuEntries = [ {name: "Send Email", functionName: "sendEmail"}];
  //ss.addMenu("Backup", menuEntries);
//};


function sendExcelBackupEmail() {
  var ssID = SpreadsheetApp.getActiveSpreadsheet().getId();
  var sheetName = SpreadsheetApp.getActiveSpreadsheet().getName();
  //var email = Session.getUser().getEmail();
  var email = Session.getEffectiveUser();
  var subject = "this is my subject";
  var body = "this is my body :)";
  
  var oauthConfig = UrlFetchApp.addOAuthService("google");
  oauthConfig.setAccessTokenUrl("https://www.google.com/accounts/OAuthGetAccessToken");
  oauthConfig.setRequestTokenUrl("https://www.google.com/accounts/OAuthGetRequestToken?scope=https://spreadsheets.google.com/feeds/");
  oauthConfig.setAuthorizationUrl("https://www.google.com/accounts/OAuthAuthorizeToken");
  oauthConfig.setConsumerKey("anonymous");
  oauthConfig.setConsumerSecret("anonymous");
  
  var requestData = {"method": "GET", "oAuthServiceName": "google", "oAuthUseToken": "always"};

  var url = "https://spreadsheets.google.com/feeds/download/spreadsheets/Export?key="
      + ssID + "&gid=0&portrait=true" +"&exportFormat=xls";
    
  var result = UrlFetchApp.fetch(url , requestData);  
  var contents = result.getContent();
  MailApp.sendEmail(email,subject ,body, {attachments:[{fileName:sheetName+".xls", content:contents, mimeType:"application//xls"}]});
};

