let sleep = function (time) {
  let startTime = new Date().getTime() + parseInt(time, 10);
  while (new Date().getTime() < startTime) {
  }
};

function updatecard() {
  let pos = document.getElementsByClassName("new-card")[0],
      content = document.getElementById("card-content"),
      card = pos.cloneNode(true);
  sleep(700);
    document.getElementsByClassName("new-space")[0].style.display = "none";
    document.getElementsByClassName("update-card")[0].style.display = "block";
    content.insertBefore(card, pos);
}

function updatebar() {
    sleep(700);
    document.getElementsByClassName("new-space")[0].style.display = "block";
    document.getElementsByClassName("update-card")[0].style.display = "none";
}

/*
    var upname = document.getElementsByClassName("user-name"),
    len = upname.length;
  console.log("共有", len, "位 up 主更新了动态。分别是：");
  for (var i = 0; i < len; ++i) {
    console.log(upname[i].innerText);
  }
  */
