ARG BASE_IMAGE=robolaunchio/xfce:focal
FROM ${BASE_IMAGE}

RUN apt-get update && apt-get install -y nano curl kmod
COPY ./install-driver.sh /etc/vdi/
COPY ./generate-xorg.sh /etc/vdi/
RUN chmod +x /etc/vdi/install-driver.sh /etc/vdi/generate-xorg.sh

### 

RUN apt-get install -y xz-utils
RUN mkdir -p /home/robolaunch/.themes
COPY mayu_dark_theme_xfce_3.1.tar.gz .
RUN tar -xf mayu_dark_theme_xfce_3.1.tar.gz
RUN mv mayu_dark_theme_xfce_3.1 /home/robolaunch/.themes/dark
RUN xfconf-query -c xsettings -p /Net/ThemeName -s "dark"

CMD ["sleep", "infinity"]