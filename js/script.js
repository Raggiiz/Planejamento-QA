
var i = 0;
var i2 = 0;

function test(resp) {
    if (resp === 'sim') {
        i++;
    }

    i2++;

    if (i2 === 1) {
        $('.1').addClass('dnone');
        $('.2').removeClass('dnone');
    } else if (i2 === 2) {
        $('.2').addClass('dnone');
        $('.3').removeClass('dnone');
    } else if (i2 === 3) {
        $('.3').addClass('dnone');
        $('.4').removeClass('dnone');
    } else if (i2 === 4) {
        $('.4').addClass('dnone');
        $('.5').removeClass('dnone');
    } else if (i2 === 5) {
        $('.5').addClass('dnone');
        $('.6').removeClass('dnone');
    } else if (i2 === 6) {
        $('.6').addClass('dnone');
        $('.7').removeClass('dnone');
    } else if (i2 === 7) {
        $('.7').addClass('dnone');
        $('.8').removeClass('dnone');
    } else if (i2 === 8) {
        $('.8').addClass('dnone');
        $('.9').removeClass('dnone');
    } else if (i2 === 9) {
        $('.9').addClass('dnone');
        $('.10').removeClass('dnone');
    } else if (i2 === 10) {
        $('.10').addClass('dnone');
        $('.11').removeClass('dnone');
    } else if (i2 === 11) {
        $('.11').addClass('dnone');
        $('.12').removeClass('dnone');
    } else if (i2 === 12) {
        $('.12').addClass('dnone');
        $('.resultado').html('A média dos artefatos é: ' + parseFloat(i / 12 * 100).toFixed(1) + '%');
        $('.resultado').removeClass('dnone');
    }

}