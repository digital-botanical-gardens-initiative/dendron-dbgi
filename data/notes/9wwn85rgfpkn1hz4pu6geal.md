Mass_spectrometers table (*Figure 1*) stores the available mass spectrometers for the EMI project:

- ms_id: Format ms_xxxxxx. This ID corresponds to the label of the physical object mass spectrometer.

- user_created, date_created_user_updated, date_updated: Informations about who created/modified the mass spectrometer informations and when.

- UUID_mass_spec: UUID of the mass spectrometer, generated during creation of the physical object.

- ms_description: Description of the mass spectrometer. For example MS model, chromatography method (LC, GS), chromatography model, etc.

- university_location: Where the mass spectrometer is located. Inferred from the [[Master-Works.Edouard-Brülhart.Database.Tables.Universities]] table.

![image import](assets/images_bruelhed/mass_spectrometers.svg)

*Figure 1: Mass_spectrometers table structure*