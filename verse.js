const verse = (function(){

    const showVerse = function(verse,el){
        fetch(`https://bible-api.com/${verse}`,{
        mode: 'cors'
        }).then(result=>{
            return result.json()
        }).then(result=>{
            el.textContent = `${result.reference} ${result.text}`
        }).catch(err=>{
            Error("Didnt work: ",err)
            console.log("err");
        })
    }
    return {showVerse};
})()

export { verse }