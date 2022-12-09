const MovieCollection = require("./model")

async function createMovie(movieObject) {
    try {
        console.log(movieObject)
        const newMovie = await MovieCollection.create(movieObject);
        console.log (newMovie);
    } catch (error) {
        console.log(error)
    }
};

async function readMovies () {
    try {
        console.table('readMovies')
        const readMovie = await MovieCollection.find({});
        console.table(readMovie.toString())
        for (let index = 0; index < readMovie.length; index++){
            const element = readMovie[index];
            console.table({"film": element.title, "director": element.director, "actor": element.actor,  "rating": element.rating})
        }
    } catch (error) {
        console.log(error);
        
    }
};

async function updateActor (title, actor){
    try {
        const result = await MovieCollection.updateOne({title: title} , {$set: {actor: actor}});
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
}
async function updateDirector (title, director){
    try {
        const result = await MovieCollection.updateOne({title: title} , {$set: {director: director}});
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
}
async function updateRating (title, rating) {
    try {
        const result = await MovieCollection.updateOne({title: title} , {$set: {rating: rating}});
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
};
async function deleteTitle (title){
    try {
        const result = await MovieCollection.deleteOne({title: title});
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
};


module.exports = {createMovie , readMovies , updateActor, updateDirector, updateRating, deleteTitle};