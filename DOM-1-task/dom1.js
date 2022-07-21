//Accessing the DOM... New Methods 
const title = document.querySelector("title")
title.textContent = "First work with DOM" //changes title

const textCollection = document.querySelectorAll("span") //select All span tages
textCollection.forEach(item => console.log(item.textContent.toUpperCase()))

const text1 = document.querySelector("p[name='text-1'") //select P tag by name
console.log(text1.textContent.toUpperCase().trim());

const cover = document.querySelector(".cover") //select tag by Class name
console.log(cover);

const Idtext = document.querySelector("#text") //select tag by ID name
console.log(Idtext);

/*The Document method querySelector() returns the first Element within the document that matches
the specified selector,or group of selectors.If no matches are found,null is returned.
the difference in querySelectorAll and querySelector is that querySelectorAll target all the elements
in HTML which matches the ID ,Class , or a tag name */

//Old Methods
document.getElementById(); //select using ID
document.getElementsByTagName(); //select using tage name 
document.getElementsByClassName(); //select using class name
document.getElementsByName(); //select using name property

/*The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.
(DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, 
style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
The DOM is not part of the JavaScript language, but is instead a Web API used to build websites.
You don't have to do anything special to begin using the DOM. 
You use the API directly in JavaScript from within what is called a script, a program run by a browser.
The DOM specifies that the querySelectorAll method  must return all elements in the document:All of the properties,
methods, and events available for manipulating and creating web pages are organized into objects.*/