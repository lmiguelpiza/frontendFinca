$(document).ready(function() {
    $("#btnGuardar").show();
    $("#btnGuardar1").show();
    $("#btnGuardar2").show();
})

//--------------------- Editar Fincas -----------------------
function editarRegistro(numId) {

    // ocultar y mostrar botones
    $("#btnGuardar").show();
    $("#btnRegistrar").show();
    $("#btnConsulta").show();
    $("#numId").prop('disabled', true);
    $("#nombre").focus();

    var datosTabFarm = {
        id: numId
    }

    //Conversion a JSON
    let dataToSend = JSON.stringify(datosTabFarm);

    //Peticion Ajax
    $.ajax({
        url: "http://155.248.212.171:8080/Farm/update" + numId,
        type: 'GET',
        dataType: 'json',

        success: function(respuesta) {
            var items = respuesta.items;

            $("#numId").val(items[0].id);
            $("#address").val(items[0].address);
            $("#extenion").val(items[0].extension);
            $("#idCateg").val(items[0].category_id);
            $("#name").val(items[0].name);
            console.log(items);
        },

        error: function(xhr, status) {
            console.log(status);
        }
    });
}

// Actualizar datos tabla Fincas

function actualizar() {

    $("#btnGuardar").show();
    $("#btnRegistrar").show();
    $("#btnConsulta").show();

    var datosTabCabin = {
        id: $("#numId").val(),
        address: $("#address").val(),
        extension: $("#extension").val(),
        category_id: $("#idCateg").val(),
        name: $("#name").val(),
    }

    //Conversion a JSON
    let dataToSend = JSON.stringify(datosTabFarm);

    //Petición Ajax
    $.ajax({
        url: "http://155.248.212.171:8080/Farm/update",
        data: dataToSend,
        type: 'PUT',
        contentType: "application/JSON",

        success: function(respuesta) {
            console.log("Actualizado");
            consulta();
        },

        error: function(xhr, status) {
            console.log(status);
        }
    })


}
//---------------------------- Editar Clientes---------------------------


function editarRegistroCli(numIdc) {

    // ocultar y mostrar botones
    $("#btnGuardar1").show();
    $("#btnRegistrar1").show();
    $("#btnConsulta1").show();
    $("#numIdc").prop('disabled', true);
    $("#namec").focus();

    var datosTabCliente = {
        id: numIdc
    }

    //Conversion a JSON
    let dataToSend = JSON.stringify(datosTabCliente);

    //Peticion Ajax
    $.ajax({
        url: "http://155.248.212.171:8080/Client/update" + numIdc,
        type: 'GET',
        dataType: 'json',

        success: function(respuesta) {
            var items = respuesta.items;

            $("#numIdc").val(items[0].id);
            $("#namec").val(items[0].name);
            $("#email").val(items[0].email);
            $("#age").val(items[0].age);
            console.log(items);

        },

        error: function(xhr, status) {
            console.log(status);
        }
    });
}

// Actualizar datos tabla cliente

function actualizarCli() {

    $("#btnGuardar1").show();
    $("#btnRegistrar1").show();
    $("#btnConsulta1").show();

    var datosTabCliente = {
        id: $("#numIdc").val(),
        name: $("#namec").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    }

    //Conversion a JSON
    let dataToSend = JSON.stringify(datosTabCliente);

    //Petición Ajax
    $.ajax({
        url: "http://155.248.212.171:8080/Client/update",
        data: dataToSend,
        type: 'PUT',
        contentType: "application/JSON",

        success: function(respuesta) {
            console.log("Actualizado");
            consultaCli();
        },

        error: function(xhr, status) {
            console.log(status);
        }
    })

}



//--------------------------- Editar Messages------------------------


function editarMess(numIdm) {

    // ocultar y mostrar botones
    $("#btnGuardar2").show();
    $("#btnRegistrar2").show();
    $("#btnConsulta2").show();
    $("#numIdm").prop('disabled', true);
    $("#message").focus();

    var datosTabMess = {
        id: numIdm
    }

    //Conversion a JSON
    let dataToSendM = JSON.stringify(datosTabMess);

    //Peticion Ajax
    $.ajax({
        url: "http://155.248.212.171:8080/Message/update" + numIdm,
        type: 'GET',
        dataType: 'json',

        success: function(respuesta) {
            var items = respuesta.items;

            $("#numIdm").val(items[0].id);
            $("#message").val(items[0].messagetext);
            console.log(items);

        },

        error: function(xhr, status) {
            console.log(status);
        }
    });
}

// Actualizar datos tabla cliente

function actualizarMess() {

    $("#btnGuardar2").show();
    $("#btnRegistrar2").show();
    $("#btnConsulta2").show();

    var datosTabMess = {
        id: $("#numIdm").val(),
        messagetext: $("#message").val(),

    }

    //Conversion a JSON
    let dataToSendM = JSON.stringify(datosTabMess);

    //Petición Ajax
    $.ajax({
        url: "http://155.248.212.171:8080/Message/update",
        data: dataToSendM,
        type: 'PUT',
        contentType: "application/JSON",

        success: function(respuesta) {
            console.log("Actualizado");
            consultaMess();
        },

        error: function(xhr, status) {
            console.log(status);
        }
    })

}