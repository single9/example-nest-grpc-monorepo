#!/bin/bash

GENERATORS=()
while IFS=  read -r -d $'\0'; do
    GENERATORS+=("$REPLY")
done < <(find . -name "gen-grpc.sh" -print0)

echo "Found ${#GENERATORS[@]} generators"

for file in "${GENERATORS[@]}"; do
  echo "${file}" \
    && sh "${file}" \
    && echo "...DONE!" \
    || echo "...ERROR!"
done
