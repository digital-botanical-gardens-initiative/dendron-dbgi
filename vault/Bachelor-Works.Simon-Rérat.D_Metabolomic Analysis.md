---
id: t942xq2f8o2247mgu5700pr
title: D_Metabolomic Analysis
desc: ''
updated: 1751351652321
created: 1741178117755
---


### D_1.    Liquid Chromatograph-Mass Spectrometry parameters
 As we want to know the content of our samples. Untargeted mass spectrometry was performed. This allows to detect all the different molecules present in our samples.

 The chromatographic separation was performed on a Vanquish Flex UPLC system (Thermo Fisher Scientific) interfaced with a Q‐Exactive Plus mass spectrometer (Thermo Fisher Scientific), using a heated electrospray ionization (HESI‐II) source. The Thermo Scientific Xcalibur 3.1 software was used for instrument control. The LC conditions were as follows: column, Waters BEH C18 100 × 2.1 mm, 1.7 μm; mobile phase, (A) water with 0.1% formic acid; (B) acetonitrile with 0.1% formic acid; flow rate, 600 μL/min; injection volume, 2 μL; gradient, linear gradient of 2%−100% B over 10 min and isocratic at 100% B for 2 min. 
 
 The optimized HESI‐II parameters were as follows: source voltage, 3.5 kV (pos); sheath gas flow rate (N2), 55 units; auxiliary gas flow rate, 15 units; spare gas flow rate, 3.0; capillary temperature, 350°C, S‐Lens RF Level, 50. The mass analyzer was calibrated using a mixture of caffeine, methionine–arginine–phenylalanine–alanine–acetate, sodium dodecyl sulfate, sodium taurocholate, and Ultramark 1621 in an acetonitrile/methanol/water solution containing 1% formic acid by direct injection. 
 
 The data‐dependent tandem mass spectrometry (MS/MS) events were performed on the three most intense ions detected in full scan MS (Top3 experiment). The MS/MS isolation window width was 1 Da, and the stepped normalized collision energy was set to 15, 30, and 45 units. In data‐dependent MS/MS experiments, full scans were acquired at a resolution of 35,000 Full Width at Half Maximum (FWHM) (at m/z 200) and MS/MS scans at 17,500 FWHM both with an automatically determined maximum injection time. 
 
 After being acquired in an MS/MS scan, parent ions were placed in a dynamic exclusion list for 3.0 s.


### D_2.    Data processing 

The raw MS data was converted from .RAW (Thermo) standard data format to .mzML format using the MSConvert software, part of the ProteoWizard package [[(Chambers et al., 2012)|Bachelor-Works.Simon-Rérat.H_References#^fzqjsn1h7hq4]]. The converted files were treated using the MZmine software suite v. 2.53 [[(Pluskal et al., 2010)|Bachelor-Works.Simon-Rérat.H_References#^ktra0w22cs9d]]. The parameters were adjusted as follows: the centroid mass detector was used for mass detection with the noise level set to 2.0E4 for the MS level set to 1, and to 0 for the MS level set to 2.

 The ADAP chromatogram builder was used and set to a minimum group size of scans of 5, minimum group intensity threshold of 2.0E4, minimum highest intensity of 2.0E4, and m/z tolerance of 12 ppm (Myers et al., 2017). 
 
 For chromatogram deconvolution, the algorithm used was the wavelets (ADAP). The intensity window signal‐to‐noise (S/N) was used as an S/N estimator with a S/N ratio set at 15, a minimum feature height at 2.0E4, a coefficient area threshold at 80, a peak duration range from 0.02 to 1.00 min and the retention time (RT) wavelet range from 0.02 to 0.05 min. Corresponding MS2 was paired with the following parameters (0.025 Da and 0.15 min). 
 
 Isotopes were detected using the isotope peaks grouper with a m/z tolerance of 8 ppm, an RT tolerance of 0.08 min (absolute), the maximum charge set at 4, and the lowest m/z was used as the representative isotope. 
 
 Peak alignment was performed using the join aligner method (m/z tolerance at 12 ppm), absolute RT tolerance 0.08 min, weight for m/z at 30, and weight for RT at 30. The aligned feature list composed of 14'563 elements was exported using the export to Global Natural Product Social Molecular Networking (GNPS) Feature‐Based Molecular Network (FBMN) module. 

The [resulting data](https://gnps2.org/status?task=4e5060d5d8204d90b5c44867b808e9d1) can be found online on the GNPS platform.


### D_3.    Molecular networking
A molecular network (MN) was assembled on the [GNPS website](https://gnps.ucsd.edu/ProteoSAFe/static/gnps-splash.jsp) using the .mgf spectra file created in the previous step [[(Wang et al., 2016)|Bachelor-Works.Simon-Rérat.H_References#^3jcvikm91uoh]] to help analyze the spectral diversity of the profile collection. The precursor ion mass tolerance was set to 0.02 Da and an MS/MS fragment ion tolerance of 0.02 Da. 
A network was then created where edges were filtered to have a cosine score above 0.7 and more than six matched peaks. Further, edges between two nodes were kept in the network if and only if each of the nodes appeared in each other's respective top 10 most similar nodes. 

Finally, the maximum size of a spectral family was set to 100, and the lowest‐scoring edges were removed from molecular families until the molecular family size was below this threshold. The spectra in the network were then searched against GNPS spectral libraries. All matches kept between network spectra and library spectra were required to have a score above 0.7 and at least six matched peaks.

The resulting MN is available [online](https://gnps2.org/status?task=4e5060d5d8204d90b5c44867b808e9d1) and can be downloaded for further inspection.


### D_4.    Metabolite annotation

#### Theoretical spectral libraries search
In addition to experimental spectral libraries search we have shown that spectral matching against theoretical spectral libraries of natural products was an efficient way to cover a much wider, yet relevant, spectral space [[(Allard et al., 2016)|Bachelor-Works.Simon-Rérat.H_References#^3kvwdyctonnv]]. Furthermore, we showed that taking into account the taxonomical distance between the biological source of the candidate structure and the biological source of the annotated extracts greatly improved the overall quality of the annotation results [[(Rutz et al., 2019)|Bachelor-Works.Simon-Rérat.H_References#^fktchxtnov0t]]. Thus, in addition to the spectral search performed at the molecular networking step against publicly available spectral libraries (see previous section) a taxonomically informed metabolite annotation was performed. 

For this, we first established a large theoretical spectral database of natural products following a previously established metabolite annotation workflow. This spectral database and associated biological sources metadata were constructed using chemical structure and information compiled during the LOTUS Initiative's first project aiming to establish an open and evolutive resource compiling natural products and biological occurrences [[(Rutz, Bisson, et al., 2022)|Bachelor-Works.Simon-Rérat.H_References#^fktchxtnov0t]].

 The theoretical spectral database is publicly available [[(Allard et al., 2021)|Bachelor-Works.Simon-Rérat.H_References#^95ccwy2tn3xk]]. 
 The biological sources metadata are available online [[(Rutz, Bisson, et al., 2022)|Bachelor-Works.Simon-Rérat.H_References#^fktchxtnov0t]].
 
  The taxonomically informed metabolite annotation was performed using the met_annot_enhancer scripts version v0.1 from [this Github repository](https://github.com/mandelbrot-project/met_annot_enhancer/releases/tag/v0.1). Sirius  [[(Dührkop et al., 2019)|Bachelor-Works.Simon-Rérat.H_References#^sex97gfkmrw2]](v.5.5.7) and CANOPUS [[(Djoumbou Feunang et al., 2016)|Bachelor-Works.Simon-Rérat.H_References#^j5t0u383qi9x]]; [[Dührkop et al., 2021|Bachelor-Works.Simon-Rérat.H_References#^jmetzeoa22lo]]; [[Kim et al., 2021|Bachelor-Works.Simon-Rérat.H_References#^d66eman67xtj]] were also employed to proceed to metabolite annotation and attribution of chemical classes to MSMS spectra. ^0rszpeprlcpr
  
  The annotations produced by using SIRIUScan be found [here](https://github.com/digital-botanical-gardens-initiative/jbuf-trees/tree/bfc35444deaaf341b8523f6c130788285529a6d4/docs/mapp_project_00067/mapp_batch_00174/results/sirius).
  The annotations of metabolites reponderated through taxonomical means can be found [on this Github repository.](https://github.com/digital-botanical-gardens-initiative/jbuf-trees/tree/bfc35444deaaf341b8523f6c130788285529a6d4/docs/mapp_project_00067/mapp_batch_00174/results/met_annot_enhancer/mapp_batch_00174).
