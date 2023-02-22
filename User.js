
const mongoose = require('mongoose')

const adressSchema = new mongoose.Schema({
    street: String,
    city: String
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100
    },
    created: {
        type: Date,
        // En cas le data entre n'est une date
        // Immutable, mettra la data para defaut
        immutable: true,
        default: () => Date.now()
    },
    adress: adressSchema
})

// Method virtuel
userSchema.methods.sayHi = function (){
    console.log(`Hi, my name is ${this.name}`)
}

userSchema.statics.findByName = function(name){
    return this.where({name: new Regexp(name, "1")})
}


// Schema
userSchema.pre('save', function(next){
    this.updateAt = Date.now()
    next()
})

module.exports = mongoose.model('User', userSchema)