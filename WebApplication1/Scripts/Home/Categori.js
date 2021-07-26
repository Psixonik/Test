// Получение всех категорий
function GetCategory() {
    $("#tableBlock").css('display', 'none');
    $("#catBlock").css('display', 'block');
    $("#typeBlock").css('display', 'none');
    $("#addBlock").css('display', 'none');

    $.ajax({
        url: '/api/Category/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            WriteCategory(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });

}

// вывод полученных категорий на экран
function WriteCategory(data) {
    var strResult = "<table><caption>Категория реклам</caption><th>ID</th><th>Категория</th>";
    $.each(data, function (index, data) {
        strResult += "<tr><td>" + data.Id + "</td><td> " + data.Category + "</td><td><a id='delItem' data-item='" + data.Id + "' onclick='DeleteItemCat(this);' >Удалить</a></td></tr>";
    });
    strResult += "</table>";
    strResult += "<hr><input type=\"text\" id=\"newCat\" name=\"newCat\"/>" +
                "<button id =\"addCat\" onclick = \"AddCategory()\" >Добавить категорию</button >"
    $("#catBlock").html(strResult);
}

//добавление категории реклам
function SeeAddCategory()
{
    $("#tableBlock").css('display', 'none');
    $("#editBlock").css('display', 'none');
    $("#addBlock").css('display', 'none');
    $("#catBlock").css('display', 'none');
    $("#addCategori").css('display', 'block');
}
function AddCategory() {
    $("#tableBlock").css('display', 'none');
    $("#editBlock").css('display', 'none');
    $("#addBlock").css('display', 'none');
    $("#catBlock").css('display', 'none');
    $("#addCategori").css('display', 'block');

    // получаем значения 
    var newCat = {
        Category: $('#newCat').val(),
    };

    $.ajax({
        url: '/api/Category/',
        type: 'POST',
        data: JSON.stringify(newCat),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            GetCategory();
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

// обработчик удаления
function DeleteItemCat(el) {

    // получаем id удаляемого объекта
    var id = $(el).attr('data-item');
    DeleteCat(id);
}
// Удаление категории
function DeleteCat(id) {

    $.ajax({
        url: '/api/Category/' + id,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            GetCategory();
        },
        error: function (x, y, z) {
            //alert(x + '\n' + y + '\n' + z);
            alert("Присутствует реклама данной категории");
        }
    });
}
