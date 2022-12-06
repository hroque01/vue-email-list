const { createApp } = Vue;

createApp({
    data(){
        return{
            listaMailUtenti: [],
            email: '',
        }
    },

    methods: {
        EmailGenerator(){
            for(let i = 0;i < 10; i++){
                
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

                .then((result) => {
                    this.email = result.data.response;
                    this.listaMailUtenti.push(this.email);
                    console.log(this.email);
                });
            }
        }
    },

    mounted(){
        this.EmailGenerator();
    }

}).mount('#app')

