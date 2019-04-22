#!/usr/bin/env bash

set -a
source services.envar

docker network create development
docker-compose -f docker-compose.yml up -d --build