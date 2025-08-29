

Notes taken for the organization of the DBGI pilot MS data for its intake as a graph.


## Export of the minimal required files

- mgf
- quant table
- mgf sirius

Starting from the mzmine project

use th /media/share/DBGI/{} following pattern to export with the original filename

python script availabl at 

https://github.com/mandelbrot-project/indifiles_annotation/blob/main/organization/rename_pos.py

Maybe bash command line could be more flexible.
Let's try

We inspire from https://stackoverflow.com/a/10536148

for file in prefix*;
do
    mv "$file" "${file#XY TD-}"
done


and adapt (note we echo first for safety)

for file in 20220513_PMA_*;
do
    echo mv "$file" "${file##20220513_PMA_}"
done

Seems to work

So we can 

for file in 20220513_PMA_*;
do
    mv "$file" "${file##20220513_PMA_}"
done

Now we are left with the extensions
We inspire from 

# Rename all *.txt to *.text

for f in *.txt; do 
    mv -- "$f" "${f%.txt}.text"
done

And adapt to 

for f in *.mzML_chromatograms_deconvoluted_deisotoped.mgf; do 
    mv -- "$f" "${f%.mzML_chromatograms_deconvoluted_deisotoped.mgf}_sirius_pos.mgf"
done


and 

for f in *.mzML_chromatograms_deconvoluted_deisotoped_quant.csv; do 
    mv -- "$f" "${f%.mzML_chromatograms_deconvoluted_deisotoped_quant.csv}_features_quant_pos.csv"
done


Now we are left with mgf (sirius and classical)
We will use pattern expansion to limit our suffix editing


ls DBGI_01_04_{001..100}_sirius_pos.mgf

In fact its easier to mv all file with the sirius_pos.mg extension to a temp folder 
mv *sirius_pos.mgf sirius
Do the substitution 

for f in *.mgf; do 
    mv -- "$f" "${f%.mgf}_features_ms2_pos.mgf"
done


Now that we have our file we would like to create subfolder for them and move them accordingly

https://unix.stackexchange.com/a/485309


Adapted 
for i in `ls -ltrh directorypath| awk '{print $NF}'| awk -F "_f|_s" '{print $1}'| sort| uniq`; do mkdir $i; yes|mv  $i* $i; done


Works nicely !