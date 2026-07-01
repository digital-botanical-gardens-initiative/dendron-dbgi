
# This is Maëlle's DBGI daily open-notebook.

Today is 2022.09.22

## TODO

- [x]    Check current db structure / AirTable
- [x]    Explore nocoDb
- [x]    Better opensource alternative to nocodb and airtable?
- [ ]    Database backups


## Pros - Cons of softwares

### ❓ nocoDb

* https://www.nocodb.com/
* Open-source (MIT License)
* **Pricing**: Free
* **Row limitations**: None

        -❌ copy-paste
        -❌ phone app
        -❌ scroll
        -✔️ user friendly interface
        -✔️ Import feasible from airtable
        -❌ SQL queries execution

### ❌ OpenOffice Base

* https://www.openoffice.org/product/base.html
* open-source (Apache license 2.0)   
* **Pricing**: Free
* **Row limitations**: 1,048,576 ?

        -❓ user friendly interface
        -✔️ copy-paste
        -❌ phone app
        -❌❌ Can't change column name 

### ❓ dBeaver

* https://dbeaver.com/
* open-source (Apache license 2.0)
* **Pricing**: https://dbeaver.com/buy/
* **Row limitations**: None?

        -✔️ copy-paste
        -✔️ scroll
        -✔️ SQL queries execution
        -✔️ Triggers
        -❓ user friendly interface
        -❌ No free version
        -❌ phone app

### ❌ Baserow

* https://baserow.io/
* open-source (License: https://github.com/bram2w/baserow/blob/master/LICENSE)
* **Pricing**: https://baserow.io/pricing
* **Row limitations**: https://baserow.io/pricing

        -✔️ user friendly interface
        -✔️ copy-paste
        -❌ Triggers
        -❌ SQL queries execution 
        -❌ phone app
        -❌ online
        - Basically same as AirTable but without apps

### ❓ Grist

* https://www.getgrist.com/
* open-source (Apache License 2.0)
* **Pricing**: https://www2.getgrist.com/pricing
* **Row limitations**: https://www2.getgrist.com/pricing

        -✔️ user friendly interface
        -✔️ copy-paste
        -✔️ scroll
        -❓ Triggers
        -❌ online
        -❌ phone app
                -✔️ But nice web version on smartphone
        -✔️ history 

### ❓ Directus

* https://directus.io/
* open-source (GNU GENERAL PUBLIC LICENSE)
* **Pricing**: https://directus.io/pricing/
* **Row limitations**: None

        -❌ Cloud
        -✔️ Scroll (1000)
        -✔️ Triggers
        - ~ user friendly interface
                -❌ Not easy to import from existing table
        -❌ copy-paste
                -✔️ But easy export to csv/Json/xml where you can choose which column and which items
        -❌ phone app
                -✔️ But nice web version on smartphone
        -✔️ Image as an item
        -✔️ Possibility to create a dashboard
        -✔️ Can be linked to a db (https://directus.io/#databases)
                -✔️ Backup/history via db
                - https://learndirectus.com/how-to-backup-directus/
                - -> Resolve importation problem
        -✔️ Allows Multilingual app
        