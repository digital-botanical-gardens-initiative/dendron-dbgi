---
id: xfo9r506ukemq0r2191kqkl
title: Postgres
desc: ''
updated: 1669276545733
created: 1666246320224
---

# Connect to postgresql
>   *psql -U username*

# DATABASE

## list all database
>   *\l*

## Connect to the database
>   *\c database_name*

# TABLE

## Create a new table
>   CREATE TABLE table_name(             
>       column1 datatype,             
>       column2 datatype,        
>       column3 datatype,         
>       .....            
>       columnN datatype,         
>       PRIMARY KEY( one or more columns )          
>   );

### Generate table layout to create new table before importing csv in the db:
In bash terminal:
>    *head -n 20 table.csv | csvsql --no-constraints --tables table_name*             

This will give an sql command to crate the new table. The datatypes may have to be changed.

### List tables in a db
>   *\d*

### Describe each table
>   *\d table_name*

## Drop a table
>   *DROP TABLE name;*

## Insert data in table
⚠️ The table should already exist

### Manually
>   INSERT INTO table_name (column1, column2, column3,...columnN)              
>   VALUES (value1_row1, value2_row1, value3_row1,...valueN_row1),        
            (value1_row2, value2_row2, value3_row2,...valueN_row2),          
            ....;         

No need to specify the columns name if one is adding values for all the columns of the table. But the order of the values should be the same as the column.

### From a csv file
>   COPY table_name     
>   FROM 'path/to/csv'       
>   DELIMITER ';'       
>   CSV HEADER

## Update data in table
>   UPDATE table_name      
>   SET column1 = value1,       
>       column2 = value2,       
>       ...        
>   WHERE condition;

## Delete data from table
>   DELETE FROM table_name        
>   WHERE condition;

## Some useful clauses
### Select statement
The SELECT statement returns all rows from one or more columns in a table.

>   SELECT column_1, column_2, ..., column_n    (or * for all columns)     
>   FROM table_name       
>   other clauses;


### Where clause
If one need to select data that satisfy a specified condition, one can use a WHERE clause as follow:       

>   SELECT select_list     
>   FROM table_name       
>   WHERE condition        

The condition should be true, false or unknown. It can be a boolean expression or a combination of boolean expressions using the AND and OR operators.

## If http://directus.dbgi.org stops running
>    *cd /prog/directus_dbgi*
>    *setsid nohup npx directus start > log.log 2>&1 &*
>    *echo $! > save_pid.txt*