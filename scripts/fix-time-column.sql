-- Fix the preferred_time column to accept time ranges as text
ALTER TABLE bookings ALTER COLUMN preferred_time TYPE VARCHAR(50);
