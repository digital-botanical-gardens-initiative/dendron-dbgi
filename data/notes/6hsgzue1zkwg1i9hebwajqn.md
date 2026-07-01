

# This is PMA's DBGI daily open-notebook.

Today is 2023.11.08

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing


### Meeting DBGI Wednesday 08 November 2023


## Luca's present EMIKG pipeline

Available at https://zenodo.org/records/10089363


- difference between modular code and monolithic code


> One of the steps we certainly need to work on is the alignment of all EMI-related projects.
> We need to define the set of APIs that need to be available in the EMI backend, to better focus our efforts and aim to have a well-defined product to deliver.
> 
> I have prepared a Google Docs document that we may use to jot down notes.
> Please add objects to the object section using the "Header 2", and methods to each object using "Header 3".
> Feel free to include https://draw.io/ schemas to clarify potentially difficult points.
> 
> Please proceed with edits using the 'suggestion' mode, to make clear the author of each contribution and be able to chat before integrating any edit.
> Find the link with edit access here: https://docs.google.com/document/d/1qe4RawQZSaklTiOTgPah0EtVJZap8GIOnL6bFAjufcU/edit?usp=sharing.
> 

- Jail shell : to protect the server from the users (they can be nasty ... you know ... users)

- Kubernetes : overkill in our case. We'll go for Docker swarms

### /TODO/

- Fill the API documentation which has for objective to describe what the EMI portal functions are. For now a google doc https://docs.google.com/document/d/1qe4RawQZSaklTiOTgPah0EtVJZap8GIOnL6bFAjufcU/edit?usp=sharing Will be moved to a git versioned files when it stabilizes.
- Establish a shared Draw.io for the overall schema of the EMI actions
- Order HPC config for the EMIKG backend (mirror of the current COMMONS lab HPC)
- Order GPU https://www.digitec.ch/de/s1/product/gainward-rtx-4090-phantom-gs-24-gb-grafikkarte-22671040



## Tarcisio's presentation of the EMIKG semantic model

Available at https://zenodo.org/records/10089497

Two services now available

https://dbgi.vital-it.ch/login
https://dbgi.vital-it.ch/bioquery

SOSA ontology see [[EMI.Semantic-model]]
https://github.com/digital-botanical-gardens-initiative/earth_metabolome_ontology


### /TODO/

- Have a script for conversion form SPARQL to JSON format suitable for Bio-Query
- Generate a Query survey form  to be added to Bio-Query
- Add link to the protege shared EMI semantic model


## Edouard's presentation of the collection process

Available at https://zenodo.org/records/10089416

- Collect Open Weather data
- List which additional data can be collected by observers in the field
- List which additional data can be collected by observers in the lab


# Henry's presentation of the sample tracking process

Available at https://zenodo.org/records/10091485

PID 
Sample tracking and OpenBis

https://openbis-dbgi.labnotebook.ch/openbis/webapp/eln-lims/


/TODO/
Get in touch with UNiFr library. https://www.unifr.ch/biblio/en/ Maybe HENKEL Thomas <thomas.henkel@unifr.ch> Datacite
Get in touch with IGSN people. https://www.igsn.org/
Get in touch with the DISSCO people. https://www.dissco.eu/


Understand what is the real added value of IGSN for the DBGI project. In which sense is it particularly designed to track Physical Objects ? (what the diff with a classical DOI)
Discussion : 
- use Zenodo ?
- use the kg.earthmetabolome.org/samples/dbgi_0000001 for ex ?  Not OK in case this website dies : interest of the DOI



Anne-Laure proposes to start a Nagoya protocol discussion group.














## Paused

## Done

## Notes

## Todo tomorrow, one day ... or never

###
###
###


## Today I learned that

-