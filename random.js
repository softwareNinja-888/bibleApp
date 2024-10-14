
const random = (function(){

    const fecthRandom = (el)=>{
        console.log('l');
        fetch('https://bible-api.com/?random=verse',{
            mode: 'cors'
        }).then(result=>{
            return result.json()
        }).then(result=>{
            el.textContent = result.reference + " " + result.text
        })
    }

    return {fecthRandom}
})()


export {random}