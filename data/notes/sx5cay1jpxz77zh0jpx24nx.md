

# This is Luca Cappelletti's DBGI daily open-notebook.

Today is 2023.08.16

## Doing
Working on fourth module of DBGI pipeline.

### Output of the fourth module

#### Compound identification
A TSV document called `compound_identification.tsv`. 

The column called molecular formula contains the best hit for the molecular structure of the particular sample obtained from Sirius. The Sirius system uses a large database from PubChem, so we could find contaminants compounds such as pesticides. 

NOTE: we can lookup the information about the molecule using the inchkey on PubChem, and by using the available infodump we can mine several additional information about the molecule. Analogously, we can ingest CHEBI for the same goals.

#### Zip files
The several ZIP files produces by the fourth module are produced by Sirius, they are annotations for each of the samples and feature within each sample. These ZIP documents can generally be ignored for the purpose of the DBGI pipeline.

#### Canopus compound summary
A TSV document called `canopus_compound_summary.tsv`.

Canopus is less rigid, and can identify compounds that are not present in the PubChem database. The columns referring to canopus are called NPC#pathway, NPC#pathwat probability, NPC@#superclass, NPC#superclass probability, NPC#class and NPC#class probability.

### Working on Fifth module, meta analysis
The fifth module of the pipeline retrieves the WikiData IDs associated


### Note on possibility of siamese network or similarity tree
We can reasonably create a siamese network to compute an embedding that captures all the cosine similarities of the specters computed in the MGFs. Also, we can reasonably directly build a similarity tree.