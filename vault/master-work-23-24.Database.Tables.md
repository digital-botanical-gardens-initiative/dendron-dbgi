---
id: bt0h5gmjdgfcp9felx24csb
title: Tables
desc: ''
updated: 1718358878757
created: 1718357856222
---

Here you have a little summary of each table that is present in our database:
- [[master-work-23-24.Database.Tables.Emi_codes]]: A table that stores all EMI projects informations. It permits to organize all these projects in the database and different services.
- [[master-work-23-24.Database.Tables.Universities]]: A table that stores all universities involved in this project.
- [[master-work-23-24.Database.Tables.Labels]]: A table that stores all the sample labels we generate using the [[master-work-23-24.Scripts.Python.label-creator]] software. This permits to only obtain unique labels to avoid duplicate samples for each project.
- [[master-work-23-24.Database.Tables.Mobile_containers]]: A table that stores all mobile containers labels. It permits to have unique labels for mobile containers and thus track all our samples.
- [[master-work-23-24.Database.Tables.Static_containers]]: A table that stores all static containers labels. It permits to have unique labels for static containers and thus track all our samples.
- [[master-work-23-24.Database.Tables.QField_data]]: A table that stores the collection metadata. This also permit to check that samples labels used during the collection are effectively unique and present in the [[master-work-23-24.Database.Tables.Labels]] table.
- [[master-work-23-24.Database.Tables.QField_data_obs]]: A table that store the observations metadata from specimens we cuouldn't collect during collection campains.
- [[master-work-23-24.Database.Tables.Inat_data]]: A table that stores the [[master-work-23-24.Services.iNaturalist]] metadata. These data are fetched from [[master-work-23-24.Services.iNaturalist]], in order to have a community taxon resolution or curation, retrieved by the [[master-work-23-24.Scripts.Python.inat-fetcher]] script.
- [[master-work-23-24.Database.Tables.Inaturalist_Commented_Observations]]: A table that stores all iNaturalist observations made for the project that have comments or multiple identifications by the community. It permits to involved botanical gardens to have a feedback on their specimens identification.
- [[master-work-23-24.Database.Tables.Field_samples]]: A table that stores the field samples metadata. It makes the link between collection and iNaturalist metadata and the laboratory metadata.
- [[master-work-23-24.Database.Tables.Batch]]: A table that stores the batches. It permits to track samples batches in order to evaluate the quality of the treatment. For example, we can track which samples have been extractec with which solvent batch. In consequence, if we have a contaminated solvent, we can manage to exclude these contaminants from the features list of the involved samples. 
- [[master-work-23-24.Database.Tables.Extraction_methods]]: A table that stores the extraction methods used inside the project. It permits to track which samples have been extracted with which extraction method.
- [[master-work-23-24.Database.Tables.Lab_extracts]]: A table that stores all generated lab extracts from the field samples.
- [[master-work-23-24.Database.Tables.Aliquots]]: A table that stores all generated aliquots from the lab extracts.
- [[master-work-23-24.Database.Tables.Injection_Methods]]: A table that stores the injection methods used inside the project. It permits to track which samples have been injected with which injection method.
- [[master-work-23-24.Database.Tables.Mass_spectrometers]]: A table that stores all mass spectrometers involved in the project.
- [[master-work-23-24.Database.Tables.Mass_spectrometry_analysis]]:A table that stores all mass spectrometry filename and injection informations.
- [[master-work-23-24.Database.Tables.SI_units]]: A table that stores all International System units with the corresponding conversions. It permits to call them in all our services in order to define and convert units.