
Access to directus: http://directus.dbgi.org


## Creating a directus project

https://docs.directus.io/self-hosted/installation/cli.html

## Navigate on directus

The leftmost section of the App is the module bar which includes:

    - Content — The primary way to view and interact with database content
    - User Directory — A dedicated section for the platform's system Users
    - File Library — An aggregate of all files uploaded and managed within the platform
    - Insights — Access to infinitely customizable data dashboards
    - App Guide — A tailored, in-app portal for the platform's concepts, guides, and reference
    - Dendron — Link to the dendron website
    - Mailto — Link to send a mail to the administrator
    - Github — Link to dbgi github repo
    - Settings — An admin-only section for configuring the project and system settings

## To stop http://directus.dbgi.org
```bash
cd /prog/directus_dbgi
kill -9 `cat save_pid.txt`
```

## Notes
This should be runned as root (type sudo su)

## If http://directus.dbgi.org stops running
```bash
cd /prog/directus_dbgi              
setsid nohup npx directus start > log.log 2>&1 &
echo $! > save_pid.txt
```

