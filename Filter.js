<<<<<<< HEAD

function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
} 


function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
      if (predicate(element)) {
        acc.push(element);
      }
    });
    return acc;
  }

  ///////////////////////////////////////////
  var evens = function(arr){
    return filter(arr,function(e){
        return (e%2===0)
    })
}

/////////////////////

var multiplesOfThree = function(arr){
    return filter(arr,function(e){
        return (e%3===0)
    })
}

///////////////////////

var positives = function(arr){
    return filter(arr,function(e){
        return (e>=0)
    })
}

///////////////////////////////

var evenLength = function(arr){
    return filter(arr,function(e){
        return e.length%2===0
    })
}

///////////////////////////////////////////////

//More Practice

///////////////////////////////////////////////

var odds = function(arr){
    return filter(arr,function(e){
        return e%2===1
    })
}

var negatives = function(arr){
    return filter(arr,function(e){
        return e<0
    })
}

var largerThanSix = function(arr){
    return filter(arr,function(e){
        return e>6
    })
}

////////////////////////////////
//2
///////////////////////////////

function startsWithChar(strings, char) { 
    return filter(strings,function(e){
        return e[0]===char
    })
 } 

 ////////////////////////////////
 //3
 /////////////////////////////////


function filter(array, predicate) {
    var acc = [];
    each(array, function(element,i) {
      if (predicate(element,i)) {
        acc.push(element);
      }
    });
    return acc;
  }

  ////////////////

  function evenIndexedEvenLengths(strings) { 
    return filter(strings,function(e,i){
        return e.length%2===0 && i%2===0
    })
} 

//////////////////////////////////////
//4 filter works on arrays and objects
///////////////////////////////

function filter(coll, predicate) {
    var acc = [];
    if (!Array.isArray(coll)){
        acc = {}
      each(coll, function(v,k) {
      if (predicate(v,k)) {
        acc[k]= v;
      }
    });  
    }
    else {
    each(coll, function(element,i) {
      if (predicate(element,i)) {
        acc.push(element);
      }
    });
    }
    return acc;
  }

///////////////////////////////
//5
//////////////////////////////

function moveZero(numbers){ 
    var zeros = filter(numbers,function(n,i){
        return n === 0
    });
    var numb = filter(numbers,function(n,i){
        return n!==0
    });
    return numb.concat(zeros)
} 

////////////////////////////
//6
/////////////////////////////
function strongPasswords(array){ 
    return filter(array,function(v,k){
     return  /[A-Z]/.test( v.user.password ) && /[a-z]/.test( v.user.password ) && /[0-9]/.test( v.user.password ) && /[_@/:;<>"'§!*-+=#(){} ,.?&|]/.test( v.user.password )
    })
    } 

    //// finish
=======

>>>>>>> 9c33c4b7aa672f6927e3af77a3812095592ab548
