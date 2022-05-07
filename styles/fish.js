class getVersion {
  constructor() {
    this.versions = (() => {
      const u = navigator.userAgent;
      return {
        trident: u.indexOf("Trident") > -1,
        weixin: u.indexOf("MicroMessenger") > -1,
        presto: u.indexOf("Presto") > -1,
        webKit: u.indexOf("AppleWebKit") > -1,
        chrome: u.indexOf("Chrome") > -1,
        gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") === -1,
        mobile: !!u.match(/AppleWebKit.*Mobile.*/),
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
        iPhone: u.indexOf("iPhone") > -1,
        iPad: u.indexOf("iPad") > -1,
      };
    })();

    this.browserVersion = () => {
      let UA = "";
      if (this.versions.weixin) {
        UA = "微信";
      } else if (this.versions.android) {
        UA = "安卓";
      } else if (
        this.versions.ios ||
        this.versions.iPhone ||
        this.versions.iPad
      ) {
        UA = "苹果";
      } else if (this.versions.chrome) {
        UA = "谷歌";
      } else if (this.versions.trident) {
        UA = "IE";
      } else if (this.versions.gecko) {
        UA = "火狐";
      } else {
        UA = "其他";
      }
      return UA;
    };
  }
}

window.onload = () => {
  let get_ua = document.getElementById("get_ua"),
    ua = document.getElementById("ua"),
    ua_obj = {
      handleEvent: function () {
        let Ua = new getVersion();
        ua.innerText = Ua.browserVersion();
      },
    };

  get_ua.addEventListener("click", ua_obj);
};
