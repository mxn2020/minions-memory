"""
Minions Memory SDK — Type Schemas
Custom MinionType schemas for Minions Memory.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

memory_item_type = MinionType(
    id="memory-memory-item",
    name="Memory item",
    slug="memory-item",
    description="A recalled fact or observation stored for future agent sessions.",
    icon="🧠",
    schema=[
        FieldDefinition(name="agentId", type="string", label="agentId"),
        FieldDefinition(name="scope", type="select", label="scope"),
        FieldDefinition(name="key", type="string", label="key"),
        FieldDefinition(name="value", type="string", label="value"),
        FieldDefinition(name="confidence", type="number", label="confidence"),
        FieldDefinition(name="sourceRefType", type="string", label="sourceRefType"),
        FieldDefinition(name="sourceRefId", type="string", label="sourceRefId"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
        FieldDefinition(name="lastAccessedAt", type="string", label="lastAccessedAt"),
        FieldDefinition(name="expiresAt", type="string", label="expiresAt"),
    ],
)

memory_summary_type = MinionType(
    id="memory-memory-summary",
    name="Memory summary",
    slug="memory-summary",
    description="A compressed summary of a past conversation or session for long-term recall.",
    icon="📚",
    schema=[
        FieldDefinition(name="agentId", type="string", label="agentId"),
        FieldDefinition(name="sessionId", type="string", label="sessionId"),
        FieldDefinition(name="summary", type="string", label="summary"),
        FieldDefinition(name="keyFacts", type="string", label="keyFacts"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
        FieldDefinition(name="tokenCount", type="number", label="tokenCount"),
    ],
)

memory_index_type = MinionType(
    id="memory-memory-index",
    name="Memory index",
    slug="memory-index",
    description="A searchable index entry pointing to a memory item or summary.",
    icon="🔍",
    schema=[
        FieldDefinition(name="memoryId", type="string", label="memoryId"),
        FieldDefinition(name="memoryType", type="select", label="memoryType"),
        FieldDefinition(name="keywords", type="string", label="keywords"),
        FieldDefinition(name="embedding", type="string", label="embedding"),
        FieldDefinition(name="indexedAt", type="string", label="indexedAt"),
    ],
)

custom_types: list[MinionType] = [
    memory_item_type,
    memory_summary_type,
    memory_index_type,
]

