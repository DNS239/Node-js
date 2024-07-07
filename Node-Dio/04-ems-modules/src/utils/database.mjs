const databaseType = {
    userType: "adimin",
    Typedata: "datalocal",
};




async function conectToDataBase(dataName) {
    //logica de Coneção.
    console.log(`Conectado ao banco ${dataName}`);

};


async function disconectTODataBase(dataName) {

    console.log("Desconectando Do Banco de Dados.");
};

export {
    conectToDataBase,
    disconectTODataBase,
    databaseType,
};


// module.export = {
//     conectToDataBase,
//     disconectTODataBase,
// }