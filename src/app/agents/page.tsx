'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { getOrchestrator, CULTURE_DEFINITIONS } from '@/lib/agents';
import type { AgentTreeNode } from '@/lib/agents';

export default function AgentsPage() {
  const orchestrator = useMemo(() => getOrchestrator(), []);
  const tree = useMemo(() => orchestrator.getAgentTree(), [orchestrator]);
  const status = orchestrator.getCompletionStatus();

  const totalAgents = orchestrator.state.totalAgents;
  const totalCultures = CULTURE_DEFINITIONS.length;
  const totalPeriods = CULTURE_DEFINITIONS.reduce((sum, c) => sum + c.periods.length, 0);
  const totalAuthorAgents = status.authors.total;

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, marginBottom: 8 }}>
        Multi-Agent Architecture
      </h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 32, lineHeight: 1.6 }}>
        Hierarchical swarm of specialized agents generating the Philosophical Atlas at maximum granularity.
        Each culture is managed by a Culture Agent, which delegates to Age Agents, Author Agents, and Text Agents.
      </p>

      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: 16,
        marginBottom: 40,
      }}>
        {[
          { label: 'Total Agents', value: totalAgents, color: 'var(--color-accent)' },
          { label: 'Culture Agents', value: totalCultures, color: '#3b82f6' },
          { label: 'Age Agents', value: totalPeriods, color: '#f59e0b' },
          { label: 'Author Agents', value: totalAuthorAgents, color: '#10b981' },
          { label: 'Utility Agents', value: 10, color: '#8b5cf6' },
        ].map(s => (
          <div key={s.label} className="card" style={{ textAlign: 'center', padding: 16 }}>
            <div style={{ fontSize: 28, fontWeight: 700, fontFamily: 'var(--font-serif)', color: s.color }}>
              {s.value}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Diagram */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, marginBottom: 16, borderBottom: '1px solid var(--color-border)', paddingBottom: 8 }}>
          Hierarchical Agent Architecture
        </h2>
        <div style={{
          background: 'var(--color-bg-secondary)',
          borderRadius: 8,
          padding: 24,
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          lineHeight: 1.8,
          overflowX: 'auto',
        }}>
          <div style={{ color: 'var(--color-gold)', fontWeight: 700 }}>Meta-Orchestrator</div>
          <div style={{ color: 'var(--color-text-muted)', marginLeft: 16 }}>├── Ontology Agent</div>
          <div style={{ color: 'var(--color-text-muted)', marginLeft: 16 }}>├── Chronology Agent</div>
          <div style={{ color: 'var(--color-text-muted)', marginLeft: 16 }}>├── Philology Agent</div>
          <div style={{ color: 'var(--color-text-muted)', marginLeft: 16 }}>├── Concept Mapping Agent</div>
          <div style={{ color: 'var(--color-text-muted)', marginLeft: 16 }}>├── Translation Agent</div>
          <div style={{ color: 'var(--color-text-muted)', marginLeft: 16 }}>├── LaTeX Edition Agent</div>
          <div style={{ color: 'var(--color-text-muted)', marginLeft: 16 }}>├── Citation &amp; Evidence Agent</div>
          <div style={{ color: 'var(--color-text-muted)', marginLeft: 16 }}>├── Graph Integrity Agent</div>
          <div style={{ color: 'var(--color-text-muted)', marginLeft: 16 }}>├── Comparative Philosophy Agent</div>
          <div style={{ color: 'var(--color-text-muted)', marginLeft: 16 }}>├── Copyright &amp; Access Agent</div>
          <div style={{ color: 'var(--color-text-muted)', marginLeft: 16 }}>│</div>
          {CULTURE_DEFINITIONS.map((culture, ci) => (
            <div key={culture.id}>
              <div style={{ marginLeft: 16, color: '#3b82f6', fontWeight: 600 }}>
                {ci === CULTURE_DEFINITIONS.length - 1 ? '└── ' : '├── '}
                Culture Agent: {culture.name}
              </div>
              {culture.periods.map((period, pi) => (
                <div key={period.id}>
                  <div style={{ marginLeft: 48, color: '#f59e0b' }}>
                    {pi === culture.periods.length - 1 ? '└── ' : '├── '}
                    Age: {period.name} ({period.start < 0 ? `${Math.abs(period.start)} BCE` : period.start}–{period.end < 0 ? `${Math.abs(period.end)} BCE` : period.end})
                  </div>
                  {period.majorAuthors.slice(0, 3).map((auth, ai) => (
                    <div key={auth} style={{ marginLeft: 80, color: '#10b981' }}>
                      {ai === Math.min(period.majorAuthors.length, 3) - 1 && period.majorAuthors.length <= 3 ? '└── ' : '├── '}
                      Author: {auth}
                    </div>
                  ))}
                  {period.majorAuthors.length > 3 && (
                    <div style={{ marginLeft: 80, color: 'var(--color-text-muted)' }}>
                      └── ... +{period.majorAuthors.length - 3} more
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Culture Agents Grid */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, marginBottom: 16, borderBottom: '1px solid var(--color-border)', paddingBottom: 8 }}>
          Culture Agents ({totalCultures})
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 16,
        }}>
          {CULTURE_DEFINITIONS.map(culture => (
            <Link key={culture.id} href={`/culture/${culture.id}`} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ height: '100%' }}>
                <h3 style={{ fontSize: 16, margin: '0 0 4px', color: 'var(--color-text)' }}>
                  {culture.name}
                </h3>
                <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 8 }}>
                  {culture.regions.join(', ')} · {culture.timeSpan.start < 0 ? `${Math.abs(culture.timeSpan.start)} BCE` : culture.timeSpan.start}–{culture.timeSpan.end >= 2025 ? 'present' : culture.timeSpan.end}
                </div>
                <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 8 }}>
                  {culture.periods.length} periods · {culture.periods.reduce((s, p) => s + p.majorAuthors.length, 0)} author agents
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {culture.periods.slice(0, 4).map(p => (
                    <span key={p.id} className="badge" style={{ fontSize: 10 }}>{p.name}</span>
                  ))}
                  {culture.periods.length > 4 && (
                    <span className="badge" style={{ fontSize: 10 }}>+{culture.periods.length - 4} more</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Utility Agents */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, marginBottom: 16, borderBottom: '1px solid var(--color-border)', paddingBottom: 8 }}>
          Specialized Utility Agents (10)
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 12,
        }}>
          {[
            { name: 'Ontology Agent', desc: 'Maintains the global schema for traditions, schools, authors, texts, concepts, and relations.' },
            { name: 'Chronology Agent', desc: 'Resolves disputed dates, approximate dating, period boundaries, and overlapping chronologies.' },
            { name: 'Philology Agent', desc: 'Handles title variants, manuscript traditions, transliteration, authenticity disputes, and commentary chains.' },
            { name: 'Concept Mapping Agent', desc: 'Builds multilingual concept dictionaries, partial equivalence maps, false-friend warnings, and semantic drift analysis.' },
            { name: 'Translation Agent', desc: 'Creates AI-assisted English translations with confidence markers and terminology consistency.' },
            { name: 'LaTeX Edition Agent', desc: 'Builds scholarly LaTeX renderings with sectioning, notes, glossary, bibliography, and parallel layout.' },
            { name: 'Citation & Evidence Agent', desc: 'Tracks sources, edition basis, manuscript basis, and exact evidence for every claim.' },
            { name: 'Graph Integrity Agent', desc: 'Checks for dangling nodes, contradictory relations, duplicates, invalid edges, and circular chronology errors.' },
            { name: 'Comparative Philosophy Agent', desc: 'Identifies contact zones, influence routes, analogies, debated parallels, and independent emergence patterns.' },
            { name: 'Copyright & Access Agent', desc: 'Determines public-domain status, lawful display policy, and AI translation eligibility for each text.' },
          ].map((agent, i) => (
            <div key={i} className="card" style={{ padding: '12px 16px' }}>
              <h4 style={{ fontSize: 14, margin: '0 0 4px', color: '#8b5cf6' }}>{agent.name}</h4>
              <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>{agent.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Communication Protocol */}
      <section style={{
        background: 'var(--color-bg-secondary)',
        borderRadius: 12,
        padding: 24,
        marginBottom: 40,
      }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12 }}>
          Inter-Agent Communication Protocol
        </h2>
        <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
          <p>All agents communicate through structured, typed messages with these flows:</p>
          <ul style={{ paddingLeft: 20, marginTop: 8 }}>
            <li><strong>Vertical:</strong> Culture → Age → Author → Text (scope delegation and data submission)</li>
            <li><strong>Horizontal:</strong> Culture ↔ Culture, Age ↔ Age across traditions (cross-cultural contact)</li>
            <li><strong>Cross-level:</strong> Author ↔ Author across cultures (influence claims)</li>
            <li><strong>Utility:</strong> Any agent → Utility agents (validation, concept mapping, chronology)</li>
            <li><strong>Conflict:</strong> Any agent → Meta-Orchestrator (disputed claims preserved, not flattened)</li>
          </ul>
          <p style={{ marginTop: 8 }}>
            Message types: <code>data_submission</code>, <code>cross_reference</code>, <code>conflict_report</code>,
            <code>merge_request</code>, <code>validation_request</code>, <code>chronology_dispute</code>,
            <code>identity_resolution</code>, <code>concept_mapping</code>, <code>influence_claim</code>,
            <code>refinement_pass</code>
          </p>
        </div>
      </section>

      {/* Confidence Model */}
      <section style={{
        background: 'var(--color-bg-secondary)',
        borderRadius: 12,
        padding: 24,
        marginBottom: 40,
      }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12 }}>
          Confidence &amp; Uncertainty Model
        </h2>
        <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
          <p>Every claim in the system carries a confidence score and evidence basis:</p>
          <table style={{ width: '100%', marginTop: 12, borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ textAlign: 'left', padding: 8 }}>Score</th>
                <th style={{ textAlign: 'left', padding: 8 }}>Level</th>
                <th style={{ textAlign: 'left', padding: 8 }}>Meaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                [5, 'Certain', 'Scholarly consensus with strong evidence'],
                [4, 'Strong', 'Well-supported by multiple independent sources'],
                [3, 'Probable', 'Supported but with some scholarly disagreement'],
                [2, 'Possible', 'Plausible but limited evidence; debated'],
                [1, 'Speculative', 'Hypothetical; based on analogy or indirect evidence'],
              ].map(([score, level, meaning]) => (
                <tr key={String(score)} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: 8 }}>{'★'.repeat(score as number)}{'☆'.repeat(5 - (score as number))}</td>
                  <td style={{ padding: 8, fontWeight: 500 }}>{level}</td>
                  <td style={{ padding: 8 }}>{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: 12 }}>
            Disputed claims are <strong>preserved as disputed</strong> rather than flattened. Each dispute
            records competing positions, their supporters, evidence, and resolution status.
          </p>
        </div>
      </section>
    </div>
  );
}
