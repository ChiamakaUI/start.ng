var data = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
]


function interestCalculator(array_data){
    var interestData = [];
    array_data.forEach(element => {
        var rate = 1;
        if(element.principal >= 2500 && (element.time > 1 && element.time < 3)){
            rate = 3
        } else if(element.principal >= 2500 && element.time >= 3){
            rate = 4;
        } else if(element.principal < 2500 || element.time <= 1) {
            rate = 2;
        } else {
            rate = 1;
        }

        var data = (element.principal * element.time * rate)/100;
        interestData.push({
            principal: element.principal,
            time: element.time,
            rate: rate,
            interest: data
        });
        
    });

    console.log(interestData);
    return interestData;
}