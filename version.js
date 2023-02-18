fetch('/version.json')
     .then(function (response) {
            return response.json();
     })
     .then(function (data) {
          for (var app in data){
              var name =app.split(".")[2]
              document.getElementById(name).innerHTML = data[app]["macOS"]
          }
     })
