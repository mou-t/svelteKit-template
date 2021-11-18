#! /usr/bin/env bash

# move *.html/index.html to *.html in $build
# https://github.com/sveltejs/kit/issues/1443#issuecomment-952177163

build="$1"

err=0

for dir in $(find "$build" -path '*.html/index.html')
do
    parent="$(dirname $dir)"
    num=$(ls "$parent" | wc -l)
    if (( num != 1 ))
    then
        (( err++ ))
        echo warning: expected exactly one file: skipping \"$parent\"
        continue
    fi
    mv "$dir" "$parent.temp"
    rm -r "$parent"
    mv "$parent.temp" "$parent"
done

exit $err
