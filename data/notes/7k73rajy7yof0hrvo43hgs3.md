

# This is Maëlle's DBGI daily open-notebook.

Today is 2023.07.05


## TODO

- Check discussion: https://github.com/orgs/digital-botanical-gardens-initiative/discussions
- Check Zulip

## CODE

Yesterday problem was resolved as follow:

JS: 
```js
  return new Promise((resolve, reject) => {
    const nodes = [];
    let headers = [];

    repository.query(payload).then((stream) => {
      stream.on('data', (bindings) => {
        const node = {};
        for (const binding in bindings) {
          if (bindings.hasOwnProperty(binding)) {
            node[binding] = bindings[binding].value;  // use binding as id and bindings[binding].value as label
            if (!headers.includes(binding)) {
              headers.push(binding);  // add the binding to the headers if it's not already there
            }
          }
        }
        nodes.push(node);
      });
      stream.on('end', () => {
        // Resolve the promise with the graph data and the headers when the stream ends
        resolve({nodes: nodes, headers: headers});
      });
```
HTML:
```html
    <% if (typeof results !== 'undefined' && results.length > 0) { %>
        <table class="table table-striped table-responsive">
            <thead>
                <tr>
                    <% headers.forEach(function(header) { %>
                        <th><%= header %></th>
                    <% }); %>
                </tr>
            </thead>
            <tbody>
                <% results.forEach(function(node) { %>
                    <tr>
                        <% headers.forEach(function(header) { %>
                            <td><%= node[header] %></td>
                        <% }); %>
                    </tr>
                <% }); %>
            </tbody>
        </table>
        <% } else { %>
        <p>No results to display</p>
        <% } %>
```



Query to get the link to gnps:
```SPARQL
PREFIX enpkg: <https://enpkg.commons-lab.org/kg/>
select ?dbgi_sample ?GNPSdashboard where { 
	?extract enpkg:has_lab_process ?dbgi_sample .
    ?dbgi_sample enpkg:has_LCMS ?LCMS .
    ?LCMS enpkg:has_gnpslcms_link ?GNPSdashboard .
}
```
## NOTES


Should meet with pma:
- D'où les données doivent venir?
=> DBGI + LOTUS
- Structure du graph => comment faire la figure?
=> see article
- Lien GNPS 
=> OK

=> meeting at 2pm



## TODO NEXT



## Important for redaction
