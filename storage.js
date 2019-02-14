var db = openDatabase("storage.db", '1.0', "OS storage database", 500 * 1024 * 1024);

var create = function() {
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS litwebstorage (name text primary key, value text)");
    });
}

var store = function(name, value) {
    db.transaction(function (tx) {
        tx.executeSql("INSERT INTO litwebstorage (name, value) VALUES (?,?)", [name, value]);
    });
};

function getAllFiles() {
    return db.transaction(function (tx) {
        tx.executeSql("SELECT name, value FROM litwebstorage", [], function(tx, results) {
        var out=[];
            if(results.rows.length > 0) {
                for(var i = 0; i < results.rows.length; i++) {
                   out.push({name:results.rows.item(i).name,value:results.rows.item(i).value});
                }
              return out;
            }
        });
    });
}

function getFile(name,callback){
  db.transaction(function (tx) {
        tx.executeSql("SELECT value FROM litwebstorage WHERE name="+name, [], function(tx, results) {
      callback(tx,results);
        });
    });
  }



  
