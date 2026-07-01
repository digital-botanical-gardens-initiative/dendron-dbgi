
Pictures_manager scripts permits to collect and treat metadata and pictures coming from [[Master-Works.Edouard-Brülhart.Services.QField]]:

- It downloads the collection layers, convert them in CSV files

- Checks that geographic coordinates are in the correct format, and if not convert them to suit the global geographic system (EPSG:4026)

- Downloads the pictures and delete them from the collection server in order to keep the collection server clean

- Controls if pictures are small enough, and if not compresses them

- Add time, geographic coordinates and EMI code in the pictures metadata to make them ready for iNaturalist upload

- Adds all these related metadata to the [[Master-Works.Edouard-Brülhart.Services.Directus]] database

- Creates a copy of these pictures (possiblity to share them using nextcloud using the script)

- Creates one folder for each observation containing the related pictures, that serve as input for the [[Master-Works.Edouard-Brülhart.Scripts.Python.iNaturalist_import_bot]] script

You can find the source code [here](https://github.com/digital-botanical-gardens-initiative/Pictures_manager).