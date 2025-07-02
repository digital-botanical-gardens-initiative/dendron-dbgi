

# This is PMA's DBGI daily open-notebook.

Today is 2023.07.11

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

Running the ENPKG workflow on the toy tropical dataset


python .\src\create_architecture.py --source_path {path/to/your/data/in/directory/} --target_path {path/to/your/data/out/directory/}  --sample_metadata_filename {metadatafilename.tsv} --lcms_method_params_filename {lcms_method_params_filename}
--lcms_processing_params_filename {lcms_processing_params_filename} --polarity {pos}


python ./src/create_architecture.py --source_path /media/share/private/DBGI/DBGIKG_tropical_toydataset/input --target_path /media/share/private/DBGI/DBGIKG_tropical_toydataset/output  --sample_metadata_filename dbgi_tropical_toydataset_metadata_inat.tsv --lcms_method_params_filename dbgi_tropical_toydataset_lcms_params.txt --lcms_processing_params_filename dbgi_tropical_toydataset_mzmine_params.xml --polarity pos

python ./src/create_architecture.py --source_path /media/share/private/DBGI/DBGIKG_tropical_toydataset/input --source_metadata_path /media/share/private/DBGI/DBGIKG_tropical_toydataset/metadata --target_path /media/share/private/DBGI/DBGIKG_tropical_toydataset/output  --sample_metadata_filename dbgi_tropical_toydataset_metadata_inat.tsv --lcms_method_params_filename dbgi_tropical_toydataset_lcms_params.txt --lcms_processing_params_filename dbgi_tropical_toydataset_mzmine_params.xml --polarity pos


python ./src/add_massive_id.py --massive_id MSV000092400 -p /media/share/private/DBGI/DBGIKG_tropical_toydataset/output


## Paused

## Done

## Notes

## Todo tomorrow

###
###
###


## Today I learned that

-