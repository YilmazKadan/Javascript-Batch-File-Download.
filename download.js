var img = document.querySelectorAll(".swiper-slide img"); //Burada src değerini çekeceğimiz elemanı-elemanları tanımlıyoruz
img.forEach(function(item){
    //Gelen elemeanın burada src Attribute ünü alıyoruz
    var imgPath = item.getAttribute("src");
    // Burada dokümana yeni bir a elemanı tanımlıyoruz bunun sayesinde indirme işlemini yapacağız.
    var link = document.createElement("a");
    link.href = getSoftLink(imgPath);
    link.download = "";
    //Oluşturduğumuz link elemanını body'e ekliyoruz ve tıklama işlemi gerçekleştirip indiriyoruz.
    //Daha sonra bodyden siliyoruz.
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

/*

GetSoftLink fonksiyonu burada kilit nokta ! Bu fonksiyon olmadığı taktirde eğer resim veya video dosyamız farklı bir dosyadan veya 
alt alan adından çekiliyorsa indirme işlemi yapmak yerine bizi o sayfaya yönlendiriyor. Bizde .com/ değerini link içerisinde bulduktan sonra
indexOf bize bulduğu indisi döndüreceği için kendisinden sonra 5 karakter daha gidip substring metodu ile bize sadece geri kalan kısmını vermesini sağlıyoruz.


*/
function getSoftLink(full_link){
    return full_link.substring(full_link.indexOf(".com/")+ 5);
}