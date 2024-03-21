## Development

### Install dependencies

```sh
bun install
```

Run `bun prepare` to initialize husky.

### Database setup

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