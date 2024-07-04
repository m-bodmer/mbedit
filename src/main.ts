import './style.css';
import { setupCounter } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="text-editor">
  <div class="toolbar">
    <div class="button">File</div>
    <div class="button">Edit</div>
    <div class="button">View</div>
    <div class="button">Help</div>
  </div>
  <div class="content" contenteditable="false">
    This is some read-only text in the editor.
  </div>
</div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
