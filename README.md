# NodeJS Simple Books Api
Sample API to learn about MongoDB :leaves: and GraphQL :six_pointed_star:

Built on Docker :whale:

Run the following commands to get started
```
cp services.envar.dist services.envar
sudo bash run-docker.sh
```

## HTTP Requests :computer:
* Add a book :books:
```
POST /books

Sample body:

{
	"title": "Plataforma",
	"author": "Michel Houellebecq",
	"genre": "Novel",
	"year": 2001
}
```

* Add an author :woman: :man:
```
POST /authors

Sample body:

{
	"name": "Michel Houellebecq",
	"origin": "France",
	"age": "63",
	"gender": Male
}
```
* Retrieve books by property
```
GET /books/:property/:value
Example: GET /books/genre/novel
```
* Retrieve authors by property
```
GET /authors/:property/:value
Example: GET /authors/origin/France
```

## GraphQL Queries :six_pointed_star:
GraphiQL is available at /graphql to create queries and mutations

* Retrieve book titles by property
```
{
  book(property: "Genre" value: "Novel") { title }
}
```
