"use server"

import { mkdir, appendFile } from "node:fs/promises"
import path from "node:path"

export interface LeadLogRecord {
  submissionId: string
  type: "contact" | "quote" | "claim"
  createdAt: string
  ip: string
  payload: Record<string, unknown>
  emailStatus: "sent" | "skipped" | "failed"
  emailError?: string
}

const LOG_DIR = path.join(process.cwd(), "data")
const LOG_FILE = path.join(LOG_DIR, "lead-submissions.jsonl")

export async function persistLead(record: LeadLogRecord) {
  try {
    await mkdir(LOG_DIR, { recursive: true })
    await appendFile(LOG_FILE, `${JSON.stringify(record)}\n`, "utf8")
    return { success: true as const }
  } catch (error) {
    console.error("[lead-store] Failed to persist lead:", error)
    return { success: false as const, error: "Failed to persist lead" }
  }
}

