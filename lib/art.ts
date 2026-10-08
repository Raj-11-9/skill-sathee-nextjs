// @ts-nocheck
/* Inline SVG illustrations (brand-coloured, static, trusted markup). */
const B = "#2563EB",
  P = "#6366F1",
  L = "#BFDBFE",
  G = "#E2E8F0",
  N = "#172554";
let gid = 0;
const F = (c) => {
  const g = "bg" + gid++;
  return `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F5F8FF"/><stop offset="1" stop-color="#D6E4FF"/></linearGradient></defs><rect width="480" height="320" fill="url(#${g})"/><circle cx="450" cy="20" r="100" fill="#6366F1" opacity=".14"/><circle cx="20" cy="320" r="90" fill="#2563EB" opacity=".14"/>${c}</svg>`;
};
const bar = (x, y, w, c = G, h = 8) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${c}"/>`;
const win = (x, y, w, h, i = "") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#fff" stroke="${G}"/><circle cx="${x + 16}" cy="${y + 16}" r="4" fill="#F87171"/><circle cx="${x + 30}" cy="${y + 16}" r="4" fill="#FBBF24"/><circle cx="${x + 44}" cy="${y + 16}" r="4" fill="#34D399"/>${i}`;
const R = (x, y, w, h, f, r = 8, st = "none") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${f}" stroke="${st}"/>`;
const TX = (x, y, t, c = N, sz = 13, w = 700) =>
  `<text x="${x}" y="${y}" font-size="${sz}" font-weight="${w}" fill="${c}" font-family="Inter,Arial,sans-serif">${t}</text>`;
const area = (x, y, w, h) =>
  `<path d="M${x} ${y + h}L${x} ${y + h * 0.7}C${x + w * 0.2} ${y + h * 0.6} ${x + w * 0.3} ${y + h * 0.8} ${x + w * 0.5} ${y + h * 0.4}S${x + w * 0.8} ${y + h * 0.2} ${x + w} ${y}L${x + w} ${y + h}Z" fill="${B}" opacity=".18"/><path d="M${x} ${y + h * 0.7}C${x + w * 0.2} ${y + h * 0.6} ${x + w * 0.3} ${y + h * 0.8} ${x + w * 0.5} ${y + h * 0.4}S${x + w * 0.8} ${y + h * 0.2} ${x + w} ${y}" fill="none" stroke="${B}" stroke-width="3" stroke-linecap="round"/>`;
const A = {
  code: () =>
    F(
      win(
        30,
        30,
        420,
        260,
        R(30, 52, 86, 238, "#F7F9FC", 0) +
          [0, 1, 2, 3, 4]
            .map((i) => bar(44, 70 + i * 22, 56 - (i % 3) * 10))
            .join("") +
          [
            [0, 150, B],
            [1, 190, P],
            [1, 150, G],
            [2, 230, B],
            [2, 120, G],
            [1, 180, P],
            [0, 200, G],
            [2, 150, B],
            [1, 100, G],
          ]
            .map((r, i) =>
              bar(136 + r[0] * 22, 66 + i * 17, r[1] - r[0] * 10, r[2]),
            )
            .join("") +
          R(136, 232, 300, 40, N, 10) +
          TX(152, 257, "✓ build passed · deployed", "#6EE7B7", 13, 500),
      ),
    ),
  ai: () => {
    const cs = [
      [90, [80, 160, 240]],
      [240, [55, 125, 195, 265]],
      [390, [110, 210]],
    ];
    let l = "",
      n = "";
    cs.forEach((c, i) => {
      c[1].forEach((y) => {
        if (cs[i + 1])
          cs[i + 1][1].forEach(
            (y2) =>
              (l += `<line x1="${c[0]}" y1="${y}" x2="${cs[i + 1][0]}" y2="${y2}" stroke="${L}" stroke-width="1.5"/>`),
          );
        n += `<circle cx="${c[0]}" cy="${y}" r="17" fill="${i == 1 ? P : i ? B : "#fff"}" stroke="${B}" stroke-width="3"/>`;
      });
    });
    return F(
      l +
        n +
        TX(60, 300, "Input", "#64748B", 11, 600) +
        TX(205, 300, "Model", "#64748B", 11, 600) +
        TX(358, 300, "Action", "#64748B", 11, 600),
    );
  },
  cloud: () =>
    F(
      `<path d="M135 150a48 48 0 0 1 94-14a40 40 0 0 1 86 16a34 34 0 0 1-6 66H165a34 34 0 0 1-30-68z" fill="#fff" stroke="${B}" stroke-width="3"/>` +
        TX(205, 178, "CLOUD", B, 16, 800) +
        [70, 190, 310]
          .map(
            (x, i) =>
              `<line x1="${x + 50}" y1="222" x2="${x + 50}" y2="232" stroke="${B}" stroke-dasharray="3 3"/>` +
              R(x, 232, 100, 58, N, 12) +
              `<circle cx="${x + 16}" cy="250" r="4" fill="#34D399"/>` +
              bar(x + 28, 247, 50, "#334155") +
              bar(x + 14, 268, 72, "#334155"),
          )
          .join("") +
        TX(52, 80, "CI/CD ▸ deploy ▸ scale", P, 13, 600),
    ),
  app: () =>
    F(
      win(
        24,
        44,
        300,
        220,
        bar(44, 80, 120, G, 10) +
          R(44, 104, 130, 70, L, 10) +
          R(184, 104, 120, 70, B, 10) +
          bar(44, 190, 240) +
          bar(44, 208, 200) +
          bar(44, 226, 160),
      ) +
        R(300, 56, 130, 236, N, 24) +
        R(310, 70, 110, 208, "#fff", 16) +
        R(320, 84, 90, 60, B, 10) +
        bar(320, 156, 70, G) +
        bar(320, 172, 90, G) +
        R(320, 196, 90, 28, P, 8) +
        bar(332, 206, 64, "#fff", 8),
    ),
  data: () =>
    F(
      win(
        30,
        30,
        420,
        260,
        [0, 1, 2]
          .map(
            (i) =>
              R(48 + i * 132, 60, 120, 52, "#F7F9FC", 10) +
              TX(
                58 + i * 132,
                80,
                ["Revenue", "Users", "Growth"][i],
                "#64748B",
                10,
                600,
              ) +
              TX(58 + i * 132, 102, ["₹4.8Cr", "12.4K", "+24%"][i], N, 18, 800),
          )
          .join("") +
          area(48, 134, 250, 130) +
          `<circle cx="372" cy="200" r="42" fill="none" stroke="${G}" stroke-width="16"/><circle cx="372" cy="200" r="42" fill="none" stroke="${B}" stroke-width="16" stroke-dasharray="170 264" transform="rotate(-90 372 200)"/>` +
          TX(356, 205, "64%", N, 14, 800),
      ),
    ),
  cons: () =>
    F(
      `<path d="M50 240C120 240 120 150 190 150S270 90 330 90 400 70 430 60" fill="none" stroke="${B}" stroke-width="4" stroke-dasharray="2 9" stroke-linecap="round"/>` +
        [
          [50, 240, "Audit"],
          [190, 150, "Plan"],
          [330, 90, "Build"],
          [430, 60, "Scale"],
        ]
          .map(
            (p, i) =>
              `<circle cx="${p[0]}" cy="${p[1]}" r="14" fill="${i == 3 ? P : B}" stroke="#fff" stroke-width="4"/>` +
              R(p[0] - 34, p[1] + 24, 68, 26, "#fff", 9, G) +
              TX(p[0] - 22, p[1] + 42, p[2], N, 12, 700),
          )
          .join(""),
    ),
  flow: () =>
    F(
      win(
        24,
        30,
        432,
        260,
        [0, 1, 2]
          .map(
            (i) =>
              R(42 + i * 136, 62, 124, 214, "#F7F9FC", 12) +
              TX(
                54 + i * 136,
                82,
                ["To do", "In progress", "Done"][i],
                "#64748B",
                11,
                700,
              ) +
              [0, 1, 2]
                .slice(0, 3 - (i % 2))
                .map(
                  (j) =>
                    R(52 + i * 136, 96 + j * 58, 104, 48, "#fff", 10, G) +
                    bar(62 + i * 136, 108 + j * 58, 60, [B, P, "#34D399"][i]) +
                    bar(62 + i * 136, 126 + j * 58, 80),
                )
                .join(""),
          )
          .join(""),
      ),
    ),
  learn: () =>
    F(
      win(
        24,
        30,
        432,
        260,
        [0, 1, 2, 3]
          .map((i) => {
            const x = 44 + (i % 2) * 208,
              y = 62 + Math.floor(i / 2) * 110;
            return (
              R(x, y, 192, 98, "#fff", 12, G) +
              R(x, y, 192, 38, [B, P, "#0EA5E9", "#8B5CF6"][i], 12) +
              bar(x + 12, y + 52, 100, N) +
              bar(x + 12, y + 72, 168, G, 6) +
              bar(x + 12, y + 72, [120, 70, 150, 90][i], "#34D399", 6)
            );
          })
          .join(""),
      ),
    ),
  bi: () =>
    F(
      win(
        24,
        30,
        432,
        260,
        R(44, 60, 120, 60, "#F7F9FC", 10) +
          TX(54, 82, "Conversion", "#64748B", 10, 600) +
          TX(54, 106, "8.4%", N, 20, 800) +
          R(176, 60, 120, 60, "#F7F9FC", 10) +
          TX(186, 82, "Retention", "#64748B", 10, 600) +
          TX(186, 106, "92%", N, 20, 800) +
          R(308, 60, 128, 60, B, 10) +
          TX(318, 82, "Forecast", "#DBEAFE", 10, 600) +
          TX(318, 106, "+31%", "#fff", 20, 800) +
          area(44, 138, 392, 130),
      ),
    ),
  chat: () =>
    F(
      win(
        24,
        30,
        432,
        260,
        R(24, 52, 110, 238, "#F7F9FC", 0) +
          [0, 1, 2, 3]
            .map(
              (i) =>
                `<circle cx="46" cy="${82 + i * 44}" r="13" fill="${[B, P, "#0EA5E9", G][i]}"/>` +
                bar(68, 76 + i * 44, 52),
            )
            .join("") +
          R(156, 70, 190, 40, L, 14) +
          R(260, 124, 176, 40, B, 14) +
          R(156, 178, 150, 40, L, 14) +
          R(156, 236, 280, 36, "#fff", 18, G) +
          bar(172, 251, 120, G) +
          bar(172, 86, 120, "#fff") +
          bar(276, 140, 120, "#fff") +
          bar(172, 194, 100, "#fff"),
      ),
    ),
  crm: () =>
    F(
      win(
        24,
        30,
        432,
        260,
        [0, 1, 2, 3, 4]
          .map(
            (i) =>
              `<circle cx="56" cy="${84 + i * 40}" r="13" fill="${[B, P, "#0EA5E9", "#8B5CF6", B][i]}"/>` +
              bar(80, 78 + i * 40, 110, N) +
              bar(80, 92 + i * 40, 70, G, 6) +
              bar(240, 82 + i * 40, 80) +
              R(
                350,
                74 + i * 40,
                70,
                22,
                ["#DCFCE7", "#DBEAFE", "#FEF3C7", "#DCFCE7", "#DBEAFE"][i],
                11,
              ),
          )
          .join("") + R(44, 56, 392, 1, G, 0),
      ),
    ),
  hr: () =>
    F(
      win(
        24,
        30,
        432,
        260,
        [0, 1, 2, 3, 4]
          .map(
            (i) =>
              `<circle cx="${70 + i * 54}" cy="82" r="20" fill="${[B, P, "#0EA5E9", "#8B5CF6", "#34D399"][i]}"/>`,
          )
          .join("") +
          Array.from({ length: 21 }, (_, i) =>
            R(
              44 + (i % 7) * 57,
              130 + Math.floor(i / 7) * 50,
              48,
              40,
              [3, 9, 10, 16].includes(i) ? B : i == 5 ? P : "#F7F9FC",
              10,
            ),
          ).join(""),
      ),
    ),
};
export const art = (k: string): string => A[k]();
