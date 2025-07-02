

## Deploying   a Qfield instance

At the moment there is one living on the commons server

https://github.com/digital-botanical-gardens-initiative/QFieldCloud

Cloned current in commons /git_repos

The instruction to fetch 

the .env is saved in /media/share/mapp/private/dbgi-files-backup/QfieldCloud/.env

The NGINX conf is saved in https://github.com/digital-botanical-gardens-initiative/emi-collection-config

## Access the VM


(base) ➜  ~ ssh -Y root@emi-collection.unifr.ch

Certificate are living in /etc/nginx/ssl

## Nextcloud

emi-collection.unifr.ch/nextcloud

Same for nextcloud
(base) allardpm@commons-server:/git_repos/NextCloud$ cp .env /media/share/mapp/private/dbgi-files-backup/nextcloud/

Manage pictures and Qfield csv files


## QGis

Open QGis
Download QfieldSync
Download DBGI plugin


## we have an issue with the gpkg creator
plugin is beeing rebuilt
URL pointing to the new directus emi-collection instance are modified in 

https://github.com/digital-botanical-gardens-initiative/gpkg-creator/commit/8c49d71f7f86c984b60ddf3ddb8023477e4ae3e0
This is the repo for the DBGI plugin

Now we need to publish the plugin

For this you need to create an account at https://www.osgeo.org/community/getting-started-osgeo/osgeo_userid/


Go to directus to create a new project




## Todo

Add colin and marco to the emi-collection VM

- [ ] Add colin and marco to the emi-collection VM
- [ ] Create a cronjob user to gather all cronjobs
- [ ] Setup a common KeePassXC db for all EMI passwords
- [ ] Setup a SMTP email server for the EMI



