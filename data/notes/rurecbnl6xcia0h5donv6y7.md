# This is Marco's daily open-notebook.

Today is 2024.02.15


## Notes
### Call with Luca

Once I have found the best model, I can proceed with the following : 
```python
graph_with_only_in_taxon = graph.filter_from_names(
    edge_type_names_to_keep=["biolink:in_taxon"],
)
graph_without_in_taxon = graph.filter_from_names(
    edge_type_names_to_remove=["biolink:in_taxon"],
)
pos = graph_with_only_in_taxon
neg = graph_with_only_in_taxon.sample_negative_graph(
    number_of_negative_samples=graph_with_only_in_taxon.get_number_of_directed_edges(),
    sample_edge_types=False,
    only_from_same_component=False,
    use_scale_free_distribution=True,
    random_state=23391 * (3 + 1),
)

sketching_features = HyperSketchingPy(
    hops=number_of_hops,
    normalize=normalize,
    graph=graph
)
sketching_features.fit()


# sketching for positive training edges
pos_sources = pos.get_directed_source_node_ids()
pos_destinations = pos.get_directed_destination_node_ids()


sk_positive_features = sketching_features.positive(
    sources=pos_sources,
    destinations=pos_destinations,
    feature_combination=combination,
)


# sketching for training negatives
neg_sources = neg.get_directed_source_node_ids()
neg_destinations = neg.get_directed_destination_node_ids()
sk_negative_features = sketching_features.negative(
    sources=neg_sources,
    destinations=neg_destinations,
    feature_combination=combination,
)

X = np.concatenate([ sk_positive_features, sk_negative_features])
label_pos = np.ones(sk_positive_features.shape[0])
label_neg = np.zeros(sk_negative_features.shape[0])
label = np.concatenate([label_pos, label_neg])

# randomize the order of the training data
random_state=43
indices = np.arange(X.shape[0])
rnd = np.random.RandomState(random_state)
rnd.shuffle(indices)
X_shuffled = X[indices]

label_shuffled = label[indices]

```

Then fit the model. Save it.

Once we have our model we need to do the predictions on the bipartite graph (the bipartite grpah being the 8 billion pairs of possible molecules)

* train graph
* iterate over species
* for each species genrerate link graph between that species and all molecules --> create features of that graph
* predict
* order the predictions and keep scores above 0.75 
* for each species create csv with species name
* in csv you have the molecule corresponding to the node and the score ATTENTION : Flag pairs that are already present in graph ! `graph.get_neighbour_node_ids_from_node_name("wd:Q43656")`

Example of for one species : 
```python
sketching_features = HyperSketchingPy(
    hops=number_of_hops,
    normalize=normalize,
    graph=graph,
)
sketching_features.fit()


pair_sketching = sketching_features.unknown(
    sources=molecules.astype("uint32"),
    destinations=homo_sapiens.astype("uint32"),
    feature_combination="addition"
)

model.predict_proba(pair_sketching)
```

With : `molecules = np.array([all_molecules nodes id ])` and  `homo_sapiens = np.array([15, 15, 15, ...])`
## Todo today
- [ ] 

## Doing


## Done
*  


## Todo tomorrow
- [ ]