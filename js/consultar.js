//------------------- Consulta Categoria -------------------

function consultaCatg() {
    console.log("se esta ejecutando");
    $.ajax({
        url: "http://155.248.212.171:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            consultaRespuestaCatg(respuesta);
            let $select = $("#selectCategory");
            $.each(respuesta, function(id, name) {
                $select.append(
                    "<option value=" + name.id + ">" + name.name + "</option>"
                );
                console.log("select " + name.id);
            });
        },
    });
}

function consultaRespuestaCatg(respuesta) {
    var tabla = `<table border="1">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th colspan="2">Acciones</th>
                </tr>`;

    for (i = 0; i < respuesta.length; i++) {
        tabla += `<tr>
                    <td>${respuesta[i].id} </td>
                    <td>${respuesta[i].name} </td>                 
                    <td>${respuesta[i].description} </td>                                   
                    <td><button onclick="editarRegistro(${respuesta[i].id})">Editar</button> </td>
                    <td><button onclick="borrar(${respuesta[i].id})">Borrar</button> </td>
                </tr>`;
    }

    tabla += `</table>`;
    $("#listadoCatg").html(tabla);
}

//----------------------- Consulta Cabañas --------------------------

function consulta() {
    console.log("se esta ejecutando");
    $.ajax({
        url: "http://155.248.212.171:8080/api/Cabin/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            consultaRespuesta(respuesta);
            let $select = $(".selectSelectCategory");
            $.each(respuesta, function(id, name) {
                $select.append(
                    "<option value=" + name.id + ">" + name.name + "</option>"
                );
                console.log("select " + name.id);
            });
        },
    });
}


function consultaRespuesta(respuesta) {
    var tabla = `<table border="1">
                <tr>
                    <th>Id</th>
                    <th>Name</th>                    
                    <th>Address</th>
                    <th>Extension</th>
                    <th>Description</th>
                    <th>Category</th>                    
                    <th colspan="2">Acciones</th>
                </tr>`;

    for (i = 0; i < respuesta.length; i++) {
        tabla += `<tr>
                    <td>${respuesta[i].id} </td>
                    <td>${respuesta[i].name} </td>
                    <td>${respuesta[i].address} </td>
                    <td>${respuesta[i].extension} </td>
                    <td>${respuesta[i].description} </td>  
                    <td>${respuesta[i].category.id} </td>                   
                    <td><button onclick="editarRegistro(${respuesta[i].id})">Editar</button> </td>
                    <td><button onclick="borrar(${respuesta[i].id})">Borrar</button> </td>
                </tr>`;
    }

    tabla += `</table>`;
    $("#listado").html(tabla);
}

//-------------------- Consulta Clientes -------------------------

function consultaCli() {
    console.log("se esta ejecutando");
    $.ajax({
        url: "http://155.248.212.171:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            consultaRespuestaCli(respuesta);
            let $select = $(".selectClient");
            $.each(respuesta, function(id, name) {
                $select.append(
                    "<option value=" + name.idClient + ">" + name.name + "</option>"
                );
                console.log("select " + name.id);
            });
        },
    });
}

function consultaRespuestaCli(respuesta) {
    var tabla = `<table border="1">
                  <tr>
                      <th>Id</th>                     
                      <th>E-mail</th>
                      <th>Password</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th colspan="2">Acciones</th>
                  </tr>`;

    for (let i = 0; i < respuesta.length; i++) {
        tabla += `<tr>
                      <td>${respuesta[i].idClient} </td>
                      <td>${respuesta[i].email} </td>
                      <td>${respuesta[i].password} </td>
                      <td>${respuesta[i].name} </td>                      
                      <td>${respuesta[i].age} </td>  
                      <td><button onclick="editarRegistroCli(${respuesta[i].id})">Editar</button> </td>
                      <td><button onclick="borrarCli(${respuesta[i].id})">Borrar</button> </td>
                  </tr>`;
    }

    tabla += `</table>`;

    $("#listadocli").html(tabla);
}

//----------------- Consulta Mensajes ---------------------

function consultaMess() {
    $.ajax({
        url: "http://155.248.212.171:8080/api/Message/all",
        type: "GET",
        dataType: "json",

        success: function(respuesta) {
            console.log(respuesta);
            consultaRespuestaMess(respuesta);
            let $select = $("#selectMessage");
            $.each(respuesta, function(id, name) {
                $select.append(
                    "<option value=" + name.idMessage + ">" + name.name + "</option>"
                );
                console.log("select " + name.id);
            });
        },
    });
}

function consultaRespuestaMess(respuesta) {
    var tabla = `<table border="1">
                  <tr>
                      <th>Id</th>
                      <th>Message</th>                      
                      <th>Audience</th>
                      <th>Client</th>
                      <th colspan="2">Acciones</th>
                  </tr>`;

    for (let i = 0; i < respuesta.length; i++) {
        tabla += `<tr>
                      <td>${respuesta[i].idMessage} </td>
                      <td>${respuesta[i].messageText} </td>
                      <td>${respuesta[i].cabin.name} </td>  
                      <td>${respuesta[i].client.name} </td>   
                      <td><button onclick="editarMess(${respuesta[i].id})">Editar</button> </td>
                      <td><button onclick="borrarMess(${respuesta[i].id})">Borrar</button> </td>
                  </tr>`;
    }

    tabla += `</table>`;

    $("#listadoM").html(tabla);
}

//----------- consulta reservaciones -----------------

function consultaRes() {
    $.ajax({
        url: "http://155.248.212.171:8080/api/Reservation/all",
        type: "GET",
        dataType: "json",

        success: function(respuesta) {
            console.log(respuesta);
            consultaRespuestaRes(respuesta);
            let $select = $("#selectReservation");
            $.each(respuesta, function(id, name) {
                $select.append(
                    "<option value=" + name.idReservation + ">" + name.name + "</option>"
                );
                console.log("select " + name.id);
            });
        },
    });
}

function consultaRespuestaRes(respuesta) {
    var tabla = `<table border="1">
                  <tr>
                      <th>Id</th>
                      <th>Start Date</th>                      
                      <th>Devolution Date</th>
                      <th>Audience</th>
                      <th>Client</th>
                      <th colspan="2">Acciones</th>
                  </tr>`;

    for (let i = 0; i < respuesta.length; i++) {
        tabla += `<tr>
                      <td>${respuesta[i].idReservation} </td>
                      <td>${respuesta[i].startDate} </td>
                      <td>${respuesta[i].devolutionDate} </td>
                      <td>${respuesta[i].cabin.name} </td> 
                      <td>${respuesta[i].client.name} </td>  
                                             
                      <td><button onclick="editarMess(${respuesta[i].id})">Editar</button> </td>
                      <td><button onclick="borrarMess(${respuesta[i].id})">Borrar</button> </td>
                  </tr>`;
    }

    tabla += `</table>`;

    $("#listadoRes").html(tabla);
}