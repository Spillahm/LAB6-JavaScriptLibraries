
let bridgespansData= [ {name: "Verrazano-Narrows Bridge", span: 1298 },  { name: "Golden Gate Bridge", span: 1280 },  { name: "Mackinac Bridge", span: 1158 },  { name: "George Washington Bridge", span: 1067 },  { name: "Tacoma Narrows Bridge", span: 853 }]

//let canvas=document.querySelector('#bridgeChart')
//let context=canvas.getContext('2d')

let context = document.getElementById('bridgeChart').getContext("2d");
let chart=new Chart(context,{
///let bridgeChart = new chart(context, {
    type: "bar",
    data: {
        labels: bridgespansData.map(item => item.name),
        datasets: [{
            label: "span",
            data: bridgespansData.map(item => item.span),
            backgroundColor: ["blue", "yellow", "red", "orange","green"],
        }]
    },
    options:{
        title:{
            display:true,
            text:'largest bridges in the usa by span'
        },
        scales:{
            yAxes:[{
                ticks: {
                    beginsAtZero: true,
                }
            }]
        }
    }
    }

)

