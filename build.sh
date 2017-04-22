#!/bin/bash -e

if [ "$IS_PULL_REQUEST" != true ]; then
  sudo docker build -t $IMAGE_NAME:latest .
else
  echo "skipping because it's a PR"
fi