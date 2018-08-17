#!/usr/bin/env bash

set -xe

ssh -t -o StrictHostKeyChecking=no nuke@giansass.com "bash --login -c 'cd ~/giansass.com && git pull && npm install && npm run build && cp -r build/* /var/www/html'"
