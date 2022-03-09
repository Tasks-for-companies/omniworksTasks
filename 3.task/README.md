## Technical design for app:

1. ### Frontend part:

#### a. Tools, frameworks, npm libraries you plan to use and why:

- For navigation, I would use `React Router` because it's the default option, and most developers are familiar with its API. If the app though, needs to block back button clicks or show an alert on reload, then I would go with v5 and not v6, because currently the Prompt component (and usePrompt and useBlocker) are not supported.
- For `state management`, I would use `Redux`. It's very fast, it has great hooks you can use to access the store, dispatch functions. And also very helpful middlewares like `redux-thunk` to run async actions. Further, it has the Redux plugin for the React Native Debugger, where you can see your store, travel back in time, check the effects of an action and many more.
- If the app does a lot of fetching, I would consider using also `ReactQuery` which does the fetching and storing of the data.
- For `testing` I would go with `Jest`, `React Testing Library` and `Mock Service Worker`, because they work concisely and yet give you many options.
- For form `submission` of forms and `validation`, I would go with `Formik` and `yup`. They work fine together and you save a lot of time, by using them.
- I would also use TypeScript and eslint to catch errors in compile time.
- Of course `git` and `github` to save the code and be able to look back.
- Lastly, I would configure the app to run scripts (e.g. `npx tsc` ) that check everything for errors before committing.

#### b. Directory structure for source code folder

For a raw app (without Expo) I would have everything in a `src` folder, except `assets` and `tests`. The src would include the following folders:

- components
- constants
- hooks
- navigation
- screens
- store
- styles
- types
- utils

#### e. List of components which you’ll implement (with short description)

For example I would have some `UI` components, like `CustomModal`, `Card`, `CheckBox` etc.
`CustomModal` would have 8 attributes, from which the 3 would be optional.
Attributes:
`modalVisible`, `onRequestClose`, `textOne`, `textTwo`, `buttonOneTitle`, `onPressOne`, `onPressTwo`, `buttonTwoTitle`,

The optional ones are the one referring to `text`, `button` and `onPress` -Two. Thus you could render a modal with just one button and just one text. Further the `modalVisible` would be used to return null in the component, and not have to use a ternary to show/hide, where you would use it.

#### d. For one of the components also provide in which directory/-ies component’s file/-es will be located

`CustomModal` would be in `src/component/UI`

#### e. Benefits/drawbacks comparing with traditional (not-SPA) app approach

- Drawbacks: New pages are loaded completely, and also main page content would eventually need to be reloaded too. These result in a huge performance hit. And a result of that is that we have worse user experience.
- Benefits: The first load is not so heavy. Users don't need to have JavaScript enabled in their browsers. No fear of cross-site scripting from hackers.

#### f. Any other comments and suggestions
