
MS-sample-list-creator is a software that creates [[Master-Works.Edouard-Brülhart.Mass-spectrometry]] sample lists and adds the MS related metadata to the [[Master-Works.Edouard-Brülhart.Services.Directus]] database:

- Asks directus credentials and needed metadata (operator, mass spectrometer ID, LC rack size, injection volume, data directory, method, etc)

- Asks the name of the rack the user wants to fill

- Permits to enter aliquots IDs manually, or to scan them using an external USB QR code scanner

- Once all aliquots have been entered, generates a CSV with all the positions and needed metadata and adds these metadata do [[Master-Works.Edouard-Brülhart.Services.Directus]] database

The software can be downloaded [here](https://github.com/digital-botanical-gardens-initiative/ms-sample-list-creator/releases).

The source code is available [here](https://github.com/digital-botanical-gardens-initiative/ms-sample-list-creator).