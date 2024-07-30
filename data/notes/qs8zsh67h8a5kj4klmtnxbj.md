
# This is Luca Cappelletti's DBGI daily open-notebook.

Today is 2023.07.21

## Todo today
* Continuing to work on the [ENPKG Workflow](https://github.com/enpkg/enpkg_workflow) so as to plan a very needed holystic refactoring.

## Global problems encountered

### Absence of documentation
The code does not have any meaningful documentation associated to the functions. The name of the variables often does not convey any meaning.

### Inconsistent formatting
Some files use 4-spaced tabs, some use 2-spaced tabs.

### JSON-like objects being hardcoded in the code
In several instances, JSON-like objects are hardcoded in the code. This is a problem because it makes the code less clean and more difficult to maintain.

### Lack of tests
The entire code base lacks any test suites.

### Lack of uniformity across repositories
It is unclear why there exists different very small repositories for each step of the workflow. It would be much more convenient to have a single repository with a folder for each step of the workflow, and system to test the comprehensive execution of it.

### Script and methods are mixed
The code is a mix of scripts and methods. This makes it difficult to understand what is the intended use of the code. While the code base should be rather clearly a module, it is constructed as a set of scripts that are meant to be run in a specific order from bash with a set of parameters.

### List of requirements identified
The following list of libraries used in the code has been identified, which will need to be accounted for in the refactoring. Hopefully some of them can be removed, but several would introduce a significant overhead as they are APIs to external resources. I need help to understand exactly what they are used for.

* `pandas` - Used for CSV manipulation
* [`opentree`](https://github.com/OpenTreeOfLife/python-opentree) - Used to query the open tree of life API
* `sqlite3` - It is currently unclear why this is used.
* [`rdkit`](https://github.com/rdkit/rdkit) - Used for chemical structure manipulation
* [`chembl_webresource_client`](https://github.com/chembl/chembl_webresource_client) - Used to query the ChEMBL API
* [`npscorer`]() - Unclear what this is for.
* [`memo_ms`](https://github.com/mandelbrot-project/memo) - Used for Ms2 basEd saMple vectOrization. I need to ask what that is, seems to be a package developed from within the lab.
* [`matchms`](https://github.com/matchms/matchms) - Python library for processing (tandem) mass spectrometry data and for computing spectral similarities. Seems to be wholly in Python, which seems like a bad call for something that needs to be fast.
* [`canopus`](https://canopus.vercel.app/) - Package for GraphQL. It is unclear why this is used in the pipeline.
* [`sirius`] - What is this?
* [`networkx`](https://networkx.org/) - Used for minimal graph analysis, such as computing connected components. Why is this done here?
* [`plotly`](https://plotly.com/python/) - Used for plotting something, still have to understand what.


## For next week
* Delve into whether the data models suggested by [Chris Mungall](https://www..com/in/chrismungall/) are a viable solution for the characterization of biological samples.
* Ask to Pierre-Marie for help understanding how to start using the data [made available on Zenodo](https://zenodo.org/record/8152039) for testing the [data organization](https://github.com/enpkg/enpkg_data_organization/tree/refactoring) and in chain all others to avoid breaking the pipeline during the refactoring.