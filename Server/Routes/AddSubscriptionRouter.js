const subscriptionBl = require('../Bl/SubscriptionsBl')
const express = require('express')
const router = express.Router()

router.get("/:memberId" , async  (req,res)=>{
    let memberId = req.params.memberId
    try{
       const subs = await subscriptionBl.getSubscriptionsByMemberId(memberId)
       res.status(200).json(subs)
    }
    catch(err){
       res.status(500).json({msg : err})
    }
})

module.exports = router














// const express = require('express')
// const router = express.Router()
// const subscriptionBl = require('../Bl/SubscriptionsBl')
// const moviesBl = require ('../Bl/MoviesBl')




// router.get('/:memberId', async  (req, res) => {
//     try {
//         const memberId = req.params.memberId
//         const subscriptions = await subscriptionBl.getSubscriptionsByMemberId(memberId)
//         try {
//             const finalMovies = []
//             const allMovies = await moviesBl.getAllMovies()
//             let isWatched = false

//             allMovies.forEach(movie => {
//                subscriptions.forEach(sub =>{
//                   if(movie._id === sub.MovieId ){
//                      isWatched = true
//                   }
//                })
//                if(isWatched == false){
//                   finalMovies.push(movie)
//                }
                  
//             })
//             // for (let i = 0; i < allMovies.length; i++) {
//             //     isWatched = false
//             //     for (let j = 0; j < subscriptions.length; j++) {
//             //         if (allMovies[i]._id === subscriptions[j].MovieId) {
//             //             console.log(isWatched);

//             //             isWatched = true
//             //             console.log(allMovies[i]);
//             //             console.log(isWatched);
//             //         }
//             //     }
//             //     if (isWatched == false) {
//             //         finalMovies.push(allMovies[i])
//             //     }
//             // }
//             res.status(200).json(finalMovies)
//         }
//         catch (err) {
//             console.log("whay")
//             console.log(err)
//             res.status(500).json({ msj: err })
//         }
//     }
//     catch (err) {
//         res.status(500).json({ msj: err })
//     }
// })

// module.exports = router
