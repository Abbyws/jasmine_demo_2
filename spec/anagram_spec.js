const anagram=require('../lib/anagram')
describe("anagram",()=>{
    it("should return [] when input empty string", ()=> {
        expect(anagram()).toEqual([])
    })
    it("should return [a] when input is a", ()=> {
        expect(anagram("a")).toEqual(["a"])
    })
    it("should return [ab],[ba] when input is ab", ()=> {
        expect(anagram("ab")).toEqual(["ab","ba"])
    })
    it("should return [abc],[acb],[bca],[bac],[cba],[cab] when input is abc", ()=> {
        expect(anagram("abc")).toEqual(["abc","acb","bca","bac","cba","cab"])
    })
    // it("should return [abcd],[abdc],[acbd],[acdb],[adbc],[adcb],[bacd],[badc],[bcad],[bcda],[bdac],[bdca],[cabd],[cadb],[cbad],[cbda],[cdab],[cdba],[dabc],[dacb],[dbac],[dbca],[dcab],[dcba] when input is ab", ()=> {
    //     expect(anagram("abcd")).toEqual(["abcd"],["abdc"],["acbd"],["acdb"],["adbc"],["adcb"],["bacd"],["badc"],["bcad"],["bcda"],["bdac"],["bdca"],["cabd"],["cadb"],["cbad"],["cbda"],["cdab"],["cdba"],["dabc"],["dacb"],["dbac"],["dbca"],["dcab"],["dcba"])
    // })
})