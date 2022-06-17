
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const fetchFromEndPoint = fetch("https://anapioficeandfire.com/api/books") 
  .then(res => res.json())
  .then(booksData => booksData.forEach(book => renderBooks(book)) )

  return fetchFromEndPoint
}

fetchBooks()

function renderBooks(books) {
  const main = document.querySelector('main');
  const h2 = document.createElement('h2');
  h2.innerHTML = books.name;
  main.appendChild(h2);

}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});