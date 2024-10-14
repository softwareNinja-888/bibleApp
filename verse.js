// import { result } from "lodash";


const verse = (function(){

    const showVerse = function(verse,el){
        console.log('ji');
        fetch(`https://bible-api.com/${verse}`,{
        mode: 'cors'
        }).then(result=>{
            return result.json()
        }).then(result=>{
            el.textContent = result.reference + " " + result.text
            console.log(result.reference + " " + result.text);
        }).catch(err=>{
            Error("Didnt work: ",err)
        })
    }

    return {showVerse};
})()

export { verse }