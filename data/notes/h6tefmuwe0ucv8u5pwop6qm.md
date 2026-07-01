QField_Data table (*Figure 1*) permits to store the collections we made on the field using QField:

- field_sample_id_pk: Format dbgi_xxxxxx. Corresponds to the collected specimen.

- status: The status of the collection. For example OK, lost, absent on inat, etc. 

- user_created, date_created_user_updated, date_updated: Informations about who created/modified the QField_data informations and when.

- field_sample_id_fk: Format dbgi_xxxxxx. Permits to make the link between collection and field samples.

- field_sample_name: The taxon name of the collected specimen

- latitude: The latitude of the collection.

- longitude: The longitude of the collection.

- ipen: The unique identifier of the specimen. Only present for botanical gardens specimens, given by the botanical garden.

- comment_eco: Stores possible comments from the collector on the ecology of the collected specimen

- soil_type: The type of soil present where the specimen has been collected.

- weather: Weather during the collection process.

- comment_env: Stores possible comments from the collector on the environment of the collected specimen.

- herbivory_percent: Only for plants and mushrooms. Gives the percent of specimen eaten by an herbivor.

- temperature_celsius: Temperature during the collection process.

- collector_fullname: Fullname of the collector.

- collector_orcid: the ORCID of the collector.

- collector_inat: iNaturalist username of the collector. Permits to tag the collector while collection is uploaded in iNaturalist.

- collection_date: The date of the collection

- is_wild: Boolean field that indicates if the collected specimen is wild or captive.

- inat_upload: Boolean field that indicates if the collected specimen should be uploaded in iNaturalist or not. Makes the difference between unique macroscopic specimen collections and multiple/microscopic/non-living objects collections.

![image import](assets/images_bruelhed/qfield_data.svg)

*Figure 1: QField_Data table structure*