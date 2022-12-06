var cl = console.log;





var imgcontainer = document.getElementById("imgcontainer");
var imagesArray = [
    "https://source.unsplash.com/random/?nature",
    "https://source.unsplash.com/random/?city",
    "https://source.unsplash.com/random/?people",
    "https://source.unsplash.com/random/?fashion&beauty",
    "https://source.unsplash.com/random/?food&drink",
    "https://source.unsplash.com/random/?athletics",
    "https://source.unsplash.com/random/?science",
    "https://source.unsplash.com/random/?robot",
    "https://source.unsplash.com/random/?javascript",
    "https://source.unsplash.com/random/?html",
    "https://source.unsplash.com/random/?angular",
];
var result = " ";
imagesArray.forEach(function (img) {
    result += `<div class= 'col-4'>
                <div class= 'card'>
                <div class = 'card-body'>
                <img class= 'img-fluid' src= ${imagesArray[img]} >
                </div> 
                </div> 
                </div> `
})
cl(result);

imgcontainer.innerHTML = result;



var books = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

var info = document.getElementById("info");
result1 = " ";

books.forEach(function (book, i) {
    result1 += `<tr>

                <td>${i + 1}</td>
                <td>${book.author}</td>
                <td>${book.title}</td>
                <td>${book.libraryID}</td>

                </tr>`
})

info.innerHTML = result1;