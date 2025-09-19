
# This is Maëlle's DBGI daily open-notebook.

Today is 2022.11.24


## TODO
- [x] Meeting with pma at 10am
- [ ] Show images from url on directus

### If everything done before end of day
- [ ] go on with the tutorial

## Meeting with pma
To discuss:         
- dot problem resolved
- Dbgi_id without regex on format module
- Block table on directus (=> when using another user)
- change dbgi_id => DBGI_000000
- Pswd in cronjob

- show images

### new TODO after meeting
- [ ] dbgi_id without regex
- [ ] url on directus
- [ ] show images

## CODE

### Show images from url on directus
Could maybe create a script to convert        
=> install directus CLI
```bash       
sudo npm install -g @directus/cli
```

Connect to instance:      
```bash
npx directusctl instance connect --instance directus_dbgi*
``` 

Help:  
```bash
npx directusctl --help
```

### dbgi_id without regex

```python
for i in range(len(df)):          
  dct = dict()         
  if df.ofvs[i] is not np.nan:       
    ls = df.ofvs[i].replace(' ','').replace('\'','')        
    for j in ls.split(','):        
      j = j.split(':')         
      dct[j[0]] = j[1]          
      if dct['name_ci'] == 'emi_external_id':           
        print(dct['value_ci'], i)        
        df.at[i,'dbgi_id'] = dct['value_ci']      
```  

Works on jupyter notebook but not on format_module.py ....         
Error: *ls = df.ofvs[i].replace(' ','').replace('\'','')  AttributeError: 'list' object has no attribute 'replace'*


## TODO NEXT
- [ ] dbgi_id without regex
- [ ] url on directus
- [ ] show images
