---
id: fkbclzsoo3zgkkvgrlsg26g
title: QField
desc: ''
updated: 1680687574474
created: 1680685279899
---
## Tutorial on how to connect the project to the field application

### First step: Download QField (Android and IOS)
If you have the choice, Android is better in general for field applications (better access to phone data and possibility to use third party camera to set up pictures settings)

Here you can download the Android version: https://play.google.com/store/apps/details?id=ch.opengis.qfield

Here you can download the Android version: https://apps.apple.com/app/qfield-for-qgis/id1531726814

### Second step: Create an account on the self-hosted server (if you don't already have one): 
Go to this adress and create an account: https://dbgimap.hopto.org/accounts/signup/

An error will occur, but your account have been registered. You won't need to use the website again.

### Third step: Request to be part of the project (optional):

Communicate the username of your account to Edouard brülhart (edouard.bruelhart@unifr.ch). Wait the adding (manual, so it can take some hours/days). No worry, if you just want to collect plants on the field with QField, no need to be added to the project, because it is public and editable by all.

#### Projects names:
jbn: Jardin botanique de Neuchâtel

jbuf: Jardin botanique universitaire de Fribourg 

### Fourth step: Open QField:
Go to QFieldCloud projects. Double tap on the bee logo, a new field called "Server URL" will appear. Fill it with "https://dbgimap.hopto.org/" and enter you username and password you used to register on https://dbgimap.hopto.org/accounts/signup/. Click Sign In.

### Fifth step: Connect QField to the project: 
 You will see appear the projects on the list (jbn or jbuf). click on the one you want. The project will be downloaded in local, it can take several minutes, be patient. It's done.

 ### Field collection:

 To collect on the field, open the project you downloaded on QField by clicking on it.

 To add features, you have to select the layer you want to edit and pass in editing mode. Optionnaly, you can activate the GPS location to locate you approximatively on the field. When you point the plant location, tap on the "plus" button. This will make appear a form. Plant ID field corresponds to the scientific name of the plant (open form where you can search on). spl_code is the code sticked on the tube. You can scan it by clicking on the 3 points. Then you have 5 pictures to take of the plant, one in general, one of the plant's details (flowers or remarkable details that permit identification). Once done, the upper of the form should be green, and you can add you observation to the project.

 This system works offline, so each time you finish your collection, you need to update the project on the server. To do that, click on the little cloud and click on "push modifications". Wait until all is synced (don't close everything when you are seeing the "finished" text, because pictures are also uploaded, and it takes some time. You will have a notification that is saying that the process is in progress. When the notification disapears, you can close the application). Before each collection, please synce the project to not create syncronization problems. It will take the latest files on the server and store it locally on your phone.

 ![Build settings orthomosaic](assets/images/QField_settings.png){max-width : 600px, display: block, margin: 0 auto}