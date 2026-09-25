import {buildWorkflow, workflowTracks} from './workflow.js';
import {displayText} from './presentation.js';

const escape = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

const stageNotes = {
  module: 'What this part is meant to do',
  question: 'Name the uncertainty',
  hypothesis: 'Suggest an answer we could check',
  experiment: 'Describe how to check it',
  decision: 'State what would change the choice',
  evidence: 'Check what the records actually support'
};

const statuses = {
  module: 'Concept', question: 'Open question', hypothesis: 'Proposed answer',
  experiment: 'Proposed test', decision: 'Draft decision', evidence: 'Documentary context'
};

const draftLabels = {
  question: 'Draft a question', hypothesis: 'Draft a possible answer',
  experiment: 'Draft a test', decision: 'Draft a decision'
};

// The stage order is a reading aid. Membership comes only from saved graph edges.
export function workflowMarkup(project, trackId, selectedId) {
  const flow = buildWorkflow(project, trackId);
  return `
    <header class="flow-heading">
      <div class="eyebrow">FROM IDEA TO EVIDENCE</div>
      <h2>What would make this idea work?</h2>
      <p>Follow a question through the board. Empty steps show where the reasoning still needs work.</p>
    </header>
    <nav class="flow-tracks" aria-label="Logic map module">
      ${workflowTracks.map(track => `<button data-flow-track="${track.id}" aria-pressed="${track.id === flow.moduleId}">${escape(track.label)}</button>`).join('')}
    </nav>
    <p class="flow-key"><span aria-hidden="true">↓</span> Reading order · cards come from saved connections</p>
    <ol class="flow-stages">
      ${flow.steps.map((step, index) => `
        <li class="flow-stage ${step.missing ? 'is-missing' : ''}">
          <div class="flow-step-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</div>
          <div class="flow-step-body">
            <div class="flow-step-heading"><h3>${escape(step.label)}</h3><span>${step.missing ? 'Not connected yet' : `${step.records.length} ${step.records.length === 1 ? 'record' : 'records'}`}</span></div>
            <p class="flow-stage-note">${stageNotes[step.key]}</p>
            <div class="flow-records">
              ${step.records.map(record => `
                <button class="flow-record" data-flow-record="${escape(record.id)}" aria-pressed="${record.id === selectedId}">
                  <span class="flow-record-top"><span>${escape(record.id === 'evidence' ? 'Documents only · no test result' : statuses[step.key])}</span><span aria-hidden="true">↗</span></span>
                  <strong>${escape(displayText(record, 'title'))}</strong>
                  <span class="flow-record-summary">${escape(displayText(record, 'summary'))}</span>
                </button>`).join('')}
              ${step.missing ? missingStep(project, flow.moduleId, step.key, selectedId) : ''}
            </div>
          </div>
        </li>`).join('')}
    </ol>
    <footer class="flow-footer">
      <div><strong>Take one question to the next session.</strong><p>A connected record is a place to think, not a completed milestone.</p></div>
      <button data-flow-review>Open review desk ↗</button>
    </footer>`;
}

function prerequisiteFor(project, trackId, key, selectedId) {
  const prerequisite = {question: 'module', hypothesis: 'question', experiment: 'hypothesis', decision: 'question'}[key];
  if (!prerequisite) return {prerequisite: null, records: []};
  const records = buildWorkflow(project, trackId).steps.find(step => step.key === prerequisite)?.records || [];
  const selected = records.find(record => record.id === selectedId);
  return {prerequisite, records, anchor: selected || (records.length === 1 ? records[0] : null)};
}

function missingStep(project, trackId, key, selectedId) {
  if (key === 'evidence') return '<div class="flow-gap"><p>No evidence record is connected to a decision in this track.</p><button data-flow-record="evidence">Read the current evidence status ↗</button></div>';
  if (key === 'module') return '<p class="flow-gap">This module is missing from the board.</p>';
  const target = prerequisiteFor(project, trackId, key, selectedId);
  const draft = workflowDraft(project, trackId, key, selectedId);
  if (!draft) {
    if (target.records.length > 1) {
      const label = target.prerequisite === 'hypothesis' ? 'possible answer' : target.prerequisite;
      return `<div class="flow-gap"><p>Select one ${escape(label)} above before drafting this step, so the new card joins the right branch.</p></div>`;
    }
    const prerequisite = key === 'experiment' ? 'possible answer' : 'question';
    return `<div class="flow-gap"><p>Connect a ${prerequisite} first so this step has something to build on.</p></div>`;
  }
  return `<div class="flow-gap"><p>No ${escape(key === 'hypothesis' ? 'possible answer' : key === 'experiment' ? 'test' : key)} is connected here yet.</p><button data-flow-add="${key}">＋ ${draftLabels[key]}</button></div>`;
}

export function workflowDraft(project, trackId, key, selectedId) {
  if (!draftLabels[key]) return null;
  const flow = buildWorkflow(project, trackId);
  const target = prerequisiteFor(project, trackId, key, selectedId);
  const anchor = target.anchor;
  if (!anchor) return null;
  const track = workflowTracks.find(track => track.id === flow.moduleId);
  return {
    type: key,
    anchorId: anchor.id,
    relationship: `from-new:${{question: 'concerns', hypothesis: 'investigates', experiment: 'tests', decision: 'resolves'}[key]}`,
    title: `${track.label}: ${key === 'hypothesis' ? 'a possible answer' : key === 'experiment' ? 'a test to consider' : key === 'decision' ? 'a choice to review' : 'an open question'}`,
    summary: `Draft for review about “${displayText(anchor, 'title')}”.`,
    detail: 'Draft for discussion.\n\nWhat we want to understand:\nOur current reasoning:\nEvidence we would need:\nWho should review it:\nWhat remains open:'
  };
}
