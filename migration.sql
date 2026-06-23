-- Run this in your Supabase Dashboard SQL Editor (https://supabase.com/dashboard/project/zzxzejaadftxlxbrrokq/sql/new)

ALTER TABLE projects ADD COLUMN IF NOT EXISTS slug text;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS seo_title text;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS meta_description text;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS img_alt text;

ALTER TABLE services ADD COLUMN IF NOT EXISTS slug text;
ALTER TABLE services ADD COLUMN IF NOT EXISTS seo_title text;
ALTER TABLE services ADD COLUMN IF NOT EXISTS meta_description text;
