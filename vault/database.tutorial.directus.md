---
id: cb3sy3qras4bcdr1lujbi7j
title: Directus
desc: ''
updated: 1666246523764
created: 1666246339244
---

Access to db from localhost: http://directus.dbgi.org

Generate table layout to create new table before importing csv:    
*head -n 20 table.csv | csvsql --no-constraints --tables table_name* 

Init new project: *npm init directus-project my-project*    
Update project: *npm update*     
start project: Go to project repository => *npx directus start*    