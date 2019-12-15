#!/bin/bash
cd /home/nginx/cv.xobotun.com
git pull
java -jar cv-processor-fat-1.2.0.jar ./cv.ru.json ./cv.en.json

# remember to `chmod +x ci.sh`
# then `sudo crontab -e`
# add `0 * * * * /home/nginx/cv.xobotun.com/ci.sh`