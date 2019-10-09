// Retrieve
$(document).ready(function(){

    $.get("http://localhost:3000/items", function(data) { 

        var items_data = '';
        $.each(data,function(key,value){

            items_data += '<tr>';
            items_data += '<td>'+value.itemdesc+'</td>';
            items_data += '<td>'+value.itemimg+'</td>';
            items_data += '</tr>';

        });

        $('#items_table').append(items_data);

    });

});