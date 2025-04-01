

# This is PMA's DBGI daily open-notebook.

Today is 2024.04.09

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

Establishing tasks for SIS ETHZ DBGI-KM project for 2024.

Initial WP

Develop best practices for efficient sample tracking and implement them in an open-source ELN. In most metabolomics projects a heavy focus is drawn on the handling of data post-acquisition and much less on the tracking and documentation of the samples identity. However, this step is crucial within the DBGI and has one clear objective: make the bridge from physical (living biological organisms) to digital objects (metadata and chemical information) throughout the project. To this end, we will start by developing best practices for accurate digital description of physical objects as well as measurement protocols, in addition to the collected data. The practices will follow established ORD and FAIR principles, relying on relevant existing community vocabularies and ontologies or developing new ones when required. Next, we will provide a reference implementation of these generic ORD practices in the open-source Electronic Lab Notebook (ELN) and Laboratory Information System (LIMS) openBIS [18], which is developed and maintained by the Scientific IT Services of ETH Zurich (co-applicant). While multiple commercial and online ELN-LIMS solutions exist, we do not consider them here as they do not follow Open Science principles, such as open-source or avoidance of vendor lock-in. We will thus implement the large possibilities offered by openBIS, which was designed as a modular, open-source and FAIR-compliant ELN and data management solution. openBIS is already in use at a large number of research labs at ETH Zurich, other institutions in Switzerland and abroad, including for several metabolomics and proteomics applications. Furthermore, openBIS already provides a connection to data repositories, such as Zenodo, which enables easy publication of data and metadata stored in openBIS. We will specifically i) evaluate openBIS capacities to track physical data located in several laboratories ii) evaluate openBIS installation as a lightweight and standalone sample tracking system implemented in partners lab and connected to a central DBGI openBIS server iii) evaluate the capacity of openBIS to feed graph type databases. Alternatively, a lightweight system constituted by a PostgreSQL DB running under a NocoDB GUI will be evaluated. Both approaches should provide in the end a user-friendly web-based interface for convenient tracking of samples by the DGBI participants. This will be the objective of WP2 - Sample tracking system establishment.



### Objectives

Establish a sound and robust sample tracking system connecting physical and digital objects.

### Description of the tasks and roles of the partners for each of them

Best practices for sample tracking based on ORD and FAIR principles:

* We will develop best practices for the accurate description of samples, protocols and the associated data. To this end, we will rely on existing community standards, vocabularies or ontologies or develop new ones, if required.
* Since multiple existing databases and ontologies will be connected to the DBGI hub, it will be essential to properly define identifiers. For this we will take advantage of the Bioregistry (https://bioregistry.io/) as a meta-registry and an identifier resolver.
* For data, we will investigate both Frictionless Standards (https://frictionlessdata.io/standards/) to describe data and data types used in the projects in an optimal manner and several options offered by the Frictionless Software toolkit (https://frictionlessdata.io/).
* This work will result in a set of ORD practices, recommendations and principles that are open and reusable and therefore immediately useful for the wider community.

Implementation in openBIS:
* We will provide a reference implementation of the generic ORD practices in the open and widely used ELN-LIMS system openBIS. openBIS consists of three different parts: an inventory, an ELN and a data management system.
* Samples and measurement protocols will be described in the inventory, together with associated metadata.
* Measurement data (e.g. from mass spectrometry) will be ingested in the data management system using automated scripts, which also handle the annotation with appropriate metadata. 
* In addition to the standard, web-based openBIS user interface, we will also explore the development of a lightweight interface for phone / tablets, which will be used for tracking of samples by the DBGI participants.

Further reference implementations:
* Depending on the adoption of the openBIS implementation for sample tracking by the community, we will also consider further reference implementations for sample tracking, using alternative database systems. An advantage would be that this provides a powerful demonstration of the generalizability of the developed framework.

### List of deliverables

* Documentation (e.g. as white paper) of best practices for sample, protocol and data annotation in the DBGI
* Fully documented customization of openBIS, implementing the generic annotation scheme
* Lightweight user interface for ingestion of sample information, data and metadata
* Central openBIS installation for the DBGI consortium

https://www.checklistbank.org/
https://api.checklistbank.org/

Milestones:

Q2 2024: PID System Selection and Strategy

* Complete investigation of PID systems.
* Finalize and document the PID strategy for implementation.

Q3 2024: Metadata Standards Development

* Develop and document metadata standards and data models.

Q4 2024: Prototype Development and Testing

* Complete the development of the Rust application prototype.
* Conduct comprehensive testing and gather feedback from stakeholders.

https://isamplesorg.github.io/

Automated Metadata Enhancement for Physical Sample Record Aggregation in the iSamples Project
https://doi.org/10.1002/pra2.968

Internet of Samples (iSamples): Toward an interdisciplinary cyberinfrastructure for material samples
https://doi.org/10.1093/gigascience/giab028


https://metadatacenter.org/

https://github.com/metadatacenter

https://more.metadatacenter.org/sites/default/files/An%20Open%20Repository%20Model%20for%20Acquiring%20Knowledge%20about%20Scientific%20Experiments.pdf


- Explore  / develop solutions for a comprehensive strategy for assigning, managing, and resolving PIDs for both physical specimens and their associated digital datasets. This system should support the long-term accessibility, discoverability, and verifiability of specimens.

- https://ess-dive.gitbook.io/sample-id-and-metadata

https://www.geosamples.org/

https://ess-dive.lbl.gov/

Thomas Wuest 

IGSN is provided by Datacite 
DOI desk

DISSCO.eu




How to become a member
How to become an IGSN e.V. member
Membership is open to all organisations who have an interest in developing and providing methods to locate, identify and cite physical samples, promoting and developing knowledge and skills exchange regarding the availability of physical samples and policies for their handling, or overseeing the rules and procedures for operating an IGSN ID registration service with a distributed infrastructure for use by and benefit of its members.

Membership is only open to organisations, not to individuals.

Applications for membership in the IGSN Organisation must be sent in writing to the IGSN e.V. management office (Statutes: §5 Membership Application). As part of the application process, you will be asked to provide some basic information about your organisation and its motivation for joining the IGSN Organisation.

Members will be charged an annual membership fee. The membership fee for full members is €250 per year and is due at the beginning of the calendar year.

Benefits of Membership
There are several benefits to being a member of IGSN e.V.:

Members receive support and training from IGSN e.V. on the use and management of IGSN IDs, as well as access to software tools and best practices for sample management.

Members have the opportunity to participate in the governance of the organisation through election to leadership roles and participation in the General Assembly. This enables members to influence the direction and policies of the organisation and to contribute to the development of international standards for sample management.

Membership in IGSN e.V. provides a way for institutions and organisations to demonstrate their commitment to best practices in sample management and to enhance their visibility in relevant research communities.

Note: You have to be a member of DataCite to mint IGSN IDs. Membership in the IGSN Organisation (IGSN e.V.) is not required to register IGSN IDs but is strongly encouraged.

2 years of a inhouse computational scientist (0.5 FTE - ETHZ-SIS)





#### Call with Luca

https://en.wikipedia.org/wiki/Okapi_BM25

Moving on the exploration of usecases for the Ngrams

Succint DataStructures

https://en.wikipedia.org/wiki/Succinct_data_structure


Elias-Fano encoding https://pages.di.unipi.it/pibiri/papers/IIR17.pdf

Here we reach the entropic limit. You cannot compress more than that without further information.

Bit-Field vectors

ngrammatic

should fit within a u8 (255) or a u16 (64000 tokens)
https://en.wikipedia.org/wiki/ASCII


Think about a similar scheme to encode peak/losses in an mgf



## Paused

## Done

## Notes

## Todo tomorrow, one day ... or never

###
###
###


## Today I learned that

-