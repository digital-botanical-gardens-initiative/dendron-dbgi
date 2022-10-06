---
id: 03jsnsag1qwyg6gtfd83sit
title: Directus
desc: ''
updated: 1665068546037
created: 1665062031188
---

## DIRECTUS

Access to db from localhost: http://directus.dbgi.org

Generate table layout to create new table before importing csv:
*head -n 20 table.csv | csvsql --no-constraints --tables table_name* 

Init new project: npm init directus-project my-project
Update project: npm update
start project: Go to project repository => npx directus start