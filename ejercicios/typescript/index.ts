//Boolean

import { createReadStream } from "fs";
import { findSourceMap } from "module";

let muted: boolean = true;
muted = false;

// Numeros

let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = 'Victor'
let saludo = `Me llamo ${nombre}`

// Arreglos
let people: string[] = []
people = ["Victor", "Hector", "Nestor", "Caro"]
// people.push("9001")

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push("Ricardo")
peopleAndNumbers.push(9001)

// Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Naranja = "Naranja"
}

let colorFavorito: Color = Color.Naranja
console.log(`Mi color favorito es ${colorFavorito}`)

// Any
let comodin: any = 'Joker'
comodin = { type: "Wildcard"}

// Object
let someObject: object = {type1: "Wildcards", type2:"Secrets"}

// console.log(someObject.type2)

function add(a: number, b:number): number{
    return a + b
}

const sum = add(4,5)

console.log(sum)

function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

function fullName (firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`
}

const victor = fullName('Victor')

console.log(victor)

function fullName2 (firstName2: string, lastName2: string = 'Fdz'): string {
    return `${firstName2} ${lastName2}`
}

const victor2 = fullName2('Victor')

console.log(victor2)

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Naranja
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)

rect.toString = function() {
    return this.color ?  `Un regctangulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString())