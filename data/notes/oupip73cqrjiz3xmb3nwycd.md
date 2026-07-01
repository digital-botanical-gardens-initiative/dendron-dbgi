

# This is Maëlle's DBGI daily open-notebook.

Today is 2023.03.22


## TODO

- Check discussion: https://github.com/orgs/digital-botanical-gardens-initiative/discussions
- Check Zulip

## CODE


layout with list of multiple images: 
```python
def smile_to_img(smile):
    img_ls = []

    buffered = BytesIO()
    d2d = rdMolDraw2D.MolDraw2DSVG(200, 200)
    opts = d2d.drawOptions()
    opts.clearBackground = False
    for i in smile:
        d2d.DrawMolecule(Chem.MolFromSmiles(i))
        d2d.FinishDrawing()
        img_str = d2d.GetDrawingText()
        buffered.write(str.encode(img_str))
        img_str = base64.b64encode(buffered.getvalue())
        img_str = f"data:image/svg+xml;base64,{repr(img_str)[2:-1]}"
        img_ls.append(img_str)
    return img_ls

def element_visualization(element, column):
    CSV_PATH = f'{os.getcwd()}/data/230106_frozen_metadata.csv'

    df = dd.read_csv(CSV_PATH, dtype={'manual_validation': 'object',
                                        'organism_taxonomy_07tribe': 'object',
                                        'organism_taxonomy_10varietas': 'object',
                                        'organism_taxonomy_gbifid': 'object',
                                        'organism_taxonomy_ncbiid': 'float64',
                                        'organism_taxonomy_ottid': 'float64',
                                        'structure_cid': 'float64',
                                        'structure_taxonomy_classyfire_chemontid': 'float64'})
    df = df[(df[column] == element)]
    df = df.compute()


    smiles = set(df['structure_smiles'].to_list())

    imgs = smile_to_img(smiles)

    # Create a list of html.Img elements for the images
    img_elements = [
        html.Img(
            src=img_str,
            style={
                "width": "100%",
                "background-color": f"rgba(255,255,255,{0.7})",
            },
        )
        for img_str in imgs
    ]

    layout = html.Div(img_elements)

    return layout


layout = element_visualization('http://www.wikidata.org/entity/Q43656','structure_wikidata')

dash.register_page('element', path='/element', layout=layout, icon="bi bi-house")
```


## NOTES

- GNPS dashboard => link to it with Massive id => https://ccms-ucsd.github.io/GNPSDocumentation/api/

## TODO NEXT



## Important for redaction

Dask instead of pandas:                                                  
https://datascientyst.com/read_csv-skip-rows-condition-values-pandas/

Dask is a powerful library for parallel computing in Python, designed to handle large-scale datasets that cannot fit into memory on a single machine. Here are some advantages of using Dask to load a dataframe in Python:

    Scalability: Dask can handle datasets that are larger than the memory of a single machine, by breaking them down into smaller chunks and distributing the work across multiple cores and/or machines. This allows you to work with datasets that would otherwise be impossible to handle using traditional Python libraries like Pandas.

    Familiar API: Dask has a Pandas-like API, which makes it easy to learn and use if you are already familiar with Pandas. This means that you can use many of the same methods and functions that you would use with a Pandas dataframe, but with the added scalability of Dask.

    Lazy evaluation: Dask uses lazy evaluation, which means that it only computes the data when it is needed. This allows you to work with large datasets without having to load all the data into memory at once, which can save time and resources.

    Parallel processing: Dask can use multiple cores and/or machines to process data in parallel, which can greatly speed up computations. This can be especially useful for tasks like data cleaning, transformation, and aggregation.

    Integration with other libraries: Dask integrates well with other Python libraries, such as NumPy, Scikit-Learn, and TensorFlow. This allows you to use Dask in conjunction with other tools to build complex data processing and machine learning pipelines.

Overall, using Dask to load a dataframe in Python can be advantageous when working with large datasets that cannot fit into memory on a single machine, or when you need to perform computationally intensive tasks that would benefit from parallel processing.