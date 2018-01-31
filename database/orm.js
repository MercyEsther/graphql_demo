const Base = require("./base");
const colors = require("colors");

class Orm extends Base{
    constructor(){
        super();
    }

    /**
     * fetch all data from table
     * 
     * @param {string} table 
     */
    fetchAll(table){
        let _table = this.getTable(table);
        let result = _table.findAll().then(r => {
            return r;
        }).catch(e => {
            console.log("[fetchAll error]".red, e);
        })
        return result;
    }

    findOne(table, param){
        let _table = this.getTable(table);
        let result = _table.findAll({
            where: {
                id: param
            }
        }).then(r => {
            return r;
        }).catch(e => {
            console.log("[findOne error]".red, e);
        })
        return result;
    }

    /**
     * get _table
     * 
     * @param {string} table 
     * @return {model} _table
     */
    getTable(table){
        let _table = "";
        for(let t of this._tables){
            if(t.name == table){
                _table = t.model;
            }
        }
        if(_table){
            return _table;
        }
        else{
            console.log("[no exist table]".red);
        }
    }
}

module.exports = Orm;