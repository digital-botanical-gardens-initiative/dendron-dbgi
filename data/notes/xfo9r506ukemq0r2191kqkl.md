
# Connect to postgresql
```bash
psql -U username
```

# DATABASE

## Create new database
```psql
CREATE DATABASE dbname;
```

## list all database
```psql
\l
```

## Connect to the database
```psql
\c database_name
```

# TABLE

## Create a new table
```psql
CREATE TABLE table_name(             
   column1 datatype,             
   column2 datatype,        
   column3 datatype,         
   .....            
   columnN datatype,         
   PRIMARY KEY( one or more columns )          
   );
```

### Generate table layout to create new table before importing csv in the db:
In bash terminal:
```bash
head -n 20 table.csv | csvsql --no-constraints --tables table_name
```          

This will give an sql command to crate the new table. The datatypes may have to be changed.

### List tables in a db
```psql
\d
```

### Describe each table
```psql
\d table_name
```

## Add a column
```psql
ALTER TABLE table_name
ADD COLUMN new_column_name data_type constraint;
```

## Drop a table
```psql
DROP TABLE name;
```

## Insert data in table
⚠️ The table should already exist

### Manually
```psql
INSERT INTO table_name (column1, column2, column3,...columnN)              
VALUES (value1_row1, value2_row1, value3_row1,...valueN_row1),        
         (value1_row2, value2_row2, value3_row2,...valueN_row2),          
            ....;         
```

No need to specify the columns name if one is adding values for all the columns of the table. But the order of the values should be the same as the column.

### From a csv file
```psql
COPY table_name     
FROM 'path/to/csv'       
DELIMITER ';'       
CSV HEADER
```

## Update data in table
```psql
UPDATE table_name      
SET column1 = value1,       
   column2 = value2,       
   ...        
WHERE condition;
```

## Delete data from table
```psql
DELETE FROM table_name        
WHERE condition;
```

## Constraints

### When defining the table

```psql
CREATE TABLE TABLE (
	column_1 data_type,
	column_2 data_type,
	… 
   PRIMARY KEY (column_1, column_2),
   CONSTRAINT constraint_name
   FOREIGN KEY(fk_columns) 
	REFERENCES parent_table(parent_key_columns)
);
```

### After creation

```psql
ALTER TABLE products 
ADD PRIMARY KEY (product_no);

ALTER TABLE child_table 
ADD CONSTRAINT constraint_name 
FOREIGN KEY (fk_columns) 
REFERENCES parent_table (parent_key_columns);
```


## Some useful clauses
### Select statement
The SELECT statement returns all rows from one or more columns in a table.

```psql
SELECT column_1, column_2, ..., column_n    (or * for all columns)     
FROM table_name       
other clauses;
```

### Where clause
If one need to select data that satisfy a specified condition, one can use a WHERE clause as follow:       

```psql
SELECT select_list     
FROM table_name       
WHERE condition        
```

The condition should be true, false or unknown. It can be a boolean expression or a combination of boolean expressions using the AND and OR operators.

# SEQUENCE
## Restart the sequence padding
If one do a mistake in the emi_external_id incremantation and needs to go back in the sequence:
```psql
SELECT setval('samples_padding',1057); #If one want to restart the sequence at 1057
```

# To go further

https://www.postgresqltutorial.com/

