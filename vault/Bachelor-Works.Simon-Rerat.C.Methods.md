---
id: eu1plal3d6wub84ws6fp1gt
title: Methods
desc: ''
updated: 1750345134088
created: 1741178110506
---
# Tree sampling
In this project, the already tested DBGI methodology will be applied on trees. They differ from precedently sampled plants as they bear lignified organs (bark, branches, pinecones, ...) which cannot be pulverised by the spherical metal beads used in the standard protocol. However, this nuisance might be overcome by using discoid beads.

So far, each sample wasn't considered as being linked to a peculiar specimen. They were considered independant from each other, even tho they came from the very same individual. As the samples were mostly leaves. This wasn't a big issue for not much more than a single sample was taken from a same indivudal.

<center>

```mermaid
%%| label: fig-figure
%%| fig-align: center
graph BT
    A((Sample A)) --> H{Taxa}
    B((Sample B)) --> H
    C((Sample C)) --bundled in--> H
    D((Sample D)) --> H
    E((Sample E)) --> H

```
</center>

_<center>Graphe XX-XX: Visual representation of the bundling of samples prior to the introduction of UUIds. There is no distinction of the provenance of the samples.</center>_

<center>

```mermaid
%%| fig-align: center
graph BT
    A((Sample A)) --> F(Individual 1) -- regrouped by--> H{Taxa}
    B((Sample B)) -- bundled in--> F
    C((Sample C)) --> F
    D((Sample D)) --> G(Individual 2) --> H
    E((Sample E)) --> G 
```

</center>

_<center>Graphe XX-XX: Visual representation of the bundling of samples with UUIds. The individual from which the sample has been taken from can be known</center>_

In this regard, trees offer an interesting challenge and an opportunity to further develop the EMI tools as they are perennial, and don't present all of their organs at the same time. Therefore, being able to attach samples to a specific individual could allow to come back to collect missing organs or study the modifications of the metabolome through the year(s).
To achieve this, UUID transcribed in QR-codes were generated and attached to the specimen's panel. For now, ticks can be made at the back of the code to mark and follow the progression of the sampling on the specimen.


Approximately 130 trees of the botanical garden have been sampled for this bachelor's work. They are scattered all over the garden, with a greater concentration in the arboretum, and near the fences as hedges. They tend to come from all over the world with local species (_Picea abies_) aswell as tropical ones (_Persea americana_). This work might show a strong bias toward gymnosperms as they present leaves all year long, and many trees didn't show any leaves before the end of march.


![alt text](CarteJBUF.PNG)
_<center>Fig.XX-XX: Map of the JBUF. Trees sampled were ...</center>_


### Sampling

  The classical DBGI methodology was applied to collect different organs. The main difference being the use of a standard secateurs, and a telescopic one to cut branches off.
  For each sample, the geographical position of the specimen will be marked down on the JBUF QField map (should I add a paragraph explaining what QField is?)
  At least 5 pictures must be taken for each sample:

    1) The whole specimen.
    2) The identification panel with the UUID QR-code.
    3) The identification with the UUID QR-code and the number of the sample.
    4) Details of the plant.
    5) The sampled zone indicated by the cutter.
    6) Additional picture, if judged necessary.
  See an exemple of _Picea jezoensis_.
 
   ![alt text](General.jpg){max-height: 500px, max-width: 500px, display: block, margin: 0 auto}
   _<center>Fig.XX-XX: General picture of Picea jezoensis</center>_

  ![alt text](Picea_jezoensis_UUID.jpg){max-height: 500px, max-width: 500px, display: block, margin: 0 auto}
  _<center>Fig.XX-XX: Picture the UUID and panel of Picea jezoensis</center>_

  ![alt text](Picea_jezoensis_UUID+Falcon.jpg){max-height: 500px, max-width: 500px, display: block, margin: 0 auto}
  _<center>Fig.XX-XX: Picture of the UUID, the panel, and a sample code of Picea jezoensis</center>_

  ![alt text](Picea_jezoensis_details.jpg){max-height: 500px, max-width: 500px, display: block, margin: 0 auto}
 _<center>Fig.XX-XX: Detailled picture of a branch, needles, and buds of Picea jezoensis</center>_

  ![alt text](Picea_jezoensis_Cut.jpg){max-height: 500px, max-width: 500px, display: block, margin: 0 auto}
  _<center>Fig.XX-XX: The location of the sampling is indicated with the scalpel</center>_

  The different pictures and the geolocalisation of the sampled plants, are then imported on iNaturalist (should I add a paragraphe to explain what iNat is ?) to confirm the belonging of the specimen to a species. This, allows the collectors to harvest large quantities of plant matter without having to be trained botanists themselves, speeding up the progression of the project and allowing for interesting citizen science initiatives.
  
  The organ must be separated from the parent organism. After the cut, the organ is wrapped in a brown coffee filter, and shoved in a falcon tube closed with a perforated cap. Each tube is pre-labeled with a unique QR-code which allows to identify and track the sample through its preparation and storage.
  The tubes are then temporarily submerged in liquid nitrogen.
  If they can't be freeze-dryed immediatel, all tubes are stored in a -70°C freezer

  ### Extraction 

  The freeze-drying process needs to be at least 72 hours long to make sure the samples are absolutely dry. 
  Directly after the freeze-drying process, all the perforated caps need to be switched with standard, disinfected, non-perforated caps to avoid contamination from the environment. The falcon tubes are then scanned and stored in a labeled rack. From now on, the tubes will be stored in said racks to allow easy access to the samples if need be.
  The first step of the extraction process is the weighing. 50 mg needs to be weighted and inserted in a 2ml Eppendorf tube with a rounded bottom. 3 metal beads, or 3 disc beads if the sample is a needle or lignified, are added. An error up to 5% is accepted. To separate the tubes containing  normal beads from the discoids beads, the letter β is written on the tubes containing the discoid beads.

  The Eppendorf tubes then go in the MM40 Retsch machine (shaker) for 2.5 minutes at 25Hz for standard beads and 5 minutes at 25Hz for the discoid beads. Then, 1,5ml of the DBGI extraction solution is added. Said extraction is made of a mix of 80% methanol, 20% distilled water, and 0,1% formic acid. The newly rehydrated samples go back in the Retsch machine for a second ride with the same settings.
  
  The tubes are then centrifugated for 2 minutes at 13'000 RPM to separate the supernatant from the plant deposit which precipitates.

  Afterward, as much of the supernatant (usually 1,4 ml) is collected and pipetted in a glass vial with a hermetically sealed cap. Solid parts need to be avoided for they clogg the LC-MS.
  The vial needs to be labelled and associated to a container, ensuring the continued tracking of the sample from the garden to the freezer.
  The vials' container is then stored in a -70	°C freezer, and is ready for LC-MS and analysis.

  ![alt text](Extrac_RedCap.jfif){max-height: 500px, max-width: 500px, display: block, margin: 0 auto}
  _<center>Fig.XX-XX: Glass vials with hermetically sealed cap containing the supernatant</center>_


  ### Analysis

 Before taking a turn in the LC-MS, 120 microliters of the extracted liquid is pipetted from the hermetical vial to a new vial containing an insert to form an aliquot (see next fig). The vials are closed with a slitted cap which allows the machine to access the solution. These aliquots are the final step needed before analysing the samples through liquid chromatography mass spectrometry (LCMS).
  
  ![alt text](Extrac_WhiteCap.jfif){max-height: 500px, max-width: 500px, display: block, margin: 0 auto}
  
  _<center>Fig.XX-XX: Glass vials containing inserts</center>_


<center>
<style>
svg[id^="mermaid-"] { max-height: 1100px}
</style>
<style>
svg[id^="mermaid-"] { max-width: 700px }
</style>

```mermaid

flowchart TB


   
     A(1. Choose individual)-->
     B(2. Set UUID in the field)-->
     C(3. Set localisation on the QGIS map)-->
     D(4. Fill the QGIS fields and take the pictures)--Unique code is linked to the sample in the DB-->id99[(DBGI Database)]
     D-->F(5. Take the sample)-->
     G(6. Store with the adapted technique)
     G-->GJ(7. Freeze dryer for 72 hours)


     -->H[7. Weighing:50mg +-2,5mg]
     H--Transfer data to-->id99
    H-->I[8. Shake]
    I--If not woody-->II[2,5 minutes at 25Hz]
    I--If woody-->IJ[5 minutes at 25Hz]
    II--> J[9. Shake]
    IJ--> J
     J--If not woody-->JJ[2,5 minutes at 25Hz]-->K
    J--If woody-->JK[5 minutes at 25Hz]-->K
    K[10. Extraction solution: 80% methanol, 20% H2O, 0,1% formic acid]
    L[11.Centrifugate 2 minutes at 13'000 RPM]
    K[10. Put 1,4ml of supernatant in 2mls storage vials]-->

  L([11.Take 120μl of the sample for analysis])-->
  M([12. Put the 120μl sample in the LC-MS])-->
  N([13. Furter analysis with ProteoWisard, GNPS, MZMine, and Cytsocape])-->
  O([14.Molecular network]) --Transfer data to--> id99
  D-->P(Geolocalisation and pictures are automatically sent on iNaturalist)
  P-->id99
```
</center>
_<center>
Fig.XX-XX: Here is a cheat sheet of the different steps from the garden to the integration in the database.
</center>_


## Sample Tracking & UUID
One of the key aspect of the DBGI is establishing and preserving linkage between the field and the database. Therefore, a reliable sample tracking system is necessary to keep track of the numerous samples for the entirety of their processing. As soon as a sample has been collected, a unique code is assigned to it. It will follow it through each stage of preparation, from extraction to storage by being reported on all containers the sample will go through. This allows to efficiently link the data, and the metadata of the sample into the database.

To go further in the labelling process, this Bachelor's project focuses on the introduction of Universally Unique IDentifiers (UUIDs), also known as Globally Unique Identifier (GUIDs) in the established workflow. UUIDs are 128-bit labels used to uniquely identify objects in computer systems. They are excellent for the purpose of the EMI, as they don't need central authority, and can be generated in the field, even in the absence of internet connection.
This will allow the DBGI to be more precise in its metadata assignation. Attributing the UUIDs to to sampled individuals adds an extra layer of information by giving it its own individuality. This is interesting as each individual differs in state and as such, in metabolomic contents.

One important point to keep in mind is that other alternatives to UUIDs such as LSID, URN, HTTP URI, DOI, IGSN, ... exist and are used in different biocollections. The biodiversity community hasn't decided on a single method to use as of yet. No specific method prevails on the others (Guralnik et al. 2015), whith their own advantages and drawbacks.
As such, the method used by the DBGI might change as time goes on.