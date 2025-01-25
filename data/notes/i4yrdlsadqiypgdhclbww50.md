

# This is PMA's DBGI daily open-notebook.

Today is 2024.02.08

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

Point on the tables in emi-monorepo with [[people.luca-cappelletti]]

This happens in /Users/pma/Dropbox/git_repos/COMMONS_Lab/EMI/emi-monorepo/web/backend/migrations


- Locations (universities, rooms etc.) ex. static_container
- Containers are mobile containers (e.g. a box with a plant in it)


To create a table using diesel

diesel migration generate create_item_types_table

See https://github.com/earth-metabolome-initiative/emi-monorepo/tree/ec8f5b531a2d952ee723282b0d572eb498fc819d/web/backend


Some ChatGPT help

Certainly! Database normalization is a process used to organize a database into tables and columns. The main idea with normalization is to divide a database into parts to minimize redundant data, ensure data dependencies make sense, and simplify the schema to make it more robust against anomalies when inserting, updating, or deleting data. The process is typically broken down into several "normal forms" (NF). Achieving third normal form (3NF) is often considered sufficient for most applications, ensuring a good balance between database performance and complexity.

### First Normal Form (1NF)

For a table to be in the First Normal Form:
- It should have a primary key: A unique identifier for each row in the table.
- The values in each column of the table should be atomic (no multi-value attributes or repeating groups).
- The entries in any column must be of the same data type.

### Second Normal Form (2NF)

To achieve the Second Normal Form, a table must first be in 1NF and then:
- All non-key attributes must be fully functional and dependent on the primary key. This means that any fields in the table that do not depend on the primary key should be moved to a separate table.

### Third Normal Form (3NF)

For a table to be in the Third Normal Form, it must first meet all the criteria for 2NF, and then:
- It must eliminate any transitive dependency. A table is in 3NF if it is in 2NF and all its non-key attributes are not only fully functionally dependent on the primary key but also are directly dependent on it and not on any other non-key attributes.

### Applying Normalization to 3NF with Examples

Let’s take a hypothetical example related to the Earth Metabolome Initiative to demonstrate moving through these normal forms:

**Unnormalized Table:**

| SampleID | SampleName | CollectionDate | ContainerType | LocationName | OrganizationName |
|----------|------------|----------------|---------------|--------------|------------------|
| 1        | WaterSample1 | 2024-01-01  | Tube          | Amazon Basin | OrgA             |

This table stores everything together, leading to redundancy if, for example, multiple samples come from the same location.

**1NF Adjustments:**

Split into separate tables to ensure atomicity and eliminate repeating groups:

- Samples (SampleID, SampleName, CollectionDate, ContainerID, LocationID)
- Containers (ContainerID, ContainerType)
- Locations (LocationID, LocationName)
- Organizations (OrganizationID, OrganizationName)

**2NF Adjustments:**

Assume each of these tables is now in 1NF. For 2NF, we ensure all attributes in each table are fully dependent on the primary key. If there were a table where part of the primary key (in case of composite keys) did not determine some of the attributes, we would need to adjust, but our current design avoids this issue.

**3NF Adjustments:**

To move to 3NF, check for transitive dependencies, where a non-key attribute depends on another non-key attribute. Suppose in our Organizations table, we had "OrganizationType" and "OrganizationAddress," and suppose "OrganizationType" could determine "OrganizationAddress" (a bit contrived, but useful for illustration). In that case, we might move "OrganizationAddress" to a separate table where "OrganizationType" is the key, ensuring every non-key attribute only depends on the primary key.

### Conclusion and Application

Normalization, up to 3NF, helps in designing a database that:
- Minimizes redundancy
- Avoids update anomalies
- Ensures data integrity

By applying these principles to your database for the Earth Metabolome Initiative, you can design a schema that is efficient, scalable, and robust. Each entity—Samples, Containers, Locations, and Organizations—should be designed to adhere to these normal forms. This approach helps in managing complex data relationships and ensures the database remains flexible and efficient as the project evolves.


Let's illustrate the normalization process using a simplified example related to the Earth Metabolome Initiative, showing how a table evolves through the First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF).

### Initial Unnormalized Table

Imagine we start with a table that combines sample data, container information, location details, and organization info all in one:

**Unnormalized Samples Table**

| SampleID | SampleName | CollectionDate | ContainerType | LocationName | Latitude | Longitude | OrganizationName | OrganizationType |
|----------|------------|----------------|---------------|--------------|----------|-----------|------------------|------------------|
| 1        | WaterSample1 | 2024-01-01  | Tube          | Amazon Basin | -3.4653  | -62.2159  | OrgA             | Research Institute |
| 2        | SoilSample1 | 2024-02-01  | Box           | Sahara Desert| 23.4162  | 25.6628   | OrgB             | University        |

### First Normal Form (1NF)

To convert to 1NF, we ensure the table has a primary key, and all attributes are atomic (no repeating groups or arrays).

**Samples Table (1NF)**

| SampleID | SampleName | CollectionDate | ContainerID | LocationID | OrganizationID |
|----------|------------|----------------|-------------|------------|----------------|

**Containers Table (1NF)**

| ContainerID | ContainerType |
|-------------|---------------|

**Locations Table (1NF)**

| LocationID | LocationName | Latitude | Longitude |
|------------|--------------|----------|-----------|

**Organizations Table (1NF)**

| OrganizationID | OrganizationName | OrganizationType |
|----------------|------------------|------------------|

### Second Normal Form (2NF)

For 2NF, we ensure that all non-key attributes are fully functional and dependent on the primary key. Since our 1NF tables are already designed with this in mind, where each non-key attribute depends on the primary key, our tables from 1NF are already in 2NF.

### Third Normal Form (3NF)

To achieve 3NF, we remove transitive dependencies, meaning no non-key attribute depends on another non-key attribute.

In our initial design, there's no clear transitive dependency within the simplified tables provided. However, let's illustrate what might happen if there was a transitive dependency. Suppose in the Organizations table, OrganizationType somehow determined another attribute like "FundingSource," which is not directly related to the primary key (OrganizationID).

**Organizations Table Before 3NF Adjustment**

| OrganizationID | OrganizationName | OrganizationType | FundingSource |
|----------------|------------------|------------------|---------------|

To adjust for 3NF, we would remove any transitive dependency:

**Organizations Table (3NF)**

| OrganizationID | OrganizationName | OrganizationType |
|----------------|------------------|------------------|

**Funding Sources Table (3NF)**

| OrganizationType | FundingSource |
|------------------|---------------|

However, given the initial tables provided, there's no evident transitive dependency, so let's assume our 1NF tables, which were already in 2NF, also meet the criteria for 3NF given the data attributes we've outlined.

### Illustrated Tables in 3NF

- **Samples Table**
- **Containers Table**
- **Locations Table**
- **Organizations Table**

Each of these tables is designed to ensure that there's no redundancy, each non-key attribute fully depends on the primary key, and there are no transitive dependencies. This design helps ensure data integrity, simplifies data management, and supports efficient queries.



When you have a NULL you have an absence of knowledge
Else you have a value




## Paused

## Done

## Notes

## Todo tomorrow, one day ... or never

###
###
###


## Today I learned that

-


The Experimental Natural Products Knowledge Graph (ENPKG) framework combines a sample-centric approach with semantic enrichment to organize large heterogeneous metabolomics data sets as a knowledge graph. Harmonization of experimental data with publicly available data sets and federated queries mechanisms enable efficient information extraction and the contextualization of metabolomics studies, thereby offering exciting opportunities for drug discovery and global chemodiversity characterization.


The ENPKG framework combines a sample-centric approach with semantic enrichment to organize heterogeneous metabolomics data sets as a knowledge graph. Harmonization with publicly available ressources offer exciting opportunities for drug discovery and global chemodiversity characterization.


The ENPKG framework organizes large heterogeneous metabolomics data sets as a knowledge graph, offering exciting opportunities for drug discovery and chemodiversity characterization.