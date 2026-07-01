Here you can find the actual collection workflow for DBGI and EMI projects. This workflow is separated into three different services:

- ### [[Master-Works.Edouard-Brülhart.Services.QGIS]]

    [[Master-Works.Edouard-Brülhart.Services.QGIS]] (Quantum GIS) is an open source GIS (Geographic Information System) that permits to manage a lot of different geographic data. We use it to display the drone map and to add sample points.

- ### [[Master-Works.Edouard-Brülhart.Services.QField]]

    [[Master-Works.Edouard-Brülhart.Services.QField]] is an advanced mobile GIS application designed to extend the functionality of QGIS into the field. It provides an efficient and robust solution for geospatial data collection, editing, and visualization on mobile devices.

- ### [[Master-Works.Edouard-Brülhart.Services.QFieldCloud]]

    [[Master-Works.Edouard-Brülhart.Services.QFieldCloud]] is a cloud-based service that seamlessly integrates with both QGIS and QField, providing a robust server solution for managing and synchronizing geospatial data across platforms. QFieldCloud serves as the vital link between QGIS on desktop environments and QField on mobile devices, enabling real-time data exchange and collaboration.

## Before collection

1) If you don't have one, create an account [here](https://emi-collection.unifr.ch/accounts/login/) to have access to our[[Master-Works.Edouard-Brülhart.Services.QFieldCloud]] self-hosted instance.

2) [Download](https://qgis.org/fr/site/forusers/download.html) QGIS and install the QField Sync and DBGI plugins under *Plugins/Manage and Install Plugins*. Enter your [[Master-Works.Edouard-Brülhart.Services.QFieldCloud]] login to make the link with the server and retrieve projects.

3) In [[Master-Works.Edouard-Brülhart.Services.QGIS]], go to *Plugins/QFieldSync/QFieldCloud Projects Overview*, clik on the project you want and *synchronize*. A new page will open, select *Prefer Cloud* and control that all the ticks are under the little cloud ont the window above. Then click *Perform Actions* (*Figure 1*).

![Build settings orthomosaic](assets/images/QGIS_synchronisation.png)*Figure 1: How to obtain the synchronized QGIS project*

4) If you don't have a collection layer, you can create one by going to *Plugins/QFieldSync/Synchronize Current Cloud Project* and select *Prefer cloud*, then hit *Perform Actions*. This will take the last changes from the server. Then go to *Vector/EMI/Create an EMI geopackage*. Choose the project code that is suited for your project(if you don't have one you can create one [here](http://directus.dbgi.org/admin/content/EMI_codes)). Then enter the name you want to give to the layer. Choose the identification layer and column, the collector layer and column and the observation_subject layer and column. Click OK and you should see your newly created layer, ready for collection.

Now you have the project synced. If you want to upload changes from QGIS to the server, you can choose *Prefer Local* and if you want to download changes from server to QGIS, you can choose *Prefer Cloud* from Synchronizing project window. !!! Use *Prefer Local* carafully, if there is changes in the cloud that haven't been synced with the local project, these informations will be lost !!!

## Manage collection application

1) Download QField for QGIS on the appstore/playstore

- IOS: [QField for QGIS IOS](https://apps.apple.com/us/app/qfield-for-qgis/id1531726814)
- Android: [QField for QGIS Android](https://play.google.com/store/apps/details?id=ch.opengis.qfield&pli=1)

Alternatively, on Androids, you can download the APK file from [https://github.com/opengisch/QField/releases](https://github.com/opengisch/QField/releases)

**Make sure to accept these following permissions to make QField work properly: "Camera", "Pictures and videos" and "Location"**

2) Open the application and login to QFieldCloud:

- Go to QFieldCloud projects. Double tap on the bee logo, a new field called "Server URL" will appear. Fill it with "https://emi-collection.unifr.ch" and enter you username and password you used to register on [[Master-Works.Edouard-Brülhart.Services.QFieldCloud]].
- Click Sign In.
- Once signed in, go to Community and click on your project. It will download it.
- Once project is downloaded, you can click again to open it and see the map.

3) Synce the project to obtain the latest version. It will take the latest files on the server and store it locally on your phone. Normally, if some modification are available on the cloud, you should have an exclamation mark inside the blue cloud:

- After opening the project, click on the blue cloud

- Then hit Synchronize

3) Add features:

- Select the layer you want to edit and pass in editing mode (*Figure 1*).

- Optionnaly, you can activate the GPS location to locate you approximatively on the field.

- When you point the plant location, tap on the "plus" button. This will make appear a form that you can fill.

4) Fields to fill:

- collector_fullname corresponds to your name. If you are not in the list, you can add yourself by filling the "collector_list" layer (same process as above). Check the box on the right to keep the selection between observations.

- observation_subject corresponds to the organ/part of the specimen you want to collect. If you don't find a correct term, you can add it by filling the "observation_subject" layer. Check the box on the right to keep the selection between observations.

- inat_upload is a tick button that allows you to choose whether your observation has to be uploaded on iNaturalist or not. This option is ticked by default. Example cases when this button has to be unticked: non-living samples (soil, water, ..) or multiple macroscopic species (20x20cm whole sampling for example). Check the box on the right to keep the selection between observations.

- is_wild is a tick button that allows you to chooss whether the specimen you want to collect is wild or captive.

- taxon_name field corresponds to the scientific name of the plant (open form where you can search on). If you are unsure or you don't know the species no worry, it's why we upload the observations on iNaturalist.

- no_name_on_list is a tick button you can tick if the specimen you are observing is not present on the taxon_name list. It will make appear a field called name_proposition where you can write free text to identify the specimen

- sample_id is the code sticked on the tube. You can scan it by clicking on the 3 dots.

- Then you have 5 (+1 optional if needed) pictures to take of the species, one of the specimen label (if available), one in general, one of the plant's details (flowers or remarkable details that permit identification), one where you cut and one with the species label (if availabe) and the dbgi code on the tube.

- The form contains two more tabs containing individual and environmental fields. These fields are optional. You can choose to fill them or not, following the results you want to obtain. You have free comments in these tabs, so if you want to add informations on the samples, you can add them here ("comment_eco" and "comment_env")

- Once done, the upper of the form should be green, and you can add you observation to the project by clicking on the tick in the upper left corner.

- Now you can collect the sample and put it in a tube. If you don't know how to do it, you can follow this guide: [[Bioblitz.Vinesch-Bioblitz.prelevation-protocol]]

- You have done your first observation!

5) Alternative to specimen collection

There is also observation layers (finish by _obs). These layers are made to observe specimens that can't be collected (vertebrates, protected species, ...). They will then be uploaded to iNaturalist and enter the database to possibly collect them during another collection process.

6) Upload your features:

**This system works offline, so each time you finish your collection, you need to update the project on the server.**

- Click on the little cloud and click on "push modifications". 
- Wait until all is synced. Finished!

![QField interface](assets/images/QField_settings.png)*Figure 1: How to use collection application*

## Collect samples

When you have successfully added your observation on QField, you need to collect the specimen.

1) Make sure you are ready
- Make sure you have all the necessary material to collect your sample.
- Make sure you wear gloves (for your security and to avoid sample contaminations) and that you clean it with ethanol after each sample.
- Make sure your observation with the collection application ([[Master-Works.Edouard-Brülhart.Services.QField]]) has been correctly added.

2) Collect the specimen

- Take a part of the specimen (if plant, mushroom, big animals) or the whole specimen (for small invertebrates or small plants). Make sure to take the part you defined in the collection application. To do this, you can use a scalpel or a tweezer. Make sure to clean your instrument afterwards to keep it clean for the next sample.

- Put it in the suited container. For small samples, put them first in a coffee filter, then roll it and put it in a prelabelled plastic tube. For bigger samples, you can use ziplock plastic bags or paper bags. Be careful, plastic bags break when frozen.

## After collection

After collection, samples need to be extracted in the [[Master-Works.Edouard-Brülhart.Laboratory]] and analyzed through [[Master-Works.Edouard-Brülhart.Mass-spectrometry]].