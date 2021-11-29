var request =new XMLHttpRequest;
request.open('GET','http://api.countrylayer.com/v2/all?access_key=c740e7874383e827bdc7b9a7e5706a2d');
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);

    //console.log(data);

    for(var i=0;i<data.length;i++){
        console.log(data[i]);
    }
}