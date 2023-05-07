const resultsContainer = document.getElementsByClassName("container")[0];

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const validateInput = (inputField) => {
  if (inputField.value === "") {
    resultsContainer.innerHTML = "<p>Type something in the above search input</p>";
  } else {
    debounce(generateResults, 1000)(inputField.value, inputField);
  }
};

const generateResults = (searchValue, inputField) => {
  fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      const results = data.query.search;
      const numberOfResults = data.query.search.length;
      resultsContainer.innerHTML = "";
      for (let i = 0; i < numberOfResults; i++) {
        const result = document.createElement("div");
        result.classList.add("results");
        result.innerHTML = `
          <div>
              <h3>${results[i].title}</h3>
              <p>${results[i].snippet}</p>
          </div>
          <a href="https://en.wikipedia.org/?curid=${results[i].pageid}" target="_blank">Read More</a>
          `;
        resultsContainer.appendChild(result);
      }
    });
};
const searchInput = document.querySelector('input');

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.getElementById('wiki').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
  }
});

const inputField = document.querySelector('input[type="text"]');

inputField.addEventListener('input', () => {
  if (inputField.value === '') {
    location.reload();
  }
});