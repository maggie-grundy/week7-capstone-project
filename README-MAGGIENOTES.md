# Frontend Mentor - Weather app solution

This is a solution to the [Weather app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- [] Search for weather information by entering a location in the search bar
- [] View current weather conditions including temperature, weather icon, and location details
- [] See additional weather metrics like "feels like" temperature, humidity percentage, wind speed, and precipitation amounts
- [] Browse a 7-day weather forecast with daily high/low temperatures and weather icons
- [] View an hourly forecast showing temperature changes throughout the day
- [] Switch between different days of the week using the day selector in the hourly forecast section
- [] Toggle between Imperial and Metric measurement units via the units dropdown
- [] Switch between specific temperature units (Celsius and Fahrenheit) and measurement units for wind speed (km/h and mph) and precipitation (millimeters) via the units dropdown
- [] View the optimal layout for the interface depending on their device's screen size
- [] See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I used chatgpt to help me break down my approach into steps to get started! I tried two lists here, one more big-picture and one a little more granular to try moving between them if I get stuck in details mode or big picture mode and need to shift.

### Working Notes

I often think of little things to do while I'm going through a big project and because I tend to forget things quickly, I'll jump right to doing the thing and then forget what I was working on before or lose momentum. So here I'm going to try making myself a small section with a checklist to place things like this that I want to do or look up later!

- [X] Check how to get the magnifying glass icon image inside of the input field itself. I think a span would work maybe? I know we did this in an earlier project (mortgage calculator) or something similar with those input fields so check that first. (Confirmed it's span with css positioning - made input__prefix)
- [X] Add empty `<p>` for `.input__error`

I'm unsure how I want to dynamically update my JS sections. For now I've set up 2 approaches - one like this where I can target the ID:

```
<section class="weather__resultscontainer" aria-live="polite">
        <div id="weather__results">
          <h2 class="weather__results-title" id="resultsCity">
            <!--Populate City Name-->
          </h2>
          <p class="weather__results-date" id="resultsDate">
            <!--Populate current date-->
          </p>

          <!--Populate weather icon-->
          <img src="" id="resultsIcon" alt="" />

          <p class="weather__results-temp" id="resultsTemp">
            <!--Populate large font temp-->
          </p>
        </div>

        <div class="weather__feelslike">
          <p class="weather__feelslike-label">Feels Like</p>
          <p class="weather__results-value" id="feelslikeValue">
            <!--JS here-->
          </p>
        </div>
        <div class="weather__humidity">
          <p class="weather__humidity-label">Humidity</p>
          <p class="weather__results-value" id="humidityValue"></p>
        </div>
        <div class="weather__wind">
          <p class="weather__results-value" id="humidityValue">Wind</p>
        </div>
        <div class="weather__precipitation">
          <p class="weather__results-value" id="precipitationValue">
            Precipitation
          </p>
        </div>
      </section>

```

And then for this section I'm trying something I just learned a bit about, the `<template>` semantic tag. I'm not totally sure how it works yet! I will move down my app design until I get to the Daily Forecast and Hourly Forecast sections and test `<template>` when I get there.

```
<section class="weather__dailyforecast" aria-label="daily forecast">
        <h2 class="weather__dailyforecast-heading">Daily Forecast</h2>

        <!--Empty container for dynamically generated days-->
        <div id="weather__dayscontainer"></div>

        <!--Trying template class for dynamic population-->
        <template id="weather__day-template">
          <article class="weather__day">
            <p class="weather__day-name"></p>
            <img class="weather__day-icon" src="" alt="Weather icon" />
            <p class="weather__day-temp-high"></p>
            <p class="weather__day-temp-low"></p>
          </article>
        </template>
      </section>

      <section class="weather__hourlyforecast" aria-label="hourly forecast">
        <h2 class="weather__hourlyforecast-heading">Hourly forecast</h2>

        <div class="weather__hourlyforecast-dropdown">
          <select id="myWeatherDropdownDay" name="weatherDropdownDay">
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
        </div>

        <div id="weather__hourscontainer"></div>

        <template id="weather__hour-template">
          <article class="weather__hour">
            <p class="weather__hour-time"></p>
            <img class="weather__hour-icon" src="" alt="" />
            <p class="weather__hour-temp"></p>
          </article>
        </template>
      </section>
```

I realized while working through my positioning & styling that the first results section and feels like/humidity/wind/precipitation containers were mixed together. So I solved this by wrapping that second section in a separate div and reworked my css grid layout.

### Broad Checklist

**Phase 1: Setup & Skeleton**

- [X] Create your project folder & version control (git) so you track changes.
- [X] Set up basic HTML structure: main container, header, search bar, results area, forecast area, etc.
- [X] Write the CSS skeleton: define your grid / sections layout (for desktop & mobile). Use a display: grid (or flex) for the main layout, then inside each card use display: flex.
- [X] Add class names for the major blocks (search, current weather, metrics, forecast cards).
- [X] Set up a CSS reset / base styles so browser differences don’t trip you up.
- [ ] *Add something with ` <pre>` tag!
- [ ] **Don't need to include daily & hourly section!**

**Phase 2: Responsive layout & styling**

- [] Build the mobile version first — get the sections stacking nicely, typography sizes, spacing.
- [] Then work desktop-layout: e.g., maybe sidebar + main section, or split layout.
- [] Define your grid for the cards/forecast area: maybe a 7-day forecast grid.
- [] Use flex in cards: icon + temp + day label etc.
- [] Test key breakpoints: mobile portrait, tablet, desktop.
- [] Add hover/focus states for interactive elements (buttons, search input) — the challenge spec mentions it.

**Phase 3: Data & interactivity**

- [] Choose and integrate the Open‑Meteo API.
- [] Write the JS to fetch data when the user enters a location.
- [] Parse and display: current weather (icon, temp, location), extra metrics (feels like, humidity, wind, precipitation).
- [] Build the 7-day forecast block, plus hourly forecast section.
- [] Implement unit switching (Metric ↔ Imperial) for temperature, wind speed, precipitation.
- [] Add the interactive day selector in hourly forecast (so when you pick a day, it shows that day’s hourly data).

**Phase 4: Polish & nice-to-haves**

- [] Add loading & error states: what if the location isn’t found?
- [] Fine-tune responsiveness: maybe hide/show elements differently on small screens.
- [] Accessibility: Keyboard-focus, labels, ARIA where appropriate.
- [] Code cleanup: modularize JS, meaningful CSS variables, comment where needed.
- [] Test on different browsers / devices.

**Phase 5: Wrap-up & submission**

- [] Prepare README: what you built, how to run it, what you learned.
- [] Make sure your submission matches the challenge’s spec (hover states, responsive layout, etc).
- [] Optional: Commit, push to GitHub, share link, submit.
- [] Reflect: what would you do differently next time?

### Detailed Checklist

- [] **Hour 0-1:** Set up project folder, HTML skeleton, CSS skeleton (layout only, no styling polish).

  - [X] Create styles folder with: desktop styles, mobile styles (link in html)
  - [X] Change commas in typeface filenames to hyphens to avoid unexpected behaviors
  - [X] Create scripts folder with: just main.js for now (link in html)
  - [X] Create utils folder with css variables (link in css)
  - [ ] Create HTML structure
  - [ ] Determine where media queries are necessary or if grid and flex are sufficient to develop the layout responsively
  - [ ] Create mobile CSS skeleton
- [] **Hour 1-2:** Work on mobile layout: search bar, current weather section, forecast cards stacking.
- [] **Hour 2-3:** Desktop layout: grid for forecast cards, sidebar/main differences. Add flex for cards.
- [] **Hour 3-4:** Start JS: fetch data for a hard-coded location, display in current weather section.
- [] **Hour 4-5:** Hook up search functionality: user input, API call, update UI.
- [] **Hour 5-6:** Add unit toggle (metric/imperial) logic and link it to UI conversion.
- [] **Evening wrap-up:** test responsiveness, try a different location, fix layout quirks.

For my structure, I am first trying a grid and flex approach. I'm using [cssgridgenerator.io](https://cssgridgenerator.io/ "css grid generator") to create my containers. I am creating `<main class="main">` to hold all of my smaller containers.

I'll put the logo and unit dropdown in the top div (or outside in a semantic header div that's just static/always at the top might work better?)

Then a div spanning the entire container with the H1.

Next a div spanning the entire container with our search bar (+ span icon magnifying glass) and submit button.

The bottom div will be our large container with all the stuff in it. I think we can break up the sections with more divs and use flex then to assign more granular behaviors for alignment. I'll start with mobile and ensure the sections flow properly and then see how it translates to desktop. At this point I'm unsure if I'll need positioning media queries, but I think grid and flex should work together for this!

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
