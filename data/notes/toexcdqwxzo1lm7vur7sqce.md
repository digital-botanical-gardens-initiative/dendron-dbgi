

# This is Maëlle's DBGI daily open-notebook.

Today is 2023.07.04


## TODO

- Check discussion: https://github.com/orgs/digital-botanical-gardens-initiative/discussions
- Check Zulip

## CODE

Problem with:
```js
    repository.query(payload).then((stream) => {
      stream.on('data', (bindings) => {
        console.log(bindings);
        // for (const binding in bindings) {
          console.log(binding);
          if (bindings.hasOwnProperty(binding)) {
            nodes.push({id: bindings[binding].value, label: bindings[binding].value});
          }
        }
      });
```
binding id et label est le même dans la boucle for => même valeur dans une ligne
Ne prends pas en compte si plus de colonne

## NOTES

Managed to link GraphDB to app with help of https://github.com/Ontotext-AD/graphdb.js

## TODO NEXT



## Important for redaction
