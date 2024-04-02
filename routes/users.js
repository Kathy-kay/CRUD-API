import express from "express"
import {v4 as uuidv4} from "uuid"

const router = express.Router();

let users = [
   
]

router.get("/", (req, res) => {
    res.send(users)
})

router.post("/", (req, res) => {

    const user = req.body;
    const userId = uuidv4();
    const userWithId = {...user, id: userId}
    users.push(userWithId)

    res.send(`User with the name ${user.firstName} is added to the database `)

})

router.get("/:id", (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id)

    res.send(`User with id: ${id} found` )
})

router.delete("/:id", (req, res) => {
    const {id} = req.params

    const deleteUser = users.filter((user) => user.id !== id)

    res.send(`User with the id: ${id} is successfuy deleted from the database`)
})

router.patch("/:id", (req, res) => {
    const {id} = req.params
    const {firstName, lastName, age} = req.body

    const updateUser = users.find((user) => user.id === id)

    if(firstName){
        updateUser.firstName = firstName
    }
    if(lastName){
        updateUser.lastName = lastName
    }
    if(age){
        updateUser.age = age
    }

    res.send(`User with id: ${id} has been updated successfuy`)
})


export default router