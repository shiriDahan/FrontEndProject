const express = require('express')
const cors = require('cors')
const userRouter = require("./Routes/UserRouter")
const moviesRouter = require("./Routes/MoviesRouter")
const membersRouter = require("./Routes/MembersRouter")
const subscriptionsRouter = require("./Routes/SubsriptionsRouter")
const athenticationRouter = require("./Routes/AthentucationRouter")
const addSubscriptionRouter = require("./Routes/AddSubscriptionRouter")

const app = express()

require("./Mongodb/mongodb")

app.use(express.json())
app.use(cors())

app.use("/users", userRouter)
app.use("/movies", moviesRouter)
app.use("/members", membersRouter)
app.use("/subscriptions", subscriptionsRouter)
app.use("/athentication", athenticationRouter)
app.use("/add", addSubscriptionRouter)

app.listen(8050, () => {
    console.log("server conected sussefuly on port : 8050");
})