// উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।

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
console.log(object3.address.street?.zila);