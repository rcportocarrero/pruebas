if (window.openDatabase) {    
    var mydb = openDatabase("pepito", "0.1", "Database de ferreteria ardiles", 200000);
    createDB();
} else {
    alert("WebSQL is not supported by your browser!");
}

function createDB(tx){
        mydb.transaction(initClientes);
} 

var nombre_completo = '';

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
    mydb.transaction(ejecutarQuery);
}

function ejecutarQuery(tx){
        tx.executeSql('SELECT * FROM clientes', [], actualizarLista, errorCB);
}
var itemsToarray = new Array();
function actualizarLista(transaction, result) {

        $('#movie-list').empty();
        $.each(result.rows,function(index){
            itemsToarray.push(result.rows.item(index));
            var row = result.rows.item(index);
            nombre_completo = row['nombres']+' '+row['apepat']+' '+row['apemat'];
            $('#movie-list').append('<li data-filtertext="'+nombre_completo+'" ><a href="" data-id="' + row['id'] + '"><img src="images/icons/blue/user.png"><h3>' + nombre_completo + '</h3><p>Línea de crédito: ' + row['linea_credito'] + '</p></a></li>');
        });
         dataCliente.result = itemsToarray;
        $('#movie-list').listview('refresh');

}

jQuery(document).ready(function () {

    $(".logo").animate({'top': '20px'}, 'slow', "easeInOutCirc");
    $(".cartitems").delay(1000).animate({'width': '30px', 'height': '30px', 'top': '10px', 'right': '10px', 'opacity': 1}, 1000, "easeOutBounce");
    $(".main-nav ul > li")
            .css('opacity', '0')
            .each(function (index, item) {
                setTimeout(function () {
                    $(item).fadeTo('slow', 1, "easeInOutCirc");
                }, index * 175);
            });

    $(".main-nav ul > li span")
            .css('opacity', '0')
            .each(function (index, item) {
                setTimeout(function () {
                    $(item).animate({'left': '0px', 'opacity': 1}, 500, "easeInOutCirc");
                }, index * 175);
            });


});

$(document).on('pageinit', '#home', function(){      
    //    listarClientes();
});

$(document).on('pagebeforeshow', '#headline', function(){      
    $('#movie-data').empty();
    console.log("clic a li");
    //console.log(dataCliente.result);
    $.each(dataCliente.result, function(i, row) {
        if(row.id == dataCliente.id){
            //nombres,apepat,apemat,dni,linea_credito,deuda_actual
            $('#movie-data').append('<li><img src="images/icons/blueuser.png"></li>');
            $('#movie-data').append('<li>Nombres: '+row.nombres+' '+row.apepat+' '+row.apemat+'</li>');
            $('#movie-data').append('<li>Dni: '+row.dni+'</li>');
            $('#movie-data').append('<li>Línea de crédito : '+row.linea_credito+'</li>');   
            $('#movie-data').append('<li>Deuda actual : '+row.deuda_actual+'</li>');       
			$('#movie-data').append('<li><a href="#panel_pedido" class="ui-btn-center" id="btnPedido">Nuevo Pedido</a></li>');       
            $('#movie-data').listview('refresh');  
        }
    });    
});
/*
$(document).on('vclick', '.navbarpages div a', function(){  
    location.href="index.html";
});

$(document).on('vclick', '#movie-list li a', function(){  
    dataCliente.id = $(this).attr('data-id');
    $.mobile.changePage( "#headline", { transition: "slide", changeHash: false });
});
*/
var dataCliente = {
    id : null,
    result : null
}

