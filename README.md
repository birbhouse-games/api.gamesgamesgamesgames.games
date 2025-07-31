# gamesgamesgamesgamesgames API

## Getting Started

### Prerequisites

#### Bun

This API is written in Typescript, so we're using [Bun](https://bun.sh/) to run the application without a compile step. You'll need to have Bun installed locally to run the application.

#### Supabase

We're using supabase to manage our database. You'll need to setup an account, org, and project on Supabase to run the application.

#### JWK

For OAuth with ATproto, you'll need to generate a JWK set. The easiest way to generate them is at https://jwkset.com/generate.
* Key type: ECDSA
* Key algorithm: ES256
* Key use: Signature

#### Environment Variables

You'll need to copy `.env.example` to `.env` and set the appropriate environment variables for the application to run properly.

| Name | Description |
|---|---|
| `JWK_*` | These values from your JWK set. |
| `PUBLIC_API_URL` | This is the URL at which your API can be accessed. This must be accessible to the public internet for use in the Bluesky OAuth flow. |
| `PUBLIC_CLIENT_REDIRECT_URL` | This is the URL that the API will redirect to after successfully authenticating via OAuth. |
| `SUPABASE_URL` | This is the [Project URL](https://supabase.com/dashboard/project/lkyceiykyqmqpfobwfsv/settings/api) from your Supabase dashboard. |
| `SUPABASE_SERVICE_KEY` | This is the [anonymous public key](https://supabase.com/dashboard/project/lkyceiykyqmqpfobwfsv/settings/api-keys) for your Supabase project. |


### Running the API

First, install dependencies with [Bun](https://bun.sh/):
```bash
bun install
```

Next, run the development server:
```bash
bun dev
```
