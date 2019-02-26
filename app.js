const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/fruitsDB', {
    useNewUrlParser: true
})

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'put a name on it!']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

const Fruit = mongoose.model('Fruit', fruitSchema)

const fruit = new Fruit({
    name: 'Blood Orange',
    rating: 5,
    review: "These thinghies are nice"
})

// fruit.save()

/////////////////////////////////

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: "John",
    age: 37
})

// person.save()

/////////////////////////

// const kiwi = new Fruit({
//     name: 'Kiwi',
//     score: 10,
//     review: 'The best fruit'
// })

// const orange = new Fruit({
//     name: 'Orange',
//     score: 4,
//     review: 'Too sour for me'
// })

// const banana = new Fruit({
//     name: 'Banana',
//     score: 3,
//     review: 'Weird texture'
// })

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Succesfully saved all the fruits to fruitsDB');
//     }
// })

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close()

        fruits.forEach((fruit) => {
            console.log(fruit.name);
        })
    }
})

// Fruit.updateOne({
//     _id: '5c74ffaadecabb188f0a8ebc'
// }, {
//     name: 'Peach'
// }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('successfully updated the document!');

//     }
// })


Fruit.deleteOne({
    name: 'Peach'
}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('successfully updated the document!');

    }
})