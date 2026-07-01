Static_container table (*Figure 1*) permits to create and reserve labels for the static containers. These labels are created using the [[Master-Works.Edouard-Brülhart.Services.label-creator]] software:

- container_id: Format container_static_xxxxxx.

- user_created, date_created_user_updated, date_updated: Informations about who created/modified the static container informations and when.

- UUID_container: UUID of the static container, generated during creation of the physical object.

- container_location: Where the mobile container is located. Inferred from the [[Master-Works.Edouard-Brülhart.Database.Tables.Universities]] table.

- reserved: Permits to inform if the container label is reserved or not. If container labels haven't been used, they can be used for another purpose.

Static containers are for example:

- Fridges

- Freezers

- Rooms

- Buildings

- etc.

They can be nested in another static container. For example, a fridge is inside a room that is inside a building.

This table is not yet implemented in our tracking system. Only mobile containers are handled.

![image import](assets/images_bruelhed/static_containers.svg)

*Figure 1: Static_Container table structure*