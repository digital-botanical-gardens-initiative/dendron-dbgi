
## Links

https://transportation.libguides.com/persistent_identifiers


https://www.dona.net/

https://www.allianceforbio.org/

https://www.ch.imperial.ac.uk/rzepa/blog/?p=26202

https://support.datacite.org/docs/about-igsn-ids-for-material-samples

## IGSN


### IGSN–DataCite support staff
As part of the partnership, DataCite brought on two employees to support the transition: Rorie Edmunds, Samples Community Manager (rorie.edmunds@datacite.org), and Cody Ross, Application Support Engineer (cody.ross@datacite.org).

Rorie Edmunds (rorie.edmunds@datacite.org) is the primary contact for questions about the application of physical sample identifiers, samples community outreach, and DataCite membership. Cody Ross (cody.ross@datacite.org) is the primary contact for questions about the technical implementation of IGSN IDs.

General questions about the IGSN–DataCite partnership can be directed to info@datacite.org. General technical support questions can be directed to DataCite’s support help desk email support@datacite.org.


### General Information on Usage of IGSN IDs
IGSN IDs may be registered for all material samples from any research domain. In addition to individual samples, IGSN IDs may also be assigned to:

- **Collections or aggregations of samples.** You may not want to have a PID for every object within a collection. If a whole aggregate is usually referenced, it can be registered with an IGSN ID. Additional IGSN IDs may then be registered for specific samples within the collection as necessary. Such samples are children of the parent collection and may be connected in the metadata using relatedIdentifers.
- **Features-of-interest.** A material sample is a specialization of a ‘feature-of-interest’ upon which the sampling activity was carried out; namely, the collection site (such a site may not exist for samples that are synthesized in a laboratory). Similar to collections, samples in this case are children of their parent feature-of-interest.
- **Ephemeral samples.** Non-persistent material samples may be registered with IGSN IDs. It is common for samples to be destroyed during an analytical process or discarded after testing; they may also degrade over time. For synthesized samples, they may exist only at a certain point during the experimental process before disappearing again. In all cases, the sample metadata should provide clear information on the current status of the sample.

These three types of use cases (collections, features-of-interest, and ephemeral samples) should cover the majority of physical samples in the frame of DBGI/EMI.


Sandbox at https://doi.test.datacite.org/ (credentials available on request)


Organization Fee
The organization fee for non-profit organizations is 500€ per year. This fee includes all the repositories and prefixes needed by an organization to follow best practices

👉 another reason to have a non-profit organization


## DiSSCo
- Distributed System of Scientific Collections, [DiSSCo](https://www.dissco.eu/)
- a new world-class Research Infrastructure (RI) for Natural Science Collections
- As of June 2024, is in transition phase to becoming a European Research Infrastructure Consortium (ERIC)
- The final Construction Phase of the Research Infrastructure is foreseen in 2025
- List of national nodes contacts: https://www.dissco.eu/contact/
  - For CH: [Alice Cibois](https://museumlab-geneve.ch/auteurs/alice-cibois/), Muséum d’histoire naturelle de la Ville de Genève
- Publication on PID schemes for DiSSCo: https://riojournal.com/article/67379/
  - *"DiSSCo will adopt a ‘driven-by DOI’ persistent identifier (PID) scheme customised with natural sciences community characteristics. Establishing a new Registration Agency in collaboration with the International DOI Foundation is a practical way forward to support the FAIR (findable, accessible interoperable, reusable) data architecture of DiSSCo research infrastructure."*

## CETAF
- [CETAF](https://cetaf.org/) is a consortium of European taxonomic facilities
- There is some relation to DiSSCo, see https://cetaf.org/template-activities/cetaf-projects/dissco-research-infrastructure-2/
- CETAF has also worked on [best practices](https://cetaf.org/resources/best-practices/) regarding stable identifiers
  - [Poster](https://www.cetaf.org/wp-content/uploads/CETAF-stable-identifiers-for-specimens-poster.pdf)
  - But Wiki link seems to be broken and the [code repository](https://sourceforge.net/projects/stablecollectionidentifiers/) on Sourceforge has been last updated in Feb. 2017