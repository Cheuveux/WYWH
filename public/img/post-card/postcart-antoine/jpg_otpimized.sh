#!/bin/bash

# Dossier de sortie
OUTPUT_DIR="optimized"
mkdir -p "$OUTPUT_DIR"

# Parcours tous les PNG du dossier courant
for img in *.png; do
    [ -e "$img" ] || continue
    echo "Conversion & optimisation de : $img"

    # Nom du fichier de sortie (remplace .png par .jpg)
    outname="${img%.png}.jpg"

    ffmpeg -i "$img" -qscale:v 3 -vf scale=2000:-1 "$OUTPUT_DIR/$outname"
done

echo "Terminé ! Les images JPG optimisées sont dans le dossier : $OUTPUT_DIR"
