async function display() {
    const headerWidth1 = header.offsetWidth;
    const header1 = header.innerHTML;
    updateHeader();
    const headerWidth2 = header.offsetWidth;
    
    header_frame.style.width = headerWidth2+1+"px";
    if (headerWidth1 > headerWidth2) {
        header.innerHTML = header1;
        setTimeout(updateHeader, 1000);
    }
    
    document.title = list_name;
    
    content.style.left = "-100%";
    await new Promise(r => setTimeout(r, 500));
    content.style.left = "0px";
    
    content.innerHTML = "";
    if (loc.length === 0) displayAll();
    if (loc.length === 1) displayList();
    if (loc.length === 2) displayDetails();
}

function displayAll() {
    for (let i = 0; i < list.length; i++) {
        const div = document.createElement("div");
        div.classList.add("button");
        div.innerHTML = list[i].name;
        content.appendChild(div);
        
        div.addEventListener("click", () => {
            loc.push(i);
            display();
        });
    }
}

function displayList() {
    const category = list[loc[0]].wishes;
    for (let i = 0; i < category.length; i++) {
        category[i].displayButton();
    }
}

function displayDetails() {
    const category = list[loc[0]].wishes;
    const wish = category[loc[1]];
    wish.displayDetails();
}

function updateHeader() {
    header.innerHTML = "";
    header.innerHTML += `<div onclick="if(loc.length!==0){loc=[];display();}">${list_name}</div>`;
    if (loc.length > 0) header.innerHTML += `&gt;<div onclick="if(loc.length!==1){loc=[loc[0]];display();}">${list[loc[0]].name}</div>`;
    if (loc.length > 1) header.innerHTML += `&gt;<div>${list[loc[0]].wishes[loc[1]].name}</div>`;
}