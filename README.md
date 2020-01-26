# ADP Assignment 1

Create a web app using React and React Router that displays data fetched from a public API.

# Topics

* React
* React Router
* Git Conventional Commits
* Material UI

# Getting Started

1. Use `yarn` to install the dependencies listed in the package.json
1. Run `yarn start` to start the dev server.
1. Open `localhost:1234` in your web browser.

You can now start to write your web app in `src/App.js` and parcel bundler will automatically reload `localhost:1234` with your changes.

# Grading Criteria

1. Use ReactJS
1. Proper structuring of components
    1. Create a modulure architecture by spliting the application into components
    1. Use props to share data between components.
    1. Use state to persist data in components.
    1. Pass *only* the needed data down to child components.
    1. Don't keep all of your application state in one "globals" top level component.
    1. State and props should not rerender excessively - components that are not intended to re-render should be affected by unrelated changes to the web app
1. Use at least one third party component library (eg. material-ui)
1. Use react-router to create multiple routes
    1. Create at least one static route (eg.`path="/posts"`) that lists data fetched from an API
    1. Create at least one dynaimc route (eg.`path="/posts/:postID"`) that shows an expanded view of an item in the list route (also)
1. Upload your code to git regularly.
    1. Use conventional commit messages. See: https://www.conventionalcommits.org/en/v1.0.0-beta.4/
    1. If you only have one commit in your git repo you will not receive any points for git. **Commit often**

## Bonus Extensions

1. Use functional components for all components and hooks to manage all state
1. Use a third party hook
    1. If you are using material-ui use `makeStyles` to style your components using JS
