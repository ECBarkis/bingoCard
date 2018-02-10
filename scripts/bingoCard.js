$(document).ready(function(){
    let bingo = {
        'B': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'],
        'I': ['16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        'N': ['31','32','33','34','35','36','37','38','39','40','41','42','43','44','45'],
        'G': ['46','47','48','49','50','51','52','53','54','56','57','58','59','60'],
        'O': ['61','62','63','64','65','66','67','68','69','70','71','72','73','74','75']
    };
    let count = 0;
    let element = $('<div>').attr('class', 'container');
    let row = '';
    let alphaNumeric;
    let index;
    let temp;
    cardLetters = function(letter, column){
        element = $('<div>').attr('class', 'col-sm-1 col-md-1 col-lg-1');
        $(element).attr('id', column);
        $('#mainRow').append(element);
        element = $('<div>').attr('class', 'row title');
        alphaNumeric = $('<h2>').html(letter);
        $(element).append(alphaNumeric);
        $('#' + column).append(element);
    };
    cardNumbers = function(letter, column){
        element = $('<div>').attr('class', 'row num');
        index = Math.floor(Math.random() * bingo[letter].length);
        temp = bingo[letter].splice(index,1);
        alphaNumeric = $('<h2>').html(temp);
        $(alphaNumeric).attr('class', 'row num');
        $(alphaNumeric).attr('data-alt-class', 'row num dot');
        $(element).append(alphaNumeric);
        $('#' + column).append(element);
    };
    $('body').append(element);
    element = $('<div>').attr('class', 'row justify-content-md-center');
    $(element).attr('id', 'mainRow');
    $('.container').append(element);
    for(let i = 0; i < 6; i++){
        if(count === 0 && i === 0){ cardLetters('B', 'col1') }
        else if( count === 0){ cardNumbers('B', 'col1') }
        if(count === 1 && i === 0){ cardLetters('I', 'col2') }
        else if(count === 1){ cardNumbers('I', 'col2') }
        if(count === 2 && i === 0){ cardLetters('N', 'col3') }
        else if(count === 2){ cardNumbers('N', 'col3') }
        if(count === 3 && i === 0){ cardLetters('G', 'col4') }
        else if(count === 3){ cardNumbers('G', 'col4')}
        if(count === 4 && i === 0){ cardLetters('O', 'col5') }
        else if(count === 4){ cardNumbers('O', 'col5')}
        if(i === 5 && count < 5){
            count++;
            i = -1
        }
    }
    $(document).on('tap', 'h2', function(){
        let temp1 = $(this).attr('data-alt-class');
        let temp2 = $(this).attr('class');
        $(this).attr('class', temp1);
        $(this).attr('data-alt-class', temp2);
    })
})