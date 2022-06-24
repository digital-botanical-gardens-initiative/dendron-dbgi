---
id: s2z62u99lhdo7dvz3093fbb
title: QGIS and map sample gestion
desc: ''
updated: 1656062938389
created: 1655989511525
---

QGIS ([[biblio._g]]) is an open source Geographic Information Software that permits to manage a lot of different geographic data. We use it to display the drone map and to add sample points.

To do that, we have made a QGIS project with the drone map as base. The project can be joined creating a QFieldCloud account [here](https://app.qfield.cloud/accounts/login/).

To add points, we make a new vector point layer for each sampling period. For now, Two batches are available, one for the SBL.20004 curse and one for this Bachelor Work.

## Connection to the QGIS project

Firstly, you have to [download](https://qgis.org/downloads/QGIS-OSGeo4W-3.22.7-1.msi) QGIS. Then open the software and install the QField Sync plugin under *Plugins/Manage and Install Plugins/QField Sync/Install Plugin*, and enter your QFieldCloud login. When it's done, you have to connect you to the [project](https://app.qfield.cloud/a/edouardbrulhart/DBGI/) with your QFieldCloud account. Then, go in QGIS to *Plugins/QFieldSync/QFieldCloud Projects Overview*. Here you will normally see the project. If not, clik on the *refresh* button on the bottom right. When you see the DBGI project, click on it and *synchronize*. A new page will open, select *Prefer Cloud* and controll that all the ticks are under the little cloud ont the window above. Then click *Perform Actions*. The files are big, so it will probably take some time to download the project.

![Build settings orthomosaic](assets/images/QGIS_synchronisation.png){max-width : 600px, display: block, margin: 0 auto}*How to obtain the synchronized QGIS project*