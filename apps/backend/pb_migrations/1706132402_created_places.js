/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3g2ayadyeq5lnto",
    "created": "2024-01-24 21:40:02.272Z",
    "updated": "2024-01-24 21:40:02.272Z",
    "name": "places",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "okqimlay",
        "name": "location_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "br5tdth4dj4ymhs",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "fjrljgrw",
        "name": "place_name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 3,
          "max": 64,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "eku445xd",
        "name": "description",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 120,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rhjmjr8q",
        "name": "category",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gxzs0yrx",
        "name": "likes",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3g2ayadyeq5lnto");

  return dao.deleteCollection(collection);
})
