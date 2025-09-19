

# This is Luca Cappelletti's DBGI daily open-notebook.

Today is 2023.07.25

## Todo today

* Call with [Pierre-Marie Allard](https://www.unifr.ch/bio/en/services/metabolomics-and-proteomics-platform/people/335736/16398) to discuss the [ENPKG Workflow](https://github.com/enpkg/enpkg_workflow)
    * Write a command that runs for the test data [made available on Zenodo](https://zenodo.org/record/8152039) that can be later adapted to be a test suite.
    * Clarify what are the functionalities requested from the following dependencies:
        * [opentree](https://github.com/OpenTreeOfLife/python-opentree) - One of several options to map a species to a taxon id
        * [pandas json_normalize](https://pandas.pydata.org/docs/reference/api/pandas.json_normalize.html) - Just an ease of life function.
        * sqlite3 - Used to look up on Chembl APIs, and we store the data in a sqlite3 database. It is just a local cache of the data.
        * [rdkit](https://github.com/rdkit/rdkit) - To be cleared up afterwards.
        * [chembl_webresource_client](https://github.com/chembl/chembl_webresource_client) - Web APIs to request stuff such as bioactivity of compounds from the ChEMBL database.
        * what is npscorer? - Natural product likelyness scorer, a tool to score natural products. Not necessarily known what is being used for in the pipeline.
        * [matchms](https://github.com/matchms/matchms) - 
        * [canopus](https://github.com/boecker-lab/sirius) - Link from spectra to chemical class.
        * Why is NetworkX being used for connected components?
    * Start to define a reasonable time line for pipeline refactoring
        * Planned for module 2nd (on the 7th afternoon) and 3rd (on 10th)
    * Plan for the next visit in Fribourg
        * From 28 to 31 of August
