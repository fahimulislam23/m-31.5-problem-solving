// অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const array = [2, 4, 9, 15, 36, 48, 59, 89, 99, 100];
const multiply = array.map(num => num * 5);
console.log(multiply);

// অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো

const array1 = [12, 19, 21, 25, 36, 49, 79, 851];
const oddNum = array1.filter(num => num % 2 == 1);
console.log(oddNum);

// একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।

var object = [
    {item: 'Realme Pro book', price: 6500},
    {item: 'Mac book air', price: 5000},
    {item: 'I-phone 13 pro max', price: 12000},
    {item: 'HP Laptop', price: 4999}
]
const find = object.find(object => object.price === 5000);
console.log(find);

// . সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।

const object2 = {
    name: 'Samir',
    id: '213032',
    class: 'B.Sc in CSE'
}
const {id: id} = object2;
console.log(id);

// array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

const array2 = ['one', 'two', 'three', 'four', 'five'];
const [a, b, c, ...z] = array2;
console.log(c);

// তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

const arrowFunction = (a, b, c = 7) => a + b + c;
console.log(arrowFunction(4, 5));

// একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const object3 = {
    name: 'Samir',
    id: '213032',
    class: 'B.Sc in CSE',
    phone: ['015xxxxxxxx', '019xxxxxxxx'],
    address: {
        street: {
            RoadNo: 'House 44/Gha',
            zila: 'Mymensingh'
        },
        city: 'Banglabandha',
        country: 'Bangladesh'
    },
}
console.log(object3.phone[0]);
console.log(object3.address.city);
console.log(object3.address.street.zila);