# Is-It-Down-

Create an API to tell if the website is down

# Challenge goals

- [x] Build a simple API that I can use to check if a website is down.

# Conditions

- [x] When I go to the URL /?url=nomadcoders.co, check if the 'url' query CONTAINS http and if it does not, add it.
- [x] Using request make a GET request to the website and if the response.statusCode is less or equals than 445 return a "Up!"
- [x] If the website is down, return a JSON "Down!"
