

# This is Maëlle's DBGI daily open-notebook.

Today is 2023.04.24


## TODO

- Check discussion: https://github.com/orgs/digital-botanical-gardens-initiative/discussions
- Check Zulip

## CODE

## NOTES

Tried to do a plot to visualize molecular diversity
A t-SNE (t-Distributed Stochastic Neighbor Embedding) or UMAP (Uniform Manifold Approximation and Projection) plot could be useful for this purpose. Both are dimensionality reduction techniques that can help visualize high-dimensional data in 2D or 3D. You can use these techniques to visualize the similarity between molecules based on their features.

First needed to convert your molecular data into numerical features => As it is computationaly demanding, I created a script (['smiles_to_ecfp.py'](https://github.com/digital-botanical-gardens-initiative/dashboard/blob/2fd9559bae8da9c1fe287dc1818d23926b8c8b47/smiles_to_ecfp.py)) that is running outside the app (maybe once everyday?) and that add the values to a table ('umap') in the 'lotus' postgresql database.                                                                
Was trying to use umap at first but it was too memory consuming so I switched to t-SNE. It gives me a result that can be ploted but it is still computationally demanding and I should find another way or adapt this technique to visualize the diversity faster.


## TODO NEXT



## Important for redaction
