

# This is Maëlle's DBGI daily open-notebook.

Today is 2023.04.04


## TODO

- Check discussion: https://github.com/orgs/digital-botanical-gardens-initiative/discussions
- Check Zulip

## CODE

## NOTES

## TODO NEXT

There are several ways to optimize a Dash app for performance:

  1.  Use a caching mechanism: If your app has to perform complex computations, it can be useful to cache the results. This can reduce the number of computations that the app has to perform and improve the overall performance. Dash provides a built-in caching mechanism called dcc.memoize.

  2. Use server-side callbacks: By default, Dash uses client-side callbacks, which means that all the data has to be transferred to the client and back to the server. This can be slow for large datasets. By using server-side callbacks, the data stays on the server, which can improve the performance.

  3. Optimize data loading: If your app loads data from external sources, you should make sure that the data is loaded efficiently. For example, you could load the data asynchronously or use a database to store the data.

  4. Use efficient data structures: Make sure that you are using efficient data structures to store and manipulate your data. For example, if you are working with large datasets, you might want to use Dask instead of Pandas.

  5. Optimize layout: The layout of your app can also impact performance. Make sure that you are not rendering unnecessary components and that your layout is optimized for performance.

  6. Use an efficient hosting service: If you are running your app on a server, make sure that you are using an efficient hosting service. This can include using a dedicated server or using a cloud-based hosting service like AWS or Heroku.

  7. Reduce the size of your data: If your app is slow because it has to transfer a lot of data, you might want to reduce the size of your data. For example, you could compress your data or only transfer the data that is necessary for the current view.

## Important for redaction
