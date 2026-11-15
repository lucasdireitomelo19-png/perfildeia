#!/usr/bin/env python3
"""Junta os quadros (frames/%05d.jpg) com os áudios C*.mp3 nas posições do timeline.json e exporta o MP4 final.
Uso: python3 montar.py <pasta_frames> <pasta_audio> <timeline.json> <saida.mp4>"""
import json, subprocess, sys
fr, aud, tlp, out = sys.argv[1:5]
tl = json.load(open(tlp)); inp = []; f = []
for k, s in enumerate(tl["segs"]):
    inp += ["-i", f"{aud}/C{s['i']}.mp3"]; d = int(s["start"] * 1000); f.append(f"[{k+1}:a]adelay={d}|{d}[a{k}]")
n = len(tl["segs"])
mix = "".join(f"[a{k}]" for k in range(n)) + f"amix=inputs={n}:normalize=0,apad,atrim=0:{tl['total']},loudnorm=I=-14:TP=-1.5:LRA=11[aout]"
subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-framerate", "30", "-i", f"{fr}/%05d.jpg"] + inp +
  ["-filter_complex", ";".join(f) + ";" + mix, "-map", "0:v", "-map", "[aout]", "-c:v", "libx264", "-preset", "slow", "-crf", "18",
   "-pix_fmt", "yuv420p", "-r", "30", "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-movflags", "+faststart", "-shortest", out], check=True)
print("ok:", out)
