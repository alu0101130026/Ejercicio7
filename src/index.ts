class ImperialLength{
    /**
     * Clase que obtiene valores de distancia imperiales y los convierte a pies.
     */
    pulgadas: number;
    pies: number;
    yardas: number;
    millas:number;

    constructor(pulgadas: number, pies: number, yardas: number, millas: number){}

    inchesToFeet(){
        return this.pulgadas * 0.083;
    }

    yardsToFeet(){
        return this.yardas * 3;
    }

    milesToFeet(){
        return this.millas * 5280;
    }
}

class ImperialMass{
    /**
     * Clase que obtiene valores de masa imperiales y los pasa a libras.
     */
    onzas: number;
    libras: number;
    piedras: number;
    centenas: number;
    toneladas: number;

    constructor(onzas: number, libras: number, piedras: number, centenas: number, toneladas: number){}

    ouncesToPounds(){
        return this.onzas * 0.0625;
    }

    stonesToPounds(){
        return this.piedras * 14;
    }

    hundredToPound(){
        return this.centenas * 112;
    }

    tonsToPound(){
        return this.toneladas * 2240;
    }

}

class MetricLength{
    /**
     * Clase que recibe valores de distancia del sistema métrico.
     */
    centimetros: number;
    metros: number;
    kilometros: number;

    constructor(centimetros: number, metros: number, kilometros: number){}
    
    getCentimetros(){
        return this.centimetros;
    }

    getMetros(){
        return this.metros;
    }

    getKilometros(){
        return this.kilometros;
    }
}

class MetricMass{
    /**
     * Clase que recibe valores de masa del sistema métrico.
     */
    gramos: number;
    kilogramos: number;
    toneladas: number;

    constructor(gramos: number, kilogramos: number, toneladas: number){}

    getGramos(){
        return this.gramos;
    }

    getKilogramos(){
        return this.kilogramos;
    }

    getToneladas(){
        return this.toneladas;
    }
}

class Adapter extends MetricLength{
    /**
     * Clase adaptador que pasa de los valores imperiales a métricos.
     * @param service 
     */
}