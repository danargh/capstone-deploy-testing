// Ftx Later - also the fucking api still can't be used
// I REALLY gonna have a bad time integrating this shit
// FFS I HAD LESS THAN A WEEK TO DO THIS SHIT
// FUCK YOU

export const fetcher = (url) =>
   fetch(url, {
      headers: {
        // THE DAMN AUTH IS EXPIRED.... WHAT THE HELL MAN?
         Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2ODU5ODUzMTUsImlkIjoyLCJuYW1lIjoiZG9jdG9yIDEifQ._kTRqYbZEZ6MiFfZ5fDHpO8twM5wuLkOxHvadxbHHXw",
      },
   }).then((res) => res.json());


