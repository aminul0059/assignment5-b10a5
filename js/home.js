// noakhali flood

document.getElementById('donate-btn').addEventListener('click', function () {
    const donateAmount = getInputFieldById('input-field')
    const currentAmount = getTextFieldById('current-amount')

    const remainingAmount = getTextFieldById('remaining-amount')

    if (isNaN(donateAmount) || donateAmount <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    const newAmount = donateAmount + currentAmount

    if(donateAmount<=remainingAmount){
       
        const newRemainingAmount = remainingAmount - donateAmount

    document.getElementById('current-amount').innerText = newAmount

    document.getElementById('input-field').value = ''

    document.getElementById('remaining-amount').innerText = newRemainingAmount

    alert(`Your money added to the fund`)
    
        }else{
            alert('You have Enterd a wrong amount')
        }

   

    const p = document.createElement('p');
    p.innerText = `${donateAmount} Taka Donated for flood in Noakhali`;
    p.classList.add('text-xl','font-bold')

    document.getElementById('donation-history').appendChild(p)

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const donationEntry = `Donation made on ${date} at ${time} (standard time Bangladesh)`;

    const historyList = document.getElementById("donation-history");
    const listItem = document.createElement("p");
    listItem.textContent = donationEntry;
    historyList.appendChild(listItem);


})

// feni flood
document.getElementById('donate-btn-feni').addEventListener('click', function () {
    const donateAmount = getInputFieldById('input-field-feni')
    const currentAmount = getTextFieldById('current-amount-feni')

    const remainingAmount = getTextFieldById('remaining-amount')

    if (isNaN(donateAmount) || donateAmount <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    const newAmount = donateAmount + currentAmount

    if(donateAmount<=remainingAmount){
       
    const newRemainingAmount = remainingAmount -  donateAmount

    document.getElementById('current-amount-feni').innerText = newAmount

    document.getElementById('input-field-feni').value = ''

    document.getElementById('remaining-amount').innerText = newRemainingAmount

    alert(`Your money added to the fund`)

    }else{
        alert('You have Enterd a wrong amount')
    }




    const p = document.createElement('p');
    p.innerText = `${donateAmount} Taka Donated for flood in Feni`;
    p.classList.add('text-2xl','font-bold')

    document.getElementById('donation-history').appendChild(p)

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const donationEntry = `Donation made on ${date} at ${time} (standard time Bangladesh)`;

    const historyList = document.getElementById("donation-history");
    const listItem = document.createElement("p");
    listItem.textContent = donationEntry;
    historyList.appendChild(listItem);


})

//Quota Aid
document.getElementById('donate-btn-quota').addEventListener('click', function () {
    const donateAmount = getInputFieldById('input-field-quota')
    const currentAmount = getTextFieldById('current-amount-quota')

    const remainingAmount = getTextFieldById('remaining-amount')

    if (isNaN(donateAmount) || donateAmount <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    const newAmount = donateAmount + currentAmount
    if(donateAmount<=remainingAmount){
        const newRemainingAmount = remainingAmount -  donateAmount

        document.getElementById('current-amount-quota').innerText = newAmount
    
        document.getElementById('input-field-quota').value = ''
    
        document.getElementById('remaining-amount').innerText = newRemainingAmount
    
        alert(`Your money added to the fund`)

    }else{
        alert('You have Enterd a wrong amount')
    }

   

    const p = document.createElement('p');
    p.innerText = `${donateAmount} Taka Donated for Aid for Injured in the Quota Movement,Bangladesh`;
    p.classList.add('text-xl','font-bold')

    document.getElementById('donation-history').appendChild(p)

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const donationEntry = `Date: ${date} at ${time} (standard time Bangladesh)`;

    const historyList = document.getElementById("donation-history");
    const listItem = document.createElement("p");
    listItem.textContent = donationEntry;
    historyList.appendChild(listItem);


})

