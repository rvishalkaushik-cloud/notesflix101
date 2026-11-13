#!/usr/bin/env bash
# Put Revision Arena chapters live: validate, register in index.html, bump the service-worker cache, commit, push.
# Usage: bash arena/tools/release.sh ch03 [ch04 ...]      (run from the repo root, on main)
set -euo pipefail
cd "$(dirname "$0")/../.."
[ "$#" -ge 1 ] || { echo "usage: release.sh <chapterId>..."; exit 1; }
node arena/tools/validate.js "$@"
for id in "$@"; do
  grep -q "\"$id\":1" index.html || sed -i "s/var ARENA = {/var ARENA = {\"$id\":1, /" index.html
done
grep -o 'var ARENA = {[^}]*}' index.html
n=$(grep -o 'notesflix-v[0-9]*' sw.js | head -1 | sed 's/notesflix-v//'); sed -i "s/notesflix-v$n/notesflix-v$((n+1))/" sw.js
git add arena index.html sw.js
git commit -q -F - <<EOF
Revision Arena: add $*

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01LL9vFME2ncbHxqWktsKqbq
EOF
git -c push.negotiate=true push origin main 2>&1 | tail -1
