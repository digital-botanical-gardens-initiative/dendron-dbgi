---
id: 2ulo3n4ukt4xrzs8cu46km3
title: '2024-08-14'
desc: ''
updated: 1723631801838
created: 1723617714925
traitIds:
  - open-notebook-dbgi-ebruelhart
---
# This is Edouard's DBGI daily open-notebook.

Today is 2024.08.14

# Extract schema from a postgresql database
pg_dump -h <IP> -p <port> -d <DB> -U <pg_username> -s -F p -E UTF-8 -f <filename.sql>

# To discuss with PMA about directus DB

- [x] link batches table to ms_data and others
- [x] finite positions true false
- [x] table instruments models en plus
- [ ] Pour plus tard: table users
- [x] EMI_Projects to projects (generalize)