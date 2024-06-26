---
id: kh2f6xm05wppq0zv09mixle
title: Batch
desc: ''
updated: 1719221946523
created: 1718357918761
---
Batch table (*Figure 1*) permits to track the solvent batches in order to monitor possible contaminations coming from the extraction solvent:

- batch_id: Format dbgi_batch_xxxxxx. This ID corresponds to the batch number associated to a solvent.

- user_created, date_created_user_updated, date_updated: Informations about who created/modified the batch informations and when.

- UUID_batch: UUID of the batch, generated during creation of the physical object.

- Reserved: Permits to define if the batch is already in use or not. For example if a batch was created and not used, it can be used for another solvent batch.

- comments: Permits to add informations about this batch, for example known contaminations.

![image import](assets/images_bruelhed/batch.svg)

*Figure 1: Batch table structure*