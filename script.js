function loadgit() {



    const user = document.getElementById("user")
    var xhr = new XMLHttpRequest()
    xhr.open('GET', "https://api.github.com/users/" + user.value + "/repos", true)

   
        xhr.onreadystatechange = function () {

            if (this.status == 200 && this.readyState == 4) {
                const infogit = JSON.parse(this.responseText)
                const tabela = document.getElementById("tabela")
                tabela.innerHTML = "";
            
                for (var i = 0; i < infogit.length; i++) {

                    tabela.innerHTML += "<tr><td> Nome:" + infogit[i].name + "</td><br>"
                    tabela.innerHTML += "<td> Linguagem:" + infogit[i].language + "</td><br>"
                    tabela.innerHTML += "<a  href=" + infogit[i].html_url + ">Link repositorio</a><br><br>"
                    // tabela.innerHTML += "<a  href=" + infogit[i].clone_url + "  >Clonar</a><br><br><br>"
                    tabela.innerHTML += "<button onclick='copyToClipboard(this)'>" +infogit[i].clone_url+"</button>"

                }
            }

        }
    xhr.send();
    
}

function copyToClipboard(btn) {
    var input = document.createElement("input");
    input.value = btn.innerText;
    console.log(btn.innerText)
    input.id = "input";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
}
