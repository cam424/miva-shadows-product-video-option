Adds a dynamically generated thumbnail to product's thumbnail list that triggers a responsive vimeo hosted video to replace the product image area. Built for Shadows readytheme, but can be modified to work with other themes as well.

- Create a Custom Field Group with a code set to "opt-product-videos". Name of this field group and subsequent fields do not matter as the mvt:do function only calls the code and creates an array of fields within. Entire vimeo URL is required, not just ID.

- Currently only supports pulling on video. Using Custom Field Group for future scalability to pull a single field as the client expressed interest in multiple videos for products as a next phase request.

- JS is a bit janky and requires jquery as built. Will require some updated IDs for appending the video thumbnail to the thumbnail list. May have to deal with magic zoom conflicts as well, but unsure how the live site is built.
