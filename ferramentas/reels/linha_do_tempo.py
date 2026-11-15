#!/usr/bin/env python3
"""Monta timeline.json (início de cada bloco + legendas palavra a palavra) a partir de audio/C*.mp3/.json.
Uso: python3 linha_do_tempo.py <pasta_audio> <saida_timeline.json> <palavras-chave separadas por vírgula>
Troca de grafia nas legendas: edite TROCAS abaixo (fala fonética -> grafia correta)."""
import json, subprocess, re, sys, glob
aud, saida = sys.argv[1], sys.argv[2]
KW = {k.strip().lower() for k in (sys.argv[3] if len(sys.argv) > 3 else "").split(",") if k.strip()}
TROCAS = {"tchat-gê-pê-tê": "ChatGPT", "...": ""}
GAP = 0.15; t = 0.25; segs = []
n = len(glob.glob(f"{aud}/C*.mp3"))
for i in range(1, n + 1):
    d = float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f"{aud}/C{i}.mp3"]))
    a = json.load(open(f"{aud}/C{i}.json"))
    words = []; cur = ""; cs = ce = None
    for c, s, e in zip(a["characters"], a["character_start_times_seconds"], a["character_end_times_seconds"]):
        if c.isspace():
            if cur: words.append([cur, cs, ce]); cur = ""
        else:
            if not cur: cs = s
            cur += c; ce = e
    if cur: words.append([cur, cs, ce])
    out = []
    for w, s, e in words:
        for a_, b_ in TROCAS.items(): w = w.replace(a_, b_)
        if w: out.append({"w": w, "s": round(s + t, 3), "e": round(e + t, 3), "k": re.sub(r"[^\wçãêéáíóú]", "", w.lower()) in KW})
    chunks = []; c = []
    for x in out:
        c.append(x)
        if len(c) >= 4 or re.search(r"[.,!?:]$", x["w"]): chunks.append(c); c = []
    if c: chunks.append(c)
    segs.append({"i": i, "start": round(t, 3), "dur": round(d, 3), "chunks": chunks}); t += d + GAP
json.dump({"segs": segs, "total": round(t - GAP + 0.75, 3)}, open(saida, "w"), ensure_ascii=False)
print("duração total:", round(t - GAP + 0.75, 2), "s")
