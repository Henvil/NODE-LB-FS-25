CREATE TABLE Books (
  book_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  gender TEXT NOT NULL,
  published_year INTEGER NOT NULL,
  isbn TEXT NOT NULL,
  price REAL NOT NULL,
  rating REAL,
  stock_count INTEGER NOT NULL 
  )