# Mongodb Logger

## Deploy

1. Create a `.env` file with
    ```
    MONGODB_USERNAME=admin
    MONGODB_PASSWORD=xxxxx
    MONGODB_HOST=mongo:27017
    MONGODB_DATABASE=yyyyy
    ```
    Due to some initialization limit, database other than `admin` needs to be manually created.

2. Run `docker compose up -d`

3. You are good to go

To stop, run `docker compose down`
