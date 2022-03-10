### Task 4 (20 min)

#### NOTES:

To run this tast, cd into 4.task, run: `npm start`, then press the `Process page` button which runs the `getProcessingPage()` with a random input. Please check `<ProcessingPage />` for code.

#### Task:

You have been tasked with creating a helper function `getProcessingPage`, which should return one value as the output out of an array of data.
Each element of the input array has the following structure:

```js
{  
    state: <String> // a state to go to  
    errorCode: <String> // optional error code  
}  
```

- The helper function will behave differently based on the states:
- state is 'processing': delay by 2 seconds, then fetch the next state
- state is 'error': return the result object based on the error code provided (see below)
- state is 'success': the function should return the object: `{ title: 'Order complete' message: null }`

Handling error codes:

- 'NO_STOCK' = return from the helper with an object: `{ title: 'Error page', message: 'No stock has been found' }`
- 'INCORRECT_DETAILS' = return from the helper with an object: `{ title: 'Error page', message: 'Incorrect details have been entered' }`
- null = return from the helper with an object: `{ title: 'Error page', message: null }`
- undefined = return from the helper with an object: `{ title: 'Error page', message: null }`
- Example usage:
- `getProcessingPage([{ state: 'processing' }, { state: 'error' }])`

This code should return after 2 seconds with the object: `{ title: 'Error page', message: null }`

To-do:
Provide the code and the code demonstrating how to run it
