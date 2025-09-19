# This is Marco's daily open-notebook.

Today is 2024.01.03


## Notes
package to use (maybe) : `pip install obonet`
use Networkx (should be already installed in with [grape library](https://github.com/AnacletoLAB/grape) )

### Thoughts
I think there should be 2 node types : 
* "biolink:OrganismTaxon" because species or phylogenies are all part of a taxonomy
* "biolink:ChemicalEntity" because molecules and molecule classes are all biological entites

There should also be 2 edge types:
* "biolink:subclass_of" because in the end each subnode is part of another node
* "found in" (still need to find the correct one) for linking molecules with species

**Also** the graph should be directed I think (same thoughts as in [here](#todo-today) )



## Todo today
- [x] get all species from LOTUS (locally), run on the cluster to get the phylogeny. 
- [x] create species phylogeny
- [x] link species to molecules
- [x] create Classyfire phylogeny
- [x] link molecules to Classyfire $\rightarrow$ problem : I downloaded only the inchikey and not the Inchi so I can't run Classyfire. Needs a fix.

After that the data should be ready for [grape](https://github.com/AnacletoLAB/grape/tree/main)



## Doing
To get full LOTUS https://w.wiki/8jtH

## Done
* 


## Todo tomorrow
