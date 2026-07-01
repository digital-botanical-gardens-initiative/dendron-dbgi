# This is Marco's daily open-notebook.

Today is 2024.01.26


## Notes

## Todo today
- [ ] 

## Doing
* Will start running the experiments for the decision tree model. I will runn

## Done
*  


## Todo tomorrow
- [x] change graph to a dumped version of `graph.remove_singleton_nodes()` because we might have some problem with the hash. 
- [x] ask why by changing the model, the sketching needs to be run again $\rightarrow$ so first problem was that the graph was loaded in parallel so it resulted in a different hash. I changed it to `load_edge_list_in_parallel=False, load_node_list_in_parallel=False` and now it works.