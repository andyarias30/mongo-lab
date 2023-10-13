import { db } from "./connectDb.js";
import { ObjectId } from "mongodb";

const storeColl = db.collection('stores')

const ourStore = {
    storeName: 'Coral Square',
    location: 'Miami',
    hours: '9-9',
    mall: true,
    boutique: true,

}

export async function addStore(){
    const storeAdded = await storeColl.insertOne(ourStore)
    console.log('Store Added --->' , storeAdded)
}

export async function getAllStores() {
    const getStores = await storeColl.find({}).toArray()
    console.table(getStores)
}

export async function getStoresById() {
    const storeId = new ObjectId('65296f4022e3175907ca73a4')
    const getStoreById = await storeColl.findOne({_id:storeId})
    console.log('Store retreved ---->', getStoreById)
}