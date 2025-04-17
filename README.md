# Bike_service_with_prisma
#  Bike Servicing Management System Backend

## Project Overview

This backend project is designed to manage a bike servicing center's operations efficiently. It handles customer information, bike details, and service records using a relational database structure. The system allows admins or service staff to track service progress, manage customer profiles, and store service history for each bike.

** Live Backend Link:**  
➡️ [https://bike-service-backend-eta.vercel.app](https://bike-service-backend-eta.vercel.app)

---

##  Tech Stack

- **Backend Framework:** Node.js + Express.js  
- **ORM:** Prisma  
- **Database:** PostgreSQL  
- **Deployment:** Render  

---

##  Setup Guide

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/bike-servicing-backend.git
   cd bike-servicing-backend

2. Install Dependencies
 - yarn add 

3. Setup environment variable
- DATABASE_URL=your_postgresql_url_here

4. Generate Prisma client
- yarn prisma generate

5. Apply the schema & migrate DB
- yarn prisma migrate dev --name init

6. Start the Server
- yarn dev

# Key Features

- Customer Management: Add and manage customers with unique email and contact info.
- Bike Tracking: Link each bike to a specific customer and manage bike info.
- Service Records: Log service requests, including service and completion dates.
- Service Status Tracking: Easily update and check service status (pending, in_progress, done) via enum.
- Timestamps: Auto-generated createdAt and serviceDate for accurate tracking.
- Relational Data Handling: Prisma handles relations between customers, bikes, and service records smoothly.
- Deployed & Ready: Easily host the backend using platforms like Render or Railway.

##  Schema Structure Summary

###  Customer

- **Primary Key:** `customerId` (UUID)  
- **Fields:** `name`, `email`, `phone`, `createdAt`  
- **Relation:**  
  - One-to-many with **Bike** → `bikes` field  

---

###  Bike

- **Primary Key:** `bikeId` (UUID)  
- **Fields:** `brand`, `model`, `year`, `customerId`  
- **Relation:**  
  - Belongs to one **Customer**  
  - One-to-many with **ServiceRecord** → `services` field  

---

### ServiceRecord

- **Primary Key:** `serviceId` (UUID)  
- **Fields:** `serviceDate`, `completionDate`, `description`, `status`  
- **Relation:**  
  - Belongs to one **Bike**

---

### ServiceStatus (Enum)

- `pending`  
- `in_progress`  
- `done`
