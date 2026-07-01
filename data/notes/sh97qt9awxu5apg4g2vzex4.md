
Diving in the Directus DBGI DB with Edouard

- Before touching anything we check what are the backup mechanisms of the DBGI Directus DB (https://directus.dbi.org)

Edouard suggest that in fact we directly create  Docker container for the directus instance

We check stuff at https://docs.directus.io/self-hosted/quickstart.html

We have a wroking docker compose https://github.com/digital-botanical-gardens-initiative/directus-db
We have got some issues which were solved by https://github.com/directus/directus/issues/20542


psql -U postgres


We export the old dbgi_directus instance 

pg_dump -U directus -d directus_dbgi -f 20240202_directus_dbgi.sql


Monday 05 February 2024


We add a pg database to pgadmin
- dashboard 
- add new server



To backup a db, open it right click backup (tar compression)

Then restore the image on the new db


On the server side :

- sudo docker ps
- sudo docker stop xxxxxxxxx
- sudo docker rm xxxxxxxxx
- sudo docker image ls
- sudo docker rmi xxxxxxxxx


We then remove the docker volumes

sudo docker volume ls
sudo docker volume rm xxxxxxxxx


