const app = new Vue({
    el: "#app",
    data: {
        el: "",
        lists: [],
        hasError: false,
        edit: false,
        currentIndex: 0,
        winner: "",
    },
    methods: {
        add() {
            if(this.el.length >= 3) {
                this.lists.push(this.el);
                this.el = "";
                this.hasError = false;
                this.edit = false;
            } else {
                this.hasError = true;
            }
        },
        deleteItem(index) {
            this.lists.splice(index,1)
        },
        editItem(index) {
            this.currentIndex = index
            this.edit = !this.edit;
        },
        saveItem(index) {
            if(this.lists[index].length >= 3) {
                this.edit = false;
                this.hasError = false;
            } else {
                this.hasError = true
            }
        },
        generate() {
            this.winner = this.lists[Math.floor(Math.random() * this.lists.length)]
        },
        tryAgain() {
            this.winner = "";
            this.lists = []
        }
    }
})