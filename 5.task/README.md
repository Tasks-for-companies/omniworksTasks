### Task 5 (20 min)

You are mid/senior developer in some big long-term project A. You will be participating in this project for a long time. During the Scrum planning there was the following user story:

As external portal user\
When I open external portal and the portal has widget from the project’s A.\
Then I should see red alert if the amount of fuel consumed by cars in the fleet with id=121 more than 10k litres during current month.

The information about the amount of litres will be receive through the following endpoint:

```js
https://new.world.com/fleet/121
With the contract:
{
“id”: number, //id of the fleet
“litres”: number, //the amount of fuel consumed by fleet
}
```

Later our PO (product owner, who is sales consultant in other department) want to add some more features to that widget and make it more customizable. But it will be much later. You agreed that one of the junior developers will take that user story. User story is delivered for code review. Junior developer has demonstrated it to PO and as PO opinion what he sees in the browser all is done well.

Here will be the code from the junior developer. Please make code review (take in account that is only the first of multiple future code reviews):

```js
01: import React, { useEffect, useState } from 'react';
02:
03: function App() {
04:
05: var [fuel, setFeul] = useState(0);
06: var [alertText, setAlertTxt] = useState('Processing...');
07:
08: useEffect(() => {
09: fetch('https://new.world.com/fleet/121')
10: .then(response => response.json())
11: .then(json => {
12: setFeul(json);
13: console.log(json);
14: })
15: });
16:
17: useEffect(() => {
18: if (!fuel) setAlertTxt('Processing...'); else
19: if (fuel.litres > 0) setAlertTxt('Need to buy more fuel'); else
20: setAlertTxt('All is fine');
21: }, [fuel])
22:
23: return (
24: <div>
25: <h1 style={alertText == 'Need to buy more fuel'? {color:"red"}:{}}>{alertText}</h1>
26: </div>
27: );
28:
29: }
30:
31: export default App;
```

To-do:

Please provide comments to the junior in the following format:

- Line number;
- Comment.

#### Answer:

Everything looks fine! Further as a next step, I would suggest that:

- In line 9, you extract the code to a separate function which you would call from `useEffect`. This function could use `async/await` which is more consice and clear.
- Also in line 17, extract the code in a separate function etc. Further the first check, `if (!fuel) setAlertTxt('Processing...')` is not needed, since it's the initial state.
- In line 25, you could extract the logic for the style in a separate function and run that function in `style={func()}`. The the code would be more clear.
- Also consider saving the strings that you reuse like: `'Need to buy more fuel'`in a constant, outside the component. In this way you'll know for sure you're checking for the right string in line 25.
