import * as SQLite from "expo-sqlite";
(async () => {
  console.log("create table if not exist");
  const db = SQLite.openDatabase("db.testDb");
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS individualTranscation (id INTEGER PRIMARY KEY AUTOINCREMENT,user INTEGER, list TEXT)"
    ),
      null,
      (a, b) => {
        console.log(a, b);
      };
  });
})();

export const createTranscation = (userId, data) =>
  new Promise((resolve, reject) => {
    const db = SQLite.openDatabase("db.testDb");
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO individualTranscation (user,list) values (?,?)",
        [userId, JSON.stringify(data)],
        (a, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (a, b) => {
          reject(b);
        }
      );
    });
  });

export const getUsers = () =>
  new Promise((resolve, reject) => {
    console.log("fetching...");
    const db = SQLite.openDatabase("db.testDb");
    db.transaction((tx) => {
      tx.executeSql(
        "select * from  shopping",
        null,
        (txObj, { rows: { _array } }) => {
          _array = _array.map((user) => {
            let rest = JSON.parse(user.list);
            return {
              id: user.id,
              ...rest,
            };
          });
          resolve(_array);
        },
        (txObj, error) => reject(error)
      );
    });
  });

export const deleteUser = (id) =>
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
