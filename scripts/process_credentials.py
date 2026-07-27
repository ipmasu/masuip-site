from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

RAW = Path("assets/credentials-raw")
OUT = Path("assets/credentials")
PUBLIC = Path("public/assets/credentials")
OUT.mkdir(parents=True, exist_ok=True)
PUBLIC.mkdir(parents=True, exist_ok=True)

REDACTIONS = {
    "cnipa-work-id.jpg": [
        (840, 410, 1340, 500),
        (560, 650, 1240, 795),
        (45, 740, 500, 835),
    ],
    "csu-mentor.jpg": [
        (210, 995, 540, 1065),
        (1560, 1090, 1940, 1260),
    ],
    "ip-teacher-training.jpg": [
        (145, 610, 650, 680),
        (345, 830, 655, 1110),
    ],
    "cnki-expert.jpg": [
        (95, 655, 190, 760),
        (145, 520, 520, 625),
    ],
    "science-communication-expert.jpg": [
        (470, 1680, 710, 1765),
    ],
    "inventions-association.jpg": [
        (128, 680, 255, 810),
        (620, 475, 940, 535),
    ],
    "tech-economics-member.jpg": [
        (290, 330, 560, 380),
    ],
    "science-contest-award.jpg": [
        (50, 28, 220, 60),
    ],
    "icc-first-prize.jpg": [
        (910, 1370, 1135, 1590),
        (1010, 105, 1240, 150),
    ],
    "hunan-science-writers.jpg": [
        (255, 315, 570, 370),
        (260, 595, 500, 640),
    ],
    "patent-agent-certificate.jpg": [
        (710, 510, 1220, 570),
        (455, 840, 1140, 900),
    ],
}

CAPTIONS = {
    "cnipa-work-id.jpg": "Former CNIPA Patent Examiner (archival credential)",
    "csu-mentor.jpg": "External Graduate Mentor, Central South University",
    "ip-teacher-training.jpg": "IP Education Teacher Training, China Intellectual Property Training Center",
    "cnki-expert.jpg": "CNKI Galaxy Expert Library Certified Expert",
    "science-communication-expert.jpg": "China Science Communication Expert Appointment",
    "inventions-association.jpg": "Member, China Association of Inventions",
    "tech-economics-member.jpg": "Member, Chinese Society of Technology Economics",
    "science-contest-award.jpg": "Excellent Award, Guangdong Science Popularization Creation Competition",
    "icc-first-prize.jpg": "Instructor, Invention Convention China National Finals First Prize",
    "hunan-science-writers.jpg": "Member, Hunan Science Writers Association",
    "patent-agent-certificate.jpg": "Chinese Patent Agent Qualification Certificate",
}


def draw_redactions(image, rects):
    draw = ImageDraw.Draw(image, "RGBA")
    for rect in rects:
        draw.rounded_rectangle(rect, radius=10, fill=(245, 247, 247, 235), outline=(14, 111, 113, 120), width=2)
        x1, y1, x2, y2 = rect
        if (x2 - x1) > 160 and (y2 - y1) > 35:
            draw.text((x1 + 14, y1 + 10), "Redacted", fill=(14, 63, 67, 190))


def add_watermark(image):
    draw = ImageDraw.Draw(image, "RGBA")
    text = "Ma Su / Ma Su Team - verification copy"
    w, h = image.size
    draw.rectangle((0, h - 48, w, h), fill=(6, 63, 67, 165))
    draw.text((24, h - 34), text, fill=(255, 255, 255, 230))


def save_web_image(src: Path):
    image = Image.open(src).convert("RGB")
    draw_redactions(image, REDACTIONS.get(src.name, []))
    add_watermark(image)
    image.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
    out_name = src.stem + "-web.jpg"
    image.save(OUT / out_name, quality=82, optimize=True)
    image.save(PUBLIC / out_name, quality=82, optimize=True)
    return out_name


def save_portrait():
    src = RAW / "inventions-association.jpg"
    image = Image.open(src).convert("RGB")
    crop = image.crop((175, 320, 435, 630))
    crop = ImageOps.fit(crop, (720, 720), method=Image.Resampling.LANCZOS, centering=(0.5, 0.45))
    crop.save(OUT / "ma-su-portrait.jpg", quality=88, optimize=True)
    crop.save(PUBLIC / "ma-su-portrait.jpg", quality=88, optimize=True)


def main():
    rows = []
    for src in sorted(RAW.glob("*.jpg")):
        out_name = save_web_image(src)
        rows.append((out_name, CAPTIONS.get(src.name, src.stem)))
    save_portrait()
    with (OUT / "credentials-data.txt").open("w", encoding="utf-8") as f:
        for filename, caption in rows:
            f.write(f"{filename}|{caption}\n")


if __name__ == "__main__":
    main()
