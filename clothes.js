import { db } from "./connectDb.js";
import { ObjectId } from "mongodb";
const clothesColl = db.collection('clothes')
 const ourStuffs = {
    productName:'Prada glasses',
    size: 'regular',
    color: 'silver',
    inStock: true,
    stars: 3.5,

 }
 export async  function addClothes() {
    const addItem = await clothesColl.insertOne(ourStuffs)
    console.log('Item added --->' , addItem)
 }

 export async function getAllClothes() {
    const getClothes = await clothesColl.find({}).toArray()
    console.table(getClothes)
 }

 export async function updateClothes() {
    const itemId = new ObjectId('6529656019a971a4839511e2')
    const updatedClothes = await clothesColl.findOneAndUpdate({_id: itemId }, {$set: {color: 'red'}})
    console.log('Update clothes --->', updateClothes)
 }