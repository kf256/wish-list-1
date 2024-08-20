class Wish {
    constructor(obj = {name: "", details: []}) {
        this.name = obj.name;
        this.details = obj.details;
        this.category = null;
        this.index = null;
    }
    
    addToCategory(category) {
        if (this.category !== null) this.removeFromCategory();
        
        this.category = category;
        this.index = this.category.wishes.length;
        this.category.wishes.push(this);
    }
    
    removeFromCategory() {
        const itemsBefore = this.category.wishes.slice(0, this.index);
        const itemsAfter = this.category.wishes.slice(this.index+1);
        this.category.wishes = [].concat(itemsBefore, itemsAfter);
        for (let i = this.index; i < this.category.wishes.length; i++) {
            this.category.wishes[i].index--;
        }
        
        this.category = null;
        this.index = null;
    }
    
    log() {
        console.log(this.name);
        for (let i = 0; i < this.details.length; i++) {
            switch (this.details[i].type) {
                case "link":
                    console.log(this.details[i].name+":\n"+this.details[i].value);
                    break;
                case undefined:
                    console.log(this.details[i].name+": "+this.details[i].value);
                    break;
                default:
                    console.log(this.details[i].name+":", this.details[i].value);
                    console.warn(`unknown detail type: "${this.details[i].type}"`);
            }
        }
    }
    
    displayButton() {
        const button = document.createElement("div");
        button.classList.add("button");
        button.innerHTML = this.name;
        content.appendChild(button);
        
        button.addEventListener("click", () => {
            loc.push(this.index);
            display();
        });
    }
    
    displayDetails() {
        for (let i = 0; i < this.details.length; i++) {
            const info = document.createElement("div");
            info.classList.add("info");
            
            if (this.details[i].type !== undefined && this.details[i].type === "link") {
                info.innerHTML = `<a href="${this.details[i].value}" target="_blank">${this.details[i].name}</a>`;
            } else {
                info.innerHTML = this.details[i].name+": "+this.details[i].value;
            }
            
            content.appendChild(info);
        }
    }
    
    exp() {
        return {name: this.name, details: this.details};
    }
    
    static imp(obj) {
        return new Wish(obj);
    }
}