// Получение всех реклам по ajax-запросу
function GetAllAd()
{
    $("#tableBlock").css('display', 'block');
    $("#catBlock").css('display', 'none');
    $("#typeBlock").css('display', 'none');
    $("#addBlock").css('display', 'none');

    $.ajax({
        url: '/api/values/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            ShowAllAd(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

//показать блок добавления рекламы
function SeeAdAdd() {
    $("#tableBlock").css('display', 'none');
    $("#editBlock").css('display', 'none');
    $("#addBlock").css('display', 'block');
    $("#catBlock").css('display', 'none');
    $("#typeBlock").css('display', 'none');

    $.ajax({
        url: '/api/AllTypeAndCotegori/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            ShowAdd(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });

}
// Добавление новой рекламы
function AddAd() {

    // получаем значения для добавляемой рекламы
    var ad = {
        AdTypeId: $('#addType').val(),
        CategoryId: $('#addCategori').val(),
        Cost: $('#addCost').val(),
        Content: $('#addContent').val()
    };
    if (ad.Content == "") {
        alert("Заполните все поля");
    }
    else {
        $.ajax({
            url: '/api/values',
            type: 'POST',
            data: JSON.stringify(ad),
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                GetAllAd();
            },
            error: function (x, y, z) {
                alert(x + '\n' + y + '\n' + z);
            }
        });
    }
}

// обработчик удаления
function DeleteItem(el) {

    // получаем id удаляемого объекта
    var id = $(el).attr('data-item');
    DeleteAd(id);
}
// Удаление рекламы
function DeleteAd(id) {

    $.ajax({
        url: '/api/values/' + id,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            GetAllAd();
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}
//показать все рекламы
function ShowAllAd(item)
{
    var strResult = "<table><caption>Архив реклам</caption><th>ID</th><th>Тип рекламы</th><th>Категория</th><th>Стоимость</th><th>Контент</th>";
    $.each(item, function (index, item) {
        strResult += "<tr><td id=\"type\">" + item.Id + "</td><td> " + item.AdType + "</td><td>" +
            item.Category + "</td><td>" + item.Cost + "</td><td class=\"col\">" + item.Content +
            "</td><td><a id='editItem' data-item='" + item.Id + "' onclick='EditItem(this);' >Редактировать</a></td>" +
            "<td><a id='delItem' data-item='" + item.Id + "' onclick='DeleteItem(this);' >Удалить</a></td></tr>";
    });
    strResult += "</table>";
    $("#tableBlock").html(strResult);
}

//показ блока добавления рекламы
function ShowAdd(allType)
{
    var strResult = "<h1>Добавить рекламу</h1><br>";
    strResult += "<label>Тип: </label><select id=\"addType\"  class=\"one\"></select ><br>";
    strResult += "<label>Категория: </label><select id=\"addCategori\"  class=\"two\"></select ><br>";
    strResult += "<label>Цена: </label><input type=\"number\" id=\"addCost\" min=\"0\" placeholder=\"0\" value=\"0\"/><br>";
    strResult += "<label>Контент: </label><textarea id=\"addContent\" /><br>";
    strResult += "<button id=\"addAd\" onclick=\"AddAd()\">Сохранить</button>";
    $("#addBlock").html(strResult);
    
    var s = document.querySelector('.one').options;
    allType[1].forEach(item => s[s.length] = new Option(item.Type, item.Id, true));

    var s = document.querySelector('.two').options;
    allType[0].forEach(item => s[s.length] = new Option(item.Category, item.Id, true));
}

// запрос рекламы на редактирование
function GetAd(id) {

    $.ajax({
        url: '/api/values/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            ShowAd(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

// редактирование книги
function EditBook() {
    var id = $('#editId').val()
    // получаем новые значения для редактируемой книги
    var book = {
        Id: $('#editId').val(),
        AdTypeId: $('#editType').val(),
        CategoryId: $('#editCategori').val(),
        Cost: $('#editCost').val(),
        Content: $('#editContent').val()
    };
    if (book.Content == "") {
        alert("Заполните все поля");
    }
    else {
        $.ajax({
            url: '/api/values/' + id,
            type: 'PUT',
            data: JSON.stringify(book),
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                GetAllAd();
            },
            error: function (x, y, z) {
                alert(x + '\n' + y + '\n' + z);
            }
        });
    }
}
// обработчик редактирования
function EditItem(el) {
    // получаем id редактируемого объекта
    var id = $(el).attr('data-item');
    GetAd(id);
}
// вывод данных редактируемой рекламы в поля для редактирования
function ShowAd(value) {
    $.ajax({
        url: '/api/AllTypeAndCotegori/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            //ShowAdd(data);
            strResult = "<h3>Редактирование рекламы</h3>";
            strResult += "<label>Номер</Label><input type=\"text\" id=\"editId\" value=" + value.Id + " readonly /><br>";
            strResult += "<label>Тип: </label><select id=\"editType\" class=\"one\" value=" + value.AdType + " /><br>";
            strResult += "<label>Категория: </label><select id=\"editCategori\" class=\"two\" value=" + value.Category + " /><br>";
            strResult += "<label>Цена: </label><input type=\"number\" id=\"editCost\" placeholder=" + value.Cost + " value=" + value.Cost + " min=\"0\"/><br>";
            strResult += "<label>Контент: </label><textarea id=\"editContent\" placeholder=" + value.Content + " />";       
            strResult += "<hr><button id=\"editBook\" onclick=\"EditBook()\">Сохранить</button>";
            $("#tableBlock").html(strResult);

            var s = document.querySelector('.one').options;
            data[1].forEach(item => s[s.length] = new Option(item.Type, item.Id, true));

            var s = document.querySelector('.two').options;
            data[0].forEach(item => s[s.length] = new Option(item.Category, item.Id, true));
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}