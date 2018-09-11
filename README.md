# DataManagementPlan-GAS
GGGSC DataManagementPlan GAS - Google Application Scripts being used by the GGGSC for tracking Data Management Plans and creating Data Management Plan documents from Google Form Responses
US Geological Survey (USGS)

Geology, Geophysics, and Geochemistry Science Center (GGGSC)

Data Managment Team (gs_gggsc_dm_team@usgs.gov)

Google Application Scripts (GAS)

Contact Phil Brown (pbrown@usgs.gov)

USGS Profile: https://www.usgs.gov/staff-profiles/philip-j-brown

ORCID: https://orcid.org/0000-0002-2415-7462

GitHub: https://github.com/pbrown-usgs


## DMP-BackupByEmail:

Google sheet functions that sends data backups via email:

- **sendExcelBackupEmail**, function that creates a Google Sheet backup in MS Excel format and sends it to designees via email as an attachment; this function still requires testing.

## DMP-BackupByEmail:

Google sheet functions that create DMP backups:

- **onOpen**, function that creates a Google Sheet menus for Data Backup Functions.
- **BackUp**
- **createDoc**


## DMP-AssignFormEditURL:
Google sheet functions that assighn edit URLs and response IDs to data

- **assignEditUrlsDMP_Responses**; function that assigns edit Google Form response URLs to worksheet

## DMP-CreateDMPFromTemplate:
Google sheet functions used to create a DMP using a Google Doc Template and data from a Google Sheet

- **CreateDMP**; function that assighns values to the Google doc template
- **appendToDoc**; function that calls append element function
- **appendElementToDoc**; function that appends child objects to document parent object

#### Text example for template document
Text below is an example of populating creating a template document based upon finding and replacing text strings.  Template text can be formatted however by formatting the children objects of the documents body in Google Docs.

```
Data Management Plan generated on %DateCreated% from Data Management Form responses completed %Timestamp%

Data Management Plan For

%ProjectTitle%

Principal Investigator: %PrincipalInvestigator%
Email Address: %EmailAddress%
Start Date: %StartDate%
End Date: %EndDate%
Project Continuation: %ProjectContinuation%
Data Point of Contact: %DataContact%
Data Agreement: %DataAgreement%
Funding Source: %FundingSource%

Abstract
%Abstract%

Collaborators
%Collaborators%

Data Characteristics
Data collection: 
%DataCollection%
Ownership: 
%Ownership%
Existing Data: 
%ExistingData%
Existing Data Source: 
%SourceExisting%
Contractor Data: 
%ContractData%
Contractor Data Source: 
%SourceContract%
Raw Data Format(s): 
%RawFormat%
Data Volume: 
%DataVolume%
Data Collection Hardware: 
%HardwareEnvironment%
File Naming Convention: 
%FileNamingConv%

Geospatial Information
Is the data Geospatial: 
%GeospatialExtent% 
Study Area: 
%StudyAreaGIS%
Geospatial Footprint:  
%GISfootprint%

Data Processing
	Data Modeling Involved:
%ModelSoftware%
	Modeling Software being utilized:
%SoftwareUtilized%
	Data Processing Workflow:
%ProcessingData%
	Processing Tools:
%ToolsSoftware%
Provenance:
%Provenance%
	QA/QC:
%QAQC%
	Data Analyzed:
%Analyze%	
	Analysis Steps:
%AnalysisSteps%
Analysis Method(s):
%Method%	

Data Management
Backup and Storage:
%BackupAndStorage%
Backup Protocol:
%BackupProtocol%
Data Release Responsibility:
%PublishResponsibility%
Version Control:
%VersionControl%
Operational Copy:
%OperationalCopy%
Data Risk:
%Risks%
Preserve Format:
%PreserveFormat%
Data versions published:
%PublishVersions%
Deadline:
%Deadline%
Metadata:
%Metadata%
Restrictions:
%Restrictions%
Distribution Platform:
%DistributionPlatform%
Data URL:
%DataURL%
Persistent Identifier:
%PersistentIdentifier%
DOI:
%DOI%
```

## DMP-G-SheetSync:
Google sheet functions used to sycronize seperate Google Sheet worksheets between 2 Google Sheet Workbooks

- **copyDataToWorkingSpreadsheet**; function that sycronizes worksheets between work books. 

## DMP-EmailFunctions:
Google sheet functions used to send emails containing Google Form responses and that attach files

- **SendEmailOnFormSubmit**; function that sends a confirmation email after a Google Form submission containing form responses. 



