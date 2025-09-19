
Here you have a little summary of each table that is present in our database, with the corresponding structure in the database (*figure 1*):

- [[Master-Works.Edouard-Brülhart.Database.Tables.Emi_codes]]: A table that stores all EMI projects informations. It permits to organize all these projects in the database and different services.

- [[Master-Works.Edouard-Brülhart.Database.Tables.Universities]]: A table that stores all universities involved in this project.

- [[Master-Works.Edouard-Brülhart.Database.Tables.Labels]]: A table that stores all the sample labels we generate using the [[Master-Works.Edouard-Brülhart.Services.label-creator]] software. This permits to only obtain unique labels to avoid duplicate samples for each project.

- [[Master-Works.Edouard-Brülhart.Database.Tables.Mobile_containers]]: A table that stores all mobile containers labels. It permits to have unique labels for mobile containers and thus track all our samples.

- [[Master-Works.Edouard-Brülhart.Database.Tables.Static_containers]]: A table that stores all static containers labels. It permits to have unique labels for static containers and thus track all our samples.

- [[Master-Works.Edouard-Brülhart.Database.Tables.QField_data]]: A table that stores the collection metadata. This also permit to check that samples labels used during the collection are effectively unique and present in the [[Master-Works.Edouard-Brülhart.Database.Tables.Labels]] table.

- [[Master-Works.Edouard-Brülhart.Database.Tables.QField_data_obs]]: A table that store the observations metadata from specimens we cuouldn't collect during collection campains.

- [[Master-Works.Edouard-Brülhart.Database.Tables.Inat_data]]: A table that stores the [[Master-Works.Edouard-Brülhart.Services.iNaturalist]] metadata. These data are fetched from [[Master-Works.Edouard-Brülhart.Services.iNaturalist]], in order to have a community taxon resolution or curation, retrieved by the [[Master-Works.Edouard-Brülhart.Scripts.Python.inat-fetcher]] script.

- [[Master-Works.Edouard-Brülhart.Database.Tables.Inaturalist_Commented_Observations]]: A table that stores all iNaturalist observations made for the project that have comments or multiple identifications by the community. It permits to involved botanical gardens to have a feedback on their specimens identification.

- [[Master-Works.Edouard-Brülhart.Database.Tables.Field_samples]]: A table that stores the field samples metadata. It makes the link between collection and iNaturalist metadata and the laboratory metadata.

- [[Master-Works.Edouard-Brülhart.Database.Tables.Batch]]: A table that stores the batches. It permits to track samples batches in order to evaluate the quality of the treatment. For example, we can track which samples have been extractec with which solvent batch. In consequence, if we have a contaminated solvent, we can manage to exclude these contaminants from the features list of the involved samples. 

- [[Master-Works.Edouard-Brülhart.Database.Tables.Extraction_methods]]: A table that stores the extraction methods used inside the project. It permits to track which samples have been extracted with which extraction method.

- [[Master-Works.Edouard-Brülhart.Database.Tables.Lab_extracts]]: A table that stores all generated lab extracts from the field samples.

- [[Master-Works.Edouard-Brülhart.Database.Tables.Aliquots]]: A table that stores all generated aliquots from the lab extracts.

- [[Master-Works.Edouard-Brülhart.Database.Tables.Injection_Methods]]: A table that stores the injection methods used inside the project. It permits to track which samples have been injected with which injection method.

- [[Master-Works.Edouard-Brülhart.Database.Tables.Mass_spectrometers]]: A table that stores all mass spectrometers involved in the project.

- [[Master-Works.Edouard-Brülhart.Database.Tables.Mass_spectrometry_analysis]]:A table that stores all mass spectrometry filename and injection informations.

- [[Master-Works.Edouard-Brülhart.Database.Tables.SI_units]]: A table that stores all International System units with the corresponding conversions. It permits to call them in all our services in order to define and convert units.

![image import](assets/images_bruelhed/db_schema.svg)*Figure 1: Database structure with links between tables. Tables that have "etc" as last column have been shortened in order to keep a readable figure. These supplementary columns are presented in the corresponding table chapter.*