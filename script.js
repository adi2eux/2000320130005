$(document).ready(function () {
  // Function to fetch data from the backend and update the UI
  function fetchNumbers() {
    const apiUrl = 'http://localhost:8008/numbers';
    const urls = [
      'http://20.244.56.144/numbers/primes',
      'http://abc.com/fibo',
      // Add more URLs here if needed
    ];

    const params = urls.map(url => 'url=' + encodeURIComponent(url)).join('&');

    $.get(apiUrl + '?' + params, function (data) {
      if (data.numbers && Array.isArray(data.numbers)) {
        // Display the merged unique integers
        const numbersDiv = $('#numbers');
        numbersDiv.empty();

        const numbersList = data.numbers.map(num => `<span>${num}</span>`);
        numbersDiv.append(numbersList);
      }
    });
  }

  // Call the fetchNumbers function when the page loads
  fetchNumbers();
});
