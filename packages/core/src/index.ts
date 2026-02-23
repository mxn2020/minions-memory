/**
 * Minions Memory SDK
 *
 * Persistent cross-session memory, recalled facts, and agent knowledge base
 *
 * @module @minions-memory/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Memory.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
