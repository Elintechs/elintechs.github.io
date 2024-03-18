const url = "https://zxing.org/w/chart?cht=qr&chs=350x350&chld=H%7C6&choe=UTF-8&chl=";
        var input = document.getElementById("inputText");
        var image = document.getElementById("code");
        function generate() {
            var value = input.value;
            if (value.length > 0) {
                image.style.display = "block";
                image.src = url + window.btoa(input.value);
            } else {
                image.style.display = "none";
            }
        }