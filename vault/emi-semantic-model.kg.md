---
id: 99gwuxgkij23vz2yoqvj4kj
title: Knowledge graph construction
desc: ''
updated: 1706179180781
created: 1706177101114
---

To build a knowledge graph (KG) based on the EMI semantic model, we consider all files generated by the workflow available at https://github.com/enpkg/enpkg_full.  Nevertheless, the last step related to a graph builder is not taken into account (i.e., ./workflow/10_workflow_graph_builder.sh script). 

Most of the generated files by the workflow above are tabular files (TSV or CSV). Because of this, we found appropriate to store the processed data by this workflow in a relational database. See [MySQL data schema](https://github.com/digital-botanical-gardens-initiative/earth_metabolome_ontology/blob/main/scripts/sql_insert_emi_data/raw_mysql_schema.sql). A [Python-based application](https://github.com/digital-botanical-gardens-initiative/earth_metabolome_ontology/tree/main/scripts/sql_insert_emi_data) is used to insert the "raw" data in the MySQL database. 

Once the data is loaded we apply a data virtualization technique with [Ontop](https://ontop-vkg.org). By doing this, we are able to build a virtual KG (VKG) based on the EMI semantic model. This VKG is easily deployed and accessible with SPARQL. We can also materialize the VKG and serialize it in any RDF-based format such as Turtle. The RDF dump can be then imported into any RDF triple store for better performance in terms of query execution time. Note that we do not perform any database normalization, this is because we use MySQL just as an intermediate step to build the KG.

All Ontop mappings that are used to translate SQL to SPARQL are available in [emi-v0_1.obda](https://github.com/digital-botanical-gardens-initiative/earth_metabolome_ontology/tree/main/ontop_config). This VKG apporach is highly flexible since we can dynamically change the graph by editing the mappings. It also provides an easier way to populate and alingn with similar semantic models, such as the ENPKG vocabulary for data legacy.


 