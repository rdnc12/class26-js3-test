// VERSION 2

/*
1.
Using JavaScript only (adding HTML to i.html is NOT allowed), create a function that:
- Takes as an argument an array of objects
- Outputs the details of both books into the DOM. 
- Creates an unordered list for each book

Use the following array of objects:
*/
const books = [
  {
    bookName: "The Nature of Software Development",
    author: "Ron Jeffries",
    coverURL:
      "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
  },
  {
    bookName: "Clean Code",
    author: "Robert Cecil Martin",
    coverURL:
      "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
  },
  {
    bookName: "Refactoring",
    author: "Kent Beck & Martin Fowler",
    coverURL:
      "https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/0/2/0/9200000005430203.jpg"
  }
];
function createAndAppend(element, append, text) {
  const newElement = document.createElement(element);
  append.appendChild(newElement);
  newElement.innerHTML = text;
}

function getBookInfo(booksArray) {
  const booksLength = booksArray.length;

  for (let i = 0; i < booksLength; i++) {
    let booksUl = document.createElement("ul");
    let bookName = booksArray[i].bookName;
    let bookAuthor = booksArray[i].author;
    let bookImg = `<img width='100px' alt='${booksArray[i].bookName}' src='${booksArray[i].coverURL}'/>`;

    document.body.appendChild(booksUl);
    createAndAppend("li", booksUl, bookName);
    createAndAppend("li", booksUl, bookAuthor);
    createAndAppend("li", booksUl, bookImg);
  }
}
getBookInfo(books);
/*
2.
Write a function that:
- Makes an API call using the Fetch API.
- Uses the following URL: https://jsonplaceholder.typicode.com/users/1
- Displays the "name", "email" and "city" of the first person inside an unordered list
- Makes use of async/await
*/
const userURL = "https://jsonplaceholder.typicode.com/users/1";

const fetchJSON = async url => {
  try {
    const usersData = await fetch(url);
    const response = await usersData.json();
    const { name, email, address } = response;

    if (!usersData.ok) {
      throw new Error(`Status: ${usersData.status}, ${usersData.statusText}`);
    }

    let apiUl = document.createElement("ul");
    document.body.appendChild(apiUl);
    createAndAppend("li", apiUl, name);
    createAndAppend("li", apiUl, email);
    createAndAppend("li", apiUl, address.city);
  } catch (error) {
    console.log(error);
  }
};
fetchJSON(userURL);
/*

3.
Write a JavaScript function that:
- Accepts a string of 4 words as an argument
- Converts the first letter of each word of the string in upper case.
  
  Example: 'the quick brown fox'
  Expected Output: 'The Quick Brown Fox '
*/

const makeUpperCase = str => {
  let splittingStr = str.split(" ");

  if (splittingStr.length === 4) {
    for (let i = 0; i < 4; i++) {
      let capitalLetter = splittingStr[i][0].toUpperCase();

      splittingStr[i] = splittingStr[i].replace(
        splittingStr[i][0],
        capitalLetter
      );
    }
    return console.log(splittingStr.join(" "));
  } else {
    console.error("Sorry, we only accept 4 words!!!");
  }
  console.log(splittingStr, splittingStr.length);
};

makeUpperCase("hack your future now");
