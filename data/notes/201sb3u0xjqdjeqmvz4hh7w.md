

# This is Maëlle's DBGI daily open-notebook.

Today is 2022.12.22


## TODO

- [x] link naturalist id pyinat-samples => solve problem => always the same id
- [x] autoincrementation id
- [ ] tuto for dummy

## CODE

### autoincrementation

```psql
CREATE SEQUENCE 'xxx';

SELECT setval('xxx',1057); #begin the sequence at 1057

ALTER TABLE samples                                       
ALTER COLUMN "DBGI_SPL_ID"
SET DEFAULT 'dbgi_' || lpad(nextval('xxx')::VARCHAR,6,'0'); #pad the sequence


ALTER TABLE samples                                       
ADD CONSTRAINT valid_id_check
CHECK ("DBGI_SPL_ID" ~ '^\w+_[0-9]+$'); #check that the id is correct
```

## NOTES

Tried to import a csv without setting the dbgi_spl_id => the id is autoincremented when imported!


## TODO NEXT

