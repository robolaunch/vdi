ARG BASE_IMAGE=robolaunchio/xfce:focal
FROM ${BASE_IMAGE}

SHELL ["/bin/bash", "-c"]

### initial screen configurations
RUN apt-get update && apt-get install -y \
        nano \
        curl \
        kmod \
        xz-utils \
        mate-themes
COPY ./install-driver.sh /etc/vdi/
COPY ./generate-xorg.sh /etc/vdi/
RUN chmod +x /etc/vdi/install-driver.sh /etc/vdi/generate-xorg.sh

### helper tools
RUN apt-get update && apt-get install -y \
    curl \
    pip \
    git \
    wget \
    dnsutils
RUN curl -fsSL https://code-server.dev/install.sh | sh

### set theme
COPY xfce4.tar.gz .
RUN tar -xf xfce4.tar.gz --directory /home/robolaunch/.config/
RUN rm -rf xfce4.tar.gz

### set background
RUN rm /usr/share/backgrounds/xfce/*
COPY xfce-stripes.png /usr/share/backgrounds/xfce/
RUN cp /usr/share/backgrounds/xfce/xfce-stripes.png /usr/share/backgrounds/xfce/xfce-verticals.png

CMD ["sleep", "infinity"]