
var formulaire = document.querySelector('form')
/* let tabRecord = [] */
if (formulaire) {
    //console.log(formulaire);
    let record = []
    const btnSbmit = document.getElementById('btn__submit')
    btnSbmit.addEventListener('click', (e) => {
        e.preventDefault()
        let Produit = document.getElementById('prod').value
        let PrixUnit = document.getElementById('pu').value
        let Quantity = document.getElementById('qt').value
        let total = Number(PrixUnit) * Number(Quantity)
        let Error = document.getElementById('erreur')
        if (Produit == "" || PrixUnit == "" || PrixUnit == 0 || Quantity == "" || Quantity == 0) {
            Error.innerText = (' Veuillez remplir tous les champs.')
            Error.classList.add('active')
        } else {
            Error.classList.remove('active')
            record = JSON.parse(localStorage.getItem("local")) ?? []
            console.log(record);
            if (record.lenght == 0) {
                //console.log('entre');
                let registration = {
                    'Produit': Produit,
                    'PrixU': PrixUnit,
                    'Quantité': Quantity,
                    'Total': total
                }
                //console.log(registration);
                record.push(registration)
                localStorage.setItem('local', JSON.stringify(record))
            } else {
                let registration = {
                    'Produit': Produit,
                    'PrixU': PrixUnit,
                    'Quantité': Quantity,
                    'Total': total
                }
                record.push(registration)
                localStorage.setItem('local', JSON.stringify(record))
                console.log(record);
               /*  tabRecord.push(record)
                console.log(tabRecord) */
            }window.location.href = 'result.html'
        }

    })
}

let getLocal = (JSON.parse(localStorage.getItem('local')))
let tabList = document.getElementById('tab')
let total = 0
let entry = ``
if (getLocal && getLocal.length > 0) {
    getLocal.reverse().forEach((element, index) => {
        entry +=
            `<tr class="row">
                <td class="cell">${getLocal.length - index}</td>
                <td class="cell">${element.Produit}</td>
                <td class="cell">${element.PrixU}</td>
                <td class="cell">${element.Quantité}</td>
                <td class="cell">${element.Total}</td>
                <td class="cell">
                    <a href="#"><span class= "mdi mdi-pencil modify" title="Modifier" ><span></a>
                    <a href="#"><span class= "mdi mdi-delete delete" title="Supprimer" ><span></a>
                </td>
            </tr>
            `
        total += element.Total
    })
    tabList.innerHTML =
        `<thead>
        <tr>
            <th>N°</th>
            <th>Nom du produit</th>
            <th>Prix Unitaire</th>
            <th>Quantité</th>
            <th>Coût du stock</th>
            <th>Actions</th>
        </tr> 
    </thead>
    <tbody id="list__entry">
        ${entry}
        <tr class="row">
            <td class="cell" colspan=4>Total :</td>
            <td class="cell" colspan=2>${total} XOF</td>
        </tr>
    </tbody>`
}
let modify = document.querySelectorAll('.modify')
modify.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        let indexLine = index
        console.log(index);
        let registrationLine = getLocal[indexLine]
        /* console.log(registrationLine.Produit);  */
        window.location.href = `index.html`
        if(record){
            console.log(record);
        }
        let Produit = document.getElementById('prod')
        Produit.innerHTML = registrationLine.Produit
        let PrixUnit = document.getElementById('pu')
        PrixUnit.innerHTML = registrationLine.PrixU
        let Quantity = document.getElementById('qt')
        Quantity.innerHTML = registrationLine.Quantité

    })

})