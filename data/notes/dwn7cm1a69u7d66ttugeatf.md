
### anticipated lotus
I am currently trying to be able to have all species of Wikidata available for predictions. 

I neeed to use this endpoint to get my data quickly: https://qlever.cs.uni-freiburg.de/wikidata

The idea would be to have a dataframe with for each species, its taxonomy in the same way as in LOTUS. To do so, 

1. tu as ?taxon ?parent, à partir de là tu peux reconstuire toute la taxo (en dehors de sparql, comme t'as dû prendre dans lotus-search?) 
   ```python
    import csv
    import logging
    from collections import defaultdict, deque
    from pathlib import Path
    from tqdm import tqdm
    
    logging.basicConfig(
        level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
    )
    def convert_to_int_safe(s: str) -> int | None:
        try:
            result = int(s)
            return result
        except ValueError:
            logging.error(f"{s} is not a valid integer.")
            return None
    
    
    def generate_taxon_parents_with_distance(path: Path) -> list[tuple[int, int, int]]:
        graph = defaultdict(list)
        distances = []
        with open(path / "full_wikidata_taxonomy_edges.csv", "r") as f:
            reader = csv.reader(f)
            headers = next(reader)
            taxon_index = headers.index("child")
            parent_index = headers.index("parent")
    
            for row in reader:
                taxon_id = row[taxon_index]
                parent_id = row[parent_index]
    
                if taxon_id is None or parent_id is None:
                    continue
                graph[taxon_id].append(parent_id)
        # Good ol' BFS
        for node in tqdm(list(graph.keys())):
            visited = {node: 0}
            queue = deque([node])
            while queue:
                current_node = queue.popleft()
                current_distance = visited[current_node]
    
                for neighbor in graph[current_node]:
                    if neighbor not in visited:
                        queue.append(neighbor)
                        visited[neighbor] = current_distance + 1
                        distances.append((node, neighbor, current_distance + 1))
    
        return distances
    ```
    This is super fast and results in a 9'000'000 rows dataframe. We can then think of getting the child as index, the `taxon_rank` of each parent from this query: 
    
    ```sparql
    PREFIX wdt: <http://www.wikidata.org/prop/direct/>

    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX wd: <http://www.wikidata.org/entity/>
    SELECT ?rank ?rank_label{
        ?rank wdt:P31 wd:Q427626;
            rdfs:label ?rank_label.
    FILTER (LANG(?rank_label) = "en")
    }
    ```
2. tu as ?taxon ?rank que tu peux join sur ?taxon
3. tu as ?rank ?rank_label que tu peux join sur le résultat d'avant sur ?rank