// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ─── HOMEPAGE ───────────────────────────────────────────
      {
        name: "homepage",
        label: "Homepage",
        path: "src/content/pages",
        match: { include: "index" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroButtonText", label: "Hero Button Text" },
          { type: "string", name: "introLabel", label: "Intro Label" },
          { type: "string", name: "introHeading", label: "Intro Heading" },
          { type: "rich-text", name: "introBody1", label: "Intro Paragraph 1" },
          { type: "rich-text", name: "introBody2", label: "Intro Paragraph 2" },
          { type: "string", name: "burgundyHeading", label: "Burgundy Section Heading" },
          { type: "string", name: "servicesLabel", label: "Services Label" },
          { type: "string", name: "servicesHeading", label: "Services Heading" },
          { type: "string", name: "servicesSubtext", label: "Services Subtext" },
          { type: "string", name: "marqueeText", label: "Marquee Text" }
        ]
      },
      // ─── PHILOSOPHY ─────────────────────────────────────────
      {
        name: "philosophy",
        label: "Philosophy Page",
        path: "src/content/pages",
        match: { include: "philosophy" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "marqueeText", label: "Marquee Text" },
          { type: "string", name: "shiftLabel", label: "Shift Label" },
          { type: "string", name: "shiftHeading", label: "Shift Heading" },
          { type: "rich-text", name: "shiftLead", label: "Shift Lead Text" },
          { type: "string", name: "shiftBody1", label: "Shift Body Paragraph 1" },
          { type: "string", name: "shiftBody2", label: "Shift Body Paragraph 2" },
          { type: "string", name: "burgundyQuote", label: "Burgundy Quote" },
          { type: "string", name: "promiseLabel", label: "Promise Label" },
          { type: "string", name: "promiseHeading", label: "Promise Heading" },
          {
            type: "object",
            name: "pillars",
            label: "Pillars",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "number", label: "Number" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "quote", label: "Pull Quote (optional)" }
            ]
          }
        ]
      },
      // ─── SERVICES ───────────────────────────────────────────
      {
        name: "services",
        label: "Services Page",
        path: "src/content/pages",
        match: { include: "services" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "marqueeText", label: "Marquee Text" },
          { type: "string", name: "introLabel", label: "Intro Label" },
          { type: "string", name: "introHeading", label: "Intro Heading" },
          { type: "string", name: "introBody", label: "Intro Body", ui: { component: "textarea" } },
          { type: "string", name: "burgundyHeading", label: "Burgundy Heading" },
          {
            type: "object",
            name: "services",
            label: "Services",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "id", label: "ID (no spaces, used for anchor links)" },
              { type: "string", name: "number", label: "Number (e.g. 01 /)" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "capabilities", label: "Capabilities", list: true }
            ]
          }
        ]
      },
      // ─── CONTACT ────────────────────────────────────────────
      {
        name: "contact",
        label: "Contact Page",
        path: "src/content/pages",
        match: { include: "contact" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle" },
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "marqueeText", label: "Marquee Text" },
          { type: "string", name: "introLabel", label: "Intro Label" },
          { type: "string", name: "introHeading", label: "Intro Heading" },
          { type: "string", name: "introBody", label: "Intro Body", ui: { component: "textarea" } },
          { type: "string", name: "email", label: "Email Address" },
          { type: "string", name: "phone", label: "Phone Number" },
          { type: "string", name: "location", label: "Location" }
        ]
      },
      // ─── WORK / CASE STUDIES ────────────────────────────────
      {
        name: "work",
        label: "Case Studies",
        path: "src/content/work",
        format: "json",
        ui: {
          itemProps: (item) => ({ label: item?.clientName }),
          filename: { readonly: false, slugify: (values) => values?.clientName?.toLowerCase().replace(/\s+/g, "-") }
        },
        fields: [
          { type: "string", name: "clientName", label: "Client Name" },
          { type: "string", name: "industry", label: "Industry / Business Type" },
          { type: "image", name: "heroImage", label: "Hero Image" },
          { type: "string", name: "setupHeading", label: "Act 1 Heading", ui: { component: "textarea" } },
          { type: "string", name: "setupBody", label: "Act 1 Body", ui: { component: "textarea" } },
          { type: "string", name: "catalystHeading", label: "Act 2 Heading" },
          { type: "string", name: "catalystBody", label: "Act 2 Body", ui: { component: "textarea" } },
          { type: "string", name: "resolutionHeading", label: "Act 3 Heading" },
          { type: "string", name: "resolutionBody", label: "Act 3 Body", ui: { component: "textarea" } },
          { type: "string", name: "impactStatement", label: "Impact Statement Quote", ui: { component: "textarea" } },
          { type: "boolean", name: "published", label: "Published" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
