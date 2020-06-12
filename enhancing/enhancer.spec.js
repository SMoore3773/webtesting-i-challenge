const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!
describe('enhance functions', ()=>{

    //repair test
    describe('test repair', ()=>{
        let item = {name:'item1', durability:95, enhancement:0}
        item = repair(item);

        it('returns an item with 100 durability',()=>{
            expect(item.durability).toBe(100)
        })
    })

    //success test
    describe('test succeed', ()=>{
        let item = {name:'item1', durability:95, enhancement:5}
        item = succeed(item);
        
        it('adds 1 to enhancement', ()=>{
            expect(item.enhancement).toBe(6)
        })

        it('does not add past 20 enhancement',()=>{
            item={name:'item1', durability:95, enhancement:20}
            item= succeed(item)
            expect(item.enhancement).toBe(20)
        })
    })

    //fail test
    describe('test fail',()=>{
        const highItem = {name:'highItem', durability:90, enhancement:18};
        const midItem = {name:'midItem', durability:90, enhancement:15};
        const lowItem = {name:'lowItem', durability:90, enhancement:5};
        const deadItem = {name:'deadItem', durability:0, enhancement:5}
        let failHigh = fail(highItem);
        let failMid = fail(midItem);
        let failLow = fail(lowItem);
        let failDead = fail(deadItem);

        it('drops durability by 5 if item.enhancement <15',()=>{
            expect(failLow.durability).toBe(85)
        })

        it('drops durability by 10 if item.enhancement >=15', ()=>{
            expect(failMid.durability).toBe(80);
            expect(failHigh.durability).toBe(80);
        })

        it('does not drop durability below 0', ()=>{
            expect(failDead.durability).toBe(0);
        })

        it('drops enhancement level by 1 if item.enhancement >=16', ()=>{
            expect(failHigh.enhancement).toBe(17);
        })

        it('does not drop enhancement level if item.enhancement <16',()=>{
            expect(failMid.enhancement).toBe(15)
        })
    })

})