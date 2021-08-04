import {ButterscotchConeCart,StrawberryStickCart,ChocoCupCart,VanillaStickCart,MangoStickCart} from "../patterns/factory/abstract-factory-icecream";
import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider"
describe("Icecream Abstract Factory", () => {
    test('Strawberry Ice cream with stick',()=>{
       let expectation =getIcecream('Sweety Strawberry','Stick')
        let reality = new StrawberryStickCart()
        expect(expectation).toEqual(reality.getIcecream())

    })
    test('Vanilla Ice cream with stick',()=>{
        let expectation =getIcecream('Sweety Vanilla','Stick')
         let reality = new VanillaStickCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
     test('Mango Ice cream with stick',()=>{
        let expectation =getIcecream('Mango','Stick')
         let reality = new MangoStickCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
    test('Butterscotch Ice cream with cone',()=>{
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