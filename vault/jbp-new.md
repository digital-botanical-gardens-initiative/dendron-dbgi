---
id: 8zmuidytyvcdycranykszr2
title: Jbp New
desc: ''
updated: 1782807805075
created: 1782807795866
---


An error has occurred while executing Python code: 

RecursionError: maximum recursion depth exceeded while calling a Python object 
Traceback (most recent call last):
  File "/Users/pma/Library/Application Support/QGIS/QGIS3/profiles/default/python/plugins/qfieldsync/core/cloud_transferrer.py", line 729, in 
    lambda *args, transfer=transfer: self._on_transfer_finished(
  File "/Users/pma/Library/Application Support/QGIS/QGIS3/profiles/default/python/plugins/qfieldsync/core/cloud_transferrer.py", line 766, in _on_transfer_finished
    self.transfer()
  File "/Users/pma/Library/Application Support/QGIS/QGIS3/profiles/default/python/plugins/qfieldsync/core/cloud_transferrer.py", line 749, in transfer
    transfer.transfer()
  File "/Users/pma/Library/Application Support/QGIS/QGIS3/profiles/default/python/plugins/qfieldsync/core/cloud_transferrer.py", line 542, in transfer
    local_filename=str(self.fs_filename),
  File "/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/pathlib.py", line 736, in __str__
    return self._str
RecursionError: maximum recursion depth exceeded while calling a Python object


Python version: 3.9.5 (default, Sep 10 2021, 16:18:19) [Clang 12.0.5 (clang-1205.0.22.11)] 
QGIS version: 3.40.5-Bratislava Bratislava, 8d6d1b54486 

Python Path:
/Applications/QGIS-LTR.app/Contents/MacOS/../Resources/python
/Users/pma/Library/Application Support/QGIS/QGIS3/profiles/default/python
/Users/pma/Library/Application Support/QGIS/QGIS3/profiles/default/python/plugins
/Applications/QGIS-LTR.app/Contents/MacOS/../Resources/python/plugins
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python39.zip
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/matplotlib-3.3.0-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/netCDF4-1.5.4-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/Rtree-0.9.7-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/rasterio-1.1.5-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/numba-0.50.1-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9
/Users/pma/.local/lib/python3.9/site-packages
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/opencv_contrib_python-4.3.0.36-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/cftime-1.2.1-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/patsy-0.5.1-py3.9.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/Fiona-1.8.13.post1-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/GDAL-3.3.2-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/scipy-1.5.1-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/Pillow-7.2.0-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/numpy-1.20.1-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/geopandas-0.8.1-py3.9.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/statsmodels-0.11.1-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/pandas-1.3.3-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/site-packages/pyproj-3.2.0-py3.9-macosx-10.13.0-x86_64.egg
/Applications/QGIS-LTR.app/Contents/MacOS/lib/python3.9/lib-dynload
/Users/pma/Library/Application Support/QGIS/QGIS3/profiles/default/python
/Users/pma/Library/Application Support/QGIS/QGIS3/profiles/default/python/plugins/qfieldsync/libqfieldsync_90eb6640869ad73a996cf4b86db10103dd60f9ec.whl
/Users/pma/QField/cloud/jbp-new

