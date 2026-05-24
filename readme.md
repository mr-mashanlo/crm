# CRM

## Getting Started

### Run project
```bash
# Create a .env file
cp .env.local .env

# Start docker
docker compose up -d

# Init prisma
npx prisma init --output ../generated

# Apply migration
docker exec -it node npx prisma migrate dev --name init

# Stop docker
docker compose down -v
```

### Usefull commands
```bash
# Log service
docker logs node -f

# Restart service
docker compose restart server
```