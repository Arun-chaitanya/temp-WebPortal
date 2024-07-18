# Carecove WebPortal

## Description

This is the website for Carecove. It utilizes NextJS and TailwindCSS.

# Contributing to the project

## Installation

1. Clone the repository

## Local development with Docker (Recommended)

1. Make sure you have Docker installed on your machine
2. Ask for the `.env.dev` file from the team
3. Run `docker compose up -d client-dev` to start the development server
4. Open `http://localhost:3000` in your browser

Make changes to the code and the server will automatically reload with the changes.

In order to check the logs of the server, run `docker compose logs -f client-dev` in a separate terminal.

## Exit the development server

Run `docker compose down` to stop the development server

## Local development without Docker (Not recommended)

1. Run `pnpm install`
2. Run `pnpm dev` to start the development server

## Production build

1. Ask for the `.env` file from the team
2. Run `docker compose up -d client-prod` to start the production server
3. Open `http://localhost:5000` in your browser

## Exit the production server

Run `docker compose down` to stop the production server
