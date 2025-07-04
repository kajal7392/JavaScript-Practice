/* Movie Database
Design a JSON schema for a movie database. Each movie should have fields like title, releaseYear, genre, 
director, and cast (an array of actor names). Implement a search function that takes a genre as input
and returns all movies that belong to that genre. */

// Solution:
const movies = [
  {
    "title": "3 Idiots",
    "releaseYear": 2009,
    "genre": "Comedy-Drama",
    "director": "Rajkumar Hirani",
    "cast": ["Aamir Khan", "R. Madhavan", "Sharman Joshi", "Kareena Kapoor", "Boman Irani"]
  },
  {
    "title": "Dangal",
    "releaseYear": 2016,
    "genre": "Biographical Sports Drama",
    "director": "Nitesh Tiwari",
    "cast": ["Aamir Khan", "Sakshi Tanwar", "Fatima Sana Shaikh", "Sanya Malhotra"]
  },
  {
    "title": "Queen",
    "releaseYear": 2013,
    "genre": "Comedy-Drama",
    "director": "Vikas Bahl",
    "cast": ["Kangana Ranaut", "Rajkummar Rao", "Lisa Haydon"]
  },
  {
    "title": "Gully Boy",
    "releaseYear": 2019,
    "genre": "Musical Drama",
    "director": "Zoya Akhtar",
    "cast": ["Ranveer Singh", "Alia Bhatt", "Siddhant Chaturvedi", "Kalki Koechlin"]
  },
  {
    "title": "Andhadhun",
    "releaseYear": 2018,
    "genre": "Crime Thriller",
    "director": "Sriram Raghavan",
    "cast": ["Ayushmann Khurrana", "Tabu", "Radhika Apte", "Anil Dhawan"]
  },
  {
    "title": "Zindagi Na Milegi Dobara",
    "releaseYear": 2011,
    "genre": "Comedy-Drama",
    "director": "Zoya Akhtar",
    "cast": ["Hrithik Roshan", "Farhan Akhtar", "Abhay Deol", "Katrina Kaif"]
  },
  {
    "title": "Barfi!",
    "releaseYear": 2012,
    "genre": "Romantic Comedy-Drama",
    "director": "Anurag Basu",
    "cast": ["Ranbir Kapoor", "Priyanka Chopra", "Ileana D'Cruz"]
  },
  {
    "title": "Pink",
    "releaseYear": 2016,
    "genre": "Courtroom Drama",
    "director": "Aniruddha Roy Chowdhury",
    "cast": ["Amitabh Bachchan", "Taapsee Pannu", "Kirti Kulhari", "Andrea Tariang"]
  },
  {
    "title": "Article 15",
    "releaseYear": 2019,
    "genre": "Crime Drama",
    "director": "Anubhav Sinha",
    "cast": ["Ayushmann Khurrana", "Isha Talwar", "Sayani Gupta", "Manoj Pahwa"]
  },
  {
    "title": "Taare Zameen Par",
    "releaseYear": 2007,
    "genre": "Family Drama",
    "director": "Aamir Khan",
    "cast": ["Darsheel Safary", "Aamir Khan", "Tisca Chopra", "Vipin Sharma"]
  }
];

// Search function
function searchMovieType(genre) {
    const category = movies.filter(movie => movie.genre === genre) 
        if (category.length > 0) {
    console.log(`All movies in "${genre}" category:`);
    category.forEach(movie => {
      console.log(`- ${movie.title} (${movie.releaseYear})`);
    });
  } else {
    console.log(`No movies found for category "${genre}".`);
  }

  return category;
}

// example
searchMovieType("Comedy-Drama");