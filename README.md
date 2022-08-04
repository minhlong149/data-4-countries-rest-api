# REST Countries API

This is a solution to the REST Countries API challenge on [Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) and [Full Stack Open](https://fullstackopen.com/en/part2/getting_data_from_server#exercises-2-11-2-14).

## Table of contents

- [REST Countries API](#rest-countries-api)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Features](#features)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### Features

- Display countries from the API on the homepage, sorted by population
- Search for a country by its name or capital
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![screenshot](./screenshot.png)

### Links

- View code solution: [github.com/minhlong149/rest-countries-api](https://github.com/minhlong149/rest-countries-api)
- Live site preview: [minhlong149.github.io/rest-countries-api](https://minhlong149.github.io/rest-countries-api/)

## My process

### Built with

- [Semantic HTML5 markup](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- CSS Grid & Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

### What I learned

[Lazy loading Images:](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading#images_and_iframes)

```html
<img loading="lazy" src="..." />
```

Search bar with icon inside:

```html
<div class="flex items-center">
  <span class="material-icons">search</span>
  <input
    class="bg-transparent focus:outline-none"
    placeholder="Search" type="text"
  />
</div>
```

Add floating point to big number for readability.

```js
<p>Population: {country.population.toLocaleString()}</p>
```

Handle display to array that can either be empty or have multiple value.

```js
<p>Capital: {country.capital?.join(", ") || "None"}</p>
```

### Useful resources

- Search and Filter React Components by [Spruce Emmanuel](https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/)
- Tailwind CSS [Official Document](https://tailwindcss.com/docs/)
- A Complete Guide to Grid by [Chris House](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Author

- Github - [Long Nguyen](https://github.com/minhlong149)
