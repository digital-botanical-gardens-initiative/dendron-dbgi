

# This is PMA's DBGI daily open-notebook.

Today is 2024.02.27

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing


- Meeting with Disha

25 traits downloaded from TryDB

- Write a SPARQL query to get all species from the ENPKG

Work on the ENPKG as a example dataset

PREFIX enpkg: <https://enpkg.commons-lab.org/kg/>

SELECT DISTINCT ?raw_material ?submitted_taxon ?wd_taxon_id WHERE { 
	?raw_material a enpkg:RawMaterial ;
               enpkg:submitted_taxon ?submitted_taxon ;
               enpkg:has_wd_id ?wd_taxon_id .
}


https://query.wikidata.org/


PREFIX enpkg: <https://enpkg.commons-lab.org/kg/>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>  


SELECT DISTINCT ?raw_material ?submitted_taxon ?wd_taxon_id ?family WHERE { 
	?raw_material a enpkg:RawMaterial ;
               enpkg:submitted_taxon ?submitted_taxon ;
               enpkg:has_wd_id ?wd_taxon_id .
        # Outer query to fetch species names from Wikidata
    # Fetching taxonomic information from Wikidata
    SERVICE <https://query.wikidata.org/sparql> {
        ?wd_taxon_id wdt:P225 ?species_name .
        OPTIONAL {
            ?family wdt:P31 wd:Q16521 ;
                    wdt:P105 wd:Q35409 ;
                    wdt:P225 ?family_name ;
                    ^wdt:P171* ?wd_taxon_id .
        }
} 
} LIMIT 10




PREFIX enpkg: <https://enpkg.commons-lab.org/kg/>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>  


SELECT DISTINCT ?submitted_taxon ?wd_taxon_id ?ncbi_id ?otl_id WHERE { 
	?raw_material a enpkg:RawMaterial ;
               enpkg:submitted_taxon ?submitted_taxon ;
               enpkg:has_wd_id ?wd_taxon_id .
    # Outer query to fetch external identifiers from Wikidata
    # Fetching taxonomic information from Wikidata
    SERVICE <https://query.wikidata.org/sparql> {
        OPTIONAL {
                ?wd_taxon_id wdt:P685 ?ncbi_id ;
                             wdt:P9157 ?otl_id .
        }
} 
}


We now try to fetch all plant parts in the ENPKG


#+ summary: External identifiers form ENPKG biosources
#+ description: List all RawMaterial treated in the ENPKG, fetch their wd_id and then run a federated query to look for external identifiers (in this case NCBI and OTL ids)
#+ endpoint: https://enpkg.commons-lab.org/graphdb/sparql
#+ tags:
#+   - ENPKG
#+   - Natural products
#+   - Taxonomy

PREFIX enpkg: <https://enpkg.commons-lab.org/kg/>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>  
PREFIX enpkgmodule: <https://enpkg.commons-lab.org/module/>


SELECT ?raw_material ?submitted_taxon ?wd_taxon_id ?organ ?broad_organ ?tissue ?subsystem WHERE { 
	?raw_material a enpkg:RawMaterial .
    OPTIONAL{
        ?raw_material    enpkg:submitted_taxon ?submitted_taxon . }
    OPTIONAL{
               enpkg:has_wd_id ?wd_taxon_id . }
    OPTIONAL{
               enpkgmodule:has_organe ?organ . }
    OPTIONAL{
               enpkgmodule:has_broad_organe ?broad_organ . }
    OPTIONAL{
               enpkgmodule:has_tissue ?tissue . }
    OPTIONAL{
               enpkgmodule:has_subsystem ?subsystem . 
}
}

Match the TRY6 data


"Translate" the ENPKG schema in plain words


## Paused

## Done


### Established panel for the botanical Gardens




Nous connaissons actuellement moins de 0,01% des molécules produites par les organismes vivants et l'exploration de la diversité chimique n'en est qu'à ses débuts. Cependant, les récents développements technologiques accélèrent la cartographie de la diversité chimique, notamment grâce aux progrès de la spectrométrie de masse, de la bioinformatique et de la métabolomique.

Dans ce contexte, le projet de recherche Earth Metabolome Initiative (www.earthmetabolome.org) initié par les Universités de Neuchâtel et de Fribourg, vise à cartographier de manière exhaustive la diversité des molécules contenues dans tous les organismes vivants de notre planète. Les Jardins botaniques de Neuchâtel et de Fribourg collaborent activement aux premières étapes de ce projet en mettant à disposition l'ensemble de leurs collections vivantes pour des analyses dans le cadre de la phase pilote du projet, ce qui constitue la Digital Botanical Gardens Initiative (www.dbgi.org).

Dans le cadre d'une démarche d'Open Science (science ouverte) et afin de contribuer au mieux aux domaines appliqués tel que la découverte de nouveaux médicaments, l'agroécologie ou la conservation de la biodiversité, l'ensemble des données collectées seront mises à disposition de tous, librement. 

Ces données représentent une ressource inestimable et d’accès facilité non seulement pour la recherche académique publique, mais aussi pour certaines industries ouvrant ainsi la porte à de possibles nouveaux brevets. Afin d’éviter certaines des dérives observées par le passé, la traçabilité de l’origine géographique de chacune de ces nouvelles molécules sera systématiquement établie et publiée. Ceci devrait permettre de renforcer la mise en application du protocole de Nagoya. Cependant, il est difficile d’anticiper si une telle démarche sera suffisante pour assurer une protection solide des droits liés aux connaissances traditionnelles et assurer une juste répartition des bénéfices associés à la commercialisation de ressources naturelles. Un des volets de ce projet consiste donc en une étude juridique afin d'évaluer les avantages et les risques d’une telle approche.

La question qui vous est posée aujourd'hui : 

“Pensez que le partage libre et ouvert de données relatives à la chimie du vivant sera bénéfique ou non pour la biodiversité et la société humaine dans son ensemble ?”




## Notes

## Todo tomorrow, one day ... or never

###
###
###


## Today I learned that

-