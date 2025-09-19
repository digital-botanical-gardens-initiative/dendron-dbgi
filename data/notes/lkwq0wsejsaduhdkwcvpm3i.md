

# This is Maëlle's DBGI daily open-notebook.

Today is 2023.03.14


## TODO

- Check discussion: https://github.com/orgs/digital-botanical-gardens-initiative/discussions
- Check Zulip
- try searching bar instead of dropdown

- have a look at databricks
- frictionless https://frictionlessdata.io/

## CODE

## NOTES

### openBIS workshop
⚠️ discuss backup of our postgres with pma

### databricks
https://hevodata.com/learn/what-is-databricks/


## TODO NEXT



## Important for redaction

From ChatGPT for search bar:

If you have a large DataFrame and want to optimize the performance of your search function, there are a few things you can do:

    Use vectorized operations instead of loops: In general, it's faster to use vectorized operations on a pandas DataFrame than to iterate over each row or column. For example, you can use the apply() method to apply a function to each element of a DataFrame column, or the str.contains() method to search for a pattern in a DataFrame column.

    Use regular expressions carefully: Regular expressions can be powerful, but they can also be slow if the pattern is complex or the data is large. If possible, use simpler patterns that can be matched efficiently.

    Use indexing: If you're searching for matches in a DataFrame column, you can use indexing to speed up the search. For example, if you know that a column is sorted, you can use binary search to quickly find the range of rows that match your search pattern.

    Use parallel processing: If your machine has multiple cores, you can use parallel processing to speed up the search. For example, you can split the DataFrame into chunks and process each chunk in parallel using the multiprocessing module.