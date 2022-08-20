import { enablePromise, openDatabase } from "react-native-sqlite-storage";

enablePromise(true);

const DATABASE_NAME = "checol_trips";

export const getDbConnection = async () => {
    const db = await openDatabase({ name: DATABASE_NAME, location: "default" });
    return db;
}

export const createTables = async (db) => {
    // const delTrip = "DROP TABLE IF EXISTS trips";
    // const delUser = "DROP TABLE IF EXISTS users";
    // await db.executeSql(delTrip);
    // await db.executeSql(delUser);
    const userTablequery = "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100))";
    const tripTablequery = `CREATE TABLE IF NOT EXISTS trips(id INTEGER PRIMARY KEY AUTOINCREMENT, price REAL, date VARCHAR(50), user_id INTEGER,
            FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE NO ACTION)`;
    await db.executeSql(userTablequery);
    await db.executeSql(tripTablequery);
}

export const initDatabase = async () => {
    const db = await getDbConnection();
    await createTables(db);
    db.close();
}

export const insertUser = async (db, name) => {
    const insertQuery = `INSERT INTO users (name) values ('${name}')`;
    const result = await db.executeSql(insertQuery);
    return result;
}

export const insertTrip = async (db, price, userId) => {
    const insertQuery = `INSERT INTO trips (price, date, user_id) values (${price},datetime('now', 'localtime'),${userId})`;
    const result = await db.executeSql(insertQuery);
    return result;
}

export const getTrips = async (db) => {
    const trips = [];
    const results = await db.executeSql("SELECT trips.id, price, date, name FROM trips INNER JOIN users on trips.user_id=users.id LIMIT 10");
    results.forEach((result) => {
        for (let i = 0; i < result.rows.length; i++) {
            trips.push(result.rows.item(i));
        }
    });
    return trips;
}

export const getUsers = async (db) => {
    const users = [];
    const results = await db.executeSql("SELECT id, name FROM users");
    results.forEach((result) => {
        for (let i = 0; i < result.rows.length; i++) {
            users.push({ id: result.rows.item(i).id, item: result.rows.item(i).name });
        }
    });
    return users;
}