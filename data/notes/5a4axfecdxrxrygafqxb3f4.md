Field_Samples table (*Figure 1*) permits to store the field samples ID with all the associated metadata:

- field_sample_id: Format dbgi_xxxxxx (sample). Linked to [[Master-Works.Edouard-Brülhart.Database.Tables.QField_data]] and [[Master-Works.Edouard-Brülhart.Database.Tables.Inat_data]] tables. This ID corresponds to the label of the physical object field sample.

- user_created, date_created_user_updated, date_updated: Informations about who created/modified the Field_samples informations and when.

- UUID_field_sample: UUID of the field sample, generated during creation of the physical object.

- status: Permits to track the status of the field sample (example: OK, lost, mouldy, etc.).

- mobile_container_id: This ID corresponds to the label of a physical mobile container. Provides a link to [[Master-Works.Edouard-Brülhart.Database.Tables.Mobile_containers]] to know where the field sample is stored.

- qfield_link: Provides a link to the QField observation.

- inaturalist_link: Provides the URL of the iNaturalist observation corresponding to this sample.

- inat_observation_id: Provides the iNaturalist identifier of the iNaturalist observation.

![image import](assets/images_bruelhed/field_samples.svg)

*Figure 1: Field_Samples table structure*