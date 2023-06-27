---
id: 4exd51dppbtw62p1oekjcry
title: Openbis
desc: ''
updated: 1687874050506
created: 1687871650038
---



# Questions

- For next OpenBis meeting:

- can we display picture from hyperlinks
- can we display maps from lat/lon coordinates
- we cannot use the API (both as user or admin) see issue on Rostyk 
  - the creation of a PAT apparently didn't solve the issue
- have a one2one and a one2many links examples. How to we do this ?
- see for upload of a simple csv from the UI
- try to pass current Directus tables to OpenBis
- updates on QRcodes
- can we locate individual samples in boxes (e.g. 9*9) in racks, in shelves, in a fridge ?
- why can't properties in General panel (e.g. https://openbis-dbgi.labnotebook.ch/openbis/webapp/openbis-ng-ui/#/object-type/SPECIMEN) be modified. For ex pass from multivarchar to hyperlink ?

What do you need from us to advance ?


Found  one error:
Sample type OBSERVATION has no property type ID assigned.

Indeed they are no id field in the OBSERVATION schema (https://openbis-dbgi.labnotebook.ch/openbis/webapp/openbis-ng-ui/#/object-type/OBSERVATION)
Should the headers match exactly ? 
Should ALL fields be present ?
TSV import mention (deprecated) will this not be supported in the future ?




# Ressources

## OpenBis admin interface
https://openbis-dbgi.labnotebook.ch/openbis/webapp/openbis-ng-ui/


## OpenBis user interface
https://openbis-dbgi.labnotebook.ch/openbis/webapp/eln-lims/

## pyOpenBis scripts
https://github.com/digital-botanical-gardens-initiative/openbis_meta_data_entry_registration


