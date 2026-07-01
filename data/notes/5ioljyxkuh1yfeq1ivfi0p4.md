

# This is Maëlle's DBGI daily open-notebook.

Today is 2022.12.19


## TODO

- [x] link naturalist id pyinat-samples
- [ ] autoincrementation id
- [ ] tuto for dummy

## CODE
#### Autoincrementation id:
https://stackoverflow.com/questions/27121196/how-to-auto-increment-alpha-numeric-value-in-postgresql

```psql
CREATE SEQUENCE xxx;
CREATE TABLE samples_2(EMI_external_ID text PRIMARY KEY 
                                    CHECK (EMI_external_ID ~ '^\w+_[0-9]+$' ) 
                                    DEFAULT 'DBGI_'  || lpad(nextval('xxx')::text,6,'0'), 
                      Reserved boolean,
                      BG VARCHAR(25),
                      inaturalist_id numeric,
                      Comment text,
                      sample location VARCHAR(25),
                      QR uuid,
                      FOREIGN KEY(QR) REFERENCES directus_files(id) ON DELETE SET NULL);
```

==> Works if only 'DBGI_' ids

Should maybe create 2 columns to concat => one with autoincremented integer, second with project id (eg.DBGI)

#### link naturalist id pyinat-samples
```psql
UPDATE samples
SET inaturalist_ID = pyinat.ID
FROM pyinat WHERE samples."DBGI_SPL_ID" = pyinat.EMI_external_ID;
```

Then create a trigger to do that automatically:

```psql
CREATE OR REPLACE FUNCTION update_emi_id()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE samples
  SET inaturalist_ID = pyinat.ID
  FROM pyinat 
    WHERE samples."DBGI_SPL_ID" = pyinat.EMI_external_ID;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_emi_id_trigger
AFTER UPDATE OF EMI_external_ID ON pyinat
FOR EACH ROW
EXECUTE PROCEDURE update_emi_id();
```



## NOTES

## TODO NEXT

- [ ] tuto for dummy => until 23.01
