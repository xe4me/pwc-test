# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions

### 1- `yarn / npm install`
### 2- `yarn build-and-serve`

### Disclaimer:
To use the search, you must enter a valid city ( Sydney, Macquarie Park, etc) inside NSW, Australia.
Australia and NSW are hard-coded, but can be made available using dropdowns etc.
After entering the value, please press Enter or click on the search icon.

Please note that I'm aware that there's no error handling on the city, and also not a proper one on the api call.

Please consider this only as a happy path :D

This application is tested on Chrome, Safari and Firefox, all the latest version, although I think it should have any issues in IE too :D

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To run the uni tests
### `yarn test`

Note that I've tried to write unit test for most of the functionality of this application, but I could cover 100% due to the time limit.
Please also note that I've added a library for accessibility coverage, which isn't perfect, but it does stop a lot of silly mistakes.
I've also audited this in Chrome and have received 100% coverage on accessibility, **however, a human validation of the accessibility requirements is still desirable.**


##Other considerations

### 1- Api utilities
For this very simple application, I decided to use `SWR` library, which gives me a nice set of react hooks and it uses the default browser `fetch` for all the api calls.
`SWR` also, nicely integrates with React Suspense, which I have use in this project. ( Checkout Weather component)
For larger application, obviously there needs to be put a little more thought into this.
I also didn't implement a state management like Redux, since I thought it's overkill. 
My favourite redux library these days is Epic and RTKQuery.

### 2- Styling
As you've seen, I've used React Material Components, which comes fully tested and has a decent accessibility coverage.
This means, I didn't use SASS or similar and instead for any custom styling, I used `styled` from MUI, which is a css in js technology.
There are some caveats to CSS in JS, in general, so more thought needs to be put in before making a enterprise level decision of the styling library and methos.

### 3- Environment variables
I put all the variables inside a `.env` for now and committed it so you can easily test the app.
However, these variables should ideally be located as part of a pipeline, like Github actions, AWS, Azure, etc.

### 4- Files structure 
I have divided all the components into Modules and Components.
A module is essentially a miro-frontend , which can be separated into its own package.
A module does the work of fetching, storing and updating the data and state.

There are some technologies like Lerna/Craco , which would be helpful to create a complete micro-frontend architecture.
Eventually, each module can have its own `package.json` and version etc.
The rest of the components are basic and dumb and do not have any API connection or state management.
Similar to the modules, all these components also can be shared using a package.




## What else would I improve ?
#### 1- A proper theming system using CSS variables
#### 2- Having a mock/stub library to enable for faster development and testing, MSW is my favourite https://mswjs.io/
#### 3- Enabling PWA
#### 4- Improving in style reality, through mixins etc
#### 5- Add Storybook for the reusable components and modules

