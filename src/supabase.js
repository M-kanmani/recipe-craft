import { createClient } from "@supabase/supabase-js";
// Create a single supabase client for interacting with your database
const supabaseUrl = "https://rprjowkoeklcodcocqql.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwcmpvd2tvZWtsY29kY29jcXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MjM2OTQsImV4cCI6MjA4ODI5OTY5NH0.sztF7FfgB0xs8v1S_H09j8JaACIPtAMtrjQtR3L6zqI";
// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey);
