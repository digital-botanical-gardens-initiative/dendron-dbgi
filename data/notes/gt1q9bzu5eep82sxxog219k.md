
Once aliquots are ready, they can be analyzed through mass spectrometry.

To proceed, we created a software that permits both to create a mass spectrometry sample list and add mass spectrometry metadata to the database. This software, called [[Master-Works.Edouard-Brülhart.Services.MS-sample-list-creator]], takes as entry aliquots IDs and retrieves a CSV file containing the freshly created list. The list can then be used to launch a mass spectrometry analyzis.

During this process, some metadata as injection volume, MS file, injection method, date, etc. are collected and add in the database.