const angus = {
    weight: 55,
    name: "Angus",
    breed:" Australian Shepherd",
    vaccinated: false,
    age: 0.5
}

const gypsy = {
    weight: 15,
    name: "Gypsy",
    breed: "Miniature Schnauzer",
    vaccinated: true,
    age: 5
}

const dogsCollection = []

dogsCollection.push(angus)
dogsCollection.push(gypsy)


const park = {
    largeArea: [],
    smallArea: [],
    name: "Frankie Pierce Park"
}

document.querySelector(".parkName").innerHTML = park.name

const dogHTMLRepresentation = (dog) => {
    return `<li>${dog.name}</li>`
}

for (const dogObject of dogsCollection) {

    // Only vaccinated dogs are allowed in the park, unless they
    // are less than a year old
    if (dogObject.vaccinated || dogObject.age < 1) {
        const html = dogHTMLRepresentation(dogObject)

        // Dogs less than, or equal to, 30 pounds go in the small area
        if (dogObject.weight <= 30) {
            park.smallArea.push(dogObject)
            document
                .querySelector(".smallDogs")
                .innerHTML += html

        // Dogs greater than 30 pounds go in the large area
        } else {
            park.largeArea.push(dogObject)
            document
                .querySelector(".largeDogs")
                .innerHTML += html
        }
    }
}

console.log(park)