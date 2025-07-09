

# This is PMA's DBGI daily open-notebook.

Today is 2024.12.17

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing


Working on the directus > EMI portal migration.

We are looking for the iNat taxonomy

https://forum.inaturalist.org/t/taxonomy-download-with-synonyms/38699


aspidoscelis
janv. 2023

Platform(s): Website, iNaturalist Taxonomy DarwinCore Archive.

URLs: https://www.inaturalist.org/taxa/inaturalist-taxonomy.dwca.zip

Description of need: At present, the DWCA taxonomy download is a taxon list without synonymies. In order to work with iNaturalist data, and in particular to deal with both iNaturalist data and other data using other taxonomies, the full iNaturalist taxonomy including synonymies would be much more useful. At present it’s difficult to get that information by other means—see recent discussion here.

Feature request details: Changing the DWCA taxonomy download—or providing an additional download and leaving that one unchanged, I suppose—that corresponds to an “active=any” rather than “active=true” query and includes the “synonym_id” field would resolve the issue.


You can use the get taxa endpoint.

For example, all Sciurus species:

https://api.inaturalist.org/v1/docs/#!/Taxa/get_taxa


## Paused

## Done

## Notes

## Todo tomorrow, one day ... or never

###
###
###


## Today I learned that

-

id,taxonID,identifier,parentNameUsageID,kingdom,phylum,class,order,family,genus,specificEpithet,infraspecificEpithet,modified,scientificName,taxonRank,references
1,https://www.inaturalist.org/taxa/1,https://www.inaturalist.org/taxa/1,https://www.inaturalist.org/taxa/48460,Animalia,,,,,,,,2021-11-02T06:05:44Z,Animalia,kingdom,http://www.catalogueoflife.org/annual-checklist/2013/browse/tree/id/13021388
2,https://www.inaturalist.org/taxa/2,https://www.inaturalist.org/taxa/2,https://www.inaturalist.org/taxa/1,Animalia,Chordata,,,,,,,2021-11-23T00:40:18Z,Chordata,phylum,http://www.catalogueoflife.org/annual-checklist/2013/browse/tree/id/13021451


id,parent_id,taxon_name
1,48460,Animalia
2,1,Chordata
