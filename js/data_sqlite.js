if (window.openDatabase) {    
    var mydb = openDatabase("ardiles", "0.1", "Database de ferreteria ardiles", 200000);
    createDB();
} else {
    alert("WebSQL is not supported by your browser!");
}

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    window.alert("Creando una db y mostrando su contenido");     
    //inicializando bd con data
      //  createDB();
}

function createDB(tx){
        mydb.transaction(initClientes);
} 

function initClientes(tx) {
        tx.executeSql('DROP TABLE IF EXISTS clientes');
        tx.executeSql('CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY, nombres TEXT,apepat TEXT,apemat TEXT,dni TEXT,linea_credito TEXT,deuda_actual TEXT)');
        tx.executeSql('INSERT INTO clientes (id, nombres,apepat,apemat,dni,linea_credito,deuda_actual) VALUES (1, "roy","cespedes","portocarrero","45381933","600","300")');
        tx.executeSql('INSERT INTO clientes (id, nombres,apepat,apemat,dni,linea_credito,deuda_actual) VALUES (2, "alvaro","sanchez","huamani","45381933","700","300")');
        tx.executeSql('INSERT INTO clientes (id, nombres,apepat,apemat,dni,linea_credito,deuda_actual) VALUES (3, "carlos","sing","ramos","45381933","680","300")');
        tx.executeSql('INSERT INTO clientes (id, nombres,apepat,apemat,dni,linea_credito,deuda_actual) VALUES (4, "carlos","chumbiauca","etc","45381933","400","300")');
        tx.executeSql('INSERT INTO clientes (id, nombres,apepat,apemat,dni,linea_credito,deuda_actual) VALUES (5, "eleana","marchan","rodriguez","45381933","500","300")');
        tx.executeSql('INSERT INTO clientes (id, nombres,apepat,apemat,dni,linea_credito,deuda_actual) VALUES (6, "william","rengifo","lopez","45381933","400","300")');
        tx.executeSql('INSERT INTO clientes (id, nombres,apepat,apemat,dni,linea_credito,deuda_actual) VALUES (7, "jonathan","huaman","larico","45381933","500","300")');
        tx.executeSql('INSERT INTO clientes (id, nombres,apepat,apemat,dni,linea_credito,deuda_actual) VALUES (8, "carlos","acuña","ucv","45381933","600","800")');
        tx.executeSql('INSERT INTO clientes (id, nombres,apepat,apemat,dni,linea_credito,deuda_actual) VALUES (9, "giancarlo","ramos","silva","45381933","900","300")');
        tx.executeSql('INSERT INTO clientes (id, nombres,apepat,apemat,dni,linea_credito,deuda_actual) VALUES (10, "jose luis","fabrica","software","45381933","300","200")');
  
}

function errorCB(err) {
        console.log("Error ocurrido mientras se ejecutaba la query: "+err.code);
}

function listarClientes(){
      mydb.transaction(function (tx) {
            tx.executeSql("SELECT * FROM clientes", [], actualizarLista);
        });
}

function actualizarLista(transaction, result) {

        ajax.parseJSONP(result);


       $('#movie-list').empty();
        $.each(results.rows,function(index){
            var row = results.rows.item(index);
            $('#movie-list').append('<li><a href=" #"><h3 class="ui-li-heading">'+row['id']+'</h3><div class="ui-li-desc">'+row['data']+'</div></a></li>');
        });
        $('#movie-list').listview('refresh');
}
