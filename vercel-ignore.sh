#!/bin/bash
echo "Branch: $VERCEL_GIT_COMMIT_REF"
if [[ "$VERCEL_GIT_COMMIT_REF" == "main" || "$VERCEL_GIT_COMMIT_REF" == preview/* ]]; then
  exit 1   # build
else
  exit 0   # skip
fi