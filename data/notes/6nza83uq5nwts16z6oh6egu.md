
# CEDAR: The Metadata Center

## Links
https://metadatacenter.org/

https://github.com/metadatacenter

## Summary
- Focuses on enhancing metadata creation in scientific research.
- Supports FAIR data principles.
- Provides tools like the CEDAR Workbench for creating and managing metadata.
- Offers templates and controlled vocabularies to help scientists submit well-annotated datasets.
- Aims to improve data submission to repositories and enhance data accessibility for analysis.

## Activity log - ETH SIS

### First steps
- Logged Into CEDAR
- Watched CEDAR video tutorials
- Joined CEDAR Mailing List
- CEDAR website: https://metadatacenter.org/#about
- CEDAR User Manual: https://metadatacenter.readthedocs.io/en/latest/user-overview/
- Orientation for the CEDAR Workbench: https://more.metadatacenter.org/tools-training/orientation

### CEDAR Workbench Usage tutorial
- How to search for an available template
- How to populate (use) a template 
- How to edit a template

### Using CEDAR
1. Create an Account and Log In
    - Sign Up: Go to the CEDAR website and sign up for an account.
    - Log In: Once your account is created, log in with your credentials.
2. Familiarize Yourself with the Interface
    - Dashboard: The dashboard is your central hub for accessing different features. Take some time to explore the layout and available options.
3. Create Metadata Templates
    - Navigate to Templates: Go to the “Templates” section from the dashboard.
    - Create New Template: Click on the option to create a new template.
    - Design Template: Use the drag-and-drop interface to add fields, such as text boxes, drop-down lists, and checkboxes. Customize these fields to match your metadata requirements.
    - Incorporate Ontologies: Integrate relevant ontologies and controlled vocabularies to ensure standardization. You can search and import these from within CEDAR.
     - Save Template: Once you have designed your template, save it for future use.
4. Annotate Metadata Using Templates
    - Select Template: Choose the appropriate template you created for annotating your data.
    - Fill in Metadata: Input your metadata values into the fields defined in the template. Make sure to follow any guidelines or standards applicable to your data.
    - Validate Metadata: Use the built-in validation tools to check for completeness and compliance with the template rules.
5. Collaborate and Share
    - Share Templates and Metadata: CEDAR allows you to share your templates and annotated metadata with other users or groups. Use the sharing options to grant access to collaborators.
    - Collaborative Editing: Multiple users can work on the same metadata template or annotation, facilitating teamwork and consistency.
6. Manage and Reuse Metadata
    - Metadata Repository: Store and manage your metadata in the CEDAR repository.
    - Search and Retrieve: Use the search functionality to find and retrieve specific metadata records or templates.
    - Export Metadata: Export your metadata in various formats for use in other systems or for publication.
7. Integrate with Other Systems
    - APIs: Utilize CEDAR’s APIs to integrate metadata management with other data systems and workflows in your organization.
    - Interoperability: Ensure that your metadata complies with standards to enable interoperability with other tools and platforms.
8. Ensure Data Security and Privacy
    - Access Controls: Set up appropriate access controls to protect your metadata. Define roles and permissions to manage who can view or edit your templates and metadata.
    - Regular Backups: Ensure that your metadata is regularly backed up to prevent data loss.

#### Populating templates
**Populating a template** in the CEDAR tool refers to the process of filling out a pre-defined data template with specific information. CEDAR is designed to help researchers and scientists create, share, and reuse structured data templates for metadata annotation. Here's a step-by-step overview of what it means to populate a template in CEDAR:

1. Template Selection: Choose or create a data template that fits the data you need to annotate. Templates in CEDAR are structured forms that define the fields and types of data required.

2. Access the Template: Open the selected template within the CEDAR interface. The template will have various fields and sections that need to be filled out.

3. Fill Out the Fields: Enter the relevant information into each field of the template. Fields might include text boxes, drop-down menus, checkboxes, date pickers, and more, depending on how the template is designed.

4. Validation: Ensure that the data entered meets the specified requirements and constraints of each field. CEDAR may provide validation checks to ensure the data conforms to expected formats or values.

5. Save or Submit: Once all required fields are filled and validated, save or submit the populated template. This might involve saving it to a database, exporting it in a particular format, or sharing it with other users or systems.

6. Reuse and Share: Populated templates can be reused for similar data entries or shared with other researchers or systems that need access to the structured data.

### CEDAR Test Project and Test Meta Data Template 
**Created Test Project and Test Meta Data Template in the Personal Space on the CEDAR Workbench Platform**
- Registered a new Project in My Workspace
- Found a Public Meta Data Template to be used in the project
- Registered a new Meta Data Field and Element
- Extended the Meta Data Template with newly created Field and Element
- Populated (used) the Template to register a new entity in the project

Next Action: explore how to organize/represent a scientific project

### Benefits of Using CEDAR
1. Standardized Templates: CEDAR allows users to create and use metadata templates that are consistent and reusable.
2. User-Friendly Interface: CEDAR provides a graphical user interface that is easy to use.
3. Controlled Vocabularies: It integrates with various controlled vocabularies and ontologies, which helps in standardizing the terms used in metadata.
4. Collaboration and Sharing: CEDAR supports collaborative metadata management, allowing multiple users to work on the same metadata templates. It also facilitates the sharing of templates and metadata within and across organizations.
5. Compliance with Standards: CEDAR supports various metadata standards, making it easier for organizations to comply with data management regulations and requirements specific to their field.
6. Integration Capabilities: The tool can be integrated with other data management systems, thereby streamlining the process of metadata creation linked directly to data collection and analysis tools.

### Limitations of Using CEDAR
1. Learning Curve: While CEDAR is designed to be user-friendly, new users may still face a learning curve in understanding how to best utilize all its features and capabilities.
2. Dependency on Internet: Being a web-based tool, CEDAR can be a limitation in low-bandwidth environments.
3. Performance Issues: With large datasets or complex metadata schemas, users might experience performance issues such as slower response times.
4. Customization Limits: While CEDAR is quite flexible, there may be limitations in terms of deep customization for specific organizational needs or unique metadata standards not yet fully supported by the platform.
5. Maintenance and Support: Depending on the deployment model (e.g., hosted by Stanford or self-hosted), there might be issues related to maintenance, updates, and user support.
6. Data Security and Privacy: For sensitive data, organizations need to consider the security measures in place, especially since metadata management often involves handling data that might be confidential or subject to privacy regulations.

**CEDAR primarily focuses on the creation, management, and use of metadata templates, rather than functioning as a comprehensive ELN-LIMS or data repository for actual datasets.**

#### CEDAR's Core Functions
1. Metadata Template Creation: CEDAR enables the design and customization of metadata templates according to various standards and personal research needs. This is crucial for ensuring that all necessary metadata is systematically collected and standardized across different projects or studies.
2. Metadata Management: It provides tools for managing and editing metadata, facilitating consistency and compliance with established data standards.
3. Integration with Controlled Vocabularies and Ontologies: CEDAR integrates with existing controlled vocabularies and ontologies, which help in standardizing the metadata entries for accuracy and interoperability.

### Limitations Regarding Data Handling
- Data Storage: **CEDAR is not designed to store raw data files like FASTQ files, which are typically large and require specialized data storage solutions.**
- Data Analysis: **It does not provide tools for analyzing raw data or performing computational tasks on datasets.**

### Alternatives for Data Storage and Analysis
For a project involving RNAseq analysis, you would use other tools and platforms in conjunction with CEDAR for a complete data management solution:
1. Data Storage and Management:
    - NCBI SRA (Sequence Read Archive): For uploading and storing FASTQ files. It’s widely used for archival and sharing of sequence data.
    - ENA (European Nucleotide Archive): Another repository for storing FASTQ files, which provides access to a comprehensive record of the world's nucleotide sequencing information.
    - GenomeSpace: A platform that provides storage and facilitates the integration of genomic data analysis tools.
2. Data Analysis:
    - Galaxy: An open-source, web-based platform for accessible, reproducible, and transparent computational biological research.
    - Bioconductor: A project providing tools for the analysis and comprehension of high-throughput genomic data.

### Integrating CEDAR with Data Management Workflows
Even though CEDAR doesn’t handle raw data files directly, it plays a critical role in ensuring that the metadata associated with those files is thoroughly and consistently documented. This metadata can then be linked to the datasets stored in repositories like NCBI SRA or ENA, enhancing the traceability, reproducibility, and usability of the research data.

VIDEO: [Making Metadata with CEDAR](https://www.youtube.com/watch?v=Inyf5hOCwAU)

### The CEDAR API
The [CEDAR API](https://more.metadatacenter.org/tools-training/cedar-api) is a web-based service hosted by the CEDAR team (access through HTTP requests).

One can interact with the CEDAR API using any programming language that supports HTTP requests, such as Python, JavaScript, or Java. Steps to Access and Use the CEDAR API.

1. Create a CEDAR Account
1. Get an API Key
3. Choose the Tool:
    - Decide on the programming environment or tool to make HTTP requests:
      - Python: Using libraries like requests or http.client.
      - JavaScript: Using fetch API or libraries like axios for Node.js or browser-based applications.
      - CURL: A command-line tool that can be used directly from your terminal to make HTTP requests.
4. Make API Requests:
- With the API key and chosen tool, one can start making HTTP requests to the CEDAR API.
- One will use the base URL for the API and append endpoints for specific functionalities like creating templates, uploading elements, etc.

Documentation: [CEDAR REST API  GIT REPO](https://github.com/metadatacenter-attic/cedar-docs/wiki/CEDAR-REST-APIs)
