
function init() {

    if (localStorage.getItem("theme") != null) { //判断用户是否设置过主题
        document.getElementById("cssStyle").href = localStorage.getItem("theme") + ".css"; //读取用户选择的主题
    } else {
        // 当第一次加载网页的时候，随机产生一个样式表使用
        var skinArray = ["red", "green", "blue", "grey", "purple"];
        var index = Math.floor(Math.random() * skinArray.length);
        var cssName = skinArray[index];
        document.getElementById("cssStyle").href = cssName + ".css";
    }
}

function changeSkin(cssName) {
    // try{
    document.getElementById("cssStyle").href = cssName + ".css";
    localStorage.setItem("theme", cssName);
    // }
    // catch(e))
    //  alert(e.name+":");
    // }

}

