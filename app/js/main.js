/**
 * Created by henrikholmlund on 2016-02-04.
 */

var doughnutData = [
    {
        value: 21,
        color: "#BE4557",
        highlight: "#cb6b79",
        label: "iOS"
    },
    {
        value: 48,
        color: "#3E8F92",
        highlight: "#4fb1b4",
        label: "Mac"
    },

    {
        value: 32,
        color: "#5AAFE4",
        highlight: "#86c4eb",
        label: "Win"
    },
    {
        value: 9,
        color: "#E19C49",
        highlight: "#e8b475",
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


