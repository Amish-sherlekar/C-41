class Player{

    constructor(){
        this.name= null
        this.index= null
        this.distance=0
    }

    getCount(){
        database.ref('playerCount').on("value", (data)=>{
            playerCount= data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    
   update(){

    database.ref('players/player'+this.index).set({
        name:this.name,
        distance:this.distance
    })
   }

   getInfoPlayer(){

    database.ref('players').on("value",(data)=>{

        allPlayers= data.val()
    })
   }
            
}
