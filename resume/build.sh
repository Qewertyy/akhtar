#!/bin/sh
# prints resume.html to the site's PDF with headless Chrome
cd "$(dirname "$0")/.."
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=public/resume/akhtar-khan-resume.pdf "file://$PWD/resume/resume.html"
