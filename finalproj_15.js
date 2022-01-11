var express = require('express');
var router = express.Router();
const db = require ('./utils/database');

const category_15 = class category_15 {
    constructor(id, name, size, link_url){
        this.id = id;
        this.name = name;
        this.size = size;
        this.link_url = link_url;
    }
    
    static async fetchAll(){
        try{
            let results = await db.query(`SELECT * from category_15`);
            console.log('results', JSON.stringify(results.row));
            return results.rows;
        } catch (e) {
            console.log('error', e);
        }
    }
}

module.exports = category_15;