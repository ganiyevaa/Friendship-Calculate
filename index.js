let ism1 = document.querySelector('#name1').value
let ism2 = document.querySelector('#name2').value
let natija

document.querySelector('#btn').addEventListener('click',function () {

    let tasodifiySon = Math.random() * 100
    let yahlitlangan = Math.floor(tasodifiySon) + 1

    if (yahlitlangan > 90){
        natija = ism1 + ' va ' + ism2 + "ning dostlik darajasi:" + yahlitlangan + "%, sizlar chin dostszlar"
    } else if (yahlitlangan > 50) {
        natija = ism1 + ' va ' + ism2 + "ning dostlik darajasi:" + yahlitlangan + "% sizlar norm"
    }

    document.querySelector('h2').innerHTML = natija
})