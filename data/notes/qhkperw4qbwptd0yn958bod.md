Lab_extracts table (*Figure 1*) permits to store the laboratory extracts ID with all the associated metadata:

- lab_extract_id: Format dbgi_xxxxxx_xx (sample) or dbgi_batch_blk_xxxxxx (blank). Child of field_sample format dbgi_xxxxxx. This ID corresponds to the label of the physical object laboratory extract. The blanks are generated from the batch ID, by adding the *_blk* part.

- user_created, date_created_user_updated, date_updated: Informations about who created/modified the Lab_extracts informations and when.

- UUID_lab_extract: UUID of the laboratory extract, generated during creation of the physical object.

- field_sample_id: This ID corresponds to the label of the physical object field sample. Provides a link to [[Master-Works.Edouard-Brülhart.Database.Tables.Field_samples]] parent.

- dried_plant_weight: Provides the dried weight used to make the extract. This column is deprecated, replaced by dried_weight.

- extraction_method: Corresponds to the [[Master-Works.Edouard-Brülhart.Database.Tables.Extraction_methods]] used to create this extract. Provides a link the method and the associated informations.

- status: Permits to track the status of the aliquot (example: OK, lost, broken, etc.).

- batch_id: The ID of the solvent batch used. Permits to link the sample to the batch and the associated informations.

- solvent_volume_micro: Stores the solvent volume used to create the extract. This column is deprecated, replaced by solvent_volume.

- mobile_container_id: This ID corresponds to the label of a physical mobile container. Provides a link to [[Master-Works.Edouard-Brülhart.Database.Tables.Mobile_containers]] where the laboratory extract is stored.

- dried_weight: Provides the dried weight used to make the extract.

- solvent_volume: Stores the solvent volume used to create the extract.

- dried_weight_unit: The unit associated to dried_weight. This column is linked to the [[Master-Works.Edouard-Brülhart.Database.Tables.SI_units]] table, where all SI units are provided.

- solvent_volume_unit: The unit associated to solvent_volume. This column is linked to the [[Master-Works.Edouard-Brülhart.Database.Tables.SI_units]] table, where all SI units are provided.

![image import](assets/images_bruelhed/lab_extracts.svg)

*Figure 1: Lab_Extracts table structure*