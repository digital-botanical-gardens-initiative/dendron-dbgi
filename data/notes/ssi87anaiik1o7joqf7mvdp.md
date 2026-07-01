> "iNaturalist is an online social network of people sharing biodiversity information to help each other learn about nature" ([[Bachelor-Works.Edouard-Brülhart.biblio._f]])

## iNaturalist advantages and utility

iNaturalist allows to link our samples with pictures, DBGI sample code and location. We can precise the plant phenology too. It contains a community curation system linked with a machine learning technology to correct or add an identification of each sampled plants.

We can create projects with a delimited area where each added plant will automatically fit in when uploaded. This is what we have done with the Jardin Botanique de l'Université de Fribourg. With this, all our samples are grouped together. This allows then to export the data in batch with the [pyinaturalist client](https://pyinaturalist.readthedocs.io/en/latest/index.html) for the iNaturalist API, to obtain all these informations on a CSV file.

![Build settings orthomosaic](assets/images/iNaturalist_page.png){max-width : 600px, display: block, margin: 0 auto}*iNaturalist page of Physalis peruviana with all the usefull fields described*

## iNaturalist import

For now, we haven't found a satisfying automatized manner to import pictures and locations from the drone map. We have to export the locations and DBGI sample codes from [QGIS](https://www.dbgi.org/dendron-dbgi/notes/s2z62u99lhdo7dvz3093fbb/) and add them manually to each plant profile :

1) Create an iNaturalist account or connect you on the [iNaturalist page](https://www.inaturalist.org/login) on a computer.

2) Put the pictures taken on the field in the DBGI account google photo.

3) Download them on the computer.

4) Click on the *uploader* button at the top of your profile page after connection and *choose files* to select the pictures to upload.

5) Group the pictures of the same plant by selecting them all using *ctrl + click* and clicking on the *combine* button at the top.

6) Click the *Select all* and select *captive/cultivated* if all the plants are cultivated and add the "Digital Botanical Gardens Initiative" on the projects field. Deselct all.

7) Add the species name for each plant on the "species name" field.

8) Add the location for each plant using the [QGIS](https://www.dbgi.org/dendron-dbgi/notes/s2z62u99lhdo7dvz3093fbb/) exported CSV in the *Location* field.

9) Add the dbgi_id in the *Fields* field for each plant.

10) Submit the observations.


However, it seems to be possible to directly link the pictures taken on the field with the plant name and the location to make automated batch imports using [QField](https://www.dbgi.org/dendron-dbgi/notes/s2z62u99lhdo7dvz3093fbb/). Work in progress...
