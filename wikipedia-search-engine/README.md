# 2023 / 2024
## online_internship
### Javascript 
---
> For my first assignment, I was required to apply the debounce technique to the search entry located at the top of the page

---
* The debounce technique is a programming method that's used to prevent excessive or unwanted function calls, particularly in cases where user inputs can generate multiple events in quick succession. It's commonly used with input devices like buttons, switches, and search bars, where rapid or accidental clicks or keystrokes can cause unexpected or undesired behavior.

* In essence, debounce works by delaying the execution of a function until a certain amount of time has passed since the last input event occurred. This time delay, known as the debounce time, helps to filter out any additional events that occur during the delay period, ensuring that the function is only executed once, after the user has finished their input.

* There are several ways to implement debounce in code, but a common approach is to use a timer or timeout function to delay the execution of the function. Here's an example of debounce in JavaScript:

***


```js
function debounce(func, delay) {
  let timerId;
  return function() {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  }
}

function handleSearchQuery(query) {
  // Code to process search query goes here
}

const searchInput = document.querySelector('#search-input');
const debouncedHandleSearch = debounce(handleSearchQuery, 500);

searchInput.addEventListener('input', function(event) {
  debouncedHandleSearch(event.target.value);
});
```
***

- In this example, the debounce function takes two arguments: the function to be debounced (handleSearchQuery), and the debounce time in milliseconds (500ms in this case). It returns a new function that clears any existing timer and creates a new timer using the setTimeout method. When the timer expires, the debounced function (handleSearchQuery) is called with the last set of arguments that were passed to the debounced function.

- The debounced function is then attached as an event listener to the search input element, and is called every time the user types in a new character in the input field. However, because of the debounce time, the function is only executed after the user has finished typing, rather than every time a new character is added.

- Overall, the debounce technique is a useful tool for improving the performance and usability of user interfaces, by preventing unwanted or repeated function calls and ensuring that functions are only executed when they need to be.

## JS

The JavaScript  Programming language
[KARIM] (https://github.com/KARIMELAISSAOUY)
