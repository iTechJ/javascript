(function() {
    var rice = new Ingredient("Rice", 10),
        nori = new Ingredient("Nori", 12),
        sauce = new Ingredient("Sauce", 5),
        wasabi = new Ingredient("Wasabi", 7),
    /* additional */
        lemon = new Ingredient("Lemon", 3),
        salt = new Ingredient("Salt", 1),
    /* fish */
        tuna = new Fish("Tuna", 34, true),
        crucian = new Fish("Crucian", 21, false),
        sushi;

    tuna.addSpice(lemon);
    tuna.addSpice(salt);

    sushi = new Sushi(rice, nori, sauce, wasabi);
    //sushi.addIngredient(crucian); will throw an error due to fish is not esculent

    sushi.addIngredient(tuna);
    alert(sushi);
})();