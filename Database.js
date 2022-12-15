module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: []
  }

  find(key) {
    return this.#storage[key]
  }

  //salvar authors
  saveAuthor(author) {
    this.#storage.authors.push(author)
  }

  // -------------- BOOKS

  //encontrar livros
  findBookByName(bookName) {
    return this.#storage.books.find(b => b.name === bookName)
  }

  //verificar se o livro existe/está salvo, caso não, sera salvado..
  saveBook(book) {
    const bookExists = this.findBookByName(book.name)
      if (!bookExists) {
        this.#storage.books.push(book)
      }
    }

    //adicionar livro ao estoque
  addBooksToStock(bookName, quantity) {
    const book = this.findBookByName(bookName)
    book?.addToStock(quantity)
  }

  //remover livro do estoque
  removeBooksFromStock(bookName, quantity) {
    const book = this.findBookByName(bookName)
    book?.removeFromStock(quantity)
  }
  

  // -------------- POSTERS

  //encontrar posters
  findPosterByName(posterName) {
    return this.#storage.posters.find(p => p.name === posterName)
  }

  //verificar se o poster existe/está salvo, caso não sera salvado um poster..
  savePoster(poster) {
    const posterExists = this.findPosterByName(poster.name)
      if (!posterExists) {
        this.#storage.posters.push(poster)
      }
    }

    //adicionar poster ao estoque
  addPostersToStock(posterName, quantity) {
    const poster = this.fingPosterByName(posterName)
    poster?.addToStock(quantity)
  }

  //remover poster do estoque
  removePostersFromStock(posterName, quantity) {
    const poster = this.fingPosterByName(posterName)
    poster?.removeFromStock(quantity)
  }

  //salvar usuário
  saveUser(user) {
    const userExists = this.#storage.users.find(u => u.email === user.email)
      if (!userExists) {
        this.#storage.users.push(user)
      }
  }

  //salvar pedidos
  saveOrder(order) {
    this.#storage.orders.push(order)
  }

  showStorage() {
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(order => order.data))
  }
}

