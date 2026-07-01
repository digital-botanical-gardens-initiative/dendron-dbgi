
Documenting intent to install an extension for the DBGI Directus instance

Why ? Looking for a way to have clickable links. 
Could not install directly from the Directus Market place.

Looking to install https://github.com/utomic-media/directus-extension-field-actions

Following 

https://docs.directus.io/extensions/installing-extensions.html (via the Extensions Directory)

On the COMMONS server, whe have 

The git fetcher script https://github.com/commons-research/commons-server-git-fetcher

Should get 

https://github.com/digital-botanical-gardens-initiative/directus-db


1. Create an Extensions Folder

At the root of your project, create an extensions folder if one doesn't already exist to house your extensions.



The .env file indicates that our project is in DIRECTUS_LOCATION=/docker/directus

```bash
cd /docker/directus
mkdir extensions
```

We also create the following dirs https://github.com/utomic-media/directus-extension-field-actions?tab=readme-ov-file#%EF%B8%8F-installation-manually

And the dl the extension 
wget on the files https://github.com/utomic-media/directus-extension-field-actions/releases/tag/v1.8.4



root@commons-server:/docker/directus/extensions# tree
.
└── directus-extension-field-actions
    ├── dist
    │   ├── api.js
    │   └── app.js
    └── package.json

2 directories, 3 files


(base) allardpm@commons-server:/git_repos/commons-server-git-fetcher$ bash master_script.sh


cd to the directus git 

```bash
(base) allardpm@commons-server:/git_repos/directus-db$
docker compose down
docker compose build
docker compose up -d
```

Yay !!
![](/assets/images/2024-05-09-11-11-49.png)


Now renders 

![](/assets/images/2024-05-09-11-16-38.png)

