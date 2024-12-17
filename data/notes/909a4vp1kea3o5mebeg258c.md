Mobile_container table (*Figure 1*) permits to create and reserve labels for the mobile containers. These labels are created using the [[Master-Works.Edouard-Brülhart.Services.label-creator]] software:

- container_id: Format container_8x3_xxxxxx, with 8x3 the number of columns and rows, with bigger value first. This information permits to check the filling status of the container.

- user_created, date_created_user_updated, date_updated: Informations about who created/modified the mobile container informations and when.

- UUID_container: UUID of the mobile container, generated during creation of the physical object.

- reserved: Permits to inform if the container label is reserved or not. If container labels haven't been used, they can be used for another purpose.

- container_location: Where the mobile container is located. Inferred from the [[Master-Works.Edouard-Brülhart.Database.Tables.Universities]] table.

![image import](assets/images_bruelhed/mobile_containers.svg)

*Figure 1: Mobile_Container table structure*