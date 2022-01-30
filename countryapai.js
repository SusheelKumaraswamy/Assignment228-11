1)How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };


const obj1 = { name: "Person 1", age:5 };
const obj2 = { age:50, name: "Person 1" };

const isEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length != obj2Keys.length) {
    return false;
  }

  for (let objKey of obj1Keys) {
    if (obj1[objKey] != obj2[objKey]) {
      return false;
    }
  }

  return true;
};



console.log(isEqual(obj1, obj2));







2)var request =new XMLHttpRequest;
request.open('GET','http://api.countrylayer.com/v2/all?access_key=c740e7874383e827bdc7b9a7e5706a2d');
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);

    //console.log(data);

    for(var i=0;i<data.length;i++){
        console.log(data[i]);
    }
}



3)API Not correct as listed in document
Use the same rest countries and print all countries name, region, sub region and population
