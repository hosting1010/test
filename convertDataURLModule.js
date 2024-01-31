class convertDataURL{
    convertData(item,type){
        if(typeof type == "string"){
            const encoder = new TextEncoder()
            type+=";charset=UTF-8"
            const blob = new Blob([encoder.encode(item)],{type: type})
            const reeder = new FileReader()
            reeder.onload = function(){
                console.log(this.result);
            }
            reeder.readAsDataURL(blob)
        }
    }
}

const dataURL = new convertDataURL()
var getData = null
async function htmlData(){
    const fecthData = await fetch("./test.html")
    const response = await fecthData.text()
    const html = response
    dataURL.convertData(html,"text/html")
}
htmlData()