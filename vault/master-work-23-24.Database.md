---
id: utxt2dpc9ytwb941oz4nfg8
title: Database
desc: ''
updated: 1718357017633
created: 1718349400476
---

## [[master-work-23-24.Directus]]

The database we use is an integration of [[master-work-23-24.PostgreSQL]], a robust relational database system, with [[master-work-23-24.Directus]], an open-source data platform. The combined solution offers a powerful, flexible, and user-friendly environment for managing structured data. This setup enables efficient data storage, retrieval, and management with a modern web-based interface, suitable for diverse applications in scientific research and beyond."

This database is the core part that stores the data from the beginning to the end. This then permits to retrieve easily and automatically all necessary metadata coming from the different services we use.

## Data structure

The data structure works as follow:
- [[master-work-23-24.Database.tables.Emi_codes]]: A table that stores all EMI projects informations. It permits to organize all these projects in the database and different services.
- [[master-work-23-24.Database.tables.Universities]]:
- [[master-work-23-24.Database.tables.Labels]]: A table that stores all the sample labels we generate using the [[master-work-23-24.Scripts.Python.label-creator]] software. This permits to only obtain unique labels to avoid duplicate samples for each project.
- [[master-work-23-24.Database.tables.Mobile_containers]]:
- [[master-work-23-24.Database.tables.Static_containers]]:
- [[master-work-23-24.Database.tables.QField_data]]: A table that stores the collection metadata. This also permit to check that samples labels used during the collection are effectively unique and present in the [[master-work-23-24.Database.tables.Labels]] table.
- [[master-work-23-24.Database.tables.QField_data_obs]]: A table that store the observations metadata from specimens we cuouldn't collect during collection campains.
- [[master-work-23-24.Database.tables.Inat_data]]: A table that stores the [[master-work-23-24.iNaturalist]] metadata. These data are fetched from [[master-work-23-24.iNaturalist]], in order to have a community taxon resolution or curation, retrieved by the [[master-work-23-24.Scripts.Python.inat-fetcher]] script.
- [[master-work-23-24.Database.tables.Inaturalist_Commented_Observations]]:
- [[master-work-23-24.Database.tables.Field_samples]]: A table that stores the field samples metadata. It makes the link between collection and iNaturalist metadata and the laboratory metadata.
- [[master-work-23-24.Database.tables.Batch]]:
- [[master-work-23-24.Database.tables.Extraction_methods]]:
- [[master-work-23-24.Database.tables.Lab_extracts]]:
- [[master-work-23-24.Database.tables.Aliquots]]:
- [[master-work-23-24.Database.tables.Injection_Methods]]:
- [[master-work-23-24.Database.tables.Mass_spectrometers]]:
- [[master-work-23-24.Database.tables.Mass_spectrometry_analysis]]:
- [[master-work-23-24.Database.tables.SI_units]]:



