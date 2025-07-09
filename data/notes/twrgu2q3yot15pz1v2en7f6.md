
# This is Luca Cappelletti's DBGI daily open-notebook.

Today is 2023.07.17

## Todo today
* Effectively write an entry in [Dendron DBGI](https://github.com/digital-botanical-gardens-initiative/dendron-dbgi).
* Write notes regarding the (partial) use or inspiration to of the following resources for the Earth Metabolome KG:
    * [PheKnowLator](https://arxiv.org/abs/2307.05727)
    * [BioCypher](https://arxiv.org/abs/2212.13543)
    * [KG-Hub](https://academic.oup.com/bioinformatics/article/39/7/btad418/7211646)
* Verify whether [BioLink](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9372416/) comes with the support of biological samples.

## Done
* What you are currently reading is my first entry in Denron DBGI.
* [BioCypher](https://arxiv.org/abs/2212.13543) and [PheKnowLator](https://arxiv.org/abs/2307.05727) are primarily pipelines in Python for combining KGs. We need an efficient and robust pipeline to **create** a KG from scratch, and first thing first Python is likely not the suitable candidate for such objectives, altough it is okay when one needs to smash things togheter. The objective of the Earth Metabolome KG is not to compose through ETL several existing ontologies and KGs, but to create a new KG from the metabolomic data and its metadata. While it is vital for the long term viability of these data to be compatible with the existing ontologies and graphs by following the naming conventions for species for instance from the likes of [NCBITaxon](https://www.ncbi.nlm.nih.gov/taxonomy), it is not the goal of this KG to ingest them. The Earth Metabolome KG is not a KG of KGs, it is a KG of metabolomic data, that may be included in several other KGs.
* [KG-Hub](https://academic.oup.com/bioinformatics/article/39/7/btad418/7211646) is similar in nature to the aforementioned libraries, but also provides a [web-hosting that makes it particularly easy to access versioned KGs.](https://kghub.org/) The standardized nature of the node types and edge types through the biolink format make it easier to combine different KGs, thought in several instances the level of detail in the hierarchy of biolink effectively used is too coarse and stops at extremely high level labels such as [biolink:NamedThing](https://biolink.github.io/biolink-model/docs/NamedThing.html). Aiming to have a standardized and structured set of labels will be vital for the Earth Metabolome KG, but they will also need to be finely grained and detailed enough to be useful for the biological samples and metabolomic data. The ease of access and clear versioning of the [KG-Hub](https://academic.oup.com/bioinformatics/article/39/7/btad418/7211646) data is surely something to be imitated. Finally, the tight integration of the [GRAPE](https://github.com/AnacletoLAB/grape) library with [KG-Hub](https://academic.oup.com/bioinformatics/article/39/7/btad418/7211646) is something to be considered for the Earth Metabolome KG.
* Asked to [Deepak Unni](https://www..com/in/deepakunni3/), who is the main author of [BioLink](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9372416/), whether it provides support for biological samples as it is unclear from the BioLink paper and website.


## Todo tomorrow
* Write an entry describing the benefits of having a hierarchy for the Earth Metabolome KG's node & edge labels. Use [Biolink KG](https://github.com/LucaCappelletti94/kg-biolink) as an example of an effective characterization of metadata based on the metadata topology.
* Delve into whether the data models suggested by [Chris Mungall](https://www..com/in/chrismungall/) are a viable solution for the characterization of biological samples.
* Bother the authors of the resources that seem to be the most promising for the Earth Metabolome KG so to make sure I am not missing anything and neither reinventing the wheel.
* Start to delve into the [ENPKG Workflow](https://github.com/enpkg/enpkg_workflow) so as to plan a holystic refactoring, if needed.
