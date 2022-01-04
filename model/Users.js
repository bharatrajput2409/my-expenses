// import db from "./db";

import * as SQLite from "expo-sqlite";
(async () => {
  const db = SQLite.openDatabase("db.testDb");
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar(50),amount integer)"
    ),
      null,
      (a, b) => {
        console.log(a, b);
      };
  });
})();

export const createUser = (data) =>
  new Promise((resolve, reject) => {
    const db = SQLite.openDatabase("db.testDb");
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO user (name,amount) values (?,?)",
        [data.name, 0],
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
    const db = SQLite.openDatabase("db.testDb");
    db.transaction((tx) => {
      tx.executeSql(
        "select * from  user order by id desc",
        null,
        (txObj, { rows: { _array } }) => {
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
        "delete from user where id = ?",
        [id],
        (txObj, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (txObj, error) => reject(error)
      );
    });
  });
