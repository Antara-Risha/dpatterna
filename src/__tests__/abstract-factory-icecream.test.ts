import {ButterscotchConeCart,StrawberryStickCart,ChocoCupCart,ChocoStickCart, ButterscotchStickCart} from "../patterns/factory/abstract-factory-icecream";
import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider"
describe("Icecream Abstract Factory", () => {
    test('Strawberry Ice cream with stick',()=>{
       let expectation =getIcecream('Sweety Strawberry','Stick')
        let reality = new StrawberryStickCart()
        expect(expectation).toEqual(reality.getIcecream())

    })
    test('chocolate Ice cream with stick',()=>{
        let expectation =getIcecream('chocolate','Stick')
         let reality = new ChocoStickCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
     test('Butterscotch Ice cream with stick',()=>{
        let expectation =getIcecream('Butterscotch','Stick')
         let reality = new  ButterscotchStickCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
    test('Butterscotch Ice cream with cone',()=>{
       let expectation =getIcecream('Buttery Butterscotch','Cone')
        let reality = new ButterscotchConeCart()
        expect(expectation).toEqual(reality.getIcecream())

    })
    test('Pistacio Ice cream with cone',()=>{
        let expectation =getIcecream('Pistacio','Cone')
         let reality = new PistacioConeCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
     test('vanilla Ice cream with cone',()=>{
        let expectation =getIcecream('Buttery Butterscotch','Cone')
         let reality = new ButterscotchConeCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
    test('Choco Ice cream with cup',()=>{
        let expectation =getIcecream('Choco Blast','Cup')
        let reality = new ChocoCupCart()
        expect(expectation).toEqual(reality.getIcecream())
    })

})