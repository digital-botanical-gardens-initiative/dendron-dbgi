---
id: hj6q3ha4293u8y57c4uvm70
title: '2023-07-01'
desc: ''
updated: 1688224084340
created: 1688211323824
traitIds:
  - open-notebook-dbgi-pmallard
---


# This is PMA's DBGI daily open-notebook.

Today is 2023.07.01

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

Preparing XL spreadsheets for Rostyk

https://github.com/digital-botanical-gardens-initiative/openbis_meta_data_entry_registration/blob/main/openbis_object_observation_properties_revised.xlsx

Done at https://github.com/digital-botanical-gardens-initiative/openbis_meta_data_entry_registration/blob/main/data/openbis_object_observation_properties_revised_ordered.xlsx

INat_observations
id
quality_grade
time_observed_at
taxon_geoprivacy
annotations
uuid
cached_votes_total
identifications_most_agree
species_guess
identifications_most_disagree
tags
positional_accuracy
comments_count
site_id
license_code
quality_metrics
public_positional_accuracy
reviewed_by
oauth_application_id
flags
created_at
description
project_ids_with_curator_id
updated_at
sounds
place_ids
captive
ident_taxon_ids
outlinks
faves_count
ofvs
num_identification_agreements
comments
map_scale
uri
project_ids
community_taxon_id
owners_identification_from_vision
identifications_count
obscured
num_identification_disagreements
geoprivacy
location
votes
spam
mappable
identifications_some_agree
project_ids_without_curator_id
place_guess
identifications
project_observations
photos
faves
non_owner_ids
observed_on
photo_url
taxon.is_active
taxon.ancestry
taxon.min_species_ancestry
taxon.endemic
taxon.iconic_taxon_id
taxon.min_species_taxon_id
taxon.threatened
taxon.rank_level
taxon.introduced
taxon.native
taxon.parent_id
taxon.name
taxon.rank
taxon.extinct
taxon.id
taxon.ancestor_ids
taxon.photos_locked
taxon.taxon_schemes_count
taxon.wikipedia_url
taxon.current_synonymous_taxon_ids
taxon.created_at
taxon.taxon_changes_count
taxon.complete_species_count
taxon.universal_search_rank
taxon.observations_count
taxon.flag_counts.resolved
taxon.flag_counts.unresolved
taxon.atlas_id
taxon.default_photo.id
taxon.default_photo.license_code
taxon.default_photo.attribution
taxon.default_photo.url
taxon.default_photo.original_dimensions.height
taxon.default_photo.original_dimensions.width
taxon.default_photo.flags
taxon.default_photo.square_url
taxon.default_photo.medium_url
taxon.iconic_taxon_name
taxon.preferred_common_name
preferences.prefers_community_taxon
geojson.coordinates
geojson.type
user.site_id
user.created_at
user.id
user.login
user.spam
user.suspended
user.login_autocomplete
user.login_exact
user.name
user.name_autocomplete
user.orcid
user.icon
user.observations_count
user.identifications_count
user.journal_posts_count
user.activity_count
user.species_count
user.universal_search_rank
user.roles
user.icon_url
taxon.default_photo
taxon.conservation_status.place_id
taxon.conservation_status.source_id
taxon.conservation_status.user_id
taxon.conservation_status.authority
taxon.conservation_status.status
taxon.conservation_status.status_name
taxon.conservation_status.geoprivacy
taxon.conservation_status.iucn
observed_on_details
created_time_zone
observed_time_zone
time_zone_offset
observed_on_string
created_at_details.date
created_at_details.week
created_at_details.month
created_at_details.hour
created_at_details.year
created_at_details.day
swiped_loc
emi_external_id



On draw.io it is possible to automatically create a schema from the SQL commands

CREATE TABLE Suppliers
(
supplier_id int NOT NULL PRIMARY KEY,
supplier_name char(50) NOT NULL,
contact_name char(50),
);
CREATE TABLE Customers
(
customer_id int NOT NULL PRIMARY KEY,
customer_name char(50) NOT NULL,
address char(50),
city char(50),
state char(25),
zip_code char(10)
);

```sql
CREATE TABLE Suppliers (
    supplier_id int,
    supplier_name char(50) NOT NULL,
    contact_name char(50),
    PRIMARY KEY (supplier_id)
);

CREATE TABLE Customers (
    customer_id int,
    customer_name char(50) NOT NULL,
    address char(50),
    city char(50),
    state char(25),
    zip_code char(10),
    supplier_id int,
    PRIMARY KEY (customer_id),
    FOREIGN KEY (supplier_id) REFERENCES Suppliers(supplier_id)
);
```

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL
    FirstName verchar(255),
    Age int
    PRIMARY KEY (ID)
);
CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);|
```


https://gist.github.com/brunomartinspro/0782559fcc3a6022d654b47eca723b40

External plugins are not loadable by default.
Anyway it looks like the desktop app is required

https://dev.to/parrotypoisson/external-plugins-in-drawio-25hd


Downloading from https://github.com/jgraph/drawio-desktop/releases

This rabbit hole is kind of a nightmare 
https://github.com/tobiashochguertel/c4-draw.io/issues/12


https://drawio-app.com/blog/entity-relationship-diagrams-with-draw-io/

https://www.drawio.com/blog/entity-relationship-tables

## Paused

## Done

## Notes

## Todo tomorrow

###
###
###


## Today I learned that

-