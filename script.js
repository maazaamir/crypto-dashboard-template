const ctx = document.getElementById('chart');

new Chart(ctx, {

type:'line',

data:{
labels:['Jan','Feb','Mar','Apr','May','Jun','Jul'],
datasets:[{

label:'Bitcoin Price',

data:[35000,38000,42000,40000,45000,47000,42500],

borderColor:'#22c55e',

backgroundColor:'rgba(34,197,94,0.2)',

fill:true,

tension:0.4

}]
},

options:{

plugins:{
legend:{
labels:{
color:'white'
}
}
},

scales:{
x:{
ticks:{color:'white'}
},
y:{
ticks:{color:'white'}
}
}

}

});