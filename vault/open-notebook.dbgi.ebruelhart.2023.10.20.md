---
id: 83rp8vpv8p243879ht5pv8e
title: '2023-10-20'
desc: ''
updated: 1697808993036
created: 1697808007442
traitIds:
  - open-notebook-ebruelhart
---

# This is Edouard's DBGI daily open-notebook.

Today is 2023.10.20

# To discuss

## Application development is going well:
- Falcon mode is ready
- Weighting mode is ready
- Extraction mode is ready
- Aliquots mode is fast ready (still needs to manage blanks)
- Injection mode still needs to be discussed
- Signaling mode is ready (but not tested in application)
- Find mode still needs to be implemented
- Tracking mode still needs to be developed
- Reatribution mode still needs to be developed, but it's not a big deal. It just has to replace the actual container of the sample by the new one, and all the system will manage the changes.

## But some questions remain:
- How to manage extraction blanks? For now, blanks are stored in a different collection as lab extracts, because lab extracts elements need to be linked to field samples. And as blanks are not field samples I prefered to implement them in another collection. But this situation leads to a question: how to manage blanks aliquots for the mass spec injection?
- How to organize sample list creation for mass spec analysis? First, which name for the reads. Second, how to manage different LC/GC configurations? Some solutions are possible, like creating a template and let the user add a new configuration if needed. But how to format this? Which types of LC/GC racks exist?
- For tracking mode, how can we manage this? My idea would be to add a mode to create space labels like rooms, fridges, etc. If the application is connected to a brady printer, it will print a label to stick directly on the space. But at which level do we have to go and what for names do we have to give? Then, the user will scan this code, the code of the sample he will put on this space and the link will be created in the database.
- For signaling mode, would it be good to add deletion of full boxes, racks? I think not, because it is not 100% sure that the content of the box/rack is up to date. It could lead to bad signaling.