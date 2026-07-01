# This is Marco's daily open-notebook.

Today is 2023.12.19


## Notes
Prep work for starting the job on January.

This query : https://w.wiki/8YzQ will recursively find all the parent taxon of a species all the way to the "Biota" group. This should then be useful to create the LOTUS graph to use in [grape](https://github.com/AnacletoLAB/grape/tree/main). 

I should then :
* get all the species that are linked to a referenced molecule using this query : https://w.wiki/8Z7Y
* for each species get their taxonomy thanks to this query : https://w.wiki/8YzQ
* create a list of all the nodes (species : 37082 ) and their taxonomy 
* create a list of all the edges of the tree
* once this is done create a tree of molecules (already done in an other repo) and link them together (try to do it with weighted edges between species and molecules)
* Then talk to Luca


Here is an example of how to retrieve the data : 

```python
import sys
from SPARQLWrapper import SPARQLWrapper, JSON

endpoint_url = "https://query.wikidata.org/sparql"

query = """SELECT ?entity ?entityLabel (count(?mid) as ?depth) WHERE {
  wd:Q27438471 wdt:P171* ?mid.
  ?entity wdt:P225 ?entityLabel.
  ?mid wdt:P171* ?entity.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }
} group by ?entity ?entityLabel
order by ?depth"""


def get_results(endpoint_url, query):
    user_agent = "WDQS-example Python/%s.%s" % (sys.version_info[0], sys.version_info[1])
    # TODO adjust user agent; see https://w.wiki/CX6
    sparql = SPARQLWrapper(endpoint_url, agent=user_agent)
    sparql.setQuery(query)
    sparql.setReturnFormat(JSON)
    return sparql.query().convert()


results = get_results(endpoint_url, query)
pd.json_normalize(results['results']['bindings'])
```



## Todo today
packages used : python 3.11.*, pip, grape

Here are the NaN values of the species in LOTUS. It seems to confirm what I saw during the Master thesis where GBIF seems to have the most species known. The total is 37082 species. 
* NaN is NCBI : 8133
* NaN is GBIF : 736
* NaN is OTL : 8073


## Done
* 


## Todo tomorrow
