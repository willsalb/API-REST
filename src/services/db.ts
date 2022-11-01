import sqlite3 from 'sqlite3'

const DATABASE = process.env.DATABASE;

if(!DATABASE)
  throw new Error("DATABASE não encontrado!")

export const openConnection = () => {
  let db = new sqlite3.Database(DATABASE);

  return db;
}

export const dbQueryId = async (query: string, params?: any[]) => {
  const retorno = await dbQuery(query, params)
  return retorno[0];
}

export const dbQuery = (query: string, params?: any[]) => {
  let db = openConnection();
  return new Promise<any[]>((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if(err)
        reject(err);
      else
        resolve(rows);
    })
  })
  .finally(() => {
    db.close();
  })
}