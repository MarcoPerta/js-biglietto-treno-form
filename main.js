
function MakeTheTicket(){
    let NameBuyer = document.getElementById('NameAndSurname').value;
    console.log(NameBuyer)
    let Km = document.getElementById('HowmanyKm').value;
    console.log(Km)
    let Age = document.getElementById('Age').value;
    console.log(Age)
    let carriage = Math.floor(Math.random()*50)+1;
    let cp = Math.floor(Math.random()*100000)+1;

    let priceKm = 0.21 * Km 
    console.log(priceKm)

    if('2'){
        let discount = priceKm * 0.2
        priceKm = priceKm - discount 
    console.log(priceKm)}
    else if('3'){
        let discount = priceKm * 0.4
        priceKm = priceKm - discount 
    }
    console.log(priceKm)

    priceKm = priceKm.toFixed(2)

    document.getElementById('NamePassenger').innerHTML = `${NameBuyer}`

    document.getElementById('Carriage').innerHTML = `${carriage}
    `
    
    document.getElementById('CpCode').innerHTML = `${cp}`

    document.getElementById('TicketPrice').innerHTML = `${priceKm} €`
}