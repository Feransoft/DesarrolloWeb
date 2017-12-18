const service = ((platforms) => {
    const aPizzas = [{
            nombre: 'Barbacoa',
            precio: 20.5,
            cantidad: 10,
            ingredientes: ['salsa barbacoa', 'mozzarella', 'ternera', 'cebolla', 'bacon', 'maiz'],
            img: "https://www.dominospizza.es/images/Barbacoa.png"
        },
        {
            nombre: 'Carbonara',
            precio: 22.5,
            cantidad: 5,
            ingredientes: ['crema fresca', 'mozzarella', 'cebolla', 'bacon', 'champiñon', 'cebolla'],
            img: "https://www.dominospizza.es/images/Carbonara.png"
        },
        {
            nombre: 'Cremozza',
            precio: 19.50,
            cantidad: 2,
            ingredientes: ['crema freca', 'mozzarella', 'pollo', 'cebolla', 'salsa barbacoa'],
            img: "https://www.dominospizza.es/images/cremozza_bbq.png"
        },
        {
            nombre: 'Cheesix',
            precio: 18.4,
            cantidad: 8,
            ingredientes: ['crema fresca', 'mozzarella', 'cheddar', 'parmesano', 'gorgonzola', 'queso de cabra'],
            img: "https://www.dominospizza.es/images/6quesos.png"
        },
        {
            nombre: 'Patanegra',
            precio: 23.8,
            cantidad: 12,
            ingredientes: ['salsa de tomate', 'mozzarella', 'jamon serrano', 'aceitunas', 'aceite de oliva', 'tomate'],
            img: "https://www.dominospizza.es/images/pata_negra.png"
        },
        //{nombre: 'Margarita', precio : 16.5, cantidad : 18, img : "https://www.dominospizza.es/images/margarita.png"}
    ];

    const aIngredients = {
        'salsa barbacoa' : { precio : 0.50},
        'mozzarella' : { precio : 1},
        'ternera' : { precio : 1},
        'cebolla' : { precio : 0.5},
        'bacon' : { precio : 1},
        'maiz' : { precio : 0.5},
        'crema fresca' : { precio : 1},
        'champiñon' : { precio : 0.5},
        'pollo' : { precio : 1},
        'cheddar' : { precio : 1},
        'parmesano' : { precio : 1},
        'gorgonzola' : { precio: 1},
        'queso de cabra' : { precio : 1},
        'salsa de tomate' : { precio : 0.5},
        'jamon serrano' : { precio : 1.5},
        'aceituna' : { precio : 0.5},
        'aceite de oliva' : { precio : 0.5},
        'tomate' : { precio : 0.5}
   };

    const init = () => {

    };

    const filterIngredients = (pizza = 'Barbacoa') => {
        let arrayIngredients = [];
        let array = Object.keys(aIngredients);
        let arrayFinal = [];

        aPizzas.forEach(element => {
            if(element.nombre == pizza){
                arrayIngredients = element.ingredientes;
            }
        });

        array.forEach(element => {
            if(arrayIngredients.indexOf(element) == -1){
                 arrayFinal.push(element);
            }
        });

        return arrayFinal;
        
    }

    const searchPrice = (ingrediente) => aIngredients[ingrediente].precio;

    const sum = (array) => array.reduce((a,b) =>a+b);

    const subtract = (array) => array.reduce((a,b)=>a-b);
     

    return {
        init,
        aPizzas,
        aIngredients,
        filterIngredients,
        searchPrice,
        sum,
        subtract
    }

})(window.document);