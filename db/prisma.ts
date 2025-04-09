// lib/prisma.ts

import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig, Pool } from "@neondatabase/serverless";
import ws from "ws";

// Habilita WebSocket para o ambiente serverless do Neon
neonConfig.webSocketConstructor = ws;

// Cria o adapter do Prisma diretamente com a URL do banco
const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaNeon({ connectionString });

// Exporta uma instância única (evita recriar no dev)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = new PrismaClient();
