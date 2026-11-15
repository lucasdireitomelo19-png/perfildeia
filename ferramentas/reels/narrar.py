#!/usr/bin/env python3
"""Gera a narração no ElevenLabs, um MP3 + JSON de tempos por bloco, e confere a pronúncia.
Uso: python3 narrar.py <narracao.txt> <pasta_saida> [voice_id]
- narracao.txt: blocos separados por linha em branco; linhas com # são ignoradas.
- A chave do ElevenLabs é injetada pelo proxy do ambiente (não precisa de chave real aqui).
- Voz padrão: Mário (pt-BR, Voice Library), usada no P008. Troque só se o dono aprovar outra.
"""
import json, base64, sys, os, re, urllib.request, subprocess
VOZ = sys.argv[3] if len(sys.argv) > 3 else "YU8EsJtXFMyKMxYtheDk"
txt = open(sys.argv[1], encoding="utf-8").read()
linhas = [l for l in txt.splitlines() if not l.lstrip().startswith("#")]
blocos = [b.strip().replace("\n", " ") for b in re.split(r"\n\s*\n", "\n".join(linhas)) if b.strip()]
out = sys.argv[2]; os.makedirs(out, exist_ok=True)
H = {"xi-api-key": "dummy", "Content-Type": "application/json"}
for i, t in enumerate(blocos, 1):
    body = json.dumps({"text": t, "model_id": "eleven_multilingual_v2", "language_code": "pt",
        "voice_settings": {"stability": 0.45, "similarity_boost": 0.75, "style": 0.1, "speed": 1.08}}).encode()
    r = urllib.request.Request(f"https://api.elevenlabs.io/v1/text-to-speech/{VOZ}/with-timestamps?output_format=mp3_44100_128", data=body, headers=H)
    d = json.load(urllib.request.urlopen(r))
    open(f"{out}/C{i}.mp3", "wb").write(base64.b64decode(d["audio_base64"]))
    json.dump(d["alignment"], open(f"{out}/C{i}.json", "w"))
    # conferência de pronúncia: transcreve o bloco e mostra lado a lado
    stt = subprocess.run(["curl", "-s", "-X", "POST", "https://api.elevenlabs.io/v1/speech-to-text", "-H", "xi-api-key: dummy",
        "-F", "model_id=scribe_v1", "-F", "language_code=por", "-F", f"file=@{out}/C{i}.mp3"], capture_output=True, text=True).stdout
    try: ouvido = json.loads(stt).get("text")
    except Exception: ouvido = "(falhou a transcrição)"
    print(f"C{i}\n  texto : {t}\n  ouvido: {ouvido}")
print(f"{len(blocos)} blocos gerados em {out}")
