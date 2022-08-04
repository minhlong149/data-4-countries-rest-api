# REST Countries API (With a color theme switcher)

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) and [Data for countries exercise on Full Stack Open](https://fullstackopen.com/en/part2/getting_data_from_server#exercises-2-11-2-14).

## Table of contents

- [REST Countries API (With a color theme switcher)](#rest-countries-api-with-a-color-theme-switcher)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- [x] Display countries from the API on the homepage, sorted by population
- [x] Create user interface to search for a country
- [x] Filter countries by region
- [x] Click on a country to see more detailed information on a separate page
- [x] Click through to the border countries on the detail page
- [ ] Toggle the color scheme between light and dark mode

### Screenshot

![screenshot](./screenshot.png)

### Links

- [View code solution](https://your-solution-url.com)
- [Live site preview](https://minhlong149.github.io/rest-countries-api/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://styled-components.com/) - CSS framework for styles

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

Add floating point to big number *(eg. population)* for readability.

```js
<p>Population: {country.population.toLocaleString()}</p>
```

Handle display to array that can either empty or have multiple value.

```js
<p>Capital: {country.capital?.join(", ") || "None"}</p>
```

### Continued development

- Optimize components

### Useful resources

- [Search and Filter React Components, Spruce Emmanuel](https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/)

- [Tailwind CSS Document](https://tailwindcss.com/docs/)
- [A Complete Guide to Grid, Chris House](https://www.example.com)

## Author

- Github - [Long Nguyen](https://github.com/minhlong149)
