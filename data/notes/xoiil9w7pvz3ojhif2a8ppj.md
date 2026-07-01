

We are having some issues (stucked SPARQL queries, max 1 concurrent query, etc.) with the ENPKG GraphDB instance. 
https://enpkg.commons-lab.org/graphdb/

As discussed with Marco Pagni we should look into alternatives.
MP and Seb are looking into the following options:

- RDF4J/Virtuoso
- qendpoint https://the-qa-company.com/products/qEndpoint

We should discuss these with Tarcisio and Ana.

Options I have briefly looked at this afternoon

- Ontop https://ontop-vkg.org/
- Blazegraph https://blazegraph.com/
- JanusGraph https://janusgraph.org/

When looking at the possibilities to realize SPARQL queries in JanusGraph I found the following informative discussion:

https://groups.google.com/g/janusgraph-users/c/I4rW_KhcgFE?pli=1

Notably Serge's comment 

> In general Property graph and RDF store have each their own advantage and it's more than a difference in implementation. I used the word general as some vendors are trying to reduce those difference. For example, Stardog extended SPARQL with a PATH operator which allow you to easily traverse a path which would usually be easier in a property graph.
> 
> Things to consider are: Do you want to benefit from inference. For example, A isFatherOf B and B isFatherOf C you could add a rule that when you ask who 'isGrandFatherof' C it would return A without really having it in the database. You could load different rules which can be useful. So that clearly an advantage of RDF. However RDF does not support attribute on your relationship directly. While it could be model, it could get complicated and be slow if most relationship requires attribute.
> 
> There are a few key difference like that that may make a technology better than another. I personally always start with a RDF solution, simply because I really am a fan of inference, and federated solution. If it does not work, it usually very easy to adjust the physical model to load in a property graph database.
> 
> Therefore I really recommend that you read up on both technology as which one you should use could be dictated by your use case.


So this brings a first question regarding the EMIKG. 

- Do we want a Property Graph or a RDF store?

or in other words

- Do we want to benefit from inference?
- Do we want to have attributes on relationships?


