# 2023 / 2024
## online_internship
### Javascript 
---
> For my first assignment, I was required to apply the debounce technique to the search entry located at the top of the page

---
The debounce technique is a programming method that's used to prevent excessive or unwanted function calls, particularly in cases where user inputs can generate multiple events in quick succession. It's commonly used with input devices like buttons, switches, and search bars, where rapid or accidental clicks or keystrokes can cause unexpected or undesired behavior.

In essence, debounce works by delaying the execution of a function until a certain amount of time has passed since the last input event occurred. This time delay, known as the debounce time, helps to filter out any additional events that occur during the delay period, ensuring that the function is only executed once, after the user has finished their input.

There are several ways to implement debounce in code, but a common approach is to use a timer or timeout function to delay the execution of the function. Here's an example of debounce in JavaScript:

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


## License

The JavaScript  Programming language
[KARIM] (https://github.com/KARIMELAISSAOUY)
