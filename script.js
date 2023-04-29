let sheetId = '1qQbqvW611HnFWNIhQv2Hjwhy4WPoNLJjaiOadj1EZ78'
let key = 'AIzaSyA2toE5jI2vvLt1xktPwbYKOYObjZFGgB8'
let listName = 'марго'

let url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${listName}?key=${key}`

let contentBlock = document.querySelector('.content')

async function GetData(){
    let data = await fetch(url)
    let json = await data.json()
    //console.log(json)
    let convertedData = ConvertToObject(json.values)
    console.log(convertedData);
    convertedData.forEach(function(element){
        createBlock(element)
    })
}

function ConvertToObject(jsonData){
    let formatedList = []

    for(let i = 1; i < jsonData.length; i++){
        let row = jsonData[i]
        let object = {}
        for(let j = 0; j < row.length; j++){
            object[jsonData[0][j]] = row[j]
        }
        //console.log(object)
        formatedList.push(object)
    }
    return formatedList
}


function createBlock(item) {
    let block = `<div class="card">
                    <div class="top">
                        <div class="img" style="background-image: url(${item.картинка})">
                            <img src="" alt="...">
                        </div>
                    </div>
                    <div class="bottom">
                        <h1 c class="title">${item.Название}</h1>
                        <p class="description">${item.цена}</p>
                        <p class="price">${item.оценка}</p>
                    </div>
                </div>`
                contentBlock.innerHTML += block
}

GetData()

function dayNightTheme(){
    let date = new Date()
    let hour = date.getHours()
    if (hour >= 7 && hour < 19) {
       console.log('Day')
    } else {
        console.log('Night')
    }
}
