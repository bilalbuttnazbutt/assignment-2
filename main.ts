//storing a person name in a veriable

let personName:string = "Naz Butt"

//printing a person name in lowerCase

console.log("Lowercase:", personName.toLowerCase());

//printing a person name in UpperCase

console.log("Uppercase:",personName.toLocaleUpperCase());

//printing a person name in titleCase

console.log("Titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));