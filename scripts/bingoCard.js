//JQuery function that runs when the html is up and ready.
$(document).ready(function(){

    //Object bingo the keys are the letters for 'BINGO',
    //and the values are the numbers as a string in an array.
    let bingo = {
        'B': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'],
        'I': ['16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        'N': ['31','32','33','34','35','36','37','38','39','40','41','42','43','44','45'],
        'G': ['46','47','48','49','50','51','52','53','54','56','57','58','59','60'],
        'O': ['61','62','63','64','65','66','67','68','69','70','71','72','73','74','75']
    };

    //The for-in loop is iterating thru the object dynamically creating the bingo card.
    //Using JQuery to create a td html element with the key from the bingo object.
    //Then, adding class col and title to the td element for bootstrap and css.
    //Finally, appending title element to tr with the id cardTitle.
    for (var i in bingo) {
        let title = $('<td>').html(i);
        $(title).attr('class', 'col title');
        $('#cardTitle').append(title);

        //The for loop is dynamically creating the bingo numbers for the bingo card.
        //First, get a random number within the range of the array length as index.
        //Use the random index to splice the value into temp.
        //Using JQuery to create td element with temp.
        //Variable row is a string that will help target tr element.
        //Add attributes to the html element using JQuery.
        //Append html to tr using JQuery.
        for(var j = 1; j < 6; j++){
            let bingoNum;
            let index = Math.floor(Math.random() * bingo[i].length);
            let temp = bingo[i].splice(index,1);
            let row = '#row' + j.toString();
            if(i === 'N' && j=== 3){ bingoNum = $('<td>').html('\u2605') }
            else{ bingoNum = $('<td>').html(temp) }
            $(bingoNum).attr('class', 'col num');
            $(bingoNum).attr('data-alt-class', 'col num dot');
            $(row).append(bingoNum);
        }
    }

    //Using JQuery .on() to create a click event on all classes that are num.
    //Create temp variables for the clicked elements attributes.
    //Swap and sets the clicked elements attributes.
    //When clicking on a number it will mark and unmark the bingo square.
    $(document).on('click', '.num', function(){
        let temp1 = $(this).attr('data-alt-class');
        let temp2 = $(this).attr('class');
        $(this).attr('class', temp1);
        $(this).attr('data-alt-class', temp2);
    })
})