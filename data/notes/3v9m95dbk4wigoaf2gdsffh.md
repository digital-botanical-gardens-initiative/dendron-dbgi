
Summary of the Paper: "Evaluation of Application Possibilities for Packaging Technologies in Canonical Workflows"
Authors:

Thomas Jejkal, Sabrine Chelbi, Andreas Pfeil, Peter Wittenburg
Published in:

Data Intelligence (2022) 4 (2): 372–385
DOI: 10.1162/dint_a_00137
Overview

This paper explores the role of packaging technologies in the Canonical Workflow Framework for Research (CWFR). The authors evaluate different packaging formats and their potential in workflow reproducibility, data management, and exchange. They analyze how these technologies help in structuring inputs, outputs, and workflow artifacts in a self-contained and machine-readable manner.
Key Concepts

    Canonical Workflow Framework for Research (CWFR)
        A framework designed to improve the efficiency and reproducibility of research.
        Uses parameterizable and reusable workflow steps.
        Implements FAIR Digital Objects (FAIR DOs) for preserving and resuming workflow states.

    Packaging Technologies in CWFR
        Two types of "packages" are considered:
            Data Collections: Aggregates of files and metadata, used in data science.
            Workflow Packages: Self-contained representations of workflows, aiding in their execution and reproducibility.

State of the Art

The paper categorizes packaging technologies into:

    File-based Approaches (Aggregating resources in a structured format)
        Frictionless Data: Uses JSON schemas to describe data resources.
        BagIt: Packages hierarchical file structures but treats payloads as opaque data.
        RO-Crate: Utilizes JSON-LD metadata to make research objects self-describing.

    Hierarchical Collections (Dynamic representations of structured resources)
        Portland Common Data Model (PCDM): Supports structured data hierarchies but lacks machine-readable interfaces.
        RDA Research Data Collections API: Provides machine-readable collections supporting FAIR principles.

Problem Formulation

    Workflows need structured input/output formats to maintain reproducibility.
    Workflow steps require machine-readable and remotely resolvable data.
    The challenge is to find packaging solutions that ensure interoperability, machine-actionability, and self-description.

Use Case: Digitized Medieval Manuscripts

    A workflow pipeline is described where scanned manuscripts undergo:
        Feature extraction → Metadata & XML descriptions.
        Data ingestion → Storage in a research repository.
        Annotation generation → Manual editing by researchers.

    Challenges:
        Ensuring inputs/outputs are structured and reusable.
        Using packaging technologies to facilitate step-by-step execution.

Applying Packaging Technologies for Data & Workflow Exchange

The authors analyze two major ways to package workflow data:

    Frictionless Data (for local file-based input/output)
        Uses a datapackage.json metadata file to describe files.
        Supports validation and schema definitions for structured data.

    RO-Crate (for workflow representation)
        Uses JSON-LD metadata to describe:
            Workflow steps.
            Inputs/outputs.
            Dependencies.
        Supports linking to canonical workflow steps using PIDs.
        Allows workflows to be human-readable and machine-actionable.

Example Implementation:

    A workflow definition using RO-Crate references canonical steps and links outputs between workflow steps.
    Each step includes metadata about:
        Software used.
        Input/output dependencies.
        Data formats.

Discussion and Conclusions

    Packaging technologies enhance workflow reproducibility by making data and workflow artifacts structured and self-describing.
    The combination of Frictionless Data (for file-based inputs) and RO-Crate (for workflow representation) ensures:
        Interoperability between workflow steps.
        FAIR principles in data workflows.
        Machine-readable and human-readable workflow descriptions.
    Challenges & Open Questions:
        Handling workflow state information effectively.
        Flexibility in storing primitive values (e.g., Boolean results).
        Standardization of packaging technologies for broader adoption.

Future Work

    Further research is needed on integrating state information into packaging frameworks.
    Enhancing interoperability between different workflow execution environments.
    Exploring extensions for FAIR DOs in packaging standards.

Key Takeaways

    Packaging technologies are crucial for structuring workflow data and execution.
    Frictionless Data and RO-Crate offer practical solutions for data packaging and workflow descriptions.
    The paper demonstrates how packaging technologies can improve research reproducibility, workflow automation, and data exchange.

Relevance

This work is highly relevant to research fields relying on reproducible workflows, including data science, digital humanities, and computational research.