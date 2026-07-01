

# This is Audrey's DBGI daily open-notebook.

Today is 2023.04.28

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions

###
###

## Doing
Treatement of X072067ALC.dataCompass.mzxml ; X072068ALC.dataCompass.mzxml ; X072069ALC.dataCompass.mzxml (Bk, aerial part, roots)

Datatreatment :

1/ Conversion raw data to MzXmL using CompassBruker (or Preteowizard (MS convert) under windows si Thermo data)

2/ treatment Mzmine 2.53 
* access to mzmine cf http://www.dbgi.org/dendron-dbgi/notes/mn44v5c7fa6f4qqoz117s8k/ 
* Raw data import 
* Mass detection 

MS level 1 : Noise level 1E3 

MS level 2 : Noise level 0 

* Built chromato (ADAP)

RT = 0.5 - 21 min ; MS1 ; centroided ; peak scan = 5 ; treshold 5E2 ; min 1E4  m/z = 0.01 

* deconvolution : wavelet ; auto ; 0.025 Da ; 0,15 min 

Group isotop : 0.02 mz or 8 ppm ; 0.08 min charge max = 4 ; most intense 

aligment : (not the bk 1st) 0.01 m/z or 12 ppm ; RT tolerance 0.1 min 

Export to gitrepo (serveur)
  
3/to push files on git : 

* powershell : 

```
git repo / coleus_projet etc etc. 
git pull 
git add "chemin du fichier" 
git commit -m "blabla" 
git push 

```
* visual code "dendron gitrepo" 
pull (to load document locally)
```
 'PS C:\Users\Lecab\gitrepo\coleus-project> git pull' 

``` 


## Paused

## Done

## Notes



## Todo tomorrow

###
###
###


## Today I learned that

- 