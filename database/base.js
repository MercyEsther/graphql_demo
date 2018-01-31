const Seq = require('sequelize');
const {config} = require("./config");

class Base {
    constructor(){
        if(this.isInit == true){
        }else{
            this.init();
        }
    }

    /**
     * Init; Create a new database connect pool
     */

    init(){
        this.seq = new Seq(config.database, config.username, config.password, {
            host: config.host,
            port: 55555,
            dialect: 'postgres',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            operatorsAliases: false
        });
        this._tables = [];
        // this.defineVouchers();
        this.defineProducts();
        this.isInit = true;
    }

    /**
     * define Voucher Table
     */
    
     defineVouchers(){
        let Vouchers = this.seq.define("simple_voucher", {
            id:{
                type: Seq.INTEGER,
                primaryKey: true
            },
            code: Seq.STRING,
            user_id: Seq.INTEGER,
            name: Seq.STRING,
            amount: Seq.INTEGER
        },{
            timestamps: false,
            freezeTableName: true
        })
        let _table = {
            name: "vouchers",
            model: Vouchers
        }
        this._tables.push(_table);
     }

     /**
      * define Products Table 
      */

     defineProducts(){
         let Products = this.seq.define("product_product", {
             id:{
                 type: Seq.INTEGER,
                 primaryKey: true
             },
             create_date: Seq.STRING,
             default_code: Seq.STRING,
             create_uid: Seq.STRING,
             barcode: Seq.STRING,
             active: Seq.BOOLEAN,
             name: Seq.STRING,
             product_code: Seq.STRING,
             short_desc: Seq.STRING,
             unit_price: Seq.STRING,
             display_name: Seq.STRING,
             sale_ok: Seq.BOOLEAN
         },{
            timestamps: false,
            freezeTableName: true
         })
         let _table = {
             name: "product_product",
             model: Products
         }
         this._tables.push(_table);
     }
}

module.exports = Base;