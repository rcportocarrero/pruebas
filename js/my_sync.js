var app = {
    url: 'http://52.4.34.166/apigility/public'
};

var arr_cliente = [];
var arr_producto = [];
var arr_pedido = [];

function  guardar_clientes(cb) {
    
  //  cb.executeSql('DROP TABLE IF EXISTS clientes');
  //  cb.executeSql('CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY AUTOINCREMENT,IdCliente INTEGER NOT NULL,Codigo TEXT NOT NULL,Descripcion TEXT NOT NULL,CodCategoria TEXT,Ruc TEXT,Dni TEXT,LimiteCredito REAL NOT NULL,LimiteCreditoDisp REAL NOT NULL,CodFormaPago TEXT,CodVendedor TEXT NOT NULL,FlgRegHabilitado TEXT NOT NULL,CodAgencia TEXT,CodTipoNegocio TEXT)');
    var idCliente = '';
    var Codigo = '';
    var Descripcion = '';
    var CodCategoria = '';
    var Ruc = '';
    var Dni = '';
    var LimiteCredito = '';
    var LimiteCreditoDisp = '';
    var CodFormaPago = '';
    var CodVendedor = '';
    var FlgRegHabilitado = '';
    var CodAgencia = '';
    var CodTipoNegocio = '';
    var sentencia_sql = 'insert into clientes (IdCliente,Codigo,Descripcion,CodCategoria,Ruc,Dni,LimiteCredito,LimiteCreditoDisp,CodFormaPago,CodVendedor,FlgRegHabilitado,CodAgencia,CodTipoNegocio)';
    var sentencia_val = '';
    var html ='';
    for (var i = 0; i < arr_cliente.length; i++) {
        idCliente = arr_cliente[i]["IdCliente"];
        Codigo = arr_cliente[i]["Codigo"];
        Descripcion = '"' + arr_cliente[i]["Descripcion"] + '"';
        CodCategoria = '"' + arr_cliente[i]["CodCategoria"] + '"';
        Ruc = '"' + arr_cliente[i]["Ruc"] + '"';
        Dni = '"' + arr_cliente[i]["Dni"] + '"';
        LimiteCredito = arr_cliente[i]["LimiteCredito"];
        LimiteCreditoDisp = arr_cliente[i]["LimiteCreditoDisp"];
        CodFormaPago = '"' + arr_cliente[i]["CodFormaPago"] + '"';
        CodVendedor = '"' + arr_cliente[i]["CodVendedor"] + '"';
        FlgRegHabilitado = '"' + arr_cliente[i]["FlgRegHabilitado"] + '"';
        CodAgencia = '"' + arr_cliente[i]["CodAgencia"] + '"';
        CodTipoNegocio = '"' + arr_cliente[i]["CodTipoNegocio"] + '"';
        sentencia_val = ' values (' + idCliente + ',' + Codigo + ',' + Descripcion + ',' + CodCategoria + ',' + Ruc + ',' + Dni + ',' + LimiteCredito + ',' + LimiteCreditoDisp + ',' + CodFormaPago + ',' + CodVendedor + ',' + FlgRegHabilitado + ',' + CodAgencia + ',' + CodTipoNegocio + ');';
        query_completa = sentencia_sql + sentencia_val;
        //cb.executeSql(query_completa);
        console.log(query_completa);
        //html +=  arr_cliente[i]["IdCliente"]+'</br>';
    }
    //jQuery('#txt_actualiza_cli').html(html);
}
;
$(document).on('pageinit', '#menu_sincronizar', function() {
    
});

jQuery('#btn_sync').on('click', function(evt) {

    var fecha_yxy = new Date();
    var dias = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"); 
    var mes = fecha_yxy.getMonth() +1;
    var fecha_txto = 'Actualizado al '+fecha_yxy.getDate() +'/'+ mes +'/'+ fecha_yxy.getYear() + ' a las '+ fecha_yxy.getHours()+':'+fecha_yxy.getMinutes()+':'+fecha_yxy.getSeconds();
    jQuery('#txt_actualiza_cli').html(fecha_txto);
    jQuery('#txt_actualiza_pro').html(fecha_txto);
    jQuery('#txt_actualiza_ped').html(fecha_txto);
    jQuery.ajaxSetup({
        async: false,
        cache: false,
    });
  //  var mydb2 = openDatabase("juan", "0.2", "Database", 200000);
    var html = '';
   /* jQuery.ajax({
        url: app.url + '/ws_cliente',
        type: 'jsonp',
        method: 'GET',
        success: function(xhr) {
            arr_cliente = xhr;
//            db.transaction(guardar_clientes);
            console.debug(xhr);
           // mydb2.transaction(guardar_clientes);
        }
    });
     jQuery.ajax({
     url: app.url + '/ws_productos',
     type: 'jsonp',
     method: 'GET',
     success: function (xhr) {                    
         arr_producto = xhr;
     }
     });
     */
   /*  jQuery.ajax({
     url: app.url + '/ws_pedidos',
     type: 'jsonp',
     method: 'GET',
     success: function (xhr) {                    
     jQuery('#txt_actualiza_ped').html('Actualizado al 05/01/2016');
     }
     }); */
});