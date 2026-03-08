import { pool } from "./database.js"
import spotData from "../data/spotsData.js"

//NOT NULL means it cannot be empty
const createSpotsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS spots;
    CREATE TABLE IF NOT EXISTS spots(
    id SERIAL PRIMARY KEY,
    image VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    cityState VARCHAR(255) NOT NULL,
    coordinates VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    submittedBy VARCHAR(255) NOT NULL,
    submittedOn TIMESTAMP NOT NULL
    )
    `;
    try {
    const res = await pool.query(createTableQuery)
    console.log('🎉 gifts table created successfully')
    }catch (err) {
    console.error('⚠️ error creating gifts table', err)
    }
}

const seedSpotsTable = async () => {
  await createSpotsTable();

    spotData.forEach((spot) => {
        const insertQuery = "INSERT INTO spots (title, image, cityState, coordinates, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)"
        const values = [
            spot.title,
            spot.image,
            spot.cityState,
            spot.coordinates,
            spot.description,
            spot.submittedBy,
            spot.submittedOn
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting spot', err)
                return
            }

            console.log(`✅ ${spot.title} added successfully`)
        })
    })
}

seedSpotsTable()