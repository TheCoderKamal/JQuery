$(document).ready(function(){

    // HIDE DURING OPEN THE WEBSITE
    $(".fa-bars").hide();
    $(".sidebar5").hide();
    $(".second-div-2").hide();
    $(".slide").hide();
    $(".profile_card").hide();


    // HOVER EFFECT TO THE ICONS
    $(".circle1").mouseenter(function(){
        $(".fa-bars-staggered").css("color", "black");
    })
    $(".circle2").mouseenter(function(){
        $(".fa-magnifying-glass").css("color", "black");
    })
    $(".circle3").mouseenter(function(){
        $(".fa-bars").css("color", "black");
    })
    $(".circle5").mouseenter(function(){
        $(".fa-bell").css("color", "black");
    })
    $(".circle6").mouseenter(function(){
        $(".fa-gear").css("color", "black");
    })
    $(".b1").mouseenter(function () {
        $(this).find(".fa-solid").css("color", "black");
    })
    $(".b1").mouseenter(function () {
        $(this).find(".fa-brands").css("color", "black");
    })

    
    $(".circle1").mouseleave(function(){
        $(".fa-bars-staggered").css("color", "#6B7280");
    })
    $(".circle2").mouseleave(function(){
        $(".fa-magnifying-glass").css("color", "#6B7280");
    })
    $(".circle3").mouseleave(function(){
        $(".fa-bars").css("color", "#6B7280");
    })
    $(".circle5").mouseleave(function(){
        $(".fa-bell").css("color", "#6B7280");
    })
    $(".circle6").mouseleave(function(){
        $(".fa-gear").css("color", "#6B7280");
    })
    $(".b1").mouseleave(function () {
        $(this).find(".fa-solid").css("color", "#6B7280");
    })
    $(".b1").mouseleave(function () {
        $(this).find(".fa-brands").css("color", "#6B7280");
    })
    


    // LOGIC 
    $(".circle1").click(function () {       
        $(".fa-bars").show();
        $(".sidebar5").fadeIn(500);
        $(".second-div-2").show();
        $(".sidebar20").fadeOut(0);
        $(".fa-bars-staggered").hide();             
        $(".second-div-1").hide();  
    })   

    $(".circle3").click(function(){
        $(".fa-bars-staggered").show();
        $(".sidebar20").fadeIn(500);
        $(".second-div-1").show();
        $(".fa-bars").hide();
        $(".sidebar5").fadeOut(0);
        $(".second-div-2").hide();
    })

    $(".profile").click(function () {
        $(".profile_card").slideToggle();
    })

    $(".a1").click(function () {
        $(this).next().slideToggle();
        $(this).find(".arrow").toggleClass("rotate");
    })   

    $(".b1").mouseenter(function () {
        $(this).find(".fa-solid").css("transform", "translate(1px)");
        $(this).find(".fa-brands").css("transform", "translate(1px)");
    });

    $(".a1").mouseenter(function () {
        $(this).css("transform", "scale(1.05)");
        $(this).find(".fa-solid").css("color", "black");
        $(this).find(".fa-brands").css("color", "black");
        $(this).find(".z").css("color", "black");
        $(this).css("transition-duration", ".3s");
    })
    
    $(".a1").mouseleave(function () {
        $(this).find(".fa-solid").css("color", "#6B7280");
        $(this).find(".fa-brands").css("color", "#6B7280");
        $(this).find(".z").css("color", "#6B7280");
        $(this).css("transform", "scale(1)");
    }) 

    $(".s").mouseenter(function () {
        $(this).css("transform", "scale(1.05)");
        $(this).css("transition-duration", ".3s");
    })
    
    $(".s").mouseleave(function () {
        $(this).css("transform", "scale(1)");
    }) 

    $(".x1").mouseenter(function () {
        $(this).css("transform", "scale(1.05)");
        $(this).find(".fa-solid").css("color", "black");
        $(this).find(".fa-brands").css("color", "black");
        $(this).find(".z").css("color", "black");
        $(this).css("transition-duration", ".3s");
    })
    
    $(".x1").mouseleave(function () {
        $(this).find(".fa-solid").css("color", "#6B7280");
        $(this).find(".fa-brands").css("color", "#6B7280");
        $(this).find(".z").css("color", "#6B7280");
        $(this).css("transform", "scale(1)");
    }) 


    var options = {
        series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
        chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
        format: 'dd/MM/yy HH:mm'
        },
    },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    var options = {
        series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
        chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
        format: 'dd/MM/yy HH:mm'
        },
    },
    };

    var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
    chart1.render();





var options = {
        series: [44, 55, 67, 83],
        chart: {
        height: 350,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
        dataLabels: {
            name: {
            fontSize: '22px',
            },
            value: {
            fontSize: '16px',
            },
            total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
            }
            }
        }
        }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };

    var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
    chart3.render();

var options = {
        series: [44, 55, 67, 83],
        chart: {
        height: 350,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
        dataLabels: {
            name: {
            fontSize: '22px',
            },
            value: {
            fontSize: '16px',
            },
            total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
            }
            }
        }
        }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };

    var chart4 = new ApexCharts(document.querySelector("#chart4"), options);
    chart4.render();
    
})

