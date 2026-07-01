
# This is Luca Cappelletti's DBGI daily open-notebook.

Today is 2023.07.19

## Todo today
* Start to delve into the [ENPKG Workflow](https://github.com/enpkg/enpkg_workflow) so as to plan a holystic refactoring, if needed.

## Done
* Cloned repositories associated to the [ENPKG Workflow](https://github.com/enpkg/enpkg_workflow) and started to read the code.
* Started to clean up the code for the first step of the workflow, which is the [data organization](https://github.com/enpkg/enpkg_data_organization). You can find the refactoring branch of the repository [here](https://github.com/enpkg/enpkg_data_organization/tree/refactoring).

### Cloning all of the repos
You can quickly clone all of the repositories by running the following snippet:

```bash
git clone git@github.com:enpkg/enpkg_workflow.git
git clone git@github.com:enpkg/enpkg_data_organization.git
git clone git@github.com:enpkg/enpkg_taxo_enhancer.git
git clone git@github.com:enpkg/enpkg_mn_isdb_taxo.git
git clone git@github.com:enpkg/enpkg_sirius_canopus.git
git clone git@github.com:enpkg/enpkg_meta_analysis.git
git clone git@github.com:enpkg/enpkg_graph_builder.git
```

## Todo tomorrow
* Delve into whether the data models suggested by [Chris Mungall](https://www..com/in/chrismungall/) are a viable solution for the characterization of biological samples.
* Start writing a test suite for the [data organization](https://github.com/enpkg/enpkg_data_organization/tree/refactoring) repository with the data [made available on Zenodo](https://zenodo.org/record/8152039). 