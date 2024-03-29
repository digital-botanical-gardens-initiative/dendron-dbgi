---
id: kmkcd9dh6zbazzexqb95cha
title: '2023-05-08'
desc: ''
updated: 1691500641638
created: 1683524942967
traitIds:
  - open-notebook-dbgi-pmallard
---


# This is PMA's DBGI daily open-notebook.

Today is 2023.05.08

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

### Call with Luca

Luca Cappelletti https://github.com/LucaCappelletti94


Sirius 

positive is simple digits
negative mode is prefix by a -


Classical mgf 
should be 1+ or 1-


Toy dataset should also include negative mode files.



Consider poking Ming regarding the possibility to interact (upload) directly to MassiVE

Data dumps of iNat ?







### Intro on EMI/DBGI



### Q
-NPKG animation 

What are the requirements to make a graph downladable by grape ?
e.g. 
from grape.datasets.zenodo import NPKG

Is this KG-Hub related ?

A: https://github.com/AnacletoLAB/grape/blob/main/tutorials/Ensmallen_Automatic_graph_retrieval_utilities.ipynb



Why is it important to detect isomorphic node groups ? 
What is a connected holdout ?

> ## Compute the embedding
> Next, we compute the embedding using the First-order LINE method. Do note that this implementation is a data-race aware one that uses SGD as optimizer, and nothing fancy like ADAM or NADAM: this means that the memory footprint is only limited to the embedding size.

Can you simply define the "embedding" notion ?

https://github.com/AnacletoLAB/grape/blob/main/tutorials/Using%20degree-normalization%20in%20random-walk-based%20embedding%20models.ipynb


What is Node Embedding?
Node embedding is a technique used in machine learning to represent nodes in a graph as feature vectors in a low-dimensional space. Node embeddings capture the structural information of the graph by preserving the similarity between nodes based on their connectivity patterns. These embeddings can be used as input features to various downstream machine learning tasks such as node classification, link prediction, or clustering.




Convert .ttl to any tab separated files 



Def diameter of a graph
> longest of the shortest paths.

Centrality metrics
- get number of square
- get number triangle

> get the clustering coeeficient 
evaluates the density of the graph 

graph sketches ~ hash 
very fast topological representation


FirstOrderLINEEnsmallen >> SPINE


Historical tracking of the evolution of a graph
Tomoso Fontana 
webgraph (to be integrated in grape)
datastructure > succint representation of a graph
edges > sub-byte space massive compression to the graph 
can always be converted back to the original structures

Software Heritage foundation 
28B N 400B E



Help on built-in function from_csv:

from_csv(directed, node_type_path, node_type_list_separator, node_types_column_number, node_types_column, node_types_ids_column_number, node_types_ids_column, node_types_number, numeric_node_type_ids, minimum_node_type_id, node_type_list_header, node_type_list_support_balanced_quotes, node_type_list_rows_to_skip, node_type_list_is_correct, node_type_list_max_rows_number, node_type_list_comment_symbol, load_node_type_list_in_parallel, node_path, node_list_separator, node_list_header, node_list_support_balanced_quotes, node_list_rows_to_skip, node_list_is_correct, node_list_max_rows_number, node_list_comment_symbol, default_node_type, nodes_column_number, nodes_column, node_types_separator, node_list_node_types_column_number, node_list_node_types_column, node_ids_column, node_ids_column_number, nodes_number, minimum_node_id, numeric_node_ids, node_list_numeric_node_type_ids, skip_node_types_if_unavailable, load_node_list_in_parallel, edge_type_path, edge_types_column_number, edge_types_column, edge_types_ids_column_number, edge_types_ids_column, edge_types_number, numeric_edge_type_ids, minimum_edge_type_id, edge_type_list_separator, edge_type_list_header, edge_type_list_support_balanced_quotes, edge_type_list_rows_to_skip, edge_type_list_is_correct, edge_type_list_max_rows_number, edge_type_list_comment_symbol, load_edge_type_list_in_parallel, edge_path, edge_list_separator, edge_list_header, edge_list_support_balanced_quotes, edge_list_rows_to_skip, sources_column_number, sources_column, destinations_column_number, destinations_column, edge_list_edge_types_column_number, edge_list_edge_types_column, default_edge_type, weights_column_number, weights_column, default_weight, edge_ids_column, edge_ids_column_number, edge_list_numeric_edge_type_ids, edge_list_numeric_node_ids, skip_weights_if_unavailable, skip_edge_types_if_unavailable, edge_list_is_complete, edge_list_may_contain_duplicates, edge_list_is_sorted, edge_list_is_correct, edge_list_max_rows_number, edge_list_comment_symbol, edges_number, load_edge_list_in_parallel, remove_chevrons, remove_spaces, verbose, may_have_singletons, may_have_singleton_with_selfloops, name)
    Return graph renderized from given CSVs or TSVs-like files.
    
    Parameters
    ----------
    node_type_path: Optional[str]
        The path to the file with the unique node type names.
    node_type_list_separator: Optional[str]
        The separator to use for the node types file. Note that if this is not provided, one will be automatically detected among the following`: comma, semi-column, tab and space.
    node_types_column_number: Optional[int]
        The number of the column of the node types file from where to load the node types.
    node_types_column: Optional[str]
        The name of the column of the node types file from where to load the node types.
    node_types_number: Optional[int]
        The number of the unique node types. This will be used in order to allocate the correct size for the data structure.
    numeric_node_type_ids: Optional[bool]
        Whether the node type names should be loaded as numeric values, i.e. casted from string to a numeric representation.
    minimum_node_type_id: Optional[int]
        The minimum node type ID to be used when using numeric node type IDs.
    node_type_list_header: Optional[bool]
        Whether the node type file has an header.
    node_type_list_support_balanced_quotes: Optional[bool]
        Whether to support balanced quotes.
    node_type_list_rows_to_skip: Optional[int]
        The number of lines to skip in the node types file`: the header is already skipped if it has been specified that the file has an header.
    node_type_list_is_correct: Optional[bool]
        Whether the node types file can be assumed to be correct, i.e. does not have something wrong in it. If this parameter is passed as true on a malformed file, the constructor will crash.
    node_type_list_max_rows_number: Optional[int]
        The maximum number of lines to be loaded from the node types file.
    node_type_list_comment_symbol: Optional[str]
        The comment symbol to skip lines in the node types file. Lines starting with this symbol will be skipped.
    load_node_type_list_in_parallel: Optional[bool]
        Whether to load the node type list in parallel. Note that when loading in parallel, the internal order of the node type IDs may result changed across different iterations. We are working to get this to be stable.
    node_path: Optional[str]
        The path to the file with the unique node names.
    node_list_separator: Optional[str]
        The separator to use for the nodes file. Note that if this is not provided, one will be automatically detected among the following`: comma, semi-column, tab and space.
    node_list_header: Optional[bool]
        Whether the nodes file has an header.
    node_list_support_balanced_quotes: Optional[bool]
        Whether to support balanced quotes.
    node_list_rows_to_skip: Optional[int]
        Number of rows to skip in the node list file.
    node_list_is_correct: Optional[bool]
        Whether the nodes file can be assumed to be correct, i.e. does not have something wrong in it. If this parameter is passed as true on a malformed file, the constructor will crash.
    node_list_max_rows_number: Optional[int]
        The maximum number of lines to be loaded from the nodes file.
    node_list_comment_symbol: Optional[str]
        The comment symbol to skip lines in the nodes file. Lines starting with this symbol will be skipped.
    default_node_type: Optional[str]
        The node type to be used when the node type for a given node in the node file is None.
    nodes_column_number: Optional[int]
        The number of the column of the node file from where to load the node names.
    nodes_column: Optional[str]
        The name of the column of the node file from where to load the node names.
    node_types_separator: Optional[str]
        The node types separator.
    node_list_node_types_column_number: Optional[int]
        The number of the column of the node file from where to load the node types.
    node_list_node_types_column: Optional[str]
        The name of the column of the node file from where to load the node types.
    node_ids_column: Optional[str]
        The name of the column of the node file from where to load the node IDs.
    node_ids_column_number: Optional[int]
        The number of the column of the node file from where to load the node IDs
    nodes_number: Optional[int]
        The expected number of nodes. Note that this must be the EXACT number of nodes in the graph.
    minimum_node_id: Optional[int]
        The minimum node ID to be used, when loading the node IDs as numerical.
    numeric_node_ids: Optional[bool]
        Whether to load the numeric node IDs as numeric.
    node_list_numeric_node_type_ids: Optional[bool]
        Whether to load the node types IDs in the node file to be numeric.
    skip_node_types_if_unavailable: Optional[bool]
        Whether to skip the node types without raising an error if these are unavailable.
    load_node_list_in_parallel: Optional[bool]
        Whether to load the node list in parallel. When loading in parallel, without node IDs, the nodes may not be loaded in a deterministic order.
    edge_type_path: Optional[str]
        The path to the file with the unique edge type names.
    edge_types_column_number: Optional[int]
        The number of the column of the edge types file from where to load the edge types.
    edge_types_column: Optional[str]
        The name of the column of the edge types file from where to load the edge types.
    edge_types_number: Optional[int]
        The number of the unique edge types. This will be used in order to allocate the correct size for the data structure.
    numeric_edge_type_ids: Optional[bool]
        Whether the edge type names should be loaded as numeric values, i.e. casted from string to a numeric representation.
    minimum_edge_type_id: Optional[int]
        The minimum edge type ID to be used when using numeric edge type IDs.
    edge_type_list_separator: Optional[str]
        The separator to use for the edge type list. Note that, if None is provided, one will be attempted to be detected automatically between ';', ',', tab or space.
    edge_type_list_header: Optional[bool]
        Whether the edge type file has an header.
    edge_type_list_support_balanced_quotes: Optional[bool]
        Whether to support balanced quotes while reading the edge type list.
    edge_type_list_rows_to_skip: Optional[int]
        Number of rows to skip in the edge type list file.
    edge_type_list_is_correct: Optional[bool]
        Whether the edge types file can be assumed to be correct, i.e. does not have something wrong in it. If this parameter is passed as true on a malformed file, the constructor will crash.
    edge_type_list_max_rows_number: Optional[int]
        The maximum number of lines to be loaded from the edge types file.
    edge_type_list_comment_symbol: Optional[str]
        The comment symbol to skip lines in the edge types file. Lines starting with this symbol will be skipped.
    load_edge_type_list_in_parallel: Optional[bool]
        Whether to load the edge type list in parallel. When loading in parallel, without edge type IDs, the edge types may not be loaded in a deterministic order.
    edge_path: Optional[str]
        The path to the file with the edge list.
    edge_list_separator: Optional[str]
        The separator to use for the edge list. Note that, if None is provided, one will be attempted to be detected automatically between ';', ',', tab or space.
    edge_list_header: Optional[bool]
        Whether the edges file has an header.
    edge_list_support_balanced_quotes: Optional[bool]
        Whether to support balanced quotes while reading the edge list.
    edge_list_rows_to_skip: Optional[int]
        Number of rows to skip in the edge list file.
    sources_column_number: Optional[int]
        The number of the column of the edges file from where to load the source nodes.
    sources_column: Optional[str]
        The name of the column of the edges file from where to load the source nodes.
    destinations_column_number: Optional[int]
        The number of the column of the edges file from where to load the destinaton nodes.
    destinations_column: Optional[str]
        The name of the column of the edges file from where to load the destinaton nodes.
    edge_list_edge_types_column_number: Optional[int]
        The number of the column of the edges file from where to load the edge types.
    edge_list_edge_types_column: Optional[str]
        The name of the column of the edges file from where to load the edge types.
    default_edge_type: Optional[str]
        The edge type to be used when the edge type for a given edge in the edge file is None.
    weights_column_number: Optional[int]
        The number of the column of the edges file from where to load the edge weights.
    weights_column: Optional[str]
        The name of the column of the edges file from where to load the edge weights.
    default_weight: Optional[float]
        The edge weight to be used when the edge weight for a given edge in the edge file is None.
    edge_ids_column: Optional[str]
        The name of the column of the edges file from where to load the edge IDs.
    edge_ids_column_number: Optional[int]
        The number of the column of the edges file from where to load the edge IDs.
    edge_list_numeric_edge_type_ids: Optional[bool]
        Whether to load the edge type IDs as numeric from the edge list.
    edge_list_numeric_node_ids: Optional[bool]
        Whether to load the edge node IDs as numeric from the edge list.
    skip_weights_if_unavailable: Optional[bool]
        Whether to skip the weights without raising an error if these are unavailable.
    skip_edge_types_if_unavailable: Optional[bool]
        Whether to skip the edge types without raising an error if these are unavailable.
    edge_list_is_complete: Optional[bool]
        Whether to consider the edge list as complete, i.e. the edges are presented in both directions when loading an undirected graph.
    edge_list_may_contain_duplicates: Optional[bool]
        Whether the edge list may contain duplicates. If the edge list surely DOES NOT contain duplicates, a validation step may be skipped. By default, it is assumed that the edge list may contain duplicates.
    edge_list_is_sorted: Optional[bool]
        Whether the edge list is sorted. Note that a sorted edge list has the minimal memory peak, but requires the nodes number and the edges number.
    edge_list_is_correct: Optional[bool]
        Whether the edges file can be assumed to be correct, i.e. does not have something wrong in it. If this parameter is passed as true on a malformed file, the constructor will crash.
    edge_list_max_rows_number: Optional[int]
        The maximum number of lines to be loaded from the edges file.
    edge_list_comment_symbol: Optional[str]
        The comment symbol to skip lines in the edges file. Lines starting with this symbol will be skipped.
    edges_number: Optional[int]
        The expected number of edges. Note that this must be the EXACT number of edges in the graph.
    load_edge_list_in_parallel: Optional[bool]
        Whether to load the edge list in parallel. Note that, if the edge IDs indices are not given, it is NOT possible to load a sorted edge list. Similarly, when loading in parallel, without edge IDs, the edges may not be loaded in a deterministic order.
    remove_chevrons: Optional[bool]
        Whether remove chevrons while reading elements.
    remove_spaces: Optional[bool]
        Whether remove spaces while reading elements.
    verbose: Optional[bool]
        Whether to show a loading bar while reading the files. Note that, if parallel loading is enabled, loading bars will not be showed because they are a synchronization bottleneck.
    may_have_singletons: Optional[bool]
        Whether the graph may be expected to have singleton nodes. If it is said that it surely DOES NOT have any, it will allow for some speedups and lower mempry peaks.
    may_have_singleton_with_selfloops: Optional[bool]
        Whether the graph may be expected to have singleton nodes with selfloops. If it is said that it surely DOES NOT have any, it will allow for some speedups and lower mempry peaks.
    directed: bool
        Whether to load the graph as directed or undirected.
    name: Optional[str]
        The name of the graph to be loaded.

        

## Paused

## Done

## Notes


## Todo tomorrow

###
###
###


## Today I learned that

-