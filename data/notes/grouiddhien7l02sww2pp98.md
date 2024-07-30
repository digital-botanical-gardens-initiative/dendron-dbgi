# This is Marco's daily open-notebook.

Today is 2024.01.05


## Notes

## Todo today
* 

## Doing


## Done



## Todo on Monday 2024.01.08
Restart implementation of query of Classyfire. To do so I need to:
- [x] look at test.py file. In the end I need only a list of the Inchi (max 1000 molecules per list $\rightarrow$ from my dataframe, create chunks of 1000 molecules) 
- [x] once I have my list I need to do this `compound = "\\n".join(comp)` to link them together.
- [x] Once they are linked I can use `structure_query` and `get_results` to get the results and then I'll use my self made `filter_df` function to get the results in a dataframe
- [x] the files created today (Friday 05.01.2024) (`./data/molecules/classyfire/*` should be deleted)

