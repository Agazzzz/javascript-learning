var car = {
    //properti
    type: "Fiat",
    model: "500",
    color: "white",
    date: {
        year: 2020,
        month: 12,
        date: 12
    },
    data : [1,2,3,4,5],

    //method
    start: function() {
        console.log("Ini method start");
    },
    drive: function() {
        console.log("Ini method drive");
    },
    brake: function() {
        console.log("Ini method brake");
    },
    stop: function() {
        console.log("Ini method stop");
    },
}
//define object
car.start()
car.drive()
console.log(car.type)
console.log(car.data[1])