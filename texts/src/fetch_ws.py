import subprocess, json, sys

PAGES = {
  'kena': 'Sacred Books of the East/Volume 1/Talavakâra-upanishad',
  'mundaka': 'Sacred Books of the East/Volume 15/Mundaka-upanishad',
  'prasna': 'Sacred Books of the East/Volume 15/Prasña-upanishad',
  'taittiriya': 'Sacred Books of the East/Volume 15/Taittirîyaka-upanishad',
  'svetasvatara': 'Sacred Books of the East/Volume 15/Svetâsvatara-upanishad',
}

def fetch(page, out):
    cmd = ['curl', '-sG', 'https://en.wikisource.org/w/api.php',
           '--data-urlencode', 'action=parse',
           '--data-urlencode', f'page={page}',
           '--data-urlencode', 'prop=text',
           '--data-urlencode', 'format=json',
           '--data-urlencode', 'formatversion=2',
           '--data-urlencode', 'disablelimitreport=1',
           '-o', out]
    subprocess.run(cmd, check=True)
    d = json.load(open(out))
    if 'parse' not in d:
        return f'ERROR: {d.get("error", d)}'
    return f'OK {len(d["parse"]["text"])} bytes'

if __name__ == '__main__':
    for k, p in PAGES.items():
        print(k, fetch(p, f'coll_{k}.json'))
