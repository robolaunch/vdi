#!/bin/bash
set -e

ln -snf "/usr/share/zoneinfo/$TZ" /etc/localtime && echo "$TZ" | tee /etc/timezone > /dev/null
ln -snf /dev/ptmx /dev/tty7

if [ "$GPU_AGNOSTIC" == "true" ]; then

  echo "Driver should be installed in runtime."
  echo "Run /etc/vdi/install-driver.sh"
  exit 0;

else

  # Install NVIDIA drivers, including X graphic drivers by omitting --x-{prefix,module-path,library-path,sysconfig-path}
  if ! command -v nvidia-xconfig &> /dev/null; then

     if [ "$NVIDIA_DRIVER_VERSION" == "agnostic" ]; then
      export DRIVER_VERSION=$(head -n1 </proc/driver/nvidia/version | awk '{print $8}')
    else
      export DRIVER_VERSION=$NVIDIA_DRIVER_VERSION
    fi

    cd /tmp

    # export DRIVER_VERSION=$NVIDIA_DRIVER_VERSION
    
    if [[ -z "${MINIO_DOMAIN}" ]]; then
      echo "Downloading driver from https://download.nvidia.com..."
      BASE_URL=https://download.nvidia.com/XFree86/Linux-x86_64
      curl -fsSL -O $BASE_URL/$DRIVER_VERSION/NVIDIA-Linux-x86_64-$DRIVER_VERSION.run
    else
      echo "Downloading driver from internal MinIO..."
      BASE_URL=http://$MINIO_DOMAIN/$MINIO_BUCKET_NAME
      wget $BASE_URL/NVIDIA-Linux-x86_64-$DRIVER_VERSION.run
    fi
    
    sh NVIDIA-Linux-x86_64-$DRIVER_VERSION.run -x
    cd NVIDIA-Linux-x86_64-$DRIVER_VERSION
    ./nvidia-installer --silent \
                                          --no-kernel-module \
                                          --install-compat32-libs \
                                          --no-nouveau-check \
                                          --no-nvidia-modprobe \
                                          --no-rpms \
                                          --no-backup \
                                          --no-check-for-alternate-installs \
                                          --no-libglx-indirect \
                                          --no-install-libglvnd
    rm -rf /tmp/NVIDIA*
    cd ~
  fi

fi