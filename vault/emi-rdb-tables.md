---
id: ha16yu7114ctzc0r7x83dkk
title: Emi Rdb Tables
desc: ''
updated: 1695389432929
created: 1695388693267
---




Think about experimental methods open repositaries.
Then Method 1 could have its DOI associated

2 DB 

- EMI DB
- Project DB (DBGI DB)

Across project DB all headers should be identical.


List of tables to be implemented in the Project DB

- Sub-projects 

- Labels (currentky the Samples table)

This table collect the currently reserved and or used labels (corresponds to all printe labels untill now)

- Field_Samples

This table contains the efectively collected and dryed samples
id example : dbgi_000001

PK : field_sample_id (e.g dbgi_000001)
FK : inat_observation_id (e.g 117770387)

- Lab_Extracts

PK : lab_extract_id (e.g dbgi_000001_01)
FK : field_sample_id (e.g dbgi_000001)


- Aliquots 

PK : aliquot_id (e.g dbgi_000001_01_01)
FK : lab_extract_id (e.g dbgi_000001_01)


- Mass_Spectrometry_Analysis 

PK : mass_spec_id (e.g 20230918_EB_dbgi_000001_01_01_pos.mzXML)
FK : aliquot_id (e.g dbgi_000001_01_01)
