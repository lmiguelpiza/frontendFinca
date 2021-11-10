//----------- registro Categorias-------------------

function registroCatg() {
    var datosTabCategory = {
        name: $("#nameCatg").val(),
        description: $("#descriptionCatg").val(),
    };

    //Conversion a JSON
    let dataToSend = JSON.stringify(datosTabCategory);

    //Petición Ajax
    $.ajax({
        url: "http://155.248.212.171:8080/api/Category/save",
        data: dataToSend,
        type: "POST",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("Insertado");
            consultaCatg();
        },
        error: function(xhr, status) {
            console.log(status);
        },
    });
}

//--------------------- registro Fincas --------------------------

function registro() {
    var datosTabCabin = {
        id: $("#id").val(),
        address: $("#address").val(),
        extension: $("#extension").val(),
        name: $("#name").val(),
        category: { id: +$("#selectCategory").val() },
    };

    //Conversion a JSON
    let dataToSend = JSON.stringify(datosTabCabin);

    //Petición Ajax
    $.ajax({
        url: "http://155.248.212.171:8080/api/Farm/save",
        data: dataToSend,
        type: "POST",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("Insertado");
            consulta();
        },
        error: function(xhr, status) {
            console.log(status);
        },
    });
}

//-------------------- registro Cliente -------------------

function registroCli() {
    var datosTabcli = {
        email: $("#emailCli").val(),
        password: $("#passwordCli").val(),
        name: $("#nameCli").val(),
        age: $("#ageCli").val(),
    };

    //Conversion a JSON
    let dataToSendc = JSON.stringify(datosTabcli);

    //Petición Ajax
    $.ajax({
        url: "http://155.248.212.171:8080/api/Client/save",
        data: dataToSendc,
        type: "POST",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("Insertado");
            consultaCli();
        },

        error: function(xhr, status) {
            console.log(status);
        },
    });
}

//--------------------funcion Registro message-------------------

function registroMess() {
    var datosTabMess = {
        messageText: $("#message").val(),
        cabin: { id: +$(".selectFarm").val() },
        client: { idClient: +$(".selectClient").val() },
    };

    //Conversion a JSON
    var dataToSendM = JSON.stringify(datosTabMess);

    //Petición Ajax

    $.ajax({
        url: "http://155.248.212.171:8080/api/Message/save",
        data: dataToSendM,
        type: "POST",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("Insertado");
            consultaMess();
        },

        error: function(xhr, status) {
            console.log(status);
        },
    });
}

//--------------- funcion Registro Respositorio ----------------

function registroRes() {
    var datosTabRes = {
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        cabin: { id: +$(".selectFarm").val() },
        client: { idClient: +$(".selectClient").val() },
    };

    //Conversion a JSON
    var dataToSendR = JSON.stringify(datosTabRes);

    //Petición Ajax

    $.ajax({
        url: "http://155.248.212.171:8080/api/Reservation/save",
        data: dataToSendR,
        type: "POST",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("Insertado");
            consultaRes();
        },

        error: function(xhr, status) {
            console.log(status);
        },
    });
}