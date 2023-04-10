     /*QUESTION-1*/

function Adder(num) {
    return function(x) {
      return x + num;
    }
  }
  

  const add = Adder(5);
  console.log(add(50)); 

  

        /*QUESTION-2*/

  function searchArray(array, value) {
    
    if (array.length === 0) {
      return false;
    }
    
    
    if (array[0] === value) {
      return true;
    } else {
      return searchArray(array.slice(1), value);
    }
  }
  
  
  const myArray = [1, 2, 3, 4, 5];
  console.log(searchArray(myArray, 3)); /

  

      /*QUESTION-3*/

 function addpara(Text){
    const newPara = document.createElement("p");
    const textNode = document.createTextNode(Text);
    newPara.appendChild(textNode);
    document.body.appendChild(newPara);
   
 }
 addpara("Hello I Am Hamza Kamal And I Am Doing JavaScript Assignment 02");

  

      /*QUESTION-4 */

 function addListItem(text) {
    let newListItem = document.createElement("li");
    let textNode = document.createTextNode(text);
    newListItem.appendChild(textNode);
    let list = document.querySelector("ul");
    list.appendChild(newListItem);
  }
  
  
  addListItem("Tea");

  

  
       /*QUESTION-5*/

  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  
  
  const myElement = document.querySelector("#my-para");
  changeBackgroundColor(myElement, "skyblue");

    

        /*QUESTION-6*/


  function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  
 
  let  myInfo = {
     name: "Hamza",
     age: 23,
     city: "Karachi"

    };
                       
  saveToLocalStorage("mykey", myInfo);




           /*QUESTION-7*/

  function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  
  
  let  myInfo = {
     name: "Hamza",
     age: 23,
     city: "Karachi"

    };
                       
  saveToLocalStorage("mykey", myInfo);

  

  function getFromLocalStorage(key) {
    let  objectString = localStorage.getItem(key);
    return JSON.parse(objectString);
  }
  
  
  let myObject = getFromLocalStorage("myKey");
  console.log(myInfo);

    

           /*QUESTION-8*/

  function saveObjectToLocalStorage(object) {
    
    Object.keys(object).forEach((key) => {
      localStorage.setItem(key, JSON.stringify(object[key]));
    });
  
    
    const newObject = {};
    Object.keys(object).forEach((key) => {
      const valueString = localStorage.getItem(key);
      newObject[key] = JSON.parse(valueString);
    });
    return newObject;
  }
  
  
  const myObject = {
     name: "Asad",
    age: 20,
    Education: "UnderGraduate",
    City: "Shahdadpur"
     };
  const newObject = saveObjectToLocalStorage(myObject);
  console.log(newObject);

   