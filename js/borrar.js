function borrar(numId) {

    var datosTabCabin = {
        id: numId
    }

    //Conversion a JSON
    let dataToSend = JSON.stringify(datosTabCabin);

    //Petición Ajax

    $.ajax({

        url: "http://155.248.212.171:8080/Farm/delete",
        data: dataToSend,
        type: 'DELETE',
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("BORRADO");
            consulta();
        },

        error: function(xhr, status) {
            console.log(status);
        }

    })

}

//---------------------Borrar Clientes--------------------

function borrarCli(numIdc) {
    var datosTabcli = {
        id: numIdc
    }

    //Conversion a JSON
    let dataToSendc = JSON.stringify(datosTabcli);

    //Petición Ajax
    $.ajax({
        url: "http://155.248.212.171:8080/Client/delete",
        data: dataToSendc,
        type: "DELETE",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("BORRADO");
            consultaCli();
        },

        error: function(xhr, status) {
            console.log(status);
        },
    });
}


//---------------------- Borrar Mensajes--------------------

function borrarMess(numIdM) {
    var datosTabMess = {
        id: numIdM
    }

    //Conversion a JSON
    let dataToSendM = JSON.stringify(datosTabMess);

    //Petición Ajax
    $.ajax({
        url: "http://155.248.212.171:8080/Message/delete",
        data: dataToSendM,
        type: "DELETE",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("BORRADO");
            consultaMess();
        },

        error: function(xhr, status) {
            console.log(status);
        },
    });
}