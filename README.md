## Development

### Install dependencies

```sh
bun install
```

Run `bun prepare` to initialize husky.

### Database setup

#### Spin up postgres

If you already have a postgres running, skip this step.

Populate .dockerenv file. You can use `.dockerenv.example`.

```sh
bun db:start
```

To stop the database run `bun db:stop`

#### Prisma setup

```sh
bun prisma migrate dev
```

```sh
bun prisma generate
```

### Run dev server

Make sure to populate all environment variables from `.env.example`

```sh
bun dev
```
