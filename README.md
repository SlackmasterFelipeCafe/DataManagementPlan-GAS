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
