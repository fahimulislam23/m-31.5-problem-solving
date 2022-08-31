let num = 19;

const object = {
    name: 'Sumon Rahat',
    phone: '01547515699',
    email: 'abcd@gmail.com',
    address:{
        street: 'House 99xx, Madarir Mur',
        city: 'JAnina',
        country: 'Bangladesh'
    }
}

const friends = ['Readwan', 'sumon', 'sayem', 'salman', 'tushar'];
const templateString = `I am ${object.name}. I live in ${object.address.city}. I have ${num} friends. ${friends[3]} is one of them.`
console.log(templateString);