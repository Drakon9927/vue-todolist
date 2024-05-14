const { createApp } = Vue

createApp({
    data() {
        return {
            message: "To do List!",

            toDoList: ["Frullato", "Cenare", "Boxing", "Giocare", "Dormire", "Studiare"],
        }
    },
        methods: {
            
        },
}).mount(`#app`)