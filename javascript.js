const movies = [
    { title: "Poor Things", rating: 3 },
    { title: "Oppenheimer", rating: 4 },
    { title: "The Godfather", rating: 3 },
    { title: "The Help", rating: 2 },
    { title: "How to Train Your Dragon", rating: 4 },
    { title: "The Wizard of Oz", rating: 3 },
    { title: "Casablanca", rating: 5 },
    { title: "The Father", rating: 4 },
    { title: "Your Name.", rating: 1 },
    { title: "A Beautiful Mind", rating: 5 },
];

const titleMovie = document.querySelector("#title");
const ratingMovie = document.querySelector("#rating");
const movieList = document.querySelector("#movieList");
const selectRating = document.querySelector("#select_rating");

function sortMoviesRating(movie1, movie2) {
    return movie1.rating - movie2.rating;
}
movies.sort(sortMoviesRating);

// function sortMoviesTitle(movie1, movie2) {
//     return movie1.title.localeCompare(movie2.title);
// }
// movies.sort(sortMoviesTitle);

function addMovie() {
    const title = titleMovie.value.trim();
    const rating = parseInt(ratingMovie.value);

    if (title && !isNaN(rating) && rating >= 0 && rating <= 5) {
        const movie = { title, rating };
        movies.push(movie);

        movies.sort(sortMoviesRating);
        // movies.sort(sortMoviesTitle);

        Movies();

        titleMovie.value = '';
        ratingMovie.value = '';
    }

}

function Movies() {
    const selectedRating = parseInt(selectRating.value);
    const filteredMovies = movies.filter(movie => !selectedRating || movie.rating === selectedRating);

    movieList.innerHTML = filteredMovies.map(movie =>
        `<li>TITLE: ${movie.title} --- RATING: ${movie.rating}</li>`).join('');
}

selectRating.addEventListener("change", Movies);

const movieForm = document.querySelector("#movieForm");
movieForm.addEventListener("submit", function (event) {
    event.preventDefault();
});

Movies();


