class Publisher {
  constructor(authors, name) {
    this.authors = authors
    this.name = name

    // TODO: authorsの各authorに対して、publisherへの参照を持たせたい
    // ex) Authorクラスの実装を参考に
  }
}

class Author {
  constructor(name, books) {
    this.name = name
    this.books = books
    this.publisher = null

    for (const book of books) {
      book.author = this
    }
  }
}

class Book {
  constructor(title) {
    this.title = title
    this.author = null
  }
}

let book1 = new Book('book1')
let book2 = new Book('book2')
let book3 = new Book('book3')
let book4 = new Book('book4')

let author1 = new Author('西尾維新', [book1, book2])
let author2 = new Author('夏目漱石', [book3, book4])
let publisher = new Publisher([author1, author2], '講談社')

console.log(book1.author.name)
console.log(book3)
// console.log(publisher.authors[0].books)
// console.log(publisher.authors[1].books[1])
// console.log(publisher.authors[1].books[1].title)

// TODO: publisher, author, bookのデータを複数作り、表示させる。このとき、各データが関連を持つように設定する
// 出力例
// const pub = new Publisher()
// pub.authors -> [{name: 夏目漱石}, {name: 西尾維新}]
// pub.authors[1].books -> [{title: '化物語1'}, {title: '化物語2'}]
// pub.authors[1].books[0] -> {title: '化物語1'}