const textConfig = {
  text1: "He luu em!",
  text2: "Anh có điều này muốn hỏi em nhớ phải trả lời thật lòng nhaaa.",
  text3: "Em yêu anh có phải không nào ._.(Mod by Nguyễn Đức Tuân)",
  text4: "Nếu Em ko trả lời mà thoát ra tức là muốn làm vợ anh rùi đó nha :v",
  text5: "anh mơ à???",
  text6: "yêu anh tuân lắm <3",

  1: "Cái gì của anh mà em thích cầm nhất?",//tiền
  3: "Con trai có gì quý nhất?",//ngọc trai
  4: "Cái gì dài như trái chuối, cầm 1 lúc thì nó chảy nước ra?",//Que kem
  5: "30 chia 1/2 và cộng thêm 10, bằng bao nhiêu?",//70
  6: "Sở thú bị cháy, con gì chạy ra đầu tiên?",//con người
  7: "Trong 1 cuộc thi chạy, nếu bạn vượt qua người thứ 2 bạn sẽ đứng thứ mấy?",//thứ 2
  8: "Vua hôn gọi là gì?",//hoàng hôn
  9: "Rất thích hôn gọi là gì?",//kết hôn
  2: "Hôn mà bị hôn lại gọi là gì?",//đính hôn

  text8: "Gửi cho anh <3",
  text9: "Vì anh đẹp try vlllll",
  text10: "anh biết mà ^^ Yêu em 300.000",
  text11:
    "Tối nay anh qua đón em đi chơi nhaa :v Còn giờ thì chờ gì nữa mà ko inbox cho tớ đi nàooo",
  text12: "Okii lunn <3",
};

const result = {
  1: 'Tiền',
  2: 'Đính hôn',
  3: 'Ngọc trai',
  4: 'Que kem',
  5: '70',
  6: 'Con người',
  7: 'Thứ 2',
  8: 'Hoàng hôn',
  9: 'Kết hôn'
}

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });
  const random = Math.floor(Math.random() * 10);
  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + result[random];
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig[random],
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            // if()
            setCookie('filter','filter',86400)
            window.location = "file/heart.html";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
function request(e)
{
    var result = $(e).val();
    if(result == 2)
    {
        setCookie('filter','arr_search',1)
        // alert($.cookie("the_value") );
        location.href='heart.html';
    }
    else
    {
        alert('false')
    }
}
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
