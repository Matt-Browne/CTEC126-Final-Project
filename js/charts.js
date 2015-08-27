$(function () {
    // Set up the chart
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'column',
            margin: 75,
            backgroundColor: '#ECE8E8', 
            options3d: {
                enabled: true,
                alpha: 20,
                beta: 20,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'Could you benefit from a new muffler?',
            style: {
                color: '#059D37',
                fontSize: '2em'
            }
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                'Mfg between 1980-1985',
                'Mfg between 1986-1990',
                'Mfg between 1991-1995',
                'Mfg between 1996-2000',
            ],
            crosshair: true
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Cars benefiting from replacement'
            }
        },
        series: [{
            name: 'Percent',
            data: [45, 72, 49, 11]
        }]
    });

    // function showValues() {
    //     $('#R0-value').html(chart.options.chart.options3d.alpha);
    //     $('#R1-value').html(chart.options.chart.options3d.beta);
    // }

    // // Activate the sliders
    // $('#R0').on('change', function () {
    //     chart.options.chart.options3d.alpha = this.value;
    //     showValues();
    //     chart.redraw(false);
    // });
    // $('#R1').on('change', function () {
    //     chart.options.chart.options3d.beta = this.value;
    //     showValues();
    //     chart.redraw(false);
    // });

    // showValues();
});