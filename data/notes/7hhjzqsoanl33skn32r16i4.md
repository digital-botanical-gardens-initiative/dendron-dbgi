
# This is Edouard's DBGI daily open-notebook.

Today is 2022.11.29

# To do

# done
Today I finished the processus for the JBN map.

# Reminder

To remind, for the COG (Cloud Optimized Geotiff) translation, I use the cogprep where I installed gdal

Creation of the environment and installation of gdal (windows):
- open anaconda3 prompt

- type : conda create --name cogprep

- type : conda activate cogprep

- type : conda install -c conda-forge gdal. It should install without error the 3.6.1 version of gdal

Conversion of the tif to cog tif :

- Download the validation code [here](https://github.com/rouault/cog_validator/archive/refs/heads/master.zip), unzip it and place the tif inside this folder

- On anaconda3 prompt go to the folder with the cd function, for example : cd .\desktop\DBGI_project\cog_validator-master\

- Test if the tif is a cog tif with the command : python validate_cloud_optimized_geotiff.py *name_of_your_tif*.tif. It should indicate : *name_of_your_tif*.tif is NOT a valid cloud optimized Geotiff.

- type : gdal_translate *name_of_your_tif*.tif *name_of_your_tif*_cog.tif -of COG -co COMPRESS=LZW

- Now the tif should be translated to cog tif. To control, redo the command : python validate_cloud_optimized_geotiff.py *name_of_your_tif*_cog.tif. It should now indicate : *name_of_your_tif*_cog.tif is a valid cloud optimized GeoTIFF.

You can now take the cog tif to import it on QGIS.

If you have warnings concerning the projection used (EPSG:2056), you can do an extra operation as following :
- gdalwarp *name_of_your_tif*.tif *name_of_your_tif*_wgs84.tif -t_srs WGS84

- gdalwarp *name_of_your_tif*_wgs84.tif *name_of_your_tif*_2056.tif -t_srs EPSG:2056

- Then you can make the gdal_translate with the *name_of_your_tif*_2056.tif as input

# Perspectives

# notes

# code

# links
https://opensourceoptions.com/blog/how-to-install-gdal-with-anaconda/
https://dev.to/ibrahimawadhamid/large-geotiff-raster-files-on-geoserver-using-cog-546h
https://github.com/rouault/cog_validator

