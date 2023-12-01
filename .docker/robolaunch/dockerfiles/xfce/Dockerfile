ARG BASE_IMAGE=m1k1o/neko:base
FROM ${BASE_IMAGE}

#
# install xfce
RUN set -eux; apt-get update; \
    apt-get install -y --no-install-recommends xfce4 xfce4-terminal sudo; \
    #
    # add user to sudoers
    usermod -aG sudo robolaunch; \
    echo "robolaunch:robolaunch" | chpasswd; \
    echo "%sudo ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers; \
    # clean up
    apt-get clean -y; \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/*
