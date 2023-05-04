---
id: qug423ond4xtns8lelu38p2
title: Local project
desc: ''
updated: 1680687574464
created: 1680685151204
---
## Tutorial on how to obtain a local copy of the sampling system on your computer

### First step: Download QGIS
Select and download the suited verion of QGIS here: https://www.qgis.org/en/site/forusers/download.html

### Second step: Create an account on the self-hosted server(if you don't already have one): 
Go to this adress and create an account: https://dbgimap.hopto.org/accounts/signup/

An error will occur, but your account have been registered. You won't need to use the website again.

### Third step: Request to be part of the project:
Communicate the username of your account to Edouard brülhart (edouard.bruelhart@unifr.ch). Wait the adding (manual so it can take some hours/days). No worry, if you just want to collect plants on the field, no need to be added to the project, because it is public and editable by all.

#### Projects names:
jbn: Jardin botanique de Neuchâtel

jbuf: Jardin botanique universitaire de Fribourg 

### Fourth step: Open QGIS and install QFieldSync plugin:
Go to the "Plugins" tab, "Manage and install plugins..." -> "All" and search for "QField Sync". Install it.

### Fifth step: Connect the plugin to the server: 
Go to the "Plugins" tab, "QFieldSync" -> "QFieldCloud Projects Overview". Double click on the bee logo, a new field called "Server URL" will appear. Fill it with "https://dbgimap.hopto.org/" and enter you username and password you used to register on https://dbgimap.hopto.org/accounts/signup/. Click Sign In. You will see appear the project on the list. click on it and clik on the "Synchronize Selected Cloud Project". Select the location where you want to save the project's folder. It's done. When you want to update it, you can just click on the "Synchronize Selected Cloud Project" button, and it will update your project.