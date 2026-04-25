# ─── Backend Dockerfile (Node + Express) ──────────────────────
FROM node:20-alpine

WORKDIR /app

# Install dependencies first (layer caching)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy rest of server code
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
