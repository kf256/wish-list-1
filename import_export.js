function exportList() {
    const obj = [];
    for (let i = 0; i < list.length; i++) {
        obj.push(list[i].exp());
    }
    return {version: "1.0", name: list_name, list: obj};
}

function importList(obj) {
    list_name = obj.name;
    list = [];
    for (let i = 0; i < obj.list.length; i++) {
        list.push(Category.imp(obj.list[i]));
    }
    display();
}