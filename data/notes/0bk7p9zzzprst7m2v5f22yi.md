
# This is Edouard's DBGI daily open-notebook.

Today is 2023.05.01

# To do

# done

# Perspectives

# notes

The code to change pictures metadata is done and is working. It is available on github: https://github.com/digital-botanical-gardens-initiative/iNaturalist_uploader

The code is made to adapt. It signifies that if we create a new project or a new layer, it will be integrated. If a project is created, don't forget to add the dbgi user as manager, because it is the one that is used to download the files.

What the code is doing:
- Downloads gpkg layers (point layers) and pictures
- Changes pictures names by deleting all problematic symbols and replacing white spaces by underscores
- Detects the CRS (Coordinates reference system) of gpkg files and converts to EPSG:4326, that is the CRS used by inat
- Converts the gpkg files to csv files
- Compresses pictures if they are bigger than 5MB (while loop with little decrease each time, so that the pictures are not compressed to heavily)
- Adds coordinates and dbgi code in pictures metadata to facilitate inat import.

Now stays some questions to finish the job correclty:
- Which cloud to use? (already discussed about nextcloud)
- Where to host ? (On the field collection server or on another server)
- clicbot or not clicbot ? And if clicbot, how to manage it? (As inat won't be happy if they know)
- How to organize pictures on the cloud? (one folder per sample with folder named with dbgi code, one folder per layer, one folder per layer per upload, ...)


# code

# links

