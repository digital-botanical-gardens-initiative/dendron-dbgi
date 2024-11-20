

# This is PMA's DBGI daily open-notebook.

Today is 2023.07.27

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

### Point Edouard

Looking into the noveltries of the qfield app
-dpownload on deggoglzided android --- semms to work fine

- Think about using a defined taxonomy for the field called "sample_name" rather than an excel list per garden.
For example we could use the https://tree.opentreeoflife.org/about/taxonomy-version/ott3.5


When using QGis
we should make sure to use only LTS releases https://qgis.org/en/site/

Addition of 2 tabs "individual metadata" and "environmental metadata" (on top of the main "sample metadata")

- Define which field we want
- We should define which controlled vocabularies are used to fill the newly proposed fields


For e.g. [root](https://en.wikipedia.org/wiki/Root "In vascular plants, the roots are the organs of a plant that are modified to provide anchorage for the plant and take in water and nutrients into the plant body, which allows  plants to grow taller and faster. They are most often below the surface of the soil, but roots can also be aerial or aerating, that is, growing up above the ground or especially above water.") is could be fetched from the Plant Ontology https://www.ebi.ac.uk/ols4/ontologies/po/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FPO_0009005
PO:0025004

# Phenology
Flowering stage https://www.ebi.ac.uk/ols4/ontologies/po/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FPO_0007616?lang=en



Where are the other stages e.g fruiting 

IPEN and related individuals identifiers


Peek into [ENVO](https://www.ebi.ac.uk/ols4/ontologies/envo) and [ECOCORE](https://www.ebi.ac.uk/ols4/ontologies/ecocore)

E.g. humus https://www.ebi.ac.uk/ols4/ontologies/envo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FENVO_01000000?lang=en

E.g Rain https://www.ebi.ac.uk/ols4/ontologies/envo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FENVO_01001564


Herbivory https://www.ebi.ac.uk/ols4/ontologies/ecocore/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FECOCORE_00000020

https://www.ebi.ac.uk/ols4/ontologies/ecocore
https://www.ebi.ac.uk/ols4/ontologies/envo



For Edouard

Readlist 
- https://datascience.codata.org/articles/10.5334/dsj-2021-011
- https://www.pnas.org/doi/abs/10.1073/pnas.1423041112


And a constraint to the sample_name field so that the "unknown" value is automatically enforced when the "no_name_on_list" button is checked.


Dig a bit the Directus tuto's https://www.dbgi.org/dendron-dbgi/notes/dy871a7dv1wcjmkvrte9ex7/



Created a new test layer in the JBUF project on QGis
Also synced it with Qfield
Added and additonal field with a constrained vocabulary (helicity l/r)

### Point Maelle

Chek into Goat and the "simple" taxo coverage counter present at https://goat.genomehubs.org/projects/EBP

Error handling. 
For the SOPARQL and SQL interface be sure not to accidentaly DELETE all the present data


https://www.bioinformatics.unibe.ch/studies/general_information/index_eng.html

https://cloud.bioinformatics.unibe.ch/index.php/s/Mr7cKf37RicjZiN

Deadline rapport 31 Aout
Deadline correction 12 Sept. 


### Point Marco

https://github.com/anticipated-lotus/GNN

Concatenate molecules pathways to molecule fingerprints

- Design a script that can handle the generation of a global fingerprint and append it to the previously calculated LOTUS fp.

(SMILES -> full Classyfire taxo + Morgan FP) 
Be careful, the binary encoder should be done AFTER the gloabl fingerprinting stage.

- Establish the samne script for biological organism.

This should allow to evaluate the occurence of unknown molecule and species.

Validate on JNP hot of the press !



## Paused

## Done

## Notes

## Todo tomorrow

###
###
###


## Today I learned that

-