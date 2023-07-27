// console.log("Chaliye Shuru Karte Hai");

//Object Creation 
// const Person = {
//     fName : "aagam",
//     age : 24,

//     draw : function() {
//         console.log("draw the color");
//     }
// };

//Factory Function 
// function createReactangle() {
//     let Person = {
//         fName : "aagam",
//         age : 24,
    
//         draw : function() {
//             console.log("draw the color");
//         }
//     };
//     return Person;
// }

// let reactangleObj = createReactangle();


// Constructor Function
// function Reactangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;

//     this.draw = function() {
//         console.log("drawing");
//     }
// }

// let reactangleObject = new Reactangle(2,3);

//Primitive Datatype
// let a = 10;
// b = a ;

// a++;
// console.log(a);
// console.log(b);



//Reference Datatype 
// let a = {value : 10};
// b = a ;

// a.value++;
// console.log(a.value);
// console.log(b.value);


//With Function
// let a = 10;
// b = a;

// function inc(){
//     a++;
// }

// inc();
// console.log(a);
// console.log(b);


// let a = {value : 10};
// let b = a; 

// function inc(){
//     a.value++;
// }

// inc();

// console.log(a.value);
// console.log(b.value);


//For-in Loop....
// let reactangle = {
//     lenght:1,
//     breadth:3
// };

//Key are reflected through key variable
//Values are reflected through rectabgle[key]

// for(let key in reactangle){
//     console.log(key,reactangle[key]);
// }


//For-Of Loop
// for(let key of Object.entries(reactangle)){
//     console.log(key);
// }

// if('length' in reactangle){
//     console.log("Present");
// }
// else{
//     console.log("Absent");
// }



//Object Cloing.... 

//Object #1..

// let src = {
//     a : 10,
//     b : 20,
//     c : 3
// };

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);


//Object #2..
 let src = {
    a:10,
    b:20,
    c:30
 };
 
let src2 = {value : 2};

 let dest = Object.assign( {}, src, src2);

 console.log(dest);


//Object #3

// let src = {
//     a : 1,
//     b : 2
// };

// let dest = { ... src};

// console.log(dest);
