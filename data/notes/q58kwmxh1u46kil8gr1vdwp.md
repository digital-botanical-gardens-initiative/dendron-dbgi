Aliquots table (*Figure 1*) permits to store the aliquot ID with all the associated metadata:

- aliquot_id: Format dbgi_xxxxxx_xx_xx (sample) or dbgi_batch_blk_xxxxxx_xx (blank). Child of lab_extract_id format dbgi_xxxxxx_xx (sample) or dbgi_batch_blk_xxxxxx (blank). This ID corresponds to the label of the physical object aliquot.

- user_created, date_created_user_updated, date_updated: Informations about who created/modified the aliquots informations and when.

- UUID_aliquot: UUID of the aliquot, generated during creation of the physical object.

- lab_extract_id: This ID corresponds to the label of the physical object laboratory extract. Provides a link to [[Master-Works.Edouard-Brülhart.Database.Tables.Lab_extracts]] parent.

- status: Permits to track the status of the aliquot (example: OK, lost, broken, etc.).

- aliquot_volume_microliter: Stores the volume that has been prelevated in the parent laboratory extract.

- mobile_container_id: This ID corresponds to the label of a physical mobile container. Provides a link to [[Master-Works.Edouard-Brülhart.Database.Tables.Mobile_containers]] where the aliquot is stored.

![image import](assets/images_bruelhed/aliquots.svg)

*Figure 1: Aliquots table structure*