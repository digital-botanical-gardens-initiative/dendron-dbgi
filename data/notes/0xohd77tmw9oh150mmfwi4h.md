
# This is Edouard's DBGI daily open-notebook.

Today is 2023.04.21

# To do

# graph treatment

Doc pour mzmine: sur le site de GNPS

# done

# Perspectives

# notes
Today I'm experiencing some stuff to make an automated way to export and manage QFieldcloud data. Here is a code storage, in case I have some troubles with the original one:

#!/usr/bin/env python3

import requests
import os
import re
from qfieldcloud_sdk import sdk

#Server connection
client = sdk.Client(url='https://dbgimap.hopto.org/api/v1/')
client.login(username='edouardbrulhart', password='861510Eb.98')

#List the different projects for the specified user
projects = client.list_projects()

#Create the variables to stores projects ids and projects names
projects_names = []
projects_ids = []


#Loops over the projects list and extracts the ids and names
for d in projects:
    for key, value in d.items():
        if key.startswith('id'):
            projects_ids.append(value)
        elif key.startswith('name'):
            projects_names.append(value)


#Create the variable names list to store each files list for each project
variables_list = [project_name + '_list' for project_name in projects_names]


#Little loop to extract files lists for each project
files_dict = {}

for i, id in enumerate(projects_ids):
    key = variables_list[i]
    files_dict[key] = client.list_remote_files(project_id=id)

print(files_dict[1])
print(files_dict[2])



#filenames = []
# extract filename using regex
#for item in files:
#    filename = re.search(r'(\w+)\.gpkg', item['name'])
#    if filename:
#        filenames.append(filename.group(1))

# code

# links

