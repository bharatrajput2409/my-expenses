import * as SQLite from "expo-sqlite";
(async () => {
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
          tx.executeSql(
            "update user set amount= amount + ? where id = ?",
            [data.amount, userId],
            (a, { rowsAffected }) => {
              resolve(rowsAffected);
            },
            (a, b) => {
              reject(b);
            }
          );
        },
        (a, b) => {
          reject(b);
        }
      );
    });
  });

export const getTransactions = (userId) =>
  new Promise((resolve, reject) => {
    const db = SQLite.openDatabase("db.testDb");
    db.transaction((tx) => {
      tx.executeSql(
        "select * from  individualTranscation where user = ?",
        [userId],
        (txObj, { rows: { _array } }) => {
          _array = _array.map((txn) => {
            let rest = JSON.parse(txn.list);
            return {
              id: txn.id,
              user: txn.user,
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
