

# This is PMA's DBGI daily open-notebook.

Today is 2024.05.28

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

## Paused

## Done

## Notes


When you start from scratch onm the emi-mono-repo

1. revert 

If you have pulled 

1. docker kill of the pg

docker ps 
docker kill <container_id>

remove the database_tmp dir (you will need to be sudo for this)

rm -rf web/database_tmp

from web dir

docker compose -f docker-compose.yml up -d --build -V
Move to backend

```bash
python generate_models.py
```

1. (from backend) 

```bash
diesel migration revert --all
```







## Todo tomorrow, one day ... or never

###
###
###


## Today I learned that

-