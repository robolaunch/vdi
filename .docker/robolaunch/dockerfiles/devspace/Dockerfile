ARG BASE_IMAGE=robolaunchio/xfce:focal
FROM ${BASE_IMAGE}

RUN apt-get update && apt-get install -y nano curl kmod
COPY ./install-driver.sh /etc/vdi/
COPY ./generate-xorg.sh /etc/vdi/
RUN chmod +x /etc/vdi/install-driver.sh /etc/vdi/generate-xorg.sh

CMD ["sleep", "infinity"]