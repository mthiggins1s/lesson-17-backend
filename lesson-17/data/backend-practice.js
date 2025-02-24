// Send an HTTP request (XMLHttpRequest: built-in class in JS).
const xhr = new XMLHttpRequest(); // creates a new HTTP message to send to the backend. (message = request)
xhr.addEventListener('load', () => {
    console.log(xhr.response); // this will log the response from the server. The server sends a response back to us and log it into the console.
}); // this listens for an event and then runs the function. We use 'load' which means the response has loaded.
xhr.open('GET', 'https://supersimplebackend.dev'); // give open() two parameters to send to the backend. ('GET', means we want to get information from the backend. and the URL to where we want to send the request.)
xhr.send(); // sends the HTTP request to the server.
xhr.response

// Terminology
    // When we send a message to the backend, this is called a 'request'. We are requesting something from the backend. When the backend receives our request, itll send an HTTP message back to us, this is called a 'response'. So each request we make, we will get a response from the backend, this is the "Request-Response Cycle", which equals to one request, one repsonse.

// URL Paths
    // part that comes after the domain name. Example: https://www.google.com/search the 'search' is the path.
// Status Code:
    // Starts with 4 or 5 (400, 404, 500) = failed.
        // Starting with 4 = our problem.
        // Starting with 5 = server problem.
    // Example: 404 Not Found, 500 Internal Server Error
    // Starts with a 2 (200, 201, 204) = Succeeded.

// Backend API - the list of all the URL paths that are supported by the backend.
    // API means application programming interfaces
        // How we interact with the backend. (backend API)