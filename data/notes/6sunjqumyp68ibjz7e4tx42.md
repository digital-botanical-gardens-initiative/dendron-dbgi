
# Monorepo : Frontend
Here we describe the basic structure of the frontend of the [EMI monorepo](https://github.com/earth-metabolome-initiative/emi-monorepo/tree/web).

## `src`
### `api`
This directory contains the frontend handlers for the different authentication methods.

### `components`
This directory contains the different components that are used in the frontend. For example, the `footer.rs` file contains the footer of the website. The `search_bar.rs` file contains the search bar that is used to search for different items in the database.

#### `badge`
Directory defining how the entries in the database are displayed (implementation fo `RowToBadge` for each entry).

#### `forms`
Directory defining the forms used to create, update, and delete entries in the database from the frontend.

### `pages`
This directory contains the different pages of the website. For example, the `home.rs` file contains the home page of the website. The `login.rs` file contains the login page of the website.

## `styles`
This directory contains the CSS files that are used to style the website.