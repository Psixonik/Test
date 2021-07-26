// Получение всех типов
function GetTypeAd() {
    $("#tableBlock").css('display', 'none');
    $("#catBlock").css('display', 'none');
    $("#typeBlock").css('display', 'block');
    $("#addBlock").css('display', 'none');


    $.ajax({
        url: '/api/typeAd/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            WriteTypeAd(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });

}
// вывод полученных типов на экран
function WriteTypeAd(data) {
    var strResult = "<table><caption>Типы реклам</caption><th>ID</th><th>Категория</th>";
    $.each(data, function (index, data) {
        strResult += "<tr><td>" + data.Id + "</td><td> " + data.Type + "</td></tr>";
    });
    strResult += "</table>";
    $("#typeBlock").html(strResult);
}