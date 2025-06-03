FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Install MongoDB
RUN sudo apt-get update && \
    sudo apt-get install -y mongodb && \
    sudo mkdir -p /data/db

# Ensure MongoDB runs in background when Codespace boots
CMD ["bash"]
