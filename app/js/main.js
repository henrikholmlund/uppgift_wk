/**
 * Created by henrikholmlund on 2016-02-04.
 */

var doughnutData = [
    {
        value: 21,
        color: "#e64c65",
        highlight: "#ec798c",
        label: "iOS"
    },
    {
        value: 48,
        color: "#11a8ab",
        highlight: "#16d6d9",
        label: "Mac"
    },

    {
        value: 32,
        color: "#4fc4f6",
        highlight: "#80d4f8",
        label: "Win"
    },
    {
        value: 9,
        color: "#fcb150",
        highlight: "#fdc782",
        label: "Linux"
    }
];

window.onload = function(){
    var ctx = document.getElementById("chart-area").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
        responsive : true,
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : false,
        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout : 65

    });
};


