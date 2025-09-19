
# This is Ana's DBGI daily open-notebook.

Today is 2024.01.30

## Todo 

Update BioQuery with new queries from the ENPKG paper.

Create URLs for the queries directly - so that others can click on a link and see the corresponding query in the interface directly.

###
###

## Doing

## Paused

Updating the BioSODA deployment at https://biosoda.unil.ch/dbgi-biosoda/ . Indexing is not yet implemented.

## Done

Pushed updated DBGI Bioquery code at https://github.com/biosoda/bioquery/tree/dbgi_wip . The current json file used can be seen at https://github.com/biosoda/bioquery/blob/dbgi_wip/biosoda_frontend/src/dbgidata.json . The deployment of the app as seen at https://biosoda.expasy.org/bioquery-dbgi/ is based on github.io, build files are uploaded here: https://github.com/biosoda/bioquery-dbgi.

## Notes

Meeting with PMA and TMF. Discussed project progress and advantages of virtual KGs using Ontop https://github.com/ontop/ontop.

Just realised that a key advantage is also the ease of *sharing mappings*, together with the semantic model, to e.g. a new research group that has an own relational database (or even CSV file) to model their data as a virtual KG and become interoperable with the rest of the world. Another (known) advantage is that changes in the structure of the relational database can be easily reflected in the KG, by simply changing the mapping, i.e. no actual code changes needed. The same is true for changes in the semantic model.

How do you get a KG to be integrated in KGHub? You need to be compatible with the BioLink model. But: BioLink as-is cannot accomodate schema of EMI model. Should we propose new classes to BioLink models? This might take too long considering the time of the project.


## Todo tomorrow

###
###
###


## Today I learned that

- 