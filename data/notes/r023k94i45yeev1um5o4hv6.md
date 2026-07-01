
# This is Edouard's DBGI daily open-notebook.

Today is 2022.12.23

# To do

- Relabel the falcon with the bigger labels

- Try to host correctly the dbgi maps with geoserver

- Prepare the inserts for the mass spec analysis

- Optimize the communication between QGIS and iNaturalist

- ~~Find a way to update CSVs with other CSVs without loosing information marked~~

# done

- Find a way to update CSVs with other CSVs without loosing information marked

# Perspectives

# notes
To update CSV from QField you just have to download the CSV from QGIS on the git folder on your computer (QField_csv). Pay attention to replace the correct input CSV (for JBUF system it's System_JBUF.csv for example). If the input CSV has not a correct name, it will not be recognized by the Rcode. When it's done, you just have to execute the *Coordinates_convertor.R* code, and all will be made automatically to update the final CSV called *WGS84_System_JBUF.csv*. Pay attention that excel breaks all the process by replacing commas by semicolon. So I found a better way to open and modify CSVs without corrupting it, that is *janisdd.vscode-edit-csv*. You can download it directly from VS code. When a CSV is opened in VS code, a little button in the full right of the VS code windows bar appears saying *Edit csv*. If you click on it a CSV editor will open, very intuitive and sufficient to make the operations needed, like entering the weight of the plants. Then you just have to save directly in the interface, then push and the modifications are saved. The RCode then is made to not overwrite these informations, but to update the Reference CSV with the CSV containing new harvested samples.

There is a TSV file created too with the same name. Please don't edit it. All that is edited in the TSV file will be lost. To make modifications, just use the CSV file.

# code

# links


