
# This is Edouard's DBGI daily open-notebook.

Today is 2022.11.24

# To do

# done

Discussed with Pierre-Marie about the future of the sampling. We arrived to a conlusion that it is better to use just QField on the field. It would be good to obtain pictures with all the informations we want in the metadata. With that, we could import super quickly the observations in iNaturalist without any manual operations.

So to resume :

5 different pictures to take with QField :
- A picture of the panel corresponding of the species of the plant
- A picture of the plant in general
- A picture of an outstanding detail of the plant to help the identification (flowers, fruits, ...)
- A picture of the cutting situation (where and what we prelevate for the sampling)
- A picture of the species panel and the falcon with the dbgi code

Already available on QField :
- plant_ID field connected to the list of the JBUF, with the possibility to add new attributes if not available on that list
- spl_code field with a shape constraint and a unique constraint, with the possibility to scan a QR code to optimize and accelerate the process
- Panel field, General field, Detail field, Cut field and Panel+Label field for respectively the 5 pictures cited above. These fields permit to rename the pictures like this : Physalis Peruviana dbgi_000001 "subject of the picture".jpg. This can be used by iNaturalist to identify automatically the species present in the picture.
- x_coord and y_coord to store the location of the sampling

Further to do :
- Replace the location of the photo in the metadata with location of QField then iNaturalist takes the good coordinates for the plant location
- Find a way to store somewhere in the metadata of the picture the dbgi code to stop adding it by hand during or after the import

# Perpectives

# notes

# code

# links

https://docs.qfield.org/how-to/pictures/
https://i.stack.imgur.com/I0vW8.png
https://qfield.org/docs/prepare/add-1-n-pictures.html
https://gis.stackexchange.com/questions/394479/qfield-create-a-form-for-multiple-1n-photos

