"""Deterministic Wikisource parse-HTML -> plain lines for Müller SBE pages.
HTML JSON is fetched separately via curl; this module only parses a saved file."""
import json, re, html, sys

def html_from_file(path):
    return json.load(open(path))['parse']['text']

def to_lines(h, cut_re=None):
    if cut_re:
        m = re.search(cut_re, h)
        if m:
            h = h[:m.start()]
    # Drop the wikisource header nav block.
    h = re.sub(r'<div class="wst-header".*?</div>\s*(?=<)', '', h, flags=re.S)
    # Cut off the footnotes/references section (everything from the refs list on).
    h = re.split(r'<(?:ol|div)[^>]*class="references"', h)[0]
    h = re.split(r'<div class="mw-references-wrap', h)[0]
    # Remove footnote reference superscripts entirely.
    h = re.sub(r'<sup[^>]*class="reference".*?</sup>', '', h, flags=re.S)
    # Remove style/script.
    h = re.sub(r'<style.*?</style>', '', h, flags=re.S)
    h = re.sub(r'<script.*?</script>', '', h, flags=re.S)
    # Any unclosed trailing <style ...> (from a mid-block cut) and CSS leftovers.
    h = re.sub(r'<style\b[\s\S]*$', '', h)
    h = re.sub(r'\.mw-parser-output[^\n{]*\{[^}]*\}', '', h)
    h = re.sub(r'\.mw-parser-output[^\n]*$', '', h)
    # Page-number anchors and noprint spans -> gone.
    h = re.sub(r'<span[^>]*class="[^"]*pagenum[^"]*".*?</span>', '', h, flags=re.S)
    # Block separators -> newline. Inline tags -> removed (joins italic letters).
    h = re.sub(r'<br\s*/?>', '\n', h)
    h = re.sub(r'</p>', '\n', h)
    h = re.sub(r'</div>', '\n', h)
    h = re.sub(r'</h[1-6]>', '\n', h)
    h = re.sub(r'<[^>]+>', '', h)
    h = html.unescape(h)
    # Remove any leftover footnote bracket markers like [1].
    h = re.sub(r'\[\s*\d+\s*\]', '', h)
    # Zero-width and non-breaking artifacts.
    h = h.replace('​', '').replace('­', '')
    lines = [re.sub(r'[ \t ]+', ' ', ln).strip() for ln in h.split('\n')]
    lines = [ln for ln in lines if ln]
    return lines

if __name__ == '__main__':
    lines = to_lines(html_from_file(sys.argv[1]))
    for ln in lines:
        print(ln)
