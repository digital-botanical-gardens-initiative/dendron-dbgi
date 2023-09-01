---
id: u3r5ovqpurmj36nsvmetsl8
title: Emi Semantic Model
desc: ''
updated: 1693548815415
created: 1693548771769
---

[[emi-semantic-model]]

Working on the EMI semantic model at [[emi-semantic-model]]

Checking if the mermaid format used by Tarcisio can be used to draft the model directly in dendron notes

```mermaid
graph TD
		d[":Mass-Spectrometer-A"]-->|rdf:type|sosa:Platform
		d-->|sosa:hosts|d2["Sampler-A"]
		d2-->|rdf:type|sosa:Sampler
		d2-->|sosa:madeSampling|oo["Sampling-S1"]
    oo-->|rdf:type|a["sosa:Sampling"]
    oo-->|"sosa:hasFeatureOfInterest -> prov:used"|s["Raw-Material-S1"]
    oo-->|sosa:hasResult|es1["Extracted-Sample-S1"]
    es1-->|rdf:type|emi:ExtractSample
    s-->|rdf:type|sSample["sosa:Sample, emi:RawMaterial"]
    s-->|sosa:isSampleOf|t["a Taxon"]
    t-->|rdf:type|w["<a href=http://www.wikidata.org/entity/Q16521>wikidata:Q16521</a>"]
    s-->|"emi:isClassifiedWith (optional)"|w2["Specimen Type Vocabulary"]
    oo-->|sosa:usedProcedure|proc["Sampling-procedure-S1"]
    proc-->|rdf:type|sosa:Procedure
```

https://www.w3.org/TR/vocab-ssn/#intro

https://github.com/w3c/sdw-sosa-ssn


> The Semantic Sensor Network (SSN) ontology is an ontology for describing sensors and their observations, the involved procedures, the studied features of interest, the samples used to do so, and the observed properties, as well as actuators. SSN follows a horizontal and vertical modularization architecture by including a lightweight but self-contained core ontology called SOSA (Sensor, Observation, Sample, and Actuator) for its elementary classes and properties. With their different scope and different degrees of axiomatization, SSN and SOSA are able to support a wide range of applications and use cases, including satellite imagery, large-scale scientific monitoring, industrial and household infrastructures, social sensing, citizen science, observation-driven ontology engineering, and the Web of Things. Both ontologies are described below, and examples of their usage are given.


