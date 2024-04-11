// 导入 MongoDB 客户端
var MongoClient = require('mongodb').MongoClient;

// MongoDB 连接 URL
var url = "mongodb://34.83.12.197/mydb";

// 连接到数据库
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    if (err) throw err;
    
    // 选择数据库
    var db = client.db("studentdb");

    // 插入的文档
    const docs = [
        { student_id: 11111, student_name: "Bruce Lee", grade: 84 },
        { student_id: 22222, student_name: "Jackie Chen", grade: 93 },
        { student_id: 33333, student_name: "Jet Li", grade: 88 }
    ];

    // 插入多个文档
    db.collection("students").insertMany(docs, function(err, res) {
        if (err) throw err;
        console.log(res.insertedCount + " 文档插入成功");
        
        // 查找一个文档
        db.collection("students").findOne({"student_id": 11111}, function(err, result) {
            if (err) throw err;
            console.log("查找结果:", result);
            
            // 关闭连接
            client.close();
        });
    });
});
