import {suma} from '../js/funciones.js';

describe('Testing a las funciones de suma y reta',()=>{
    test ('Suma de 20 y 30', ()=>{
       expect (suma(20,30)).toBe(50)
    });
 });
