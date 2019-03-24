let movies = [
    {
        id: 1,
        name: "Nicolas",
        score : 10
    },
    {
        id: 2,
        name: "kmlee",
        score : 14
    },
    {
        id: 3,
        name: "hihi",
        score : 1
    }
]

export const getById = id =>{
    const filteredPeople = movies.filter(movie => movie.id === id);
    return filteredPeople[0];
};

export const getMovies = () => movies;

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie ={
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};

//함수 리턴값이 schema.graphql에서의 리턴값으로 전달되기 때문에
//맞춰서 써주어야 한다.