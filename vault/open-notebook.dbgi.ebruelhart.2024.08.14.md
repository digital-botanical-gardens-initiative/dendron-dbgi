---
id: 2ulo3n4ukt4xrzs8cu46km3
title: '2024-08-14'
desc: ''
updated: 1723621844177
created: 1723617714925
traitIds:
  - open-notebook-dbgi-ebruelhart
---
# This is Edouard's DBGI daily open-notebook.

Today is 2024.08.14

# Extract schema from a postgresql database
pg_dump -h <IP> -p <port> -d <DB> -U <pg_username> -s -F p -E UTF-8 -f <filename.sql>

# To discuss with PMA about directus DB

- link batches table to ms_data and others
- finite positions true false
- table instruments models en plus
- Pour plus tard: table users
- EMI_Projects to projects (generalize)