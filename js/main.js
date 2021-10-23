(() => {
    const   theFavor = document.querySelector("#favour-things"),
            theTemplate = document.querySelector("#fav-template").content;
  
          
    function getData() {
        fetch("./data.json")
        .then(res => res.json()) //unpach the API
        .then(data => {
            console.table(data);
        
            buildFavor(data);
        })
        .catch(error => console.error(error));
    }


    function buildFavor(info) {
       let favor = Object.keys(info);

       favor.forEach(hobby => {
           let panel = theTemplate.cloneNode(true),
                thingInfo = panel.firstElementChild.children;

                thingInfo[0].querySelector('img').src = `images/${info[hobby].favoritepic}`;
                thingInfo[1].textContent = info[hobby].name;
                thingInfo[2].textContent = info[hobby].role;
                thingInfo[3].textContent = info[hobby].desc;

            theFavor.appendChild(panel);
       })
    }

    getData();

})();