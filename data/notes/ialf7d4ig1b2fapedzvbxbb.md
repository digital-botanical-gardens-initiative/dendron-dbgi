

# This is Audrey's DBGI daily open-notebook.

Today is 2023.06.27

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions

###
###

## Doing

## Paused

## Done
- [x] Meeting Orléans 

## Notes

#create a new column with a score indicator about the similarity off the 
def calculate_score(inchikey1, inchikey2, inchikey3):
    if inchikey1 and inchikey2 and inchikey3:
        if inchikey1 == inchikey2 == inchikey3:
            return 3
        elif inchikey1 == inchikey2 or inchikey1 == inchikey3 or inchikey2 == inchikey3:
            return 2
        else:
            return 1
    else:
        return 1


## Todo tomorrow

###
###
###


## Today I learned that

- 