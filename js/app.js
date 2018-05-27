//建立名為photos資料庫的關聯（參考）
var bwphotosRef = db.collection("bwphotos");
//使用文件參考取得資料
bwphotosRef.get().then(function (snapshot) {
    //產生一個div 將內容替換成取得的圖檔資訊
    //取得圖檔資訊 建立圖檔物件
    snapshot.forEach(function (doc) {
        var bwphoto = doc.data();
        //建立顯示用的模板
        var html =
            `<div class="col-photo" id="${doc.id}">
<img src="${bwphoto.downloadURL}">
</div>`;
        //建立bwphoto元素
        var $bwphoto = $(`<div class="col-photo"></dvi>`);
        $bwphoto.html(html);
        //把div追加到bwphotos中
        $("#bwphotos").append($bwphoto);
    });
});