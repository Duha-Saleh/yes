var type = prompt ('which type of cars do you want?')
console.log(type)
// to lowercase

type=type.toLowerCase()
while (type !=='farari' && type !== "bmw" ){
    // BMW => bmw
    console.log(type);
    
    type =  prompt ('please input farari or bmw ')
}

// cat it will go too the while loop 
// farari will not go to the while loop

// if its not equal to feraari and not equal to bmw 
// T and T T
// T or F T

// var eating = function(){
//     // code
// }
// function sleeping() {
//     // code 
// }


function numberofimages() {
    var picture = ''
// input
 var howmany = prompt ('how many cars do you want?')
 console.log(howmany)
//  processing 
for (var i=0 ; i<howmany ;i++){
    if (type =='farari'){
    picture =picture + "<img src='http://i1.ytimg.com/vi/PxzPK-s90Lo/maxresdefault.jpg'>"

}
else if (type =='bmw'){

picture =picture +"<img src='https://i.ytimg.com/vi/A_o2wIDR4-A/maxresdefault.jpg'>"


}
}
// output
return picture ;
}  

document.write('<p>' + numberofimages()+'</p>')