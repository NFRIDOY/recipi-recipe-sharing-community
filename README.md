
<div align="center">
  <h1>About The Project
  <div style="color: #808080">
  ReciPI: Recipe-Sharing-Community
  </div></h1>
  <h5><a href="">
  Live</a> </h5>
</div>
# Recipe Sharing Community

The **Recipe Sharing Community** is a full-stack web application designed for cooking enthusiasts to share, discover, and organize recipes. This platform fosters social engagement and culinary knowledge sharing, providing users with features like recipe posting, interactive ingredient checklists, cooking timers, and premium membership options.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)

## Project Overview

The Recipe Sharing Community provides users with a platform to:
- Share, discover, and organize recipes.
- Access interactive ingredient checklists and cooking timers.
- Engage socially through comments, ratings, and following other users.
- Access premium content through subscription plans.

## Features

### 1. User Authentication & Authorization
- **Registration**: Create an account with email, password, and profile details.
- **Login & JWT-based Authentication**: Secure login using JSON Web Tokens (JWT).
- **Password Recovery**: Password reset functionality via email.
- **Profile Management**: Users can update their profile details, including name, picture, and bio.

### 2. Recipe Management
- **Recipe Creation**: Users can submit recipes with rich text formatting and images.
- **Ingredient Checklist**: Interactive checklist for tracking ingredients.
- **Cooking Timer**: Built-in timers for managing cooking durations.
- **Recipe Editing & Deletion**: Users can edit or delete their recipes, while admins manage recipe publishing.

### 3. Social Features
- **Rating and Commenting**: Users can rate recipes and leave comments.
- **Upvote & Downvote System**: Community-driven content ranking based on votes.

### 4. Premium Membership
- **Exclusive Content**: Premium members access exclusive recipes and an ad-free experience.
- **Payment Integration**: Stripe/Aamarpay integration for secure online payments.

### 5. Admin Dashboard
- **User & Recipe Management**: Admins can manage users and recipes, including blocking/unblocking users.

### 6. Responsive Design
- **Mobile-Friendly**: Fully responsive UI for mobile, tablet, and desktop.

## Technologies Used

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: Stripe/Aamarpay
- **Deployment**: Vercel for frontend, Heroku/Vercel for backend

## Installation

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone <url>
   cd recipi-recipe-sharing-community
   npm install

   ```