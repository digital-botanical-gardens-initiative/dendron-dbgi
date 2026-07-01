



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



## Tuesday 26 September 2023

- we want to have a `status` column in all table documenting a single physical object (a priori not for racks, MS analysis etc)
This should allow to capture the fact that a given sample has rotten (often seen when weighing) or that a vial has been lost, spilled etc. 

For now we go for two possible values OK / NOTOK  + an additional `comments` column where more infos are given for the NOTOK status

- In the Lab Extracts table : we want to be able to monitor any level of depth in the extraction process. For this we will use a DAG  that is monitor for each sample its corresponding parent sample.

- To generalize the Rack and Boxes tables we propose new table called containers
They are suffixed by the number of position (Higher number first if applicable)

e.g. container_8x3

The container inside this table wouzld be labelled as follow container_8x3_000001


- This also means we ant to label the fridges and racks 

fridge_000001 fridge 
fridge_000001_01 shelves

~~fridge_000001_01_01 racks~~ since racks are mobiles we in fact track them using the container_XxX nomenclature