var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={ 
   			'article-one':{
				title:"Article One | Tanmai Gopal",
				heading:'Article One',
				date:'Sep 5, 2016',
				content:`
				         <p>
  							This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
  						</p>
  						<p>
  							This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
  					   </p>
  					   <p>
  							This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
  					   </p>`
			},
			'article-two':{
				title:'Article Two | George Jacob',
				heading:'Article Two',
				date: 'Feb 5, 2017',
				content: `
				    <p>
  							This is the content of my second article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
  					</p> `
			},
			'article-three':{
				title:'Article Three | George Jacob',
				heading:'Article Three',
				date: 'Feb 15, 2017',
				content: `
				    <p>
  							This is the content of my third article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
  					</p> `
			}
 };
function createTemplate(data){
	var title=data.title;
	var date=data.date;
	var heading=data.heading;
	var content=data.content;

	var htmlTemplate=`
	<html>
  	<head>
  	<title>
  		${title}
  	</title>
  	<meta name="viewport" content="width=device-width, initial-scale=1"/>
  	</head>
  	<body>
  		<div>
  			<a href="/">Home</a>
  		</div>
  		<hr/>
  		<h3>
  			${heading}
  		</h3>
  		<div> 
  			${date}
  		</div>
  		<div>
  			${content}
  		</div>
  	</body>
	</html>
  `; 
  return htmlTemplate;

}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){
	//articleName==article-one
	//article(articleName={} content object for article-one
	var articleName=req.params.articleName;
	res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
