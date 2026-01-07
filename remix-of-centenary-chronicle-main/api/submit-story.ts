import type { VercelRequest, VercelResponse } from '@vercel/node';
import mysql from 'mysql2/promise';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  // Validate environment variables
  const dbHost = process.env.DB_HOST;
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;
  const dbName = process.env.DB_NAME;
  const dbPort = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306;

  if (!dbHost || !dbUser || !dbPassword || !dbName) {
    console.error('Missing database environment variables');
    return res.status(500).json({ success: false, error: 'Server configuration error' });
  }

  // Validate request body
  const { name, classOf, title, quote, story } = req.body;

  if (!name || !classOf || !title || !quote || !story) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required: name, classOf, title, quote, story',
    });
  }

  // Trim and validate non-empty strings
  const trimmedName = String(name).trim();
  const trimmedClassOf = String(classOf).trim();
  const trimmedTitle = String(title).trim();
  const trimmedQuote = String(quote).trim();
  const trimmedStory = String(story).trim();

  if (
    trimmedName === '' ||
    trimmedClassOf === '' ||
    trimmedTitle === '' ||
    trimmedQuote === '' ||
    trimmedStory === ''
  ) {
    return res.status(400).json({ success: false, error: 'All fields must not be empty' });
  }

  let connection: mysql.Connection | null = null;

  try {
    // Create database connection
    connection = await mysql.createConnection({
      host: dbHost,
      user: dbUser,
      password: dbPassword,
      database: dbName,
      port: dbPort,
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
    });

    // Insert story into database
    const [result] = await connection.execute(
      `INSERT INTO alumni_stories (name, class_of, title, quote, story, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, NOW(), NOW())`,
      [trimmedName, trimmedClassOf, trimmedTitle, trimmedQuote, trimmedStory]
    );

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Story submitted successfully',
      id: (result as mysql.ResultSetHeader).insertId,
    });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to submit story. Please try again later.',
    });
  } finally {
    // Always close the connection
    if (connection) {
      await connection.end();
    }
  }
}

