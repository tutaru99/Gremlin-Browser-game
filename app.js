new Vue({
    el: '#vue-app',
    data:{
        health: 100,
        ended: false
        
      
        
    },
    methods: {
        damage: function() {
           
            this.health -= document.getElementById('dmg').innerHTML =  Math.round(Math.random () * 10);
          
            if (this.health <= 0) {
                this.ended = true;
                document.getElementById('player').style.backgroundImage = "url('assets/dead.gif')";
            }
            else if (this.health <= 80 && this.health >= 60) {
            
                document.getElementById('healthbar-color').style.backgroundColor = "orange" ;
                document.getElementById('player').style.backgroundImage = "url('assets/seventyhp.jpg')";
           
            }
            else if (this.health <= 50 && this.health >= 30) {
            
                document.getElementById('healthbar-color').style.backgroundColor = "orange" ;
                document.getElementById('player').style.backgroundImage = "url('assets/twenty.jpg')";
           
            }
            else if (this.health <= 30) {
                document.getElementById('healthbar-color').style.backgroundColor = "red" ;
                document.getElementById('player').style.backgroundImage = "url('assets/halfhp.jpg')";
                }
               
                
            

        },
        restart: function () {
            document.location.reload()
            this.health = document.getElementById('healthbar-color').style.backgroundColor = "green";
            this.health = 100;
            this.ended = false;
            return 0 
            
        
            
        }
        
        
        },
    computed: {
       
            }
        
    
    })
