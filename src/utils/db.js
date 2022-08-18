import { enablePromise, openDatabase } from "react-native-sqlite-storage";

enablePromise(true);

const DATABASE_NAME = "checol_trips";

export const getDbConnection = async () => {
    const db = await openDatabase({ name: DATABASE_NAME, location: "default" });
    return db;
}

export const createTables = async (db) => {
    const userTablequery = "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100))";
    const tripTablequery = `CREATE TABLE IF NOT EXISTS trips(id INTEGER PRIMARY KEY AUTOINCREMENT, price INTEGER, user_id INTEGER, 
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

export const insertTrip = async (db, userId, price) => {
    const insertQuery = `INSERT INTO trips (price, user_id) values (${price},${userId})`;
    const result = await db.executeSql(insertQuery);
    return result;
}

export const getTrips = async (db) => {
    const trips = [];
    const results = await db.executeSql("SELECT * FROM trips");
    results.forEach((result) => {
        for (let i = 0; i < result.rows.length; i++) {
            trips.push(result.rows.item(i));
        }
    });
    return trips;
}