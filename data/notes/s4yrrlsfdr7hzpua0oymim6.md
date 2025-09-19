

# This is Edouard's DBGI daily open-notebook.

Today is 2023.02.15

# Complete setup of the ubuntu server step-by-step
1) Download Ubuntu desktop (in this situation Ubuntu 22.04 LTS Jammy jelly) iso
2) Flash the iso with balena etcher on a USB key. Then plug the USB on the machine where we want to install Ubuntu. Access the bios and boot from the USB key.
3) Configure the ubuntu desktop: choose the keyboard layout you want (in this case switzerland -> switzerland-French, no dead keays), skip the wireless step, choose minimal installation and check "install third-party software for graphics and Wi-Fi hardware and additional media formats". Then choose Erase disk and install ubuntu. Then choose a region (here Zurich) and a username and password. Ubuntu will install and reboot. When is asks, unplug the USB key and press enter. ubuntu is now installed.
4) Now connect to internet (wireless or wired).
5) Take your ubuntu up-to-date by executing in the command line: sudo apt-get update, sudo apt-get upgrade, sudo reboot. The machine will restart and apply all updates.

## Now install and configure postgis
1) Install postgis with: sudo apt-get install postgresql postgis
2) Create a new postgresql database: sudo -u postgres createdb gis_dbgi. This creates a postgis database names gis_dbgi.
3) Enable PosGis extension for the database: sudo -u postgres psql -d gis_dbgi -c "CREATE EXTENSION postgis;"
4) Set up access and permissions for the database: sudo -u postgres psql -d gis_dbgi -c "CREATE USER usr_gis_dbgi WITH PASSWORD '861510Eb.98';" then sudo -u postgres psql -d gis_dbgi -c "GRANT ALL PRIVILEGES ON DATABASE gis_dbgi TO usr_gis_dbgi;" and sudo -u postgres psql -d gis_dbgi -c "GRANT ALL ON SCHEMA public TO usr_gis_dbgi;"
5) change the file pg_hba.conf (/etc/postgresql/14/main/pg_hba.conf) by adding the line "host    all             all             0.0.0.0/0               md5"
6) Restart Postgres: sudo service postgresql restart

## Install pgAdmin4 (graphical interface for postgis)
1) Intall curl: sudo apt install curl
2) Add the GPG Key of pgAdmin: sudo curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add
3) Add the pgAdmin repo: sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && sudo apt update'
4) Install pgAdmin: sudo apt install pgadmin4 -y
5) Configure pgAdmin web interface: sudo /usr/pgadmin4/bin/setup-web.sh After this commande, you have to add an email and a password.
6) Localhost adress to access the web interface: http://127.0.0.1/pgadmin4 here you have to enter the mail and the password set before.




