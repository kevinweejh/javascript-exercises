const getTheTitles = function(booksArr) {
    // let titlesArr = [];
    // booksArr.forEach((book) => titlesArr.push(book.title));
    return booksArr.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
