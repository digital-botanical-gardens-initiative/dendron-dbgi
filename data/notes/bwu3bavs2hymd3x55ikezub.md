
# This is Luca Cappelletti's DBGI daily open-notebook.

Today is 2023.07.18

## Todo today
* Verify whether [BioLink](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9372416/) comes with the support of biological samples.

## Done

### On Biolink
[Deepak Unni](https://www..com/in/deepakunni3/), who is the main author of [BioLink](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9372416/), said the following regarding the support of BioLink for biological samples:

> Biolink Model does have a few concepts that can be used to represent information about samples. But I don't think it is sufficiently modelled to support processing of samples as it is done for genomic sequencing or single cell sequencing. Ideally, it would be good to explore how the model can be extended to support this knowledge.

Deepak also pointed me to the following resources:

- [NMDC](https://github.com/microbiomedata/nmdc-schema): The NMDC is a multi-organizational effort to integrate microbiome data across diverse areas in medicine, agriculture, bioenergy, and the environment. This integrated platform facilitates comprehensive discovery of and access to multidisciplinary microbiome data in order to unlock new possibilities with microbiome data science.
- [iSamples](https://github.com/isamplesorg/metadata): schema for documenting physical samples
- [EGA/ENA](https://github.com/EbiEga/ega-metadata-schema): [European genome-phenome archive](https://ega-archive.org/submission/quickguide) metadata schema.
- [GHGA](https://github.com/ghga-de/ghga-metadata-schema): Metadata schema for the German Human Genome-Phenome Archive
- [FAIR Genomes](https://github.com/fairgenomes/fairgenomes-semantic-model): Genomes semantic metadata model

### Why having a hierarchy for the Earth Metabolome KG's node & edge labels is important
The [BioLink](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9372416/) comes equipped with two important features that are oftem under appreciated: the textual description associated to the node and edge labels, and the hierarchy of the node and edge labels. We can create node type and edge type features from the textual features using procedures such as [Okapi BM25-weighted BERT](https://github.com/AnacletoLAB/grape/blob/main/tutorials/BM25_weighted_pretrained_BERT_based_textual_embedding_using_GRAPE.ipynb) and by composing the [BioLink hyerarchy into a KG](https://github.com/LucaCappelletti94/kg-biolink) we can use any node embedding model to get additional topological node type and edge type features. These features can be used for many tasks, such as the classification of the nodes and edges, and the prediction of the edges. The [BioLink](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9372416/) hierarchy is not perfect, but it provides several good inspirations that should be followed for the Earth Metabolome KG.

## Todo tomorrow
* Delve into whether the data models suggested by [Chris Mungall](https://www..com/in/chrismungall/) are a viable solution for the characterization of biological samples.
* Start to delve into the [ENPKG Workflow](https://github.com/enpkg/enpkg_workflow) so as to plan a holystic refactoring, if needed.
