#!/usr/bin/env bash
cd "$(dirname "$0")/../generators"

for type in `find -type d ! -path . ! -path '*.min.js' -printf "%f\n"`; do
	echo -e "\"$type\": ["
	for list in `find $type -type f ! -path '*.min.js' -printf "%f\n"`; do
		list=${list//.js/}
		echo -ne "\"$list\", "
	done
	echo -e "],"

