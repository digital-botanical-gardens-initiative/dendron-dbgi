

[[old-methodology]]
# Questions

## Discussed 

- we cannot use the API (both as user or admin) see issue on Rostyk 
  - the creation of a PAT apparently didn't solve the issue

The o.set_token() function should be used
`o.set_token('pierre-marie.allard_AT_unifr.ch-XXXXXXXXXXX', save_token=True)` 

- have a one2one and a one2many links examples. How to we do this ?

Caterina : this is not doable at the moment through the GUI. Or rather it is but manually.
In our case we should take advantage of the pyOpenBis. 
This is fundamental for the DBGI project. We need to verify that handling of such linked tables is achievable in OpenBIS in a convenient manner. See Todo section for more details.

- can we display maps from lat/lon coordinates

No. No geojson handling. We could by screenshoting the maps.
Or maybe bettre hyperlinking to an external mapping (e.g. google maps) service

- see for upload of a simple csv from the UI
TSV is deprecated. This should be done using the Excel template. Caterina will discus with the dev team if a csv import can be maintained.

- can we locate individual samples in boxes (e.g. 9*9) in racks, in shelves, in a fridge ?

Yes. What is not doable for now is to define the place of a box of viales inside a rack.
An intermediate level should be implemented.

- can we barcode a box of vials ?

No. To be implemented.

- Should the headers match exactly ? 
yes 

- Should ALL fields be present ?

NO if they aren't defined as mandatory in the Object type/OBSERVATION
But the depending on the field type they cannot be filled for ex with NA if the field type is digit.




## Not discussed / for next time
- can we display picture from hyperlinks
- updates on QRcodes
- why can't properties in General panel (e.g. https://openbis-dbgi.labnotebook.ch/openbis/webapp/openbis-ng-ui/#/object-type/SPECIMEN) be modified. For ex pass from multivarchar to hyperlink ?


# Todo

- try to pass current Directus tables to OpenBis



# Varia

What do you need from us to advance ?


Found  one error:
Sample type OBSERVATION has no property type ID assigned.

Indeed they are no id field in the OBSERVATION schema (https://openbis-dbgi.labnotebook.ch/openbis/webapp/openbis-ng-ui/#/object-type/OBSERVATION)


# Todo 

## UniFr

- create a schema of the tables we want to connect
- minimal example of each table
- excel sheet for each table
- property name / property type for each table

`CODE` is UPPERCASE and _ instead of space, no special chracter
`label` should match the header 
`Description`: free text 
`DATA TYPE`: their is a list (where ?)


## OpenBIS team

- produce pyOpenBis scripts and have the schema  and related tables proposed by UniFr implemented in the OpenBIS instance.
- implementation of barcodes possibilities at the "box of vials" levels
- possibility to track the localisation of boxes of vials within a rack. Creation of an additional and intermediate level in the storage tracking system in openBis.




# Ressources

## OpenBis admin interface
https://openbis-dbgi.labnotebook.ch/openbis/webapp/openbis-ng-ui/
## OpenBis user interface
https://openbis-dbgi.labnotebook.ch/openbis/webapp/eln-lims/
## pyOpenBis scripts
https://github.com/digital-botanical-gardens-initiative/openbis_meta_data_entry_registration


oBIS

is another API



## Upcoming trainings


https://openbis.ch/index.php/docs/admin-documentation/new-entity-type-registration/
 
openBIS admin training: 

https://ethz.ch/staffnet/en/it-services/catalogue/support-training/it-training/courses/details.9890o.html
 
openBIS User Training 

https://ethz.ch/staffnet/en/it-services/catalogue/support-training/it-training/courses/details.9925o.html
 


