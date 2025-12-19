const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../info-page/gut-health.html');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// We want to remove lines 460 to 637 (1-based).
// In 0-based array: Start index 459 (line 460), End index 637 (line 638).
// Splice removes (start, count).
// Count = 637 - 460 + 1 = 178 lines.

// Verification:
// Line 459 (index 458) should be '    </section>' (Wait, line 459 in 1-based is index 458)
// Line 460 (index 459) should start with '    .bg-light'
// Line 638 (index 637) should be '        <!-- [SECTION 1: THE EMPATHY HOOK] -->' -> We want to KEEP this.
// So we delete from index 459 up to index 636 (Line 637).

const startIndex = 459; // Line 460
const endIndex = 637;   // Line 637 (inclusive)

// Check strictly
console.log('Line 460:', lines[startIndex]);
console.log('Line 637:', lines[endIndex - 1]);

// Remove lines
lines.splice(startIndex, endIndex - startIndex + 1);

const newContent = lines.join('\n');
fs.writeFileSync(filePath, newContent);
console.log('Fixed gut-health.html');
