

# This is Audrey's DBGI daily open-notebook.

Today is 2023.05.03

## Todo today
[] create label to collect samples next week 
[] Next Tuesday collect at jbne 



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

MS level 1 : Noise level 5E3 

MS level 2 : Noise level 1E2

* Built chromato (ADAP)

RT = 0.5 - 21 min ; MS1 ; centroided ; peak scan = 5 ; treshold 5E2 ; min 1E4  m/z = 0.01 

* deconvolution : wavelet ; auto ; 0.025 Da ; 0,15 min 


* isotope peak grouper : m/z 0.001 - 5 ppm ; rt 0.08 min ; max charge 2 lowest m/z 

* aligment : (not the bk 1st) 0.01 m/z or 12 ppm ; RT tolerance 0.1 min 
* filter : MS/MS +  two ions in the isotopic pattern 

* gap filling : same Rt & MS range gap filler 

* check that QC are group (select feature list + feature list method - data analysis - PCA)

* feature list method - identification - adduct + complexe 

* creation  list metadata 

3/ FBMN on GNPS 


4/ Sirius 







## Paused

## Done

## Notes



## Todo tomorrow
- faire tuto nouvel arrivant"
- création identifiant directus 
- création des étiquettes 

###
###
###


## Today I learned that
