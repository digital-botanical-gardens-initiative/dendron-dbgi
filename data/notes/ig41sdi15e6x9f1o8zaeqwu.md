 This is Disha's DBGI daily open-notebook.

 Work update from April first-half

## Doing 
1. #VKG For scaling the VKG of trydb/GLOBI/enpkg so that the full tables (some of them upto 7 GB) can be integrated, I applied for an account on CCFS UniNe. But it is taking a lot of time to get this done. So, I decided to use databricks community edition to run simple workflows which require upto 15GB RAM (https://community.cloud.databricks.com/). I made an account, now working on technical aspects to make R and bash scripts work.
2. #VKG Integrating data from GLOBI. Filtering interactions specific to plant species in TRY-db (Of all the interaction tuples, I will extract the ones which have atleast one component matching the Plant species NCBI name from gLOBI)
3. #VKG Perform extensive tests with integrate_trydb VKG. Check at all levels with SPARQL. Validate the results.


## Done  
1. #VKG Modified ontologies for connecting information from enpkg, traits metadata, trydb observation data, taxonomic ids. However, there are inconsistencies in the results obtained from SPARQL query. 

2. #SciComm As suggested by Philipp from Science-et-cite, I had a meeting with Manuela from Zurich-Basel Plant Science centre. We did some brainstorming around how best to proceed with the AGORA project. Important points discussed:
a) Two main ideas: Make a video of informal interviews with researchers and PI who are deeply involved in this project, Design a SciComm project around data literacy (a topic rarely touched upon while comunicating with general public from non-Science background)
b) Combination of both digital and physical components. e.g: A screen-panel with virtual safaris, where people can click a location on a word map and see what plants exist where, maybe try to convert this into a game with a reward. 
Note: Idea not discussed with Manuela: Virtual exhibition using https://v21artspace.com/virtual-exhibitions or https://www.artsteps.com/
c) Fund-raising and SciComm are different projects. Try not to mix them.
d) Apply for the big grant with a deadline in Sept rather than the rolling call. Set aside salary % (upto 40%) for Science communication expert.
e) Check eligibility to appy for AGORA : citizenship criteria, research employment criteria (if I can show an employment contract with salary covered for the period of the employment, I can apply for AGORA individually, otherwise I can ask Emmanuel to apply).

I talked to Emmanuel about this and we discussed the following:
a) He will contact directors of botanical garden in Neuchatel  if they would like to have a panel with virtual components.
b) Making a video is a good idea. I will contact a professional to help us with that.
c) Data literacy sounds great, but the implementation is tricky and needs efforts. 
## Notes

## Todo tomorrow or soon

1. #SciComm Philipp gave contacts for people who can help with making videos. 

From Philip:

Daniel Saraga:

https://www.saraga.ch/

Mirko Bischofberger (also a film maker):

https://www.science-studios.ch/


2. #VKG Put the new ontologies to the github account. Transfer the integrate_trydb from my github account to DBGI's.
3. #VKG Incorporate ttl files for traits on the ontop VKG for coherence.
4. #SciComm Build a graphical overview of the two ideas discussed with Manuela.

## Today I learned that
1. Ontop with duckdb https://www..com/pulse/scaling-sparql-querying-billion-observations-ontop-duckdb-gschwend-myghf/

## Paused

9. Profile article for the DBGI website. 
10. DISPEL conversation.
11. Looked at PheObs, AusTraits and Globi. AusTraits looks very promising. Have to see how they integrated data. 
- 