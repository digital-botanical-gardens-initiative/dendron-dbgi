

# This is PMA's DBGI daily open-notebook.

Today is 2023.06.15

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

### Meeting on the EMI semantic model

Ana, Tarcisio and Luca

- Their is a graphical schema (based on Arnaud's scheme for ENPKG here)
https://app.diagrams.net/#G1g1nAgeIZEwBL63Adcwb1dDVOOO2rE2H1

https://github.com/digital-botanical-gardens-initiative/earth_metabolome_ontology


- Decided to establish the licence of the semantic model to CC0
- Add ORCID as contributors
- protégé https://protege.stanford.edu/ 
- Tarcisio reserved prefixes dbgi / emi at prefix.cc and purl.


Luca mentionned that we should think beforehand on the problems that could arise from having highly connected nodes (stars) such as a node ISDB linked to from all annotations with a has_ISDB_annotation edge. 


We need to think about a metamodel.
https://github.com/biolink


We need to think about constraints (e.g. IK should have and associated IK2D)


Ended up taking the rest of the notes at : ether pad 

https://mypads2.framapad.org/p/notes-june-2023-1o1hws9v1


https://microbiomedata.org/


-----------


#### Hard copy of the meetings notes



### Meeting on the EMI semantic model
Meeting notes 15.06.2023


- Their is a graphical schema (based on Arnaud's scheme for ENPKG here)
https://app.diagrams.net/#G1g1nAgeIZEwBL63Adcwb1dDVOOO2rE2H1

https://github.com/digital-botanical-gardens-initiative/earth_metabolome_ontology


Partecipants
- Tarcisio Mendes
- Ana-Claudia Sima
- Luca Cappelletti
- Pierre-Marie Allard


Comments: 
    - Define Meta-Model in addition to Semantic Model
    - Allows topological embedding of the classes, defining fully a distance between the classes that can be used in general ML tasks
    - allows explicitly defining Metadata classes (e.g. "Information Source") and properties
   -  allows Quality Control through e.g. disjointness / other constraints, e.g. whenever InChiKey is present in the data -> InChiKey2D should be present
- Can be concretely implemented as a suite of tests to run as part of GitHub repository associated to data / data quality continuous integration
- Topological checks may be integrated as part of the continuous integration - e.g. adding elements that become singletons should not be allowed for release versions
- Draw inspiration from BioLink Model? (https://github.com/biolink)
- BioLink can be an inspiration, but has also known problem and some aspects should not be imitated
 - Next meeting we can list specifically these aspects which we should take care of not reproducing.
- Add explicit, "verbose" descriptions to classes in addition to simple labels
- Allows to use the textual embedding as part of features for ML models
- how about retrieving these via cross-references whenever possible? e.g. the cross-refs to WikiData items

- Logo associated to project
- Possible logos may be created using tools such as MidJourney (examples provided on the Zulip platform)

For next meeting:

    - Microbiological data: https://microbiomedata.org/
    - Where will the data release be available from? Zenodo? Internet Archive? In what formats?
    - For now ENPKG related graphs are versionned at Zenodo (https://zenodo.org/communities/enpkg/?page=1&size=20) still grouped by batches (here 96 well plates). We will work on moving to 1 profile = 1 Zenodo repo. (Note that frictionless can do quality control on Zenodo archives, would work very well on case we have the graph in a tsv format)  
    - The GRAPE library can ingest TSV / CSV formats from urls, any server accessible with get requests will do
    - discuss Quality Control options - at what level should constraints be defined? 
    - OWL language? SHACL? Meta-model constraints + Github tests where adding bogus new elements should not be allowable
- ML model that indicates possible missing fields / incorrect new data you are trying to add based on the existing data already in the graphical


### Workshop by Luca on GNN

Justin Reese indicates these meetings each 2 weeks

https://www..com/feed/update/urn:li:activity:7074081027261874176/

Topic of negative sampling. A pretty complex topi

![](/assets/images/2023-06-15-17-11-34.png)

Embeddings : a representation of categorical elements in a vector space.

Allows to make operation like 

(King - Men) + Woman ~ Queen

![](/assets/images/2023-06-15-17-12-39.png)


![](/assets/images/2023-06-15-17-21-16.png)



http://kghub.org/

https://openreview.net/pdf?id=m1oqEOAozQU

https://diegogalpy.github.io/


graph convolution


https://en.wikipedia.org/wiki/Laplacian_matrix
https://en.wikipedia.org/wiki/Adjacency_matrix






## Paused

## Done

## Notes

## Todo tomorrow

###
###
###


## Today I learned that

-