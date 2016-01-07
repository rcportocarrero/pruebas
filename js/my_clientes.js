$(document).on('pageinit', '#clientes', function () {   
    dataCliente.result = obj_cliente_ardils; 
   // alert('entre a pagina clientes');
    /*var db = null;
    db = window.sqlitePlugin.openDatabase({name: "ardiles.db", createFromLocation: 1});
    if (db != null) {
    	//validar si existe sincronización
    	alert('conectando a sqlite');
    	lista_clientes_ardiles(); 
    }else{
        alert('No se puede crear bdsqlite');
    }*/
   // lista_clientes_ardiles(); 
   //lista_clientes_ardiles_json();
      
});
$(document).on('pageinit', '#productos', function () { 
    $.mobile.loading( 'show' );
   // lista_productos_ardiles_json();
});
var arrCliente = {
    id : null,
    result : null
}

var itemsToarray = new Array();

function lista_clientes_ardiles(){
	alert('entre a lista_clientes_ardiles');
	var db = null;
    db = window.sqlitePlugin.openDatabase({name: "ardiles.db", createFromLocation: 1});
    db.transaction(exec_sql_clientes);
}

function exec_sql_clientes(tx){
	alert('entre a sql_clientes');
        //tx.executeSql('SELECT * FROM clientes limit 10', [], updte_listview_clientes, errorCB);
        tx.executeSql('SELECT * FROM clientes limit 10', [], function(tx,result){
	        $('#clientes-lista').empty();
			$.each(result.rows,function(index){
			    itemsToarray.push(result.rows.item(index));
			    var row = result.rows.item(index);            
			    $('#clientes-lista').append('<li data-filtertext="'+row['Descripcion']+'" ><a href="" data-id="' + row['id'] + '"><img src="images/icons/blue/user.png"><h3>' + row['Descripcion'] + '</h3><p>Línea de crédito: ' + row['LimiteCredito'] + '</p></a></li>');
			});
		    arrCliente.result = itemsToarray;
		    $('#clientes-lista').listview('refresh');

        });
}

/*
function updte_listview_clientes(transaction, result) {
		alert('entre a upd_sql_clientes');
        $('#clientes-lista').empty();
        $.each(result.rows,function(index){
            itemsToarray.push(result.rows.item(index));
            var row = result.rows.item(index);            
            $('#clientes-lista').append('<li data-filtertext="'+row['Descripcion']+'" ><a href="" data-id="' + row['id'] + '"><img src="images/icons/blue/user.png"><h3>' + row['Descripcion'] + '</h3><p>Línea de crédito: ' + row['limiteCredito'] + '</p></a></li>');
        });
         arrCliente.result = itemsToarray;
        $('#clientes-lista').listview('refresh');

}*/


function lista_clientes_ardiles_json(){

    console.log('ingrese a jsn');
    $('#clientes-lista').empty();
    for(var i=0; i<obj_cliente_ardils.length; i++){
        var row = obj_cliente_ardils[i];  
        console.log(row);
        $('#clientes-lista').append('<li data-filtertext="'+row['Descripcion']+'" ><a href="" data-id="' + row['id'] + '"><h3>' + row['Descripcion'] + '</h3><p>Línea de crédito: ' + row['LimiteCredito'] + '</p></a></li>');

    } 
    $('#clientes-lista').listview('refresh'); 
}

function lista_productos_ardiles_json(){

    console.log('ingrese a jsn');
    $('#productos-lista').empty();
    for(var i=0; i<obj_producto_ardils.length; i++){
        var row = obj_producto_ardils[i];  
        if(i % 2 == 0){
            $('#productos-lista').append('<li data-filtertext="'+row['Descripcion']+'"><a href="#"><img src="img_ardiles/abrasivos.jpg"><h2>'+row['Descripcion']+'</h2><p>Código: '+row['Codigo']+'</p><p>Stock: '+row['Stock']+'</p></a></li>');
        }else{
            $('#productos-lista').append('<li data-filtertext="'+row['Descripcion']+'"><a href="#"><img src="img_ardiles/agro.jpg"><h2>'+row['Descripcion']+'</h2><p>Código: '+row['Codigo']+'</p><p>Stock: '+row['Stock']+'</p></a></li>');
        }
       
    } 
    $('#productos-lista').listview('refresh'); 

}

            
var dataCliente = {
    id : null,
    result : null
}
/*
$(document).on('pagebeforeshow', '#headline', function(){      
    $('#cliente-data').empty();
    console.log("clic a li");
    $.each(dataCliente.result, function(i, row) {
        if(row.id == dataCliente.id){
            $('#cliente-data').append('<li><img src="images/icons/blueuser.png"></li>');
            $('#cliente-data').append('<li>Nombres: '+row.Codigo+'</li>');
            $('#cliente-data').append('<li>Nombres: '+row.Descripcion+'</li>');
            $('#cliente-data').append('<li>Dni: '+row.Dni+'</li>');
            $('#cliente-data').append('<li>Lim. Crédito : '+row.LimiteCredito+'</li>');   
            $('#cliente-data').append('<li>Crédito disp. : '+row.LimiteCreditoDisp+'</li>');       
            $('#cliente-data').append('<li><a href="#panel_pedido" class="ui-btn-center" id="btnPedido">Nuevo Pedido</a></li>');       
            $('#cliente-data').listview('refresh');  
        }
    });    
});

$(document).on('vclick', '#clientes-lista li a', function () {
    dataCliente.id = $(this).attr('data-id');
    $.mobile.changePage("#headline", {transition: "slide", changeHash: false}); 
});
*/