

# This is PMA's DBGI daily open-notebook.

Today is 2024.02.12

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

https://obo-communitygroup.slack.com/archives/C01P3D02U1H/p1707299939220829


Pierre-Marie Allard
  5 days ago
Hello RO people ! Disclaimer: I am very new to RO and the ontology world in general please excuse me in case I say any absurdities.
I would like to find the appropriate RO property to express the fact that a given molecule has been found in a given taxon. In LOTUS (an electronic ressource documenting occurence of small molecules across the tree of life) we have used the Wikidata P703 "found_in_taxon" property. E.g. erythromycin is found in taxon Aeromicrobium erythreum. Now I somehow found that the https://biolink.github.io/biolink-model/in_taxon/ LinkML model states that this in_taxon is exactly mapped to RO:0002162 and P703.  Before using RO:0002162 I would like to make sure that there is no better suited property.
One thing that made doubt is the fact that the description states : "Connects a biological entity to its taxon of origin." and that I am here trying to link a chemical entity to its taxon of origin.
The other doubt I had was that "Connects a biological entity to its taxon of origin." could also be interpreted as organism X (for example this specimen defined by an iNaturalist observation) is connected to its taxon of origin in this case Arabidopsis thaliana (55021 or Q158695)
(edited)

eLifeeLife
The LOTUS initiative for open knowledge management in natural products research
The LOTUS initiative builds, through the Wikidata knowledge graph, a virtuous cycle of data sharing practices for natural products research.

wikidata.orgwikidata.org
found in taxon
the taxon in which the item can be found

wikidata.orgwikidata.org
erythromycin
chemical compound

wikidata.orgwikidata.org
Aeromicrobium erythreum
species of bacterium
11 replies


Ray Stefancsik
  5 days ago
Have you considered using RO:0002175 present in taxon alone or in combination with other properties?
ebi.ac.ukebi.ac.uk
Ontology Lookup Service (OLS)
OLS is a repository for biomedical ontologies that aims to provide a single point of access to the latest ontology versions
:+1:
1



Pierre-Marie Allard
  5 days ago
No. Until now I haven't. It looks adapted indeed. I like the fact that they are sister properties such as ambiguous_for_taxon, dubious_for_taxon and never_in_taxon. I think we could use the two first one in some cases when documenting the presence of contaminants in a metabolite annotation process for example. This brings me to another question:  Would that be OK to use present_in_taxon for a molecule not biosynthesized by the organism. Could I say acetamiprid (an insecticide) is  present_in_taxon bee (Apis mellifera) ?

ebi.ac.ukebi.ac.uk
Ontology Lookup Service (OLS)
OLS is a repository for biomedical ontologies that aims to provide a single point of access to the latest ontology versions

ebi.ac.ukebi.ac.uk
Ontology Lookup Service (OLS)
OLS is a repository for biomedical ontologies that aims to provide a single point of access to the latest ontology versions

ebi.ac.ukebi.ac.uk
Ontology Lookup Service (OLS)
OLS is a repository for biomedical ontologies that aims to provide a single point of access to the latest ontology versions

ebi.ac.ukebi.ac.uk
Ontology Lookup Service (OLS)
OLS is a repository for biomedical ontologies that aims to provide a single point of access to the latest ontology versions

wikidata.orgwikidata.org
(E)-acetamiprid
chemical compound


Damion Dooley
  4 days ago
You would be doing that at the instance level?  A pesticide is not present in all bees.  Maybe in some bees belonging to a particular hive or area?  So not an “in taxon” relation but rather “part of” some organism or “part of” some organism which is member of some collection.  One can say an organism sample or part is “in taxon” some NCBITaxon entity.  A class-level assertion that would work?: “flight muscle mitochondria present in taxon some Apis mellifera” (edited) 


Ray Stefancsik
  4 days ago
@Pierre-Marie Allard
, Do you consider the chemical part of some instances of the taxon or want to express that the chemical is located within some instances of the taxon?
It is a valid philosophical question.
erythromycin part of some Aeromicrobium erythreum
erythromycin located in some Aeromicrobium erythreum
I think you could also use RO:0002175 present in taxon in place of located in, but I may be wrong.
ebi.ac.ukebi.ac.uk
Ontology Lookup Service (OLS)
OLS is a repository for biomedical ontologies that aims to provide a single point of access to the latest ontology versions
ebi.ac.ukebi.ac.uk
Ontology Lookup Service (OLS)
OLS is a repository for biomedical ontologies that aims to provide a single point of access to the latest ontology versions


Damion Dooley
  4 days ago
Ah, right, the question of whether “present in taxon” was intended to cover identity characteristics of a taxon - things that allow us to recognize/classify an entity as belonging to that class (e.g. at stage of life as property’s example shows) - or more loosely allow us to also make claims about an instance of an organism or its part that don’t involve identity, e.g. pacemaker ‘present in taxon’ ‘john doe #2’. It seems that the parent object property “taxonomic class assertion” definition “An assertion that holds between an ontology class and an organism taxon class, which is intepreted to yield some relationship between instances of the ontology class and the taxon.” dissuades us from using it for describing contaminants and “foreign objects”?
I’m interested too in an answer to this modelling question, esp. for contaminants in food.  RO says “located in” is to be used as an instance level relation.  I recall “part of” has been used a lot too at instance level (rather than just to establish class relations). Hmm! (edited) 


Chris Mungall
  4 days ago
There are various interpretations of molecule class->taxon class:
biosynthesized by pathways encoded by genes in the organism
by product or intermediate of a native pathway of the organism (or further metabolized)
produced by a microbe that is part of the “natural microbiome” [whatever that is] of that organism
is in the metabolome of some tissue sample taken from that organism (guessing this is what LOTUS is?)
Otherwise detected (including Ray’s pesticide case)


Damion Dooley
  3 days ago
@Chris Mungall
 how would you/RO handle the mereology of contaminants? Doesn’t seem like there’s a ‘has part’ variant reserved for imbedded foreign objects or contaminants that are not contributing to taxa definition at a class level. (edited) 


Chris Mungall
  3 days ago
can you say more?


Damion Dooley
  3 days ago
We can have an instance of say neonicotinoid ‘part of’ an instance of ‘Bombus terrestris’ rather than use ‘present in taxon’ which due to its parent term is supposed to be used at class level.  Yet, ‘part of’ doesn’t discern material that is normally part of the bee; wouldn’t it be informative to say something like ‘exogenous part of’; a relation that works for tooth fillings too etc. (There are ‘has host’ relations, but that’s not quite general enough).


Chris Mungall
  3 days ago
What’s the actual owl axiom?


Damion Dooley
  5 hours ago
@Chris Mungall
 I realize, related to your case 5, that to model a contaminant (rather than biosynthesized molecule) wrt an organism or material, we either need a kind of “X has part Y” relation that indicates the range is a contaminant relative to the domain entity; alternately I guess a “contaminant role” could be assigned between the part and the material, if that’s what you are getting at re. owl axiom. (Like Alotrope’s impurity role).



Answering at

Many thanks for all the very interesting comments !

I see two different issues here (that maybe could be discussed in their own threads ?)

*Problem 1.* _Are we linking a molecule to a taxon or to an organism ?_ The way we have done this for now (at least in the frame of LOTUS) is that we linked the molecule to the lowest taxonomical level (the most precise) of the organism in which it has been found. For example [trigocherrin A](https://www.wikidata.org/wiki/Q105674316) [found in taxon](https://www.wikidata.org/wiki/Property:P703) [Trigonostemon cherrieri](https://www.wikidata.org/wiki/Q3006048) [stated in](https://www.wikidata.org/wiki/Property:P248) ["Trigocherrin A, the first natural chlorinated daphnane diterpene orthoester from Trigonostemon cherrieri"](https://www.wikidata.org/wiki/Q83059010) (available at https://sci-hub.se/10.1021/ol2030907). In the original paper there is no information regarding the specific specimen of Trigonostemon cherrieri which was extracted, no geographical coordinate for example.

Thus describing the link to the taxon and not the organism itself is the best we can do (with this type of information source in our hands). So my question is why should we precise **some** as proposed by @Ray ? erythromycin found in taxon **some** Aeromicrobium erythreum (here i replaced the part_of by found_in_taxon so as not to mix the two topics). If the statement is true for a specific organism (e.g. a precise strain of Aeromicrobium erythreum cultivated under given conditions) this still holds true for the taxon Aeromicrobium erythreum and higher taxa ranks (e.g. genus Aeromicrobium). Right ? We are not using [always_present_in_taxon](http://purl.obolibrary.org/obo/RO_0002504) so why should we precise *some* ?

This topic is very interesting for us because in a much greater fashion than genomics, metabolomics reflects the phenotype and is greatly influenced by environmental conditions. So if we take [trigocherrin A](https://www.wikidata.org/wiki/Q105674316) [found in taxon](https://www.wikidata.org/wiki/Property:P703) [Trigonostemon cherrieri](https://www.wikidata.org/wiki/Q3006048) this might be true for this specific tree grown in this part of the island at this period of the year, but will not hold true when the tree is older at another time of the year and in other environmental conditions.
For this researchers should better document the organism they are profiling / extracting (exploiting [taxonomic treatments](https://en.wikipedia.org/wiki/Taxonomic_treatment) and possibly ids such as an iNaturalist observation id or other georeferenced specimen e.g. https://www.gbif.org/occurrence/438823777). But this is another topic ...


*Problem 2.* _What is the nature of the molecule we are linking ?_ Chris proposed 

1. biosynthesized by pathways encoded by genes in the organism
2. by product or intermediate of a native pathway of the organism (or further metabolized)
3. produced by a microbe that is part of the “natural microbiome” [whatever that is] of that organism
4. is in the metabolome of some tissue sample taken from that organism (guessing this is what LOTUS is?)
5. Otherwise detected (including Ray’s pesticide case)

But we could also very well have :

6. exogeneous compound modified by the host

or why not

7. exogeneous compound metabolized by a consortium of species from the host microbiota (see https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5534341/)


Since it is virtually impossible to establish the source of the thousand of molecules characterized during an untargeted metabolomics experiments it would be interesting to find a way to express the following generic statement "this molecule has been detected in an organism identified as belonging to this taxon". We are not saying that they are no other taxon involved in the production of this molecule, nor that it could be a xenobiotic for example, we just can't precise it for the moment.

So if i understand, the [present_in_taxon](http://purl.obolibrary.org/obo/RO_0002175) initially proposed by Ray would not be OK or would it ? To me it looked very similar to [found in taxon](https://www.wikidata.org/wiki/Property:P703) and quite generic but I must admit I am starting to get lost.

By the way my question initially came from the fact that I am trying to propose a nanopublication template documenting such links across molecules and organisms. See [example](https://nanodash.knowledgepixels.com/explore?id=https%3A%2F%2Fw3id.org%2Fnp%2FRATGmPlZuuhgKAcqSICT4Qg_J9z5N9rVQbdGt4hJ7yMJM) for now using  [in taxon](http://purl.obolibrary.org/obo/RO_0002162)

Happy to elaborate if I have not been clear on some points!



#### What part of the plant should mix

At the moment we take an aliquot (50 mg) and mix only this.
Colin suggested that we could mix the whould sample and THEN aliquot It

- this means a better representation of the chemistry of the sample
- however it also leads to more cross sample contaminations (trhough the powder)
- less storage lifetime ?


#### EMI portal table

Bluetooth
https://caniuse.com/web-bluetooth

We should be able to have an app working offline as long as we are logged in.

Edouard mentions the interst of using local maps

me says:
https://www.swisstopo.admin.ch/fr/orthophotos-swissimage-10-cm
 
me says:
https://www.swisstopo.admin.ch/fr/orthophotos-swissimage-10-cm#SWISSIMAGE-10-cm---Acc%C3%A8s-aux-g%C3%A9odonn%C3%A9es
 

https://map.geo.admin.ch/?lang=en&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,ch.astra.wanderland-sperrungen_umleitungen&layers_opacity=1,1,1,0.8,0.8&layers_visibility=false,false,false,false,false&layers_timestamp=18641231,,,,


me says:
https://github.com/opengisch/QField
 
me says:
https://georust.org/
 
me says:
https://pka.github.io/rust-for-geo/#/title-slide
 

 

## Paused

## Done

## Notes

## Todo tomorrow, one day ... or never

###
###
###


## Today I learned that

-