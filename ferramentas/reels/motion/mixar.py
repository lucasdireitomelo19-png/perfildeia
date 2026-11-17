#!/usr/bin/env python3
"""Junta quadros + narração + efeitos sonoros (cues.json) + música de fundo e exporta o MP4 final.
Uso: python3 mixar.py <pasta_quadros> <narracao.wav|mp3> <pasta_sfx> <musica.mp3|-> <saida.mp4> [vol_musica=0.09]
- cues.json fica na pasta dos quadros: [{"t": segundos, "n": "pop", "v": volume}], um arquivo <n>.mp3 por efeito em pasta_sfx.
- A música entra baixinha, com fade no fim; o resultado é normalizado em -14 LUFS (padrão Instagram)."""
import json, subprocess, sys
fr, voz, sfxd, mus, out = sys.argv[1:6]
vm = float(sys.argv[6]) if len(sys.argv) > 6 else 0.09
cues = json.load(open(f"{fr}/cues.json"))
dur = float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", voz]))
inp = ["-framerate", "30", "-i", f"{fr}/%05d.jpg", "-i", voz]; f = ["[1:a]aformat=sample_rates=48000:channel_layouts=stereo[v]"]; mix = ["[v]"]; n = 2
if mus != "-":
    inp += ["-i", mus]; f.append(f"[{n}:a]aformat=sample_rates=48000:channel_layouts=stereo,atrim=0:{dur},volume={vm},afade=t=in:d=0.4,afade=t=out:st={dur-1.8}:d=1.8[m]"); mix.append("[m]"); n += 1
for k, c in enumerate(cues):
    d = max(0, int(c["t"] * 1000))
    inp += ["-i", f"{sfxd}/{c['n']}.mp3"]
    f.append(f"[{n}:a]aformat=sample_rates=48000:channel_layouts=stereo,volume={c.get('v', .5)},adelay={d}|{d}[s{k}]"); mix.append(f"[s{k}]"); n += 1
f.append("".join(mix) + f"amix=inputs={len(mix)}:normalize=0,apad,atrim=0:{dur},loudnorm=I=-14:TP=-1.5:LRA=11[aout]")
subprocess.run(["ffmpeg", "-y", "-loglevel", "error"] + inp + ["-filter_complex", ";".join(f), "-map", "0:v", "-map", "[aout]",
    "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p", "-r", "30", "-c:a", "aac", "-b:a", "192k", "-ar", "48000",
    "-movflags", "+faststart", "-shortest", out], check=True)
print("ok:", out)
