

# This is Audrey's DBGI daily open-notebook.

Today is 2023.05.11

## Todo today
- Collect plant at Jbuf 
- Seminar at 3 pm 
- Continue poster (mzmine treatment + MN)

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions

###
###



## Done
**1/ Collect plant from Jbuf (only the one in the syst. 1 / 2 and 3)**
- [X] Clematis heraclifoia 
- [X] Clematis recta 
- [X] Clematis vitalba 

- [X] Lonicera caprifolium 
- [X] Lonicera Kamtschatica 
- [X] Lonicera perclymenum 
- [X] Lonicera tatarica 
- [X] Lonicera xylosteum 

- [X] Euonymus alatus 
- [X] Euonymus europeaus 

Plant were collected according the dbgi protocole [[Bachelor-Works.Edouard-Brülhart]] ; fews leaves of plant were collected and put into coffee filter and then into a falcon with pre drilled plastic caps. Falcon are placed into liquid nitrogen during the harvesting before beeing lyophilized. Falcon are placed at -70°C before being freeze drying. 

Clematis florida, Clematis tangutica and Lonicera nigra from the system couldn't be collect (no leave or not enough). 

 



**2/ treatment Coleus with modification of level noise** (not finish pb with transfer of the dataset)

Treatement of X072067ALC.dataCompass.mzxml ; X072068ALC.dataCompass.mzxml ; X072069ALC.dataCompass.mzxml (Bk, aerial part, roots)

Datatreatment :

a/ Conversion raw data to MzXmL using CompassBruker (or Preteowizard (MS convert) under windows si Thermo data)

b/ treatment Mzmine 2.53 
* access to mzmine cf http://www.dbgi.org/dendron-dbgi/notes/mn44v5c7fa6f4qqoz117s8k/ 
* Raw data import 
* Mass detection 

MS level 1 : Noise level 2E3 

MS level 2 : Noise level 1E2 

* Built chromato (ADAP)

RT = 0.5 - 21 min ; MS1 ; centroided ; peak scan = 5 ; treshold 5E2 ; min 1E4  m/z = 0.01 

* deconvolution : wavelet ; auto ; 0.025 Da ; 0,15 min 

* isotope peak grouper : m/z 0.001 - 5 ppm ; rt 0.08 min ; max charge 2 lowest m/z

* aligment : (not the bk 1st) 0.01 m/z or 12 ppm ; RT tolerance 0.1 min

* filter : feature list rows filter :  MS/MS +  two ions in the isotopic pattern 

* gap filling : same Rt & MS range gap filler 

* feature list method - identification - adduct + complexe 

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

## Notes

## Todo tomorrow
- Collect 9 plants from the differents localisation

###
###
###


## Today I learned that

- 