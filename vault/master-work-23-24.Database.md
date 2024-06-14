---
id: utxt2dpc9ytwb941oz4nfg8
title: Database
desc: ''
updated: 1718354566310
created: 1718349400476
---

## [[master-work-23-24.Directus]]

The database we use is an integration of [[master-work-23-24.PostgreSQL]], a robust relational database system, with [[master-work-23-24.Directus]], an open-source data platform. The combined solution offers a powerful, flexible, and user-friendly environment for managing structured data. This setup enables efficient data storage, retrieval, and management with a modern web-based interface, suitable for diverse applications in scientific research and beyond."

This database is the core part that stores the data from the beginning to the end. This then permits to retrieve easily and automatically all necessary metadata coming from the different services we use.

## Data structure

The data structure works as follow:
- Labels: A table that stores all the sample labels we generate using a python script.

- database structure