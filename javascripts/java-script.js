//write here your js
$(function () {
  let count = 0;
  $(window).click(function () {
    count += 1;
    if (count == 5) {
      $(".box").removeClass('png');
    }
  });
});
// обращаемся к функции
//задаем функции условие
// += присваивание
