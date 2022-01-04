import * as SQLite from "expo-sqlite";
(async () => {
  console.log("create table shopping if not exist");
  const db = SQLite.openDatabase("db.testDb");
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS shopping (id INTEGER PRIMARY KEY AUTOINCREMENT,name varchar(200), items TEXT)"
    ),
      null,
      (a, b) => {
        console.log(a, b);
      };
  });
})();

export const createShopping = (name, data) =>
  new Promise((resolve, reject) => {
    const db = SQLite.openDatabase("db.testDb");
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO shopping (name,items) values (?,?)",
        [name, JSON.stringify(data)],
        (a, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (a, b) => {
          reject(b);
        }
      );
    });
  });

export const insertItem = (restItems, data) =>
  new Promise((resolve, reject) => {
    console.log(restItems, data);
    const db = SQLite.openDatabase("db.testDb");
    db.transaction((tx) => {
      tx.executeSql(
        "update shopping set items = ? where id = ?",
        [
          JSON.stringify([
            {
              name: data.name,
              quantity: data.quantity,
              price: 0,
              bought: 0,
              comment: data.comment,
            },
            ...restItems,
          ]),
          data.id,
        ],
        (a, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (a, b) => {
          reject(b);
        }
      );
    });
  });

export const resetItems = (id) =>
  new Promise((resolve, reject) => {
    const db = SQLite.openDatabase("db.testDb");
    db.transaction((tx) => {
      tx.executeSql(
        "update shopping set items = ? where id = ?",
        [JSON.stringify([]), id],
        (a, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (a, b) => {
          reject(b);
        }
      );
    });
  });

export const getShopping = () =>
  new Promise((resolve, reject) => {
    console.log("fetching... shopping");
    const db = SQLite.openDatabase("db.testDb");
    db.transaction((tx) => {
      tx.executeSql(
        "select * from  shopping",
        null,
        (txObj, { rows: { _array } }) => {
          _array = _array.map((item) => {
            let listitems = JSON.parse(item.items);
            return {
              id: item.id,
              name: item.name,
              items: listitems,
            };
          });
          resolve(_array);
        },
        (txObj, error) => reject(error)
      );
    });
  });

export const deleteShopping = (id) =>
  new Promise((resolve, reject) => {
    console.log("fetching...");
    const db = SQLite.openDatabase("db.testDb");
    db.transaction((tx) => {
      tx.executeSql(
        "delete from shopping where id = ?",
        [id],
        (txObj, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (txObj, error) => reject(error)
      );
    });
  });
