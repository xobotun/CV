#!/bin/bash
cd /home/nginx/cv.xobotun.com
git pull

# remember to `chmod +x ci.sh`
# then `sudo crontab -e`
# add `0 * * * * /home/nginx/cv.xobotun.com/ci.sh`