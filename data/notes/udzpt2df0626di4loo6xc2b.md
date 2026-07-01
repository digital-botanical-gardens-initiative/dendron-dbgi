Mass_Spectrometry_Analysis table (*Figure 1*) permits to store the mass_spec_ID with all the associated metadata:

- aliquot_id: Format date_operator_dbgi_xxxxxx_xx_xx (sample) or date_operator_dbgi_batch_blk_xxxxxx_xx (blank). Child of aliquot_id format dbgi_xxxxxx_xx_xx (sample) or dbgi_batch_blk_xxxxxx_xx (blank). This ID corresponds to the label of the virtual object mass spectrometry file.

- user_created, date_created_user_updated, date_updated: Informations about who created/modified the Mass_Spectrometry_Analysis informations and when.

- UUID_mass_spec: UUID of the MS file, generated during creation of the virtual object.

- aliquot_id: This ID corresponds to the label of the physical object aliquot. Provides a link to [[Master-Works.Edouard-Brülhart.Database.Tables.Aliquots]] parent.

- status: Permits to track the status of the MS file (example: OK, lost, corrupted, etc.).

- injection_volume: Stores the volume that has been injected inside the mass spectrometer.

- injection_method: Corresponds to the [[Master-Works.Edouard-Brülhart.Database.Tables.Injection_methods]] used to create this file. Provides a link to the method and the associated informations.

- ms_id: This ID corresponds to the label of the physical object mass spectrometer. Provides a link to [[Master-Works.Edouard-Brülhart.Database.Tables.Mass_spectrometers]] parent.

- converted: A boolean field that informs if the MS file has been converted to a .MZml file.

- added: A boolean field taht informs if the corresponding .MZml file has been added to the data treatment workflow.

![image import](assets/images_bruelhed/mass_spectrometry_analysis.svg)

*Figure 1: Mass_Spectrometry_Analysis table structure*