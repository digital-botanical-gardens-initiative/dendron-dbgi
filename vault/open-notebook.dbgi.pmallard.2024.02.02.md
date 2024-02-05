---
id: nb3ha1jadnmfq57rfhpjm0k
title: '2024-02-02'
desc: ''
updated: 1706889397780
created: 1706882211410
traitIds:
  - open-notebook-dbgi-pmallard
---


# This is PMA's DBGI daily open-notebook.

Today is 2024.02.02

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

Diving in the Directus DBGI DB with Edouard

- Before touching anything we check what are the backup mechanisms of the DBGI Directus DB (https://directus.dbi.org)

Edouard suggest that in fact we directly create  Docker container for the directus instance

We check stuff at https://docs.directus.io/self-hosted/quickstart.html

We have a wroking docker compose https://github.com/digital-botanical-gardens-initiative/directus-db
We have got some issues which were solved by https://github.com/directus/directus/issues/20542


psql -U postgres


We export the old dbgi_directus instance 

pg_dump -U directus -d directus_dbgi -f 20240202_directus_dbgi.sql

## Paused

## Done

## Notes

## Todo tomorrow, one day ... or never

###
###
###


## Today I learned that

-