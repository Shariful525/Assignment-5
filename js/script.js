function selectPlayer(playerId){
    const playerName = document.getElementById(playerId);
    const ul = document.getElementById('order-list');
    const li = document.createElement('li');
    li.innerText = playerName.innerText;
    ul.appendChild(li);

    if(ul.children.length <= 5){
        return playerName;
    }
    else{
        alert('You are select more than 5, It is not allowed to select more 5.');
        return false;
    }
}


document.getElementById('player-select-btn').addEventListener('click', function(){
   const firstPlayer = selectPlayer('lm-10');

})
document.getElementById('neymar-btn').addEventListener('click', function(){
   const secondPlayer = selectPlayer('neymar');

})
document.getElementById('mbappe-btn').addEventListener('click', function(){
   const thirdPlayer = selectPlayer('mbappe');

})
document.getElementById('ramos-btn').addEventListener('click', function(){
   const fourthPlayer = selectPlayer('ramos');

})
document.getElementById('dimaria-btn').addEventListener('click', function(){
   const fifthPlayer = selectPlayer('dimaria');

})
document.getElementById('paul-btn').addEventListener('click', function(){
   const sixthPlayer = selectPlayer('paul');

})
document.getElementById('dybala-btn').addEventListener('click', function(){
   const seventhPlayer = selectPlayer('dybala');

})
document.getElementById('ronaldo-btn').addEventListener('click', function(){
   const eighthPlayer = selectPlayer('ronaldo');

})
document.getElementById('halland-btn').addEventListener('click', function(){
   const thirdPlayer = selectPlayer('halland');

})

document.getElementById('claculate-btn').addEventListener('click', function(){
    const getUl = document.getElementById('order-list');
    const ulLength = getUl.children.length;
    
    

    const perPlayerCost = document.getElementById('player-cost-input');
    const perPlayerCostString = perPlayerCost.value;
    const singlePlayerCost = parseInt(perPlayerCostString);

    console.log(singlePlayerCost);
    perPlayerCost.value = '';
    
    const totalPlayerCost = singlePlayerCost * ulLength;

    const playerExpense = document.getElementById('player-expense'); 

    playerExpense.innerText = totalPlayerCost;

})

document.getElementById('calaculate-total-btn').addEventListener('click', function(){
    const playerExpense = document.getElementById('player-expense');
    const playerExpenseString = playerExpense.innerText;
    const NewPlayerExpense = parseInt(playerExpenseString);

    const managerPayment = document.getElementById('manager-cost');
    const managerPaymentString = managerPayment.value;
    const newManagerPayment = parseInt(managerPaymentString);
    managerPayment.value = '';

    const coachPayment = document.getElementById('coach-cost');
    const coachPaymentString = coachPayment.value;
    const newCoachPayment = parseInt(coachPaymentString);
    coachPayment.value = '';

    const total = newManagerPayment + newCoachPayment + NewPlayerExpense;

    const totalTeamExpense = document.getElementById('total-value');
    const totalTeamExpenseString = totalTeamExpense.innerText;
    const newTotalTeamExpense = parseInt(totalTeamExpenseString);
    totalTeamExpense.innerText = total;
})