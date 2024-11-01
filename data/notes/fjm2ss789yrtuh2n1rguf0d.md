

# This is PMA's DBGI daily open-notebook.

Today is 2023.05.05

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

### Micro hackaton 

Ana, Tarcisio, PM


- Prepare a subgraph for Tobias
- Make sure to add Ana to EMI mailing.


Sources of input data ?
Who are the producers ? 
      - inat user collectors
      - ms results
      others ?

Where does this data go ?
    - openBis
    - wikibase
    - KG
    - directus.dbgi.com
    - massive

Dataset DBGI"tropical" datset
135 or so plants coming from a tropical greenhouse in JBUF

- http://directus.dbgi.org/admin/content/samples
https://directus.io/


https://www.degruyter.com/document/doi/10.1515/pac-2021-2007/html


Should be integer     enpkg:has_row_id 6.0 ;


https://metabolomics-usi.ucsd.edu/dashinterface/?usi1=mzspec%3AMSV000090090%3ADBGI_01_04_001_features_ms2_pos.mgf%3Ascan%3A108&width=10.0&height=6.0&mz_min=None&mz_max=None&max_intensity=125&annotate_precision=4&annotation_rotation=90&cosine=standard&fragment_mz_tolerance=0.1&grid=True&annotate_peaks=%5B%5B55.05500030517578%2C%2069.07050323486328%2C%2083.08589935302734%2C%2097.10150146484375%2C%20111.11720275878906%2C%20135.1168975830078%2C%20163.14759826660156%2C%20247.24139404296875%2C%20265.2521057128906%2C%20282.27850341796875%5D%2C%20%5B%5D%5D

Think about the hard encoding of the dbgi ids in the Massive URL
Benchmark this when we run the dbgi tropical set with the correct dbgi ids



enpkg:AAJKTJJGBYWRHK enpkg:has_npc_class enpkg:npc_Acetogenins ;
    enpkg:has_npc_pathway enpkg:npc_Polyketides ;
    enpkg:has_npc_superclass enpkg:npc_Linear_polyketides ;
    enpkg:has_smiles "CCCCCCCCCCCCC(C1CCC(O1)C2CCC(O2)CC(CCCCCC(CC3=CC(OC3=O)C)O)O)O" ;
    enpkg:is_InChIkey2D_of enpkg:AAJKTJJGBYWRHK-GJCPBGCDSA-N,
        enpkg:AAJKTJJGBYWRHK-QCOIHMLWSA-N,
        enpkg:AAJKTJJGBYWRHK-SCPMWOMPSA-N,
        enpkg:AAJKTJJGBYWRHK-UHFFFAOYSA-N .


Declare inchikey 
for example : 



enpkg:AAJKTJJGBYWRHK enpkg:has_npc_class enpkg:npc_Acetogenins ;
    enpkg:has_InChIKey "AAJKTJJGBYWRHK" ;
    enpkg:has_npc_pathway enpkg:npc_Polyketides ;
    enpkg:has_npc_superclass enpkg:npc_Linear_polyketides ;
    enpkg:has_smiles "CCCCCCCCCCCCC(C1CCC(O1)C2CCC(O2)CC(CCCCCC(CC3=CC(OC3=O)C)O)O)O" ;
    enpkg:is_InChIkey2D_of enpkg:AAJKTJJGBYWRHK-GJCPBGCDSA-N,
        enpkg:AAJKTJJGBYWRHK-QCOIHMLWSA-N,
        enpkg:AAJKTJJGBYWRHK-SCPMWOMPSA-N,
        enpkg:AAJKTJJGBYWRHK-UHFFFAOYSA-N .


## Tasks

PM:
- establish a graphical overview of this dataflow
draw.io
https://app.diagrams.net/#G1tmt-gJGJyj1DSSI1JhGonQqF1BCk-VY4



https://idsm.elixir-czech.cz/chemweb/
https://chembl.gitbook.io/chembl-interface-documentation/downloads
https://pubchem.ncbi.nlm.nih.gov/docs/rdf





Huernia schneideriana
## observation 
dbgi_001057 ~ 155584652
dbgi_001057_01
dbgi_001057_01_01
20230505Z1400001_dbgi_001057_01.mzML


## Discused with Audrey just now 

Huernia schneideriana
## observation 
dbgi_001057 ~ 155584652
dbgi_001057_01 ~ extraction
dbgi_001057_01_01 ~ vial
dbgi_001057_01_02 ~ vial
dbgi_001057_01_03 ~ vial
dbgi_001057_01_04 ~ vial

20230505Z1400001_ALC_dbgi_001057_01_01.mzML
20230505Z1401101_ALC_dbgi_001057_01_01.mzML

## species 
Huernia schneideriana

## observation 
dbgi_001057 ~ 155584652 ~ CETAF

## extract
dbgi_001057_01

## mass spec run
dbgi_001057_01_02

## mass spec filename
202305_Tarcisio_INternalSIB_01.mzML ~ MSV000090090 ~ DOI






## species 
Huernia schneideriana

## observation 
dbgi_001057 ~ 155584652 ~ CETAF0000001

## extract
CETAF0000001_dbgi_001057_01

## mass spec run
CETAF0000001_run

## mass spec filename
202305_Tarcisio_INternalSIB_01.mzML ~ MSV000090090 ~ DOI



## species 
Huernia schneideriana

## observation 
dbgi_001057 ~ 155584652 ~ CETAF0000001

## extract
CETAF0000001_PMA01

## mass spec run
CETAF0000001_01_01

## mass spec filename
202305_Tarcisio_INternalSIB_01.mzML ~ MSV000090091 ~ DOI




## species 
Huernia schneideriana

## observation 
dbgi_001057 ~ 155584652 ~ CETAF0000002

## extract
CETAF0000002_PMA01

## mass spec run
CETAF0000001_01_01

## mass spec filename
202305_Tarcisio_INternalSIB_01.mzML ~ MSV000090091 ~ DOI



## species 
Huernia fliosososo

## observation 
TArciusooID01 ~ 1555841

## extract
TArciusooID01_01

## mass spec run
TArciusooID01_01_01

## mass spec filename
202305_Tarcisio_INternalSIB_01.mzML




## species 
Huernia fliosososo

## observation 
TArciusooID01 ~ 1555841

## extract
TArciusooID01_01

## mass spec run
TArciusooID01_01_01

## mass spec filename
202305_Tarcisio_INternalSIB_01.mzML












Huernia schneideriana
dbgi_001057 ~ 155584652
dbgi_001057_02
dbgi_001057_02_01
20230505Z1400001_dbgi_001057_02.mzML

Huernia schneideriana
dbgi_001088 ~ 1555878787
dbgi_001088_01
20240505Z1400001_dbgi_001088.mzML











Alpinia officinarum


DBGI_01_04_004 ()
DBGI_01_04_004_extract
20220513_PMA_DBGI_01_04_004.mzML


DBGI_01_04_004 ()
DBGI_01_04_004_extract
20220513_PMA_DBGI_01_04_004.mzML



Should be a requirement ?
https://cetaf.org/resources/best-practices/#:~:text=CETAF%20Stable%20Identifiers&text=Stable%20identifiers%20are%20globally%20unique,them%20with%20the%20semantic%20web.

Lets discuss this with DONat 
https://riojournal.com/article/97374/




sample_filename_pos	sample_id	sample_type	organism_species	ipen	sample_prep_mode	sample_substance_name	massive_id
20220513_PMA_DBGI_01_04_004.mzML	DBGI_01_04_004	sample	Alpinia officinarum	XX 0 FRIBG 20040092	liquid_nitrogen	DBGI_01_04_004_extract	MSV000090090






## Paused

## Done

## Notes

https://www.cetaf.org/wp-content/uploads/CETAF-stable-identifiers-for-specimens-poster.pdf?_ga=2.233198302.1318400479.1683303704-271587775.1683303704



## Todo tomorrow

###
###
###


## Today I learned that

-