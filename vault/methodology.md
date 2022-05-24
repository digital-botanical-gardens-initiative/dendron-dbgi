---
id: kvsq63izkgbpmrd8sg12rw4
title: Methodology
desc: ''
updated: 1653398934746
created: 1646063874468
---
## Data treatment

The first step of this pilot was to clean up the list of the plants available in the Fribourg botanical garden with the help of a Python interface (for more details see : https://github.com/digitized-botanical-gardens-initiative/taxonomical-preparator). This has permitted to obtain a clear document with all unique species with their informations and locations in the garden. In the same time we have, with the help of the "Open Tree of Life" taxonomy, created a complete taxonomy of all plants. To this base, we have linked the OTL, Wikidata and Wikipedia page for each specimen of this list. We haven't found a good protocol to assign a unique ID for each plant yet. For instance, we have chosen to assign batch IDs that are in format DBGI_01_04_001 to DBGI_01_04_095 for the lyophilisated samples and DBGI_01_11_001 to DBGI_01_11_040 for the silica dryed ones. We have to find a way to link this with the iNaturalist website to have the exact location, pictures and other informations on each harvested samples.

## Map of the Fribourg botanical garden with a drone

To have a very precise location for each harvested sample, we have made a high resolution map of the Fribourg botanical garden with a drone. This map aim to to obtain centimetric coordinates precision of each sample using the Structure From Motion (SFM) technology.
## Harvesting method

The general process used for the harvesting of one sample is firstly to take a minimum of four pictures (one of the plant in general, one of the flowers/fruits/seeds/leaves in detail, one of the prelevated zone and the last of the sample with the assigned code on it) (see an example with Physalis peruviana below). These pictures are for the iNaturalist page of the sample. 

![physalis peruviana general](assets\images\Physalis_peruviana_general.jpg)Physalis peruviana in general with it's label in the botanical garden (if available)

![physalis peruviana detail](assets\images\Physalis_peruviana_detail.jpg)Detailed fruits and leaves of Physalis peruviana 

![physalis peruviana sample location](assets\images\Physalis_peruviana_sample_loc.jpg)The location of the sampling indicated with the scalpel to know exactly what have been prelevated

![physalis peruviana sample](assets\images\Physalis_peruviana_sample.jpg)Photo of the sample with the label (here Physalis peruviana, but for the next harvests, a unique code will be developed). Here the exemple has been made with the silica sampling


The second step of the sampling is to prelevate 

For the sampling, we have tested two different methods, that are complementary :

- Direct put the sample in liquid Nitrogen after prelevation, and then lyophilisate in batch of approximatively 50 samples during 48 hours minimum
- Put the samples in coffee filters and then in plastic bags with silica

### Liquid Nitrogen harvesting



Secondly, the 96 well plate will be partly filled with the same specimen, extracted with different liquid chromatography methods to seclect the best extraction way. Another fraction of the plate will host different parts of the same plant to determine the chemistry differences between them. For instance, it is not clear if we will analyse these different parts separately or alltogether in the same well. If some well are still available, they will be filled with some species, selected randomly or not, in the Fribourg botanical garden.

Finally, the results obtained will be analysed to select the best extraction method and to determine the way to analyse different parts of the same specimen. With these observations, an extraction and analysis protocol will be built to simplify, automatize and coordinate the future data acquisition. These results will be added to the taxonomy, to begin the large scale metabolomics database.

## Sampling methods

For instance, the sampling method is not fixed. We will try some and determine the chosen one later as explained above. The idea is at least to try one with liquid nitrogen to obtain the maximum of chemicals and another one with dryed plants in silica gel to have a facilitated method to collect the plants wolrdwide without the problem of bringing liquid nitrogen in remote areas. The first one with liquid nitrogen seems to be better to capt the chemicals before their degradation (oxydation for example) or disappearence (volatiles) and provide the best quality chemicals detection ([[biblio.devos_2007]]). But for many applications, it is impossible to use liquid nitrogen in the field. That is why a method with dryed plants would be more convenient for the acquisition far from the laboratory, especially far from human structures.

### Liquid nitrogen sampling

For instance, we have tested to directly put plants in 15ml falcon tube after cutting. These tubes are directly plunged in liquid nitrogen that is brought with us in the field. They are then put in a lyophilisation machine. For now we have tested without making holes in the lid and without putting in a while in the freezer at -80°C. The result is not good with liquid water accumulating in the bottom of the Falcon tube. However, the sample with holes seems to response better and doesn't have liquid watter in the bottom of the tube. So we have put the samples one night in the -80°C freezer and retested. For that we have plunged the lyophilisation jars in water ice before going to search the samples. This maner seems to work well, even on the non drilled tubes. 

### Dryed plants sampling

To dry plants, the method we will use is probably silica gel in a ziplock bag. The best ratio is minimum 50-60g silica gel for 4-6g of plant material. It permits to have a great tissues conservation and is practical in the field. Moreover, it can be reused multiple time by heating the silica gel at 120°C during 2 hours ([[biblio.shibata_2013]]). Continue to 1.2. About silica gel point Shibata, 2013.

## Extraction methods

### Extraction with liquid nitrogen samples

The acidified aqueous methanol with 80% methanol, 20% water and 0.1% formic acid seems to be the most efficient solvent for extraction of a large range of compounds, especially for secondary metabolites ([[biblio.devos_2007]]). For instance we have tested to prelevate 50 milligrams of powder and add 1.7 milliliters solvent. This permits to obtain ca. 1 milliliter of supernatant.

### Extraction with dryed samples

For the dried technic, 30mg dried powder seems to be a good weight for the sample. For the extraction, the same technic as liquid nitrogen seems to be good. In ([[biblio.pan_2020]]) however, only aqueous methanol at 75% concentration is used, with an ultrasonic extraction of 1 hour un a water bath to extract alkaloids. After a 10 minutes centrifugation at 14'000 rpm, the supernatant is diluted 10 folds with 75% aqueous methanol. These solutions are stored at 4°C before analysis ([[biblio.pan_2020]]). Another technic is available for dryed plant extract with other reagents in [[biblio.pan_2018]].

To dry plants, the method we will use is probably silica gel in a ziplock bag. The best ratio is minimum 50-60g silica gel for 4-6g of plant material. It permits to have a great tissues conservation and is practical in the field. Moreover, it can be reused multiple time by heating the silica gel at 120°C during 2 hours ([[biblio.shibata_2013]]). Continue to 1.2. About silica gel point Shibata, 2013.


#######parkinglot#####

https://github.com/Stanford-ChEMH-MCAC/protocols/blob/master/sample_preparation/general_metabolite_extraction_from_plant_tissue.md


## Chromatography methods

The column used for the liquid chromatography is a C<sub>18</sub>-reversed phase microbore with a small particle size, with a 45 minutes low continuous acetonitrile gradient followed by 15 minutes of washing and stabilization of the gradient. For big analyses higher gradient with less time could be possible, with a loss of resolution. All the steps are precisely described in [[biblio.devos_2007]]. 
