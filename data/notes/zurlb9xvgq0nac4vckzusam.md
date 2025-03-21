
# Monorepo : Backend
Here we describe the basic structure of the backend of the [EMI monorepo](https://github.com/earth-metabolome-initiative/emi-monorepo/tree/web).

## `constraint_checkers`
This folder contains the metaprogramming code to check the correctness of the database, and then to generate the rust files depending on the constraints.

## `db_data`
Folder containing csv files with the data that will be inserted into the database. For example, the file `countries.csv` contains the list of all available/allowed countries in the database.

## `migrations`
Folder containing the SQL files that are used to create the database schema. The files are numbered in order of execution. 
Here is a brief description of the types of tables:
- `create_*_table` creates a table in the database
- `create_*_sequential_index` changes the `id` column of the table from INTEGER to SERIAL
- `populate_*_table` populates the table with data from the csv files in the `db_data` folder
- `create_*_gin_index` creates an index to allow for searching in the table
- `create_*_can_x_trigger` contain a function that takes a user ID (INTEGER) and the primary keys and returns a BOOLEAN indicating whether the user can {operation} the row

## `src`
### `api`
#### `oauth`
Directory containing the code for the OAuth2.0 authentication and its dependencies (login/logout, login providers, refresh tokens, etc).  

#### `ws`
Directory containing the code for the websockets.

### `database`
This directory contains the code for the database connection between the backend and the database. We are using the [Diesel](https://diesel.rs/) crate to interact with the database. Most of the code in this directory is generated automatically by the `constraint_checkers` package.

