# This is Disha's DBGI daily open-notebook.

## Doing 


## Done 
So far, in the last 2.5 months, I did the following:

1. Successfully managed to run VSCode without crashing my humble laptop.

2. Figured out the ontologies used by TRY-db: Planteome, PO, PTO, etc. Downloaded the ttl files.

3. In the last 15 days, I created a git repository based in R (integrate_trydb), which
a) can map taxonomic ids (NCBI, OTOL, GBIF, WD) for the TRY-6-species data (1st sql db-1),
b) subsequently map db-1 to the TRY-traits database (2nd sql db-2). For now, only 25 traits are considered. Once I figure out how to deal with size of these dbs without crashing or out of memory errors on my laptop, I will incorporate the rest of TRY-traits db. 
c) uses duckdb on-disk approach to deal with the size of the db-2 (7.4 gb), which is too big for my humble laptop (8gb RAM).

4. In the last week, I contacted Science-et-cite (https://www.science-et-cite.ch/fr/) for a potential collaboration for a science communication initiative incorporating DBGI/EMI's efforts. They are going to discuss about the potential collab this week and hopefully reply to me by Friday evening!

5. This week, I contacted authors of DISPEL (https://academic.oup.com/database/article/doi/10.1093/database/baad073/7319974) and tried to convice them to share their data. They are interested in sharing only data related to medicinal plants of Switzerland for now. I will keep convincing them and see if at all, we can collaborate successfully. The interface of DISPEL is nice, but in my opinion, the data itself does not follow FAIR guidelines (not accessible and reusable for now). 

## Notes

## Todo tomorrow or soon

6. Transfer the integrate_trydb from my github account to DBGI's.
7. Try to build ONTOP virtual knowledge graph (VKG) with db-1 and db-2. Will be useful for my future projects as well. Plan is to create mappings for db-1 and db-2 and forget about ontology for now, to create a simple VKG. Incorporate ontology ttl files (already downloaded from TopThesaurus) at a later time point.

## Today I learned that

8. I learned to build a VKG on Ontop using the tutorial on their website.

## Paused

9. Profile article for the DBGI website. 
- 