var http = require('http');
var url = require('url');
var mongodb = require('mongodb');

const { MONGO_URL, MONGO_DATABASE } = process.env;

var MongoClient = mongodb.MongoClient;
var uri = `mongodb://${MONGO_URL}/${MONGO_DATABASE}`;

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    var student_id = parseInt(parsedUrl.query.student_id);

    if (/^\/api\/score/.test(req.url)) {
        MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
            if (err) {
                console.error(err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                return;
            }
            var db = client.db("studentdb");
            db.collection("students").findOne({ "student_id": student_id }, function(err, student) {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Internal Server Error' }));
                    return;
                }
                if (student) {
                    var response = {
                        student_id: student.student_id,
                        student_name: student.student_name,
                        student_score: student.grade
                    };
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(response));
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end("Student Not Found");
                }
                client.close();
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Wrong URL, please try again");
    }
});

server.listen(8080);
