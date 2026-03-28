

# Mix and Match Site + README Descriptions

Blend the README's richer, more specific copy with the website's existing concise style across all content sections.

## Changes

### 1. HeroSection — Subtitle & Description
- **Current subtitle**: "View, edit, and strip EXIF, IPTC, and XMP data from your images. Fast, private, and completely open source."
- **New subtitle**: Blend README's "batch-edit EXIF/XMP metadata for entire folders of images" angle with the site's polish:
  > "Batch view, edit, and strip EXIF, IPTC, and XMP metadata for entire folders of images — all from a clean, dark-themed UI. Fast, private, and completely open source."
- **Badge text**: Change "Open Source Image Metadata Tool" → "Free & Open Source Metadata Editor"

### 2. FeaturesSection — Richer Descriptions from README
Update feature card descriptions to incorporate README specifics:

| Card | Current | Updated |
|------|---------|---------|
| View Metadata | Generic "at a glance" | "Inspect all EXIF, IPTC, and XMP data — Title, Subject, Tags, GPS, Rating, Copyright, and more." |
| Edit Fields | Generic "modify any field" | "Modify any metadata field with precision. Save and reapply metadata presets across multiple sessions using templates." |
| Strip All Data | Stays mostly same | "Remove all metadata in one click. Staged changes are previewed before writing to disk, keeping you safe by default." |
| Privacy First | Stays same | No change needed |
| Blazing Fast | Generic "large batches" | "Optimized processing powered by ExifTool under the hood. Handles large batches without breaking a sweat." |
| Multi-Format | Generic list | "Supports JPEG, TIFF, WebP, PNG, and more popular image formats out of the box." |

### 3. HowItWorksSection — Match README's Usage Steps
Update the 3 steps to reflect the README's actual workflow:

| Step | Current | Updated |
|------|---------|---------|
| 01 | "Open your image" / "Select any supported image file" | "Open a folder" / "Browse to a directory of images and load them all at once." |
| 02 | "Inspect & edit" / "Browse all metadata fields..." | "Select & edit" / "Click any image to view its metadata. Edit Title, Tags, GPS, and more — or pick coordinates from the interactive map." |
| 03 | "Export" / "Save the updated image..." | "Save changes" / "Preview staged changes, then write all edits to disk in one click." |

### 4. CtaSection — Slightly Enriched
- **Current subtext**: "Star the repo, contribute, or just start using it. It's free and open source forever."
- **New subtext**: "Star the repo, open a feature request, contribute code, or just download and start using it. Free and open source — forever."

### 5. About Page Bio — No Change
The About page is personal, not product-focused. Leave as-is.

## Files Modified
- `src/components/HeroSection.tsx` — lines 41, 69-70
- `src/components/FeaturesSection.tsx` — lines 6-11 (feature descriptions)
- `src/components/HowItWorksSection.tsx` — lines 5-7 (step content)
- `src/components/CtaSection.tsx` — line 34 (subtext)

