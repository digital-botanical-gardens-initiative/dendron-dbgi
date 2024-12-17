

# This is Audrey's DBGI daily open-notebook.

Today is 2023.05.04

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions

###
###

## Doing

## Paused

## Done

## Notes

### Tutorial 

**DBGI Workflow** : from the creation of an DBGI_ID to the LC-MS analysis

In order to use the workflow you will need to have the following account / application : directus, Avery, Qfield, Inaturalist,

## **DBGI Labelisation** ## 
  ### Principe 
  DBGI_ID will allow you to link the plant, the extract and analysis. 

  DBGI_ID can be composed of : 

  plant identification | extract code | vial code | 
---------|----------|---------|
 dbgi_XXXXXX | YY | ZZ |  
 
  The **plant identification** helps you to connect all the plant metadata (localisation, species, genus). 
  
  The **extract code** is corresponding to the stock vial obtained and conserved in freezer. 
  
  The **vial code** is referring to the vial analysed. Usually around 150 µL of stock extract is taken and transferred to a vial for analysis. 


  At each step you will need to print labels to identify falcon or vials. 


  ### Pratical 
  a. Creation of an account on directus  
  
  b. Implementation of the dbgi_ID list using [[Master-Works.Maëlle-Wannier.tutorial.directus.Basics]] protocol. 
  
  c. Download the .csv file with your new dbgi_id 

  d. Add the following column 
 
 plant identification | extract code | vial code | Plant ID_extract code | Plant ID_extract code_vial code
---------|----------|---------|
 dbgi_XXXXXX | YY | ZZ |  dbgi_XXXXXX_YY |dbgi_XXXXXX_YY_ZZ 

  ##
  d. Label creation using Avery. 
  
  Import the corresponding template to avery. Then import  the dbgi_ID list. 

  For plant sample select the column dbgi_ID ; modify the QR code according the dbgi_ID (check QR code with a QR code reader)

  For vial label use the vial label columm and create an associated QR code

  e. Print label 
  Sample label are print on L4732 sheet 
  Vial label are print on L4731 sheet
  
  f. Labelling falcon tube/vial + protect with scotch tape 

## **Plant's collect** ##
   
  a. Before collecting : provide for sufficient falcon tubes with DBGI-SPL-ID 
  
  b. Qfield software (follow the protocol section 'utilisation of Qfield'  http://www.dbgi.org/dendron-dbgi/notes/h33m4gr8eny7li4yhlxotdb) during collection 
  
  c. The transfert of the data collected on iNaturalist is automatic
  
## **Extraction** ## 
(extraction section : http://www.dbgi.org/dendron-dbgi/notes/mpboa8wpvhpygf5fw4o9v11/)
 
100 µL in one vial for analysis LC-MS/MS + one vial with ~XX µL in the freezer 


## **LC-MS analysis** ##
  
  a. Preparation of the samples list 

  b. Analysis 

## **Datatreatment** ##
   for datatreament follow the **link** 


## Todo tomorrow
Modification of the Dbgi name dbgi_00000_01_01 (n° vial)
###
###
###


## Today I learned that

- 