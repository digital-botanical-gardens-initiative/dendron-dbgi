We use [iNaturalist](https://www.inaturalist.org/home) to resolve or confirm taxons of specimens we collect for the DBGI project, and more generally for the EMI project.

"iNaturalist is an online social network of people sharing biodiversity information to help each other learn about nature" ([[Bachelor-Works.Edouard-Brülhart.biblio._f]])

## iNaturalist advantages and utility

iNaturalist allows to link our samples with pictures, sample code and location. We can precise the plant phenology too. It contains a community curation system linked with a machine learning technology to correct or add an identification of each observed specimen.

We can create projects with a delimited area where each added plant will automatically fit in when uploaded. This is what we have done with the Jardin Botanique de l'Université de Fribourg. With this, all our samples are grouped together. This allows then to export the data in batch with the [[Master-Works.Edouard-Brülhart.Scripts.Python.inat-fetcher]] to obtain all iNaturalist metadata in the [[Master-Works.Edouard-Brülhart.Database]].

![Build settings orthomosaic](assets/images/iNaturalist_page.png){max-width : 600px, display: block, margin: 0 auto}*iNaturalist page of Physalis peruviana with all the usefull fields described*

## iNaturalist import

The iNaturalist import is made automatically using collection informations from the [[Master-Works.Edouard-Brülhart.Services.QField]] collection application.

The [[Master-Works.Edouard-Brülhart.Scripts.Python.Pictures_manager]] python script retrieves collection metadata from [[Master-Works.Edouard-Brülhart.Services.QFieldCloud]] server and generates pictures with all needed metadata for iNaturalist. Then, the [[Master-Works.Edouard-Brülhart.Scripts.Python.iNaturalist_import_bot]] python script will automatically upload these pictures in iNaturalist and generate the observations.