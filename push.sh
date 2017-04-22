#!/bin/bash -e
if [ "$IS_PULL_REQUEST" != true ]; then
  #sudo docker push $IMAGE_NAME:$BRANCH.$BUILD_NUMBER
  sudo docker push $IMAGE_NAME:latest
else
  echo "skipping because it's a PR"
fi