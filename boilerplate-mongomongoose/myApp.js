require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ==== 01 - Create a module
/*
const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);
*/

// ==== 02 - Create and Save a Record of a Model
/*
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  let dev = new Person({
    name: "Khang",
    age: 22,
    favoriteFoods: ["Chocolate", "Candy", "Milk", "Coffee"],
  });

  dev.save((err, data)=> {
    if (err) {
      console.log(err);
    } else {
      done(null, data);
    }
  });
};
*/

// ==== 03. Create Many Records with model.create()
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

let arrayOfPeople = [
  {
    name: "Khang",
    age: 22,
    favoriteFoods: ["Chocolate", "Candy", "Milk", "Coffee"],
  },
  {
    name: "Hieu",
    age: 21,
    favoriteFoods: ["Fruit", "Milktea", "Hotpot"],
  },
];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      done(null, data);
    }
  });
};

// ==== 04. Use model.find() to Search Your Database
// You must run with challenge 03 or 02

const findPeopleByName = (personName, done) => {
  Person.find(
    {
      name: personName,
    },
    (err, data) => {
      if (err) console.log(err);
      else done(null, data);
    }
  );
};

// ==== 05. Use model.findOne() to Return a Single Matching Document from Your Database

const findOneByFood = (food, done) => {
  Person.findOne(
    {
      favoriteFoods: food,
    },
    (err, data) => {
      if (err) console.log(err);
      else done(null, data);
    }
  );
};

// ==== 06. Use model.findById() to Search Your Database By _id
const findPersonById = (personId, done) => {
  Person.findById(
    {
      _id: personId,
    },
    (err, data) => {
      if (err) console.log(err);
      else done(null, data);
    }
  );
};

// ==== 07. Perform Classic Updates by Running Find, Edit, then Save
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(
    {
      _id: personId,
    },
    (err, result) => {
      if (err) console.log(err);
      else {
        result.favoriteFoods.push(foodToAdd);
        result.save((errS, data) => {
          if (errS) console.log(errS);
          else done(null, data);
        });
      }
    }
  );
};

// ==== 08. Perform New Updates on a Document Using model.findOneAndUpdate()
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (err, result) => {
      if (err) console.log(err);
      else {
        done(null, result);
      }
    }
  );
};

// ==== 09. Delete One Document Using model.findByIdAndRemove
const removeById = (personId, done) => {
  Person.findByIdAndRemove(
    {
      _id: personId,
    },
    (err, data) => {
      if (err) console.log(err);
      else done(null, data);
    }
  );
};

// ==== 10. Delete Many Documents with model.remove()
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove(
    {
      name: nameToRemove,
    },
    (err, data) => {
      if (err) console.log(err);
      else done(null, data);
    }
  );
};

// ==== 11. Chain Search Query Helpers to Narrow Search Results
const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({
    favoriteFoods: foodToSearch,
  })
    .sort({ name: 1 })
    .limit(2)
    .select({ name: true })
    .exec((err, result) => {
      if (err) console.error(err);
      else done(null, result);
    });
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
// exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
