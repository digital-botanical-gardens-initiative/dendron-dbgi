---
id: trobxy1y9ercdkmgxm3h8pv
title: '2022-11-11'
desc: ''
updated: 1668174488712
created: 1668169944222
traitIds:
  - open-notebook-mw
---


# This is Maëlle's DBGI daily open-notebook.

Today is 2022.11.11

## CODE
#### Change dbgi_id
> UPDATE samples                                     
> SET "DBGI_SPL_ID" = REPLACE("DBGI_SPL_ID",'DBGI_SPL_','dbgi_');

#### Change column name
> ALTER TABLE pyinat
> RENAME COLUMN DBGI_ID TO EMI_EXTERNAL_ID;

#### Trigger updated_on column
> CREATE OR REPLACE FUNCTION updated_on_function()          
> RETURNS TRIGGER LANGUAGE plpgsql         
> AS $$      
> BEGIN         
> IF OLD!=NEW THEN        
> NEW.updated_on = now();        
> END IF;                
> RETURN new;        
> END        
> $$;


> CREATE TRIGGER updated_on_trigger      
> AFTER UPDATE ON pyinat      
> FOR EACH ROW          
> EXECUTE PROCEDURE updated_on_function();


