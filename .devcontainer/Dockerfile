FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Install MongoDB
RUN sudo apt-get update && \
    sudo apt-get install -y gnupg && \
    wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-server-6.0.gpg && \
    echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list && \
    sudo apt-get update && \
    sudo apt-get install -y mongodb-org && \
    sudo mkdir -p /data/db && \
    sudo chown -R vscode:vscode /data/db
