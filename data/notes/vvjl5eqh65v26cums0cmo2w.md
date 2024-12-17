

# This is Maëlle's DBGI daily open-notebook.

Today is 2023.03.09


## TODO

- Check discussion: https://github.com/orgs/digital-botanical-gardens-initiative/discussions
- Check Zulip

## CODE

## NOTES

### dbgi meeting
To check:
https://dash.gallery/dash-drug-discovery/




### WIDS Geneva
https://widsgeneva.ch/
#### Building a data practice from scratch for a reasonable budget: The Good, the Bad, and the Ugly
*Christelle Marfaing, Head of Data, May*

- Seek and define your Good target
- Avoid the bad traps and dead ends
- Take the ugly way to get there


##### Build you data stack
- modern data stack movement (good way to start but not perfect) (https://www.alation.com/blog/modern-data-stack-explained/) => Batch ingestion of multiple sources to a DWH
- Important to know what you want to build and what you want to buy

##### A stack is nothing without a team
- Full stack or specialized team?
Specialization typically develops as a team matures and is heavily influenced by the prevailing trends at the time of the team's creation => will shape your HR policy

Data teams models:
- Centralized (one manager - small team)
- Hybrid
- Decentralized (each business unit works on different projects)
- Data Mesh (**Trendy in Paris**)

How to determine the model for your dream team?
- The degree of centralization of a team depends not only on the number of people but also on the team's maturity
- While decentralization can have advantages, a poorly executed ...

How to avoid spending all your time recruiting?
- Let them learn
- **LET IT GO**

##### Key takeaways
- Be prepared to start it all again.
- There is no one-size-fits-all solution, but the more you learn about building a tech stack and team, the more informed your decisions will be.
- Building a tech stack and a team are interdependent
- Recruiting and keeping employees is a big challenge.



#### Graph Neural Networks - applications and opportunities
*Nadya Chernyavskaya, Senior Researcher, CERN*

- When? Types of data to benefit from GNNs
- What For? 
- How?

##### Graph and their properties
- nodes and edges with features
- directed/undirected
- connected/disconnected
- Self-loops
- multi-graph (edges of different types => heterogenous graph)
- permutation invariant (challenging to visualise)

==> Graph structure offers much more flexibility:
- arbitrary size and complex topological structure

##### What for?
Learning on graphs:
- Node level- predict a property of a node
- Edge/Link level - predict links between two nodes (recommendation systems)
- Community/Subgraph level - detect if nodes form a community (user profiling task/ diagnostic tasks for rare disorders)
- graph level - categorize different graphs (**molecule property prediction**)

Other tasks: Graph evolution, Graph generation (Drug discovery)

##### How?
How to represent?
- adjacency matrix
- edge list 
- adjacency list

How to represent the features:
- Node features x edge features => 3D matrix

##### Message passing view of GNNs
We can get information about large scale structure by repeating a simple local rule
- Rule: My neighbours tell me what they think i should know
- This is done for all neghbourhoods and the information is updated
- After 3 iterations, i know what my 3 hop neighbours think we all should know

What about the previous information?
- Each node keep tracks 


##### Impact ?
- traffic prediction in Google maps
  * Nodes: road segments
  * Edges: connectivity between road segments
  * Prediction: Time of arrival

##### Conclusion
- **When?** Graph nerual networks is a very powerful tool for complex and sparse data
- **What for?** They can be successfully applied to a variety of different tasks such a s node classification, graph classification, edge prediction, etc.
- **How?** We learned how to convert graph into a ML ready representation and build a GNN


#### Databricks
https://github.com/marzervou/wids

##### MLOps
set of processes and automation for managing code, data and models to improve performance, stability and long-term efficiency of ML systems

Why should care ?
- Helps reduce risk
  * technical risk - poorly performing models, fragile infrastructure
  * Compliance risk - violating regulatory or corporate policies
- improves long-term efficiency through automation
  * catch errors before they hit production
  * avoid slow, manual processes


##### Databricks (https://www.databricks.com/)
- lakehouse platform
- Dev/staging/prod environments can be separated


- prod environments => ML flow(https://mlflow.org/)

##### Deploy code process
- Dev
  * Develop training code
  * Develop ancillary code
  * promote code
- staging
  * Test model training code on subset of data
- prod



![selfie](assets/images/widsgeneva.jpeg)


## TODO NEXT



## Important for redaction
