

# This is Luca Cappelletti's DBGI daily open-notebook.

Today is 2024.02.14

## Todo today

* Continue to work on making executable SQL the Diesel migrations for the emi-monorepo

## Done

* Refactored all Diesel migrations to make them executable
* Identified some missing tables to be added still to the Diesel migrations

## Todo tomorrow

* Add the missing tables to the Diesel migrations

## Today I learned that

- We can undo diesel migrations only if we do not rename the directories. If we rename the directories, we need to manually undo the migration in the database or, as this is just a test run, delete the database and recreate it from scratch.
- To undo all the migrations, we can use `diesel migration revert --all`
- The number or the timestamp on the left of a Diesel migration directory is used to enforce the order of the migrations. If we rename the directory, we need to manually update the number or the timestamp to enforce the correct order of the migrations.