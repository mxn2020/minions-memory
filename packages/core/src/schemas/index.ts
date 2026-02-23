/**
 * @module @minions-memory/sdk/schemas
 * Custom MinionType schemas for Minions Memory.
 */

import type { MinionType } from 'minions-sdk';

export const memoryitemType: MinionType = {
  id: 'memory-memory-item',
  name: 'Memory item',
  slug: 'memory-item',
  description: 'A recalled fact or observation stored for future agent sessions.',
  icon: '🧠',
  schema: [
    { name: 'agentId', type: 'string', label: 'agentId' },
    { name: 'scope', type: 'select', label: 'scope' },
    { name: 'key', type: 'string', label: 'key' },
    { name: 'value', type: 'string', label: 'value' },
    { name: 'confidence', type: 'number', label: 'confidence' },
    { name: 'sourceRefType', type: 'string', label: 'sourceRefType' },
    { name: 'sourceRefId', type: 'string', label: 'sourceRefId' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
    { name: 'lastAccessedAt', type: 'string', label: 'lastAccessedAt' },
    { name: 'expiresAt', type: 'string', label: 'expiresAt' },
  ],
};

export const memorysummaryType: MinionType = {
  id: 'memory-memory-summary',
  name: 'Memory summary',
  slug: 'memory-summary',
  description: 'A compressed summary of a past conversation or session for long-term recall.',
  icon: '📚',
  schema: [
    { name: 'agentId', type: 'string', label: 'agentId' },
    { name: 'sessionId', type: 'string', label: 'sessionId' },
    { name: 'summary', type: 'string', label: 'summary' },
    { name: 'keyFacts', type: 'string', label: 'keyFacts' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
    { name: 'tokenCount', type: 'number', label: 'tokenCount' },
  ],
};

export const memoryindexType: MinionType = {
  id: 'memory-memory-index',
  name: 'Memory index',
  slug: 'memory-index',
  description: 'A searchable index entry pointing to a memory item or summary.',
  icon: '🔍',
  schema: [
    { name: 'memoryId', type: 'string', label: 'memoryId' },
    { name: 'memoryType', type: 'select', label: 'memoryType' },
    { name: 'keywords', type: 'string', label: 'keywords' },
    { name: 'embedding', type: 'string', label: 'embedding' },
    { name: 'indexedAt', type: 'string', label: 'indexedAt' },
  ],
};

export const customTypes: MinionType[] = [
  memoryitemType,
  memorysummaryType,
  memoryindexType,
];

