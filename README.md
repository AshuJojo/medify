
# Bot AIv

Please view live application at [Medify](https://medify-dun.vercel.app/).

## Demo 

Fork and run this application using below command: 

```
npm install
npm run dev
```

## Overview
 
It is a medical website frontend application, which can fetch and show available hospitals from state & city. And you book a slot by current date to 7 days onward with time.

## Features

#### Landing Page

* Have an alert bar at the top of navbar
* Navbar is responsive and shows nav-item which could be used to navigate in website, these navbar links are made with react-router `Link` Component.
* Next is Hero Section which shows image & overview of website.
* Most interesting feature of website is search component which displays a form of state and city, and button would be disabled until all the inputs are given.
* Upon clicking on `state` input, it shows an set of state from fetched api. & `city` input whould show no cities, until a state is selected.
* When you click on `Search` button, it redirects to `/hospitals` url with state and city query.
* Next is a corousel component which is made using `swiper` and it shows offers.
* Then there is a specialization component which shows a set of card with icon and name of different specialization available in hospitals.
* After that We have another carousel, this carousel is on autoplay, and keep looping the different top doctors.
* Others 3 components are just made using different typography and card component.
* After that we have FAQs section, which shows an accordion of different questions and answers from past.
* Under that is download app seciton which shows an input and static image.
* At last we have footer which shows footer navs, and social links and copywrite.

#### Hospitals Page

* Below navbar here is a search form that is reusable component from previous page. and it serves the same function.
* Under that shows a heading which shows how many hospitals are available in that city.
* After that is a list of hospitals Card, which consists of name, address, and rating.
* Upon clicking on `Book Free Center Visit` button, it shows a tab component which have dates listed from current date to 7 days onwards.
* Upon selecting on any of these dates, there is slots timing from morning, afternoon, & evening.
* Upon clicking on these slots button, a modal is shown to confirm booking. 
* Upon confirming the booking the booking slot is saved in localstorage along with hospital details, the date is a timestamp and no hospital data is duplicated in localstorage to make best use of resources.
* After saving data in localstorage, the application navigates user to `My Booking` page.

#### My Booking Page:

* At the top this page have a `search hospital` form.
* Upon clicking on the input box it shows a list of booked hospitals of users, and on selecting any one option, it only shows the data of that hospital along with booking slot.
* After that we have a list of booking cards which shows hospital data along with its booking date and timing, these dates and timing are formated in simpler way to persent to the user.

#### Highlighted Tools & Components

* [JavaScript `Date` Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
* Carousel with [Swiper](https://swiperjs.com/)
* Material UI [Asynchronous Autocomplete](https://mui.com/material-ui/react-autocomplete/#asynchronous-requests)
* Material UI [Tabs Component](https://mui.com/material-ui/react-tabs/)

## Tech Stack

* HTML5
* CSS3
* JavaScript
* React.js 18
* Material UI 
* [Swiper](https://swiperjs.com/)
* [axios](https://www.npmjs.com/package/axios)
* [react-icons](https://react-icons.github.io/react-icons/)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
