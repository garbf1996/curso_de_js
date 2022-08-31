
test ('probar que el array tenga 3 elementos', ()=>{
    expect (carrito).toHaveLength(3);
 });


 const carrito = ['producto1','producto2','producto3'];


describe ('Testing al carrito de compra',()=>{
    test ('probar que el array tenga 3 elementos', ()=>{
       expect (carrito).toHaveLength(3);
    });

    test ('probar que el carrito no este vacio', ()=>{
        expect (carrito).not.toHaveLength(0);
     });

    
})




const cliente = {
    nombre: 'garber',
    balance: 500
 }
 
 describe ('Testing al cliente', ()=>{
    test ('El cliente primio',()=>{
       expect(cliente.balance).toBeGreaterThan(400)
    });
 
    test ('Es garber',()=>{
       expect(cliente.nombre).toBe('garber');
    });
  test('No es otro cliente',()=>{
    expect(cliente.nombre).not.toBe('pedro');
  });
 
  test('No tiene 500',()=>{
    expect(cliente.nombre).not.toBe(500);
  }); 
 
 
 });


 function suma (a,b){
    return a +b;
    }
    
    function resta (a,b){
       return a - b;
       }
    
       describe('Testing a las funciones de suma y reta',()=>{
          test ('Suma de 20 y 30', ()=>{
             expect (suma(20,30)).toBe(50)
          });
    
          test ('Resta de 20 y 30', ()=>{
             expect (resta(10,5)).toBe(5)
          });
    
    
          test ('Que la suma 10 y 10, no sea 10', ()=>{
             expect (suma(10,10,10)).not.toBe(10)
          })
    
       });


    
     