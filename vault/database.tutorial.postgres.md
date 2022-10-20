---
id: p5e3sf0k1igoy07youueieb
title: Postgres
desc: ''
updated: 1666247080225
created: 1666246320224
---

Generate table layout to create new table before importing csv:    
*head -n 20 table.csv | csvsql --no-constraints --tables table_name* 



*No need to do that if http://directus.dbgi.org is running*    
Init new project: *npm init directus-project my-project*    
Update project: *npm update*     
start project: Go to project repository => *npx directus start*  