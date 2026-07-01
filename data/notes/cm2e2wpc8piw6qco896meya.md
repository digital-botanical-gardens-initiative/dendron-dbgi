

# This is PMA's DBGI daily open-notebook.

Today is 2023.08.09

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

Meeting sample tracking

Manu, Edouard, PM


Starting from notes taken on the [[open-notebook.dbgi.pmallard.2023.07.27]]




Looking into the noveltries of the qfield app
-dpownload on deggoglzided android --- semms to work fine

- Think about using a defined taxonomy for the field called "sample_name" rather than an excel list per garden.
For example we could use the https://tree.opentreeoflife.org/about/taxonomy-version/ott3.5


When using QGis
we should make sure to use only LTS releases https://qgis.org/en/site/

Addition of 2 tabs "individual metadata" and "environmental metadata" (on top of the main "sample metadata")

- Define which field we want
- We should define which controlled vocabularies are used to fill the newly proposed fields


For e.g. [root](https://en.wikipedia.org/wiki/Root "In vascular plants, the roots are the organs of a plant that are modified to provide anchorage for the plant and take in water and nutrients into the plant body, which allows  plants to grow taller and faster. They are most often below the surface of the soil, but roots can also be aerial or aerating, that is, growing up above the ground or especially above water.") is could be fetched from the Plant Ontology https://www.ebi.ac.uk/ols4/ontologies/po/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FPO_0009005
PO:0025004

# Phenology
Flowering stage https://www.ebi.ac.uk/ols4/ontologies/po/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FPO_0007616?lang=en



Where are the other stages e.g fruiting 

IPEN and related individuals identifiers


Peek into [ENVO](https://www.ebi.ac.uk/ols4/ontologies/envo) and [ECOCORE](https://www.ebi.ac.uk/ols4/ontologies/ecocore)

E.g. humus https://www.ebi.ac.uk/ols4/ontologies/envo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FENVO_01000000?lang=en

E.g Rain https://www.ebi.ac.uk/ols4/ontologies/envo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FENVO_01001564


Herbivory https://www.ebi.ac.uk/ols4/ontologies/ecocore/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FECOCORE_00000020

https://www.ebi.ac.uk/ols4/ontologies/ecocore
https://www.ebi.ac.uk/ols4/ontologies/envo



For Edouard

Readlist 
- https://datascience.codata.org/articles/10.5334/dsj-2021-011
- https://www.pnas.org/doi/abs/10.1073/pnas.1423041112


And a constraint to the sample_name field so that the "unknown" value is automatically enforced when the "no_name_on_list" button is checked.


Dig a bit the Directus tuto's https://www.dbgi.org/dendron-dbgi/notes/dy871a7dv1wcjmkvrte9ex7/



Created a new test layer in the JBUF project on QGis
Also synced it with Qfield
Added and additonal field with a constrained vocabulary (helicity l/r)


## We start working on qgis.org



### How to handle large lists (e.g. the OTL species list) in QGis AND QField ?

Is a relational DB a solution.
E.g. https://postgis.net/

Can this be handled by a smartphone ?

https://github.com/opengisch/QField/discussions/2235


We check that with chatGPT

"I have a large tabular dataset ([4528269 rows x 15 columns]) which I would like to acces in QField and QGis.
However accessing the file as a simple .tsv takes ages. What solutipon could you propose us ?"

Dealing with large tabular datasets in QField and QGIS can indeed be challenging due to performance issues. Here are a few strategies you can consider to improve the speed and efficiency of working with your dataset:

1. **Spatial Indexing**: If your dataset has a spatial component (geographical coordinates), make sure to create a spatial index for it. This will significantly speed up spatial queries and visualization. In QGIS, right-click on the layer, go to Properties > Source > Create Spatial Index.

2. **Data Simplification**: If the level of detail in your dataset isn't necessary for your specific use case, consider simplifying the data. This could involve reducing the number of rows, aggregating data at coarser resolutions, or applying simplification algorithms to geometry. The "Simplify" tool in QGIS can help with this.

3. **Filtering and Subset Creation**: If you don't need the entire dataset all the time, consider creating subsets based on specific criteria or regions of interest. This can make it more manageable to work with and faster to load.

4. **Database Management Systems**: If your dataset is too large to be efficiently handled as a simple TSV file, consider using a spatial database system like PostgreSQL with the PostGIS extension. This will allow you to store and query the data more efficiently. QGIS supports connections to PostgreSQL databases.

5. **Indexed Attributes**: Create indexes on columns that you frequently use for querying and analysis. This will speed up queries involving those columns.

6. **Data Simplification**: If the nature of your analysis allows, you can perform data simplification techniques. This might involve decimating points, simplifying lines, or simplifying polygons, depending on your dataset type.

7. **Use Data-Driven Pages**: If you're working with geographical data, use QGIS's Data-Driven Pages feature to only load and display a subset of your data at a time. This can greatly improve rendering performance.

8. **File Format**: Consider converting your dataset to more efficient file formats such as GeoPackage or SQLite. These formats offer better performance and support for spatial indexing.

9. **Parallel Processing**: Some operations in QGIS can be performed in parallel. If you have access to a multi-core processor, this can significantly speed up certain tasks.

10. **Hardware Considerations**: Sometimes, hardware limitations can also impact performance. Ensure that you're using a machine with sufficient RAM and processing power to handle the dataset.

11. **Optimize Styling**: Simplify the styling of your layers, especially if you're dealing with complex symbology. Complex styles can slow down rendering.

12. **Update Software**: Make sure you're using the latest version of QField and QGIS, as newer versions often come with performance improvements.

13. **Data Generalization**: If your data allows, you might be able to generalize or aggregate some of the data to reduce the overall volume while maintaining the important insights.

Remember that the optimal solution will depend on your specific use case and requirements. It's a good idea to experiment with a combination of these strategies to find what works best for your situation.


" We asked to expand on point 4"


Certainly, point 4 refers to using a Database Management System (DBMS) to handle your large tabular dataset. A popular choice for this purpose is PostgreSQL, combined with the PostGIS extension if you're dealing with spatial data. Here's a more detailed explanation of how this approach can benefit you:

1. **Data Storage**: Using a DBMS allows you to store your data in a structured, optimized manner. Instead of a flat TSV file, data is organized in tables, rows, and columns, which makes querying and managing the data more efficient.

2. **Indexing**: A DBMS allows you to create various types of indexes on your data. Indexes speed up data retrieval, especially when filtering or searching for specific records. Spatial indexes, in the case of PostGIS, enhance the performance of spatial queries.

3. **Efficient Queries**: Databases are designed to handle large datasets and complex queries. SQL (Structured Query Language) enables you to perform powerful operations on your data, filtering, aggregating, and joining tables as needed.

4. **Concurrency**: Modern DBMSs can handle multiple users accessing the data simultaneously without data corruption or performance degradation. This is especially useful in collaborative projects.

5. **Transaction Management**: DBMSs provide mechanisms to ensure data integrity through transactions. If an operation fails midway, the database can revert to its previous state, preventing inconsistent data.

6. **Data Backup and Recovery**: Databases offer built-in backup and recovery mechanisms, which can be crucial when dealing with valuable or irreplaceable data.

7. **Data Versioning and History**: Some DBMSs support versioning and maintaining historical records. This can be helpful in scenarios where you need to track changes over time.

8. **Scalability**: If your dataset continues to grow, a DBMS can often be scaled to handle the increased load without significant performance degradation.

To set up PostgreSQL and PostGIS for your project:

1. **Install PostgreSQL**: Download and install PostgreSQL from the official website. During installation, remember the username and password you set up.

2. **Install PostGIS**: PostGIS is an extension for PostgreSQL that adds spatial capabilities. You can install it using your system's package manager or by downloading it from the PostGIS website.

3. **Create a Database**: Using a tool like pgAdmin (a graphical interface for PostgreSQL), create a new database.

4. **Enable PostGIS**: Once you have your database, enable PostGIS by executing the PostGIS-specific SQL scripts that come with the installation.

5. **Import Data**: Import your large tabular dataset into the PostgreSQL database. You can use tools like `pgAdmin` or the `psql` command-line tool to execute SQL commands.

6. **Create Indexes**: Depending on your data's structure and usage patterns, create appropriate indexes on columns that are frequently queried or used for filtering.

7. **Connect QGIS**: In QGIS, you can add a connection to your PostgreSQL database using the "Add PostGIS Layers" option. This allows you to work with your data seamlessly within QGIS.

Remember that working with a DBMS does require some learning curve, especially if you're new to SQL and database concepts. However, the benefits in terms of performance, management, and scalability can greatly outweigh the initial effort.




### We now peek into the other field wich we want to fill when collecting the samples


We work on a first example (the field corresponding to the plants/organisms parts)

First we dl the full PO

https://www.ebi.ac.uk/ols4/ontologies/po

[[plant_structure_PO|scratch.2023.08.09.103257.plant_structure_po]]

We couldnt find a way to dl or export from Protégé 
We found a txt version directly on the git https://github.com/Planteome/plant-ontology
https://github.com/Planteome/plant-ontology/blob/22bed9a0efa8879ef89e1bffa0a9df74397eaa6e/plant-ontology.txt





### We should think of a git versionning mechanism of the collections Layers

Check possibility to 

- [ ] QGIS export as csv
- [ ] CSV git versioning
- [ ] Ability to reimport an exported CSV



1. User pushed from QField to QField cloud
2. PosGres is versioned to git 



We created an issue [here](https://github.com/digital-botanical-gardens-initiative/gpkg_creator/issues/5) to start documenting the wanted field

This issue is meant to docment the field we want to implement in the QField collection app interface.

For now this is designed in the typical collection case of the DBGI (e.g. collection of plants or plants parts). This will need to be evolved when expanding to 1. EMI samples of organisms or ensemble of organisms. 2. mostly abiotic samples (e.g. soil, water etc)


DBGI case

## collection_campaign
Here we gather information regarding the curent collection campaign.

### firstname 
(e.g. Edouard)

### lastname
(e.g. Brülhart)

### ORCID
(e.g. 0000-0003-3950-4065)

### project_name
(e.g. DBGI)

### location_name
(e.g. Botanical Garden University of Fribourg)


## sample
Here we gather information regarding the sample (i.e. the physical material which ends up into the collection tube)

### sample_id
(e.g. dbgi_000001) 

This id is internal to your collection program. It should be unique within your project. This id is obtained by scanning a barcode or QRcode of the pre-labelled sample tube.


### UUID
(e.g. 95301d2b-d1da-4691-97e1-8cb6836a9a5a) 
Automatically generated by QField.


### organ
(e.g. root)

The vocabulary is controlled by the terms of the [PO](https://www.ebi.ac.uk/ols/ontologies/po) 


## individual
Here we gather information regarding the major targeted macroscopic biological organism (e.g. the whole plant from which several leaves have been sampled). We are aware that multiple biological taxa can be sampled at the same time (e.g. endophytes, nematodes, small insects. Hence the precision of **major targeted macroscopic biological organism**)

### taxon
(e.g. _Aconitum vulparia_) 

This name is obtained from a list of taxa which is coming from the [OTL taxonomy](https://tree.opentreeoflife.org/about/taxonomy-version/ott3.5)
If the taxa is not determined, the "ND" value is available.

### phenology

### health_state

### traits

### herbivory_pressure

### ...


## environment
Here we gather any other relevant environmental information.

### abiotic
#### weather
E.g Rain https://www.ebi.ac.uk/ols4/ontologies/envo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FENVO_01001564
#### soil_type
E.g. humus https://www.ebi.ac.uk/ols4/ontologies/envo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FENVO_01000000?lang=en



### biotic 
Herbivory https://www.ebi.ac.uk/ols4/ontologies/ecocore/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FECOCORE_00000020


### 
Peek into [ENVO](https://www.ebi.ac.uk/ols4/ontologies/envo) and [ECOCORE](https://www.ebi.ac.uk/ols4/ontologies/ecocore)




## Paused

## Done

## Notes

## Todo tomorrow

###
###
###


## Today I learned that

-