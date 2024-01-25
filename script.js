const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
/*
const book = getBook(3);
book;
// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// rest/spread operators
//can only be placed at the end of destrucuring

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

// spread
const newGenres = [...genres, "epic fantasy"];
newGenres;

//add new properties to obj
const updatedBook = {
  // spread the original book
  ...book,
  // adding a new property
  moviePublicationDate: "2001-12-19",
  //this will override original pages prop bc it comes AFTER ...book
  pages: 20000,
};
updatedBook;

// arrow functions
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// template literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
summary;

// ternary operator
const pagesRange = pages > 1000 ? "over 1000" : "less than 1000";
pagesRange;

console.log(`The book has ${pagesRange} pages`);

//short circuiting
// the operator will immediately rtn 1st value, and not look at 2nd

// && operator
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

//falsy value = 0, '', null, undefined
console.log("mitch" && "some string");
console.log(0 && "some string");

// || operator
console.log(true || "some string");
console.log(false || "some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;
/*
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "No data";
countWrong;

// nullish coalescing operator
const count = book.reviews.librarything.reviewsCount ?? "no data";
count;

// optional chaining
const getTotalReviewCount = (book) => {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
};
console.log(getTotalReviewCount(book));
// array map
const getTotalReviewCount = (book) => {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
};

const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

// array that has all title of the books
const titles = books.map((book) => book.title);
titles;

// only get essential data for book objs
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

// filter method
//create array with book > 500pgs & movie
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

//reduce method
//most versatile and powerful of all
// add the pages of all books in the array
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

// sort
// mutates original array, so slice it first
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books
  .slice()
  .sort((a, b) => a.pages - b.pages)
  .map((book) => book.title);
sortedByPages;

//immutable arrays
// 1) add a book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdding = [...books, newBook];
booksAfterAdding;

// 2) delete a book object from array
const booksAfterDeleting = booksAfterAdding
  .filter((book) => book.id !== 3)
  .map((book) => book.title);
console.log(booksAfterDeleting.length);

// 3) update book obj in array
const booksAfterUpdate = booksAfterDeleting.map((book) =>
  book.id === 1 ? { ...book, pages: 69 } : book
);
console.log(booksAfterUpdate);

// async JS

//fetch/then
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((data) => console.log(data));
*/

//async/await
const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
};
getTodos();
