const mongoose = require('mongoose')
const moviesModel = require('../Models/MoviesModel')
const SubscriptionsBl = require('./SubscriptionsBl')
const jFaile = require("jsonfile")
const path = require("path")
const jsonFaile = path.join(__dirname, "/../shows.json")
const ObjectId = mongoose.Types.ObjectId


// const getAllMoviesFromJson = () => {
//     return new Promise((res, rej) => {
//         jFaile.readFile(jsonFaile, (err, data) => {
//             if (err) {
//                 rej(err)
//             }
//             else {
//                 res(data)
//             }
//         })
//     })
// }


const getAllMovies = async () => {
    try {
        let movies = await moviesModel.find({})
        return movies
    }
    catch (err) {
        return err
    }
}


const getMovieByName = async (movie) => {
    try {
        let tmovie = await moviesModel.findOne({ Name: movie })
        return tmovie
    }
    catch (err) {
        return err
    }
}

const getMovieById = async (id) => {
    try {
        let movie = await moviesModel.findById(id)
        return movie
    }
    catch (err) {
        return err
    }
}

const createMovies = function (obj) {
    return new Promise((resolve, reject) => {
        obj.forEach(o => {
            const movie = new moviesModel({
                Name: o.name,
                YearPremiered: o.premiered,
                Genres: o.genres,
                Image: o.image.original
            })
            movie.save((err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve("Created with id : " + movie._id)
                }
            })
        });
    })
}

const createNewMovie = (obj) => {
    return new Promise((resolve, reject) => {
        let newMovie = new moviesModel(obj)
        console.log(newMovie);
        newMovie.save(err => {
            if (err) {
                reject(err)
            }
            else {
                resolve("created 👍")
            }
        })

    })
}

const deleteMovieById = (id) => {
    return new Promise((resolve, reject) => {
        moviesModel.findOneAndDelete({ _id: ObjectId(id) }, (err) => {
            if (err) {
                reject(err)
            } else {
                SubscriptionsBl.deleteSubscriptionsByMovieId(id)
                resolve('deleted 👍')
            }
        })
    })
}

const updateMovieById = (id, obj) => {
    return new Promise((resolve, reject) => {
        moviesModel.findByIdAndUpdate({ _id: ObjectId(id) }, obj, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve("updated")
            }
        })

    })

}

module.exports = { getAllMovies, getMovieByName, createNewMovie, createMovies, deleteMovieById, updateMovieById, getMovieById }
