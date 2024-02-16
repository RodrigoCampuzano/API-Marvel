export class ListCharacter{
    #creators = []
    
    addCreator(creator){
        this.#creators.push(creator)
    }

    getCreators(){
        return this.#creators
    }    
}