---
id: p5e3sf0k1igoy07youueieb
title: Postgres
desc: ''
updated: 1667470629289
created: 1666246320224
---

## Connect to postgresql
>   *psql -U username*

## DATABASE

### list all database
>   *\l*

### Connect to the database
>   *\c database_name*

## TABLE

### Create a new table
>   CREATE TABLE table_name(             
>       column1 datatype,             
>       column2 datatype,        
>       column3 datatype,         
>       .....            
>       columnN datatype,         
>       PRIMARY KEY( one or more columns )          
>   );

#### Generate table layout to create new table before importing csv in the db:
In bash terminal:
>    *head -n 20 table.csv | csvsql --no-constraints --tables table_name*             

This will give an sql command to crate the new table. The datatypes may have to be changed.

#### List tables in a db
>   *\d*

#### Describe each table
>   *\d table_name*

### Drop a table
>   *DROP TABLE name;*

### Insert data in table
⚠️ The table should already exist

#### Manually
>   INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)              
>   VALUES (value1_row1, value2_row1, value3_row1,...valueN_row1),        
            (value1_row2, value2_row2, value3_row2,...valueN_row2),          
            ....;         

No need to specify the columns name if one is adding values for all the columns of the table. But the order of the values should be the same as the column.

#### 



## If http://directus.dbgi.org stops running
>    *setsid nohup npx directus start > log.log 2>&1 &*
>    *echo $! > save_pid.txt*