/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required) - Customer's full name
      - `email` (text, required) - Customer's email address
      - `phone` (text, required) - Customer's phone number
      - `message` (text, required) - Customer's message/inquiry
      - `created_at` (timestamptz) - Timestamp of submission
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy allowing anyone to insert (public form submission)
    - No read policies needed for public users (admin-only access would be handled separately)

  3. Notes
    - This table stores customer contact form submissions
    - Public users can only insert, not read their own or others' submissions
    - Future admin interface would need separate authenticated policies
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);