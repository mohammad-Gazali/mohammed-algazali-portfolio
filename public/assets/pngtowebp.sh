#!/bin/bash

# |--------------------------------------------------------------------------|
# | to use this tool just type ./pngtowebp.sh <input folder> <output folder> |
# |--------------------------------------------------------------------------|

# Set the directory containing your images
input_directory="$1"

# Create a directory to store the converted WebP images
output_directory="$2"

# Make sure the output directory exists
mkdir -p "$output_directory"

# Use 'find' to search for PNG files recursively in the input directory and its subdirectories
find "$input_directory" -type f -name "*.png" | while read -r image; do
  # Get the base name of the image (without extension)
  base_name=$(basename "${image%.png}")

  # Determine the relative path of the image to the input directory
  relative_path="${image#$input_directory/}"

  # Create the corresponding output directory structure in the output directory
  output_subdir="$output_directory/$(dirname "$relative_path")"
  mkdir -p "$output_subdir"

  # Convert the PNG image to WebP and save it with the same name in the output directory
  cwebp "$image" -o "$output_subdir/$base_name.webp"
done
