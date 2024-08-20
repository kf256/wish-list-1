class Category {
    constructor(name = "") {
        this.name = name;
        this.wishes = [];
    }
    
    exp() {
        const wishes = [];
        for (let i = 0; i < this.wishes.length; i++) {
            wishes.push(this.wishes[i].exp());
        }
        return {name: this.name, wishes: wishes};
    }
    
    static imp(obj) {
        const category = new Category(obj.name);
        for (let i = 0; i < obj.wishes.length; i++) {
            Wish.imp(obj.wishes[i]).addToCategory(category);
        }
        return category;
    }
}