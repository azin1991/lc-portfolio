// Shared Tailwind theme for every page.
// Load this right after the Tailwind CDN script:
//   <script src="https://cdn.tailwindcss.com"></script>
//   <script src="tailwind-config.js"></script>
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "surface-tint": "#ba0f4a",
        "secondary-container": "#6fb5fe",
        "inverse-primary": "#ffb2bd",
        "background": "#fbf8ff",
        "on-background": "#1b1b21",
        "primary-fixed": "#ffd9dd",
        "surface-dim": "#dbd9e1",
        "surface-bright": "#fbf8ff",
        "secondary": "#0061a2",
        "surface-container-high": "#eae7ef",
        "surface-container": "#efecf5",
        "on-secondary-fixed": "#001d35",
        "secondary-fixed": "#d1e4ff",
        "on-surface-variant": "#5a4043",
        "on-tertiary-fixed-variant": "#4e4800",
        "on-surface": "#1b1b21",
        "surface-variant": "#e4e1ea",
        "tertiary-fixed-dim": "#d5c951",
        "on-secondary": "#ffffff",
        "error": "#ba1a1a",
        "on-secondary-container": "#004676",
        "on-tertiary-fixed": "#1f1c00",
        "outline-variant": "#e2bec2",
        "primary": "#b60a48",
        "inverse-surface": "#303036",
        "surface-container-lowest": "#ffffff",
        "surface": "#fbf8ff",
        "on-tertiary": "#ffffff",
        "on-primary-fixed": "#400013",
        "error-container": "#ffdad6",
        "primary-container": "#d92e5f",
        "surface-container-low": "#f5f2fb",
        "on-error": "#ffffff",
        "primary-fixed-dim": "#ffb2bd",
        "inverse-on-surface": "#f2eff8",
        "on-primary": "#ffffff",
        "on-tertiary-container": "#464100",
        "on-primary-fixed-variant": "#900036",
        "tertiary": "#686000",
        "outline": "#8e6f73",
        "tertiary-container": "#b9ae39",
        "on-error-container": "#93000a",
        "on-primary-container": "#fffbff",
        "on-secondary-fixed-variant": "#00497c",
        "tertiary-fixed": "#f2e66a",
        "secondary-fixed-dim": "#9dcaff",
        "surface-container-highest": "#e4e1ea"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "space-md": "1rem",
        "margin-mobile": "1.25rem",
        "margin": "4rem",
        "space-sm": "0.5rem",
        "space-3xl": "6rem",
        "gutter-mobile": "1rem",
        "space-xl": "2.5rem",
        "space-xs": "0.25rem",
        "space-2xl": "4rem",
        "gutter": "1.5rem",
        "space-lg": "1.5rem"
      },
      "fontFamily": {
        "headline-md": ["Plus Jakarta Sans"],
        "code-sm": ["JetBrains Mono"],
        "label-caps": ["JetBrains Mono"],
        "headline-lg": ["Plus Jakarta Sans"],
        "code-md": ["JetBrains Mono"],
        "body-lg": ["Plus Jakarta Sans"],
        "headline-sm": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "display-hero-mobile": ["Plus Jakarta Sans"],
        "display-hero": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "body-sm": ["Plus Jakarta Sans"]
      },
      "fontSize": {
        "headline-md": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "code-sm": ["12px", { "lineHeight": "18px", "fontWeight": "500" }],
        "label-caps": ["11px", { "lineHeight": "16px", "letterSpacing": "0.08em", "fontWeight": "600" }],
        "headline-lg": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "code-md": ["14px", { "lineHeight": "22px", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "headline-sm": ["20px", { "lineHeight": "28px", "letterSpacing": "-0.005em", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "display-hero-mobile": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "display-hero": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.03em", "fontWeight": "700" }],
        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }]
      }
    }
  }
};
