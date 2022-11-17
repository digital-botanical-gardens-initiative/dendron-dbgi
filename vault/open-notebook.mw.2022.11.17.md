---
id: c6a43vkelhov72igdp303gu
title: '2022-11-17'
desc: ''
updated: 1668681084987
created: 1668670965639
traitIds:
  - open-notebook-mw
---

# This is Maëlle's DBGI daily open-notebook.

Today is 2022.11.17


## TODO

- [ ] Show images from url on directus
- [x] Resolve cronjob problem (update db)
- [ ] Pswd in cronjob

### If everything done before end of day
- [ ] go on with the tutorial

## CODE

### Resolve cronjob problem
Problem => python file couldn't execute because the environment wasn't activated

Solved by creating a bash script that activate the environment and run the script next

> #!/bin/bash
> 
> \#activate environment
> source /home/mwannier/anaconda3/bin/activate taxonomical-preparator
>
> \#go to python file directory
> cd /home/mwannier/taxonomical-preparator/src
>
> \#run python script
> python inat_fetcher.py

> \# deactivate environment
> conda deactivate

### Pswd in cronjob
Problem => pswd visible in cronjob
But still only on local (just like .env file) so is it really a problem?

## TODO NEXT

