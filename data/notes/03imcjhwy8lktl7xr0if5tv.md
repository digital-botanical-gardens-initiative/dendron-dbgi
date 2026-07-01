# This is Edouard's DBGI daily open-notebook.

Today is 2025.02.24

# Rethinking connection between EMI services

## Services

- QFieldCloud: To collect on the field. Smartphone -> QField -> QFieldCloud

- iNaturalist: Community curation. Automatic upload from QFieldCloud

- Nextcloud: Pictures and CSV storage. Automatic upload from QFieldCloud

- Directus: Database. Automatic upload from QFieldCloud and iNaturalist

## Processes

- QFieldCloud: Service is running and ready to collect

- iNaturalist: Automatic upload made by pictures-manager

- Nextcloud: Pictures automatic upload made by pictures-manager, CSV automatic upload made by qfieldcloud-fetcher

- Directus: QFieldCloud data automatically fetched by qfieldcloud-fetcher, iNaturalist data automatically fetched by inaturalist-fetcher

## Repositories

### Existing

- NextCloud

- QFieldCloud

- directus-db

- gpkg-creator

- iNaturalist_import_bot

- directus-requests

- label_creator

- inat_commented_directus

- CSV-storage

- ms-sample-list-creator

- qfieldcloud-fetcher

- inat-fetcher

- label-creator

- directus-migration-scripts

- ms-metadata-fetcher

- pictures-manager

- Pictures_manager

### To delete

- iNaturalist_import_bot: Transfer and modify

- directus-requests: Useless, check for resources and delete

- label_creator: replaced by label-creator. Check for resources and delete

- inat_commented_directus: Useless, integrate this to inat-fetcher

- CSV-storage: Useless, check for resources and delete

- Pictures_manager: Useless, check for resources and delete

- DBGI_tracking_android: Useless, check for resources and delete

### To keep with status

- NextCloud: Running and working

- QFieldCloud: Running and working

- label-creator: Working

- gpkg-creator: Working

- ms-sample-list-creator: Working

- directus-db: Running but to clarify (prod, dev, etc) -> deleted and replaced by 3 repos (Directus-prod, Directus-dev and directus-backup)

- qfieldcloud-fetcher: To check and improve

- inat-fetcher: To check and improve

- ms-metadata-fetcher: To check and improve

- pictures-manager: To check and improve

- inaturalist-import-bot: Convert old iNaturalist_import_bot to this one

- directus-migration-scripts: Paused for now


