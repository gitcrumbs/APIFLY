
const fs = require('fs');
const crypto = require('crypto');
const { WSATYPE_NOT_FOUND } = require('constants');
class APIMethods {

    constructor(filename) {

        if (!filename) {
            throw new Error('Creating a repository requires a filename')
        }

        this.filename = filename;
        try {
            fs.accessSync(this.filename);
        } catch (err) {
            fs.writeFileSync(this.filename, '[]');
        }
    }

    async getAllConfigurations() {
        //Open the file called this.fileName
        return JSON.parse(await fs.promises.readFile(this.filename, {
            encoding: 'utf8'

        }));

    }

    async create(attrs){
        attrs.id = this.randomId();
        console.log("Addind id",attrs);
        const records = await this.getAllConfigurations();
        records.push(attrs);
        //Write updated file to users.json
       await this.writeAll(records);
    }

    async writeAll(records){
        await fs.promises.writeFile(this.filename,JSON.stringify(records,null,2));
    }

    randomId(){
       return crypto.randomBytes(4).toString('hex');
    }

    async getOne(id){
        const records = await this.getAllConfigurations();
        return records.find(record=> record.id === id);
    }

    async delete(id){
        const records = await this.getAllConfigurations();
        const filteredRecords = records.filter( record => record.id !== id);
        console.log(filteredRecords);
        await this.writeAll(filteredRecords);
    }

    async update(id,attrs){
        const records = await this.getAllConfigurations();
        const record = records.find(record=> record.id === id);

        if(!record){
            throw new Error(`Record with id ${id} not found`);
        }

        Object.assign(record,attrs);
        await this.writeAll(records);
    }

    async getOneBy(filters){
        const records = await this.getAllConfigurations();
     
         for(let record of records){ 
            let found = false;           
              for(let key in filters){
                    if(record[key]==filters[key]){                   
                      found = true;
                  }
              }
              
              if(found){
                  console.log("Record Found");
                  return record;
              }

         }

       
    }
}


const test = async () => {
    const repo = new APIMethods('users.json');
      const user = await repo.getOneBy({password:'mPassword'});
    
      console.log(user);    

};

test();
