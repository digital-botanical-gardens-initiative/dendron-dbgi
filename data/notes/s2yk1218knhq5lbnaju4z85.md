
# This is Edouard's DBGI daily open-notebook.

Today is 2023.04.18

# To do

# done

# Perspectives

# notes

Today I succeeded to add the DBGI code automatically in iNaturalist by modifying the pictures metadata. Here is how to do it:

exiftool -Subject="dbgi_123456" ./test_img/IMG_20221103_125701.jpg

And here how to add coordinates to the pictures:

exiftool -XMP:GPSLongitude="7.211111"  -XMP:GPSLatitude="46.2000000"  -GPSLongitudeRef="West" -GPSLatitudeRef="North" ./test_img/IMG_20221103_125701.jpg

I have actually a problem with the set up of the API to generate automatically the csv from QField. It seems that the QFieldCloud set-up is not properly made to manage the API. I'll see that later.

The DBGI code is no more added in the observation field section, but in the tags section. I discussed with Pierre-Marie and Emmanuel and it's not so bad, I just have to add the identifier as a prefix in the format emi_external_id:dbgi_123456. I have to discuss with Maelle, because this change will affect the export bot for iNaturalist.

The goal is then to create automated scripts that will execute automatically once a day. This will permit to treat the pictures automatically, and so improve a lot the iNaturalist import. The pictures will be processed (add of coordinates and DBGI code and a compression process if they are bigger than 5MB) and then stored on a cloud instance (probably Nextcloud, that I can self-host on my server). With that, the iNaturalist import can be done with a click bot, or rapidly done by hand.

It's all for today.

# code

# links

