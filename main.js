let NameBuyer = document.getElementById('NameAndSurname')
console.log(NameBuyer)

let NamePassenger = document.getElementById('NamePassenger')

let Km = document.getElementById('HowmanyKm')

let Age = document.getElementById('Age')

let carriage = Math.floor(Math.random()*50)+1;

let Carriage = document.getElementById('Carriage')

let cp = Math.floor(Math.random()*100000)+1;
console.log(cp)

let CpCode = document.getElementById('CpCode')

function MakeTheTicket(){
    let ValueNameBuyer = NameBuyer.value;

    let ValueKm = Km.value;

    let ValueAge = Age.value;

    let priceKm = 0.21 * ValueKm 
    

    if('2'){
        let discount = priceKm * 0.2
        priceKm = priceKm - discount 
    }
    else if('3'){
        let discount = priceKm * 0.4
        priceKm = priceKm - discount 
    }
    

    priceKm = priceKm.toFixed(2)

    NamePassenger.innerHTML = `${ValueNameBuyer}`

    Carriage.innerHTML = `${carriage}`

    CpCode.innerHTML = `${cp}`

    document.getElementById('TicketPrice').innerHTML = `${priceKm} €`
}

function CancelTheTicket(){
    
    NameBuyer.value = '';
    
    NamePassenger.innerHTML = ''

    Age.value = '0';

    Km.value = '';

    carriage.value = '';

    Carriage.innerHTML = ``

    cp.value = '';

    CpCode.innerHTML = ``

    let priceKm = 0

    document.getElementById('TicketPrice').innerHTML = `${priceKm} €`

}