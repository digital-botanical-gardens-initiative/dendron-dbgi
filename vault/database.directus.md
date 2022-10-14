---
id: u7a3p64b6i83w4tt6u9jpta
title: Directus
desc: ''
updated: 1665406742323
created: 1665062031188
---

Access to db from localhost: http://directus.dbgi.org

Generate table layout to create new table before importing csv:    
*head -n 20 table.csv | csvsql --no-constraints --tables table_name* 

Init new project: *npm init directus-project my-project*    
Update project: *npm update*     
start project: Go to project repository => *npx directus start*    
