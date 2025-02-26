

# This is Maëlle's DBGI daily open-notebook.

Today is 2023.04.03


## TODO

- Check discussion: https://github.com/orgs/digital-botanical-gardens-initiative/discussions
- Check Zulip

## CODE

## NOTES

## TODO NEXT



## Important for redaction

Treemaps are a good alternative to sunburst graphs when dealing with large datasets, as they can display hierarchical data more efficiently, especially when there are many items at each level of the hierarchy.

  Optimize the treemap rendering:

  a. If your dataset is very large, you can consider aggregating the data before rendering the treemap. This would reduce the number of nodes, which would improve rendering performance. You can use the groupby() function from pandas to aggregate the data based on specific levels of hierarchy


    Optimize the dataset processing:

    a. Read only required columns from the CSV file using usecols parameter. You are already doing this, which is good.

    b. Instead of filtering the DataFrame twice and filling NaN values, you can filter and fill NaN values in one step using the query() method

  
To render better user experience: dcc.loading