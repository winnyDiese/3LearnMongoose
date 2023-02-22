
const mongoose = require('mongoose')
const User = require('./User')

// mongoose.connect("mongodb://localhost/testdb", 
// ()=>{
//     console.log('Connected')
// },
//     e => console.error(e)
// )


mongoose.connect("mongodb://127.0.0.1:27017/testdb")

async function run(){
    
    // Catcher erreur en cas les data entré ne correspondent pas aux shema
    try {
        // INSERTION DATA

        // const user = new User({name:"Kyle", age:24})
        // await user.save().then(()=> console.log('User saved'))
        // await user.save()
        // console.log(user)

        // const user = await User.create({
        //     name: "Suarez", 
        //     age: 25,
        //     adress: {
        //         street: "Partouse",
        //         city: "Montreal"
        //     }
        // })
        // await user.save()
        // console.log(user)



        // FIND DATA

        // const user = await User.find()
        // console.log(user)

        // Find with critere
        // const user = await User.where("name")
        //     .equals("Pasco")
        //     .limit(2)
        // console.log(user)

        // Method virtuel
        // user.sayHi()
        // user.findByName()


        const user = await User.findOne({name: "Suarez" })
        console.log(user)
        await user.save()
        console.log(user)


    } catch (e) {
        console.log(e.message)
    }
}

run()

