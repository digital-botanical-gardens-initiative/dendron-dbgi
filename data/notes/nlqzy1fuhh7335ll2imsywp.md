

# This is Maëlle's DBGI daily open-notebook.

Today is 2023.04.12


## TODO

- Check discussion: https://github.com/orgs/digital-botanical-gardens-initiative/discussions
- Check Zulip

## CODE

## NOTES

## TODO NEXT



## Important for redaction

To make the calculate_similarity more efficient:
  1. Use a fingerprint-based similarity measure instead of Maximum Common Substructure (MCS). Fingerprint-based similarity is generally faster and more suitable for large datasets. You can use the RDKit's Morgan fingerprints (also known as ECFP or Extended Connectivity Fingerprints).

  2. Use a parallel processing library like concurrent.futures to speed up the similarity calculation by utilizing multiple CPU cores.

  3. Fetch molecules from the PostgreSQL database in batches to avoid loading all molecules into memory at once.


Which threshold is the best? 
The ideal threshold for Tanimoto similarity depends on your specific use case and the desired level of similarity between molecules. There's no one-size-fits-all answer, but here are some general guidelines:

    A threshold of 0.7-0.8 is often used for finding moderately similar molecules. This range is considered to provide a good balance between retaining some diversity and ensuring that the molecules share significant structural features.

    A higher threshold (e.g., >0.85) is suitable when you want to find molecules that are highly similar or almost identical to the reference molecule. This is helpful in cases like identifying analogs or finding molecules with very similar properties.

    A lower threshold (e.g., <0.7) can be used if you want to include more diverse molecules that still share some structural features with the reference molecule. This is useful when you're looking for a broader range of potentially interesting molecules, for instance, in a scaffold hopping approach in drug discovery.

It's important to note that the choice of threshold is highly dependent on the molecular fingerprints you're using and the specific requirements of your application. You might need to experiment with different thresholds to find the one that works best for your needs. Additionally, keep in mind that the distribution of Tanimoto similarity values may vary across different datasets, so the ideal threshold might change when working with different molecular libraries.