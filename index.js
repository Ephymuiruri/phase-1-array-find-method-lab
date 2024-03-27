  const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  function superbowlWin(win){
        for (let element of win){
            if (element.result ==="W"){
                console.log(element.result)
                return element.year
            }
        }
        return undefined
    }
console.log(record.find(superbowlWin))