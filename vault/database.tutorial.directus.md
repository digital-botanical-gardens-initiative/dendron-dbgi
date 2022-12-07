---
id: 2gpzh1s85imdp4ig17g5ccj
title: Directus
desc: ''
updated: 1669988288527
created: 1666246339244
---

Access to directus: http://directus.dbgi.org


## Creating a directus project

https://docs.directus.io/self-hosted/installation/cli.html

## If http://directus.dbgi.org stops running
```bash
cd /prog/directus_dbgi              
setsid nohup npx directus start > log.log 2>&1 &
echo $! > save_pid.txt
```

