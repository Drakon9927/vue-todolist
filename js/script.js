const { createApp } = Vue

createApp({
    data() {
        return {
            message: "To do List!",

            toDoList: ["Frullato", "Cenare", "Boxing", "Giocare", "Dormire", "Studiare"],
            newItem: "",
        }
    },
    methods: {
        addItem() {
            console.log(this.newItem);  
            if (this.newItem.trim() !== "") {
                this.toDoList.push(this.newItem);  
                this.newItem = "";  
            }
        }
    }
}).mount('#app')