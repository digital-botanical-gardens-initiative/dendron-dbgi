---
id: 7hhjzqsoanl33skn32r16i4
title: '2022-11-29'
desc: ''
updated: 1669729666713
created: 1669728500125
traitIds:
  - open-notebook-eb
---

# This is Edouard's DBGI daily open-notebook.

Today is 2022.11.29

# To do

# done
Today I finished the processus for the JBN map.

# Reminder

To remind, for the COG (Cloud Optimized Geotiff) translation, I use the pygdal38 (python 3.8), where I install gdal. Then I tranlate the tif to cog tif.

Creation of the environment and installation of gdal (windows):
- open powershell 7
- type : conda create -n pygdal38 python=3.8
- type : conda activate pygdal
- type : conda install -c conda-forge gdal

Conversion of the tif to cog tif :

- Download the validation code [here](https://github.com/rouault/cog_validator/archive/refs/heads/master.zip), unzip it and place the tif inside this folder
- Go to the folder with the cd function, for example : cd .\desktop\DBGI_project\cog_validator-master\
- Test if the tif is a cog tif with the command : python validate_cloud_optimized_geotiff.py *name_of_your_tif*.tif. It should indicate : *name_of_your_tif*.tif is NOT a valid cloud optimized Geotiff.
- type : gdaladdo -r average *name_of_your_tif*.tif 2 4 8 16
- type : gdal_translate *name_of_your_tif*.tif *name_of_your_tif*_cog.tif -co COMPRESS=LZW -co TILED=YES -co INTERLEAVE=BAND
- Now the tif should be translated to cog tif. To control, redo the command : python validate_cloud_optimized_geotiff.py *name_of_your_tif*_cog.tif. It should now indicate : *name_of_your_tif*_cog.tif is a valid cloud optimized GeoTIFF.

You can now take the cog tif to import it on QGIS.

# Perspectives

# notes

# code

# links


