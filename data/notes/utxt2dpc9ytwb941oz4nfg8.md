
## [[Master-Works.Edouard-Brülhart.Services.Directus]]

The database we use is an integration of [[Master-Works.Edouard-Brülhart.Services.PostgreSQL]], a robust relational database system, with [[Master-Works.Edouard-Brülhart.Services.Directus]], an open-source data platform. The combined solution offers a powerful, flexible, and user-friendly environment for managing structured data. This setup enables efficient data storage, retrieval, and management with a modern web-based interface, suitable for diverse applications in scientific research and beyond.

This database is the core part that stores the data from the beginning to the end. This then permits to retrieve easily and automatically all necessary metadata coming from the different services we use.

## Data structure

The data structure is organized into [[Master-Works.Edouard-Brülhart.Database.Tables]]. Each table corresponds to a specific data content. All samples tables are linked together in order to track the journey of the samples through the whole project workflow. 



