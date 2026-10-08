import { copyFile, mkdir, readdir, lstat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = join(root, 'dist');
const files = [
  'index.html', 'styles.css', 'script.js', '.nojekyll', 'assets/favicon.svg',
  'assets/research/model-validation.png', 'assets/research/pc1-shap.png',
  'assets/research/prediction-and-association.png', 'assets/research/ml-lamp-poster.png',
  'assets/downloads/Hongrui-Liu-CV.pdf', 'assets/downloads/Hongrui-Liu-ML-LAMP-Poster.pptx',
];
async function existingFiles(directory, prefix = '') {
  let entries;
  try { entries = await readdir(directory, { withFileTypes: true }); }
  catch (error) { if (error.code === 'ENOENT') return []; throw error; }
  const found = [];
  for (const entry of entries) {
    const relative = prefix + entry.name;
    if (entry.isSymbolicLink()) throw new Error(`Review unexpected symbolic link: ${relative}`);
    if (entry.isDirectory()) found.push(...await existingFiles(join(directory, entry.name), relative + '/'));
    else found.push(relative);
  }
  return found;
}
try {
  const info = await lstat(output);
  if (info.isSymbolicLink()) throw new Error('The publishing output must be a local directory, not a symbolic link.');
} catch (error) { if (error.code !== 'ENOENT') throw error; }
const unexpected = (await existingFiles(output)).filter(file => !files.includes(file));
if (unexpected.length) throw new Error(`Review unexpected files in dist before publishing: ${unexpected.join(', ')}`);
for (const file of files) {
  const source = join(root, file);
  if (!(await lstat(source)).isFile()) throw new Error(`Expected a regular public file: ${file}`);
  const destination = join(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(source, destination);
}
console.log(`Prepared ${files.length} public files in dist/. No remote changes made.`);
