// // Crea un array composto da 10 automobili.
// // Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// // Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// // Infine stampa separatamente i 3 array.

// const auto = [
//     {
//         marca: "BMW",
//         modello: "machhina",
//         alimentazione: "elettrica"
//     },
//     {
//         marca: "Ford",
//         modello: "cmax",
//         alimentazione: "disel"
//     }, 
//     {
//         marca: "hyundai",
//         modello: "tucson",
//         alimentazione: "benzina"
//     }, 
//     {
//         marca: "fiat",
//         modello: "bravo",
//         alimentazione: "disel"
//     },
//     {
//         marca: "honda",
//         modello: "cx",
//         alimentazione: "elettrica"
//     }];


//     // auto.forEach((cars) => {
//     //     if (cars.alimentazione === "benzina"){
//     //         return 
//     //     }
//     // })

//     const benzAuto = auto.filter((elem) => elem.alimentazione === "benzina");
//     console.log(benzAuto);

//     const dieselAuto = auto.filter((elem) => elem.alimentazione === "disel");

//     const OtherAuto = auto.filter((elem))




    // 4. Crea un array di oggetti che rappresentano delle persone.
    // Ogni persona ha un nome, un cognome e un’età.
    
    // Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

    const people = [
        {
            nome: "Paola",
            cognome: "Coccetti",
            age: 35
        },
        {
            nome: "giorgio",
            cognome: "Coccetti",
            age: 12
        },
        {
            nome: "Pinco",
            cognome: "Coccetti",
            age: 65
        },
        {
            nome: "Pallo",
            cognome: "Coccetti",
            age: 39
        },
        {
            nome: "Pippo",
            cognome: "Coccetti",
            age: 4
        },
    ]

    const newArray = people.map((elem) => {
        if (elem.age > 18 ) {
            console.log(`ciao ${elem.nome} la tua eta e' ${elem.age} puoi guidare`);
        } else {
            console.log("non puoi guidare");
        }
       
    });
    

   