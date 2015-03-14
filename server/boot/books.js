module.exports = function(app) {
  var Books = app.models.Books;

  // define a custom scope
  Books.scope('recentSeller', {where: {release_date: {lte: new Date() }}});

  app.dataSources.db.automigrate('Books', function(err) {
    if (err) throw err;

    var d = new Date();
    var books= [
      {name: '2 states', price: "200" , release_date:+new Date("08-10-2009"),authorId:1},
      {name: 'Five Point Someone', price: "300",release_date:+new Date("08-10-2004"),authorId:1},
      {name: 'One night @ Call center', price: "150",release_date:+new Date("08-10-2005"),authorId:1},
      {name: 'The 23 mistakes of my life', price: "250",release_date:+new Date("08-10-2008"),authorId:1},
      {name: 'Revolution 2020', price: "500",release_date:+new Date("08-10-2011"),authorId:1},
      {name: 'Harry Potter', price: "500",release_date:+new Date("08-10-2009"),authorId:2},
    ];

    var count = books.length;

    books.forEach(function(book) {
      Books.create(book, function(err, instance) {
        if (err)
          return console.log(err);

        console.log('Books Inserted:', instance);

        count--;

        if (count === 0)
          console.log('Done');
      });
    });
  });
};
