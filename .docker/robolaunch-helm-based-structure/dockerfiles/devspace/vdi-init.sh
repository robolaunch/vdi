#!/bin/bash
/etc/vdi/install-driver.sh
/etc/vdi/generate-xorg.sh
supervisord -c /etc/vdi/supervisord.conf