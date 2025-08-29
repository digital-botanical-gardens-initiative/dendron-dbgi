---
id: yhy9x9k5bc082v5f87abgnv
title: iNaturalist
desc: ''
updated: 1756465018715
created: 1657174218999
---

We use [iNaturalist](https://www.inaturalist.org/home) to track the selected specimens in the DBGI.

See [[Bachelor-Works.Edouard-Brülhart.methodology.Services.iNaturalist]] for some details worked on during Edouard's bachelor.


We had issues to fetch back all observation of a project through [pyinaturalist](https://github.com/pyinat/pyinaturalist), notably because of obscured geolocalisation for some protected species.
This is now solved, see https://github.com/pyinat/pyinaturalist/issues/403.




### We have been wondering how to handle iNaturalist logins for the collectors

Currently it is not possible to make an observation shared among observers, despite this beeing a discussed and upvoted topic https://forum.inaturalist.org/t/share-observations-between-users/337/79

Current situation:

- We upload all observation with the common `dbgi` account https://www.inaturalist.org/people/6687578

This is great because we can fully control observation made in the frame of the dbgi project (eg batch edit or remove them)

We tag each observation with the collector's iNaturalist handle, eg [https://www.inaturalist.org/observations/309816396](https://www.inaturalist.org/observations/309816396) where the collector is [ifedenat25](https://www.inaturalist.org/people/ifedenat25) is tagged
However the observation do not appear in the collector profile.


