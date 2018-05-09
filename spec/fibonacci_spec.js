const fibonacci = require("../lib/fibonacci")

describe("fibonacci", ()=> {
    it("should return false when input -1", ()=> {
        expect(fibonacci(-1)).toBe(false)
    })
    it("should return false when input 0", ()=> {
        expect(fibonacci(0)).toBe(false)
    })
    it("should return 1 when input 1", ()=> {
        expect(fibonacci(1)).toBe(1)
    })
    it("should return 1 when input 2", ()=> {
        expect(fibonacci(2)).toBe(1)
    })
    it("should return 2 when input 3", ()=> {
        expect(fibonacci(3)).toBe(2)
    })
    it("should return 3 when input 4", ()=> {
        expect(fibonacci(4)).toBe(3)
    })
    it("should return 5 when input 5", ()=> {
        expect(fibonacci(5)).toBe(5)
    })
    it("should return 8 when input 6", ()=> {
        expect(fibonacci(6)).toBe(8)
    })
    it("should return 13 when input 7", ()=> {
        expect(fibonacci(7)).toBe(13)
    })
    it("should return 21 when input 8", ()=> {
        expect(fibonacci(8)).toBe(21)
    })
    
    
})