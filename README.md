# Citybikes Dashboard

This repository provides the starter code files necessary for the CityBikes Dashboard assignment. 

The assignment instructions are contained within the `instructions.ipynb`. 

A preview of the final product can be found at <https://citybikes-dashboard-solution.vercel.app>.

<hr>

<h2>Table of Challenges:</h2>

Challenge 0: **Setting Up The Repository Locally**

<h3>Data Loaders:</h3>

Challenge 1: **Specs for Network Data Loader (`network.json.js`)**
>Challenge 1.1: Completing the `parse_network` function.

Challenge 2: **Specs for Stations Data Loader (`stations.json.js`)**
>Challenge 2.1: Completing the `parse_stations` function.

<h3>Pages:</h3>

Challenge 3: **Specs for CityBikes Dashboard Home Page (`index.md`)**
>Challenge 3.1: Importing data from the data loaders.
>
>Challenge 3.2: Adding grids and cards with string interpolation.

Challenge 4: **Specs for Bike Types Dashboard Page (`bike-types.md`)**
>Challenge 4.1: Importing data from the data loaders.
>
>Challenge 4.2: Adding a dropdown selector.

Challenge 5: **Specs for Station Demand Visualization Page (`station-demand.md`)**
>Challenge 5.1: Importing data from the data loaders.

<h3>Components:</h3>

Challenge 6: **Specs for Station Demand Visualization Component (`station-demand-plot.js`)**
>Challenge 6.1: Title
>
>Challenge 6.2: Marks
>
>Challenge 6.3: X-Axis
>
>Challenge 6.4: Y-Axis
>
>Challenge 6.5: Formatting

Challenge 7: **Specs for Bike Type Plot Component(`bike-type-plot.js`)**
>Challenge 7.1: Title
>
>Challenge 7.2: Marks
>
>Challenge 7.3: X-Axis
>
>Challenge 7.4: Y-Axis
>
>Challenge 7.5: Color

<h3>Deployment:</h3>

Challenge 8: **Deploying Your Dashboard**
>Challenge 8.1: Setting Up Local Configurations
>
>Challenge 8.2: Deploying the Application

<hr>

This is an [Observable Framework](https://observablehq.com/framework) app. To start the local preview server, run:

```
npm run dev
```

Then visit <http://localhost:3000> to preview your app.

For more, see <https://observablehq.com/framework/getting-started>.

## Project structure

A typical Framework project looks like this:

```ini
.
├─ src
│  ├─ components
│  │  ├─ bike-type-plot.js      # an importable module
│  │  └─ station-demand-plot.js # an importable module

│  ├─ data
│  │  ├─ network.json.js       # a data loader
│  │  └─ network.json.js       # a data loader
│  ├─ bike-types.md     	   # a page
│  ├─ station-demand.md        # another page
│  └─ index.md                 # the home page
├─ .gitignore
├─ observablehq.config.js      # the app config file
├─ package.json
├─ vercel.json		    # the deployment config file
└─ README.md
```

**`src`** - This is the “source root” — where your source files live. Pages go here. Each page is a Markdown file. Observable Framework uses [file-based routing](https://observablehq.com/framework/routing), which means that the name of the file controls where the page is served. You can create as many pages as you like. Use folders to organize your pages.

**`src/index.md`** - This is the home page for your app. You can have as many additional pages as you’d like, but you should always have a home page, too.

**`src/data`** - You can put [data loaders](https://observablehq.com/framework/loaders) or static data files anywhere in your source root, but we recommend putting them here.

**`src/components`** - You can put shared [JavaScript modules](https://observablehq.com/framework/javascript/imports) anywhere in your source root, but we recommend putting them here. This helps you pull code out of Markdown files and into JavaScript modules, making it easier to reuse code across pages, write tests and run linters, and even share code with vanilla web applications.

**`observablehq.config.js`** - This is the [app configuration](https://observablehq.com/framework/config) file, such as the pages and sections in the sidebar navigation, and the app’s title.

## Command reference

| Command           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `npm install`            | Install or reinstall dependencies                        |
| `npm run dev`        | Start local preview server                               |
| `npm run build`      | Build your static site, generating `./dist`              |
| `npm run deploy`     | Deploy your app to Vercel                            |
| `npm run clean`      | Clear the local data loader cache                        |
| `npm run observable` | Run commands like `observable help`                      |
