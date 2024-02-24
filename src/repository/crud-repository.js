
class CrudRepository{
    constructor(model){
        this.model=model;
    }
    async create(data){
        try {
            const result=await this.model.create(data);
            return result;
            
        } catch (error) {
            console.log('Something went wrong in Crud repository');
            throw error;
            
        }
    }
    async destroy(id){
        try {
            const response=await this.model.findByIdAndDelete(id);
            return response;
            
        } catch (error) {
            console.log('Something went wrong in Crud repository');
            throw { error };
            
        }
    }
    async get(id){
        try {
            const response=await this.model.findById(id);
            return response;
        } catch (error) {
            console.log('Something went wrong in Crud repository');
            throw { error };
            
        }
    } 
    async getAll(){
        try {
            const response=await this.model.find({});
            return response;
        } catch (error) {
            console.log('Something went wrong in ==Crud repository');
            console.log("Problem is here");
            throw { error };
            
        }
    }
    async update(id,data){
        try {
            const response=await this.model.findByIdAndUpdate(id,data,{new:true});
            return response;
        } catch (error) {
            console.log('Something went wrong in Crud repository');
            throw { error };
            
        }
    }

}

export default CrudRepository;