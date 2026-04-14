# Cisco Intelligent Dashboard

First-place winner project from the Cisco HackAIThon.

## High-Level Overview

This repository contains a React prototype for a chat-driven analytics dashboard experience. The product idea is to let a user describe what they want to see in natural language, then render a relevant dashboard view.

In its current form, the app is a front-end proof of concept focused on the user flow and presentation:

- A Cisco-branded landing screen
- A chat-style input at the bottom of the page
- A loading state with a custom sprite animation
- An embedded dashboard view shown after the request is submitted

The current implementation is intentionally simple and uses a mocked flow rather than a live backend or real AI/data integration.

## How To Start

### Prerequisites

- Node.js
- npm

### Run Locally

```bash
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

## What The App Does

When the app first loads, it shows a placeholder screen for the Cisco Intelligent Dashboard.

After you enter a message and click `Send`, the app:

1. Simulates a request with a short loading delay
2. Displays the animated loading indicator
3. Loads a Grafana dashboard inside the page using an `iframe`

Today, that dashboard URL is hardcoded to a public Grafana example, so the app demonstrates the intended interaction pattern rather than a production data pipeline.

## Tech Stack

- React 18
- Create React App
- Plain CSS

## Current Scope

This repo currently contains:

- A single-page React UI
- Local component state for input/loading/dashboard display
- Static image assets used in the loading animation

This repo does not yet include:

- A backend service
- A real AI/chat integration
- Dynamic dashboard generation
- Project-specific automated tests
