// forEach
var books = [
  { title: "Harry Potter", author: "JK Rowling", pages: 300 },
  { title: "Green eggs and ham", author: "Dr. Seuss", pages: 25 },
  {
    title: "The 4 hour work week",
    author: "Tim Ferris",
    pages: 400,
  },
];

books.forEach(function (book) {
  document.write(
    `${book.title} is written by ${book.author} and has ${book.pages} pages.`
  );
});
