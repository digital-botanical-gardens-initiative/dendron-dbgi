
# Anticipated LOTUS

## Features 
One possible solution to having features per node types in our model would be to use the textual description of the species and molecules

### Species
In the case of species, we could think that the textual description of the species is just description of its taxonomy. $\rightarrow$ we could maybe use SciBERT for that. 
Here is an example:
* https://w.wiki/8paM


### Molecules
For the molecules however, this is more difficult. 
* one potential solution would be to use the information in the wikidata page and use it as text. 
  * Here is an example : https://w.wiki/8qrK
* One other solution would be to use ChemBERT to contextualize the SMILES however that means that we use a different model that for the molecules. 
* But then why couldn't we just use the molecular fingerprints ?

ChemBERT : https://huggingface.co/seyonec/ChemBERTa-zinc-base-v1

