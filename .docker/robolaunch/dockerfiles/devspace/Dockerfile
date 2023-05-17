ARG BASE_IMAGE=robolaunchio/xfce:focal
FROM ${BASE_IMAGE}

RUN apt-get update && apt-get install -y nano curl kmod
COPY ./install-driver.sh /etc/neko/
COPY ./generate-xorg.sh /etc/neko/
RUN chmod +x /etc/neko/install-driver.sh /etc/neko/generate-xorg.sh

CMD ["sleep", "infinity"]