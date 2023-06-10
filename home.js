/* let Recup = localStorage.getItem('Donnee', JSON.stringify())
let convert = JSON.parse(Recup) */
let TabStock = [];
function inserer(e) {
    e.preventDefault();
    /* let TabStock = []; */
    let Produit = document.getElementById('prod').value
    let PrixUnit = document.getElementById('pu').value
    let Quantity = document.getElementById('qt').value
    let total = Number(PrixUnit) * Number(Quantity)
    let Error = document.getElementById('erreur')

    if (Produit == "" || PrixUnit == "" || PrixUnit == 0 || Quantity == "" || Quantity == 0) {
        Error.innerText = (' Veuillez remplir tous les champs.')
        Error.classList.add('active')
    } else {
        Error.innerText = ''
        Error.classList.remove('active')

        const enregistrement = {
            /* 'Numero':0, */
            'Produit': Produit,
            'PrixUnitaire': PrixUnit,
            'Quantité': Quantity,
            'CoûtStock': total,
        }

        console.log(enregistrement)
        let tableau = document.getElementById("tle");

        function AddToTable() {

            let ligne = tableau.insertRow(-1)

            let colonne5 = ligne.insertCell(0);
            colonne5.innerText = enregistrement.CoûtStock;

            let colonne4 = ligne.insertCell(0);
            colonne4.innerText = enregistrement.Quantité;

            let colonne3 = ligne.insertCell(0);
            colonne3.innerText = enregistrement.PrixUnitaire;

            let colonne2 = ligne.insertCell(0);
            colonne2.innerText = enregistrement.Produit;

            /*let colonne1=ligne.insertCell(0)
            colonne1.innerText += enregistrement.Numero  ; */
            TabStock.push(enregistrement)

            localStorage.setItem('Donnee', JSON.stringify(TabStock))

            /* let Recup = localStorage.getItem('Donnee', JSON.stringify(TabStock))
            console.log(Recup)

            let convert = JSON.parse(Recup)
            console.log(convert) */
        }
    }
    return AddToTable();
}
let Recup = localStorage.getItem('Donnee', JSON.stringify())
let convert = JSON.parse(Recup)
let Recap = document.getElementById('tl');
/* Recap = (convert) */
console.log(convert)

let tableau = document.getElementById("bien");

let ligne = tableau.insertRow(-1)

let colonne5 = ligne.insertCell(0);
colonne5.innerText = convert[0].CoûtStock;

let colonne4 = ligne.insertCell(0);
colonne4.innerText = convert[0].Quantité;

let colonne3 = ligne.insertCell(0);
colonne3.innerText = convert[0].PrixUnitaire;

let colonne2 = ligne.insertCell(0);
colonne2.innerText = convert[0].Produit;


/* let second= localStorage.setItem('Donnee', JSON.stringify(tableau))
console.log(second)
 */
